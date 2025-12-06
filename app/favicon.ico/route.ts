import { NextResponse } from 'next/server';

// Simple route handler to prevent 404 for favicon.ico
// Next.js will use app/icon.tsx for the actual icon
export async function GET() {
  // Return a 204 No Content response for favicon requests
  // The actual icon is handled by app/icon.tsx
  return new NextResponse(null, { status: 204 });
}

