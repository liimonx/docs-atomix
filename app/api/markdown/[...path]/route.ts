import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join, normalize } from 'path';
import {
  getMarkdownDocsBasePath,
  isMarkdownDocsAvailable,
  MARKDOWN_SETUP_HINT,
} from '@/utils/markdownDocsPath';

const ALLOWED_EXTENSIONS = ['.md', '.mdx'];

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  if (!isMarkdownDocsAvailable()) {
    return NextResponse.json(
      {
        error: 'Markdown documentation source is not configured',
        hint: MARKDOWN_SETUP_HINT,
      },
      { status: 503 }
    );
  }

  try {
    const resolvedParams = await params;
    const { path: pathSegments } = resolvedParams;
    
    if (!pathSegments || pathSegments.length === 0) {
      return NextResponse.json(
        { error: 'Path is required' },
        { status: 400 }
      );
    }
    
    // Security: Prevent directory traversal
    const safeSegments = pathSegments.filter(segment => 
      segment && !segment.includes('..') && !segment.includes('/') && !segment.includes('\\')
    );
    
    if (safeSegments.length !== pathSegments.length) {
      return NextResponse.json(
        { error: 'Invalid path characters detected' },
        { status: 400 }
      );
    }
    
    const basePath = getMarkdownDocsBasePath();
    
    // Join path segments and construct file path
    let filePath = join(basePath, ...safeSegments);
    
    // Normalize the path to resolve any remaining issues
    filePath = normalize(filePath);
    
    // Security: Ensure the path is within the configured docs directory
    if (!filePath.startsWith(basePath)) {
      return NextResponse.json(
        { error: 'Path traversal detected' },
        { status: 400 }
      );
    }
    
    // Try to read the file, restricting to allowed extensions
    let content: string | null = null;
    let lastError: unknown = null;

    const hasAllowedExt = ALLOWED_EXTENSIONS.some(ext => filePath.endsWith(ext));

    if (hasAllowedExt) {
      try {
        content = await readFile(filePath, 'utf-8');
      } catch (error) {
        lastError = error;
      }
    } else {
      // If file doesn't have an allowed extension, try with fallbacks
      for (const ext of ALLOWED_EXTENSIONS) {
        const filePathWithExt = `${filePath}${ext}`;
        if (normalize(filePathWithExt).startsWith(basePath)) {
          try {
            content = await readFile(filePathWithExt, 'utf-8');
            break; // Success
          } catch (error) {
            lastError = error;
          }
        }
      }
    }
    
    if (content === null) {
      if (lastError) {
        throw lastError;
      }
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }

    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error && (error as NodeJS.ErrnoException).code === 'ENOENT') {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
