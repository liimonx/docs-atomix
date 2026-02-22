"use client";

import { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Hero, Block } from "@shohojdhara/atomix";
import { EnhancedCodeBlock } from "@/components/showcase/EnhancedCodeBlock";
import styles from "@/styles/PageHero.module.scss";
import markdownStyles from "./MarkdownPage.module.scss";

interface MarkdownPageProps {
  title: string;
  description: string;
  markdownPath: string;
  heroImageSrc?: string;
}

const markdownComponents = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "");
    const language = match ? match[1] : "";
    const codeString = String(children).replace(/\n$/, "");

    if (!inline && codeString) {
      // Use EnhancedCodeBlock for code blocks
      return (
        <div className="u-mb-4">
          <EnhancedCodeBlock
            code={codeString}
            language={language || "text"}
            showLineNumbers={true}
          />
        </div>
      );
    }

    // Inline code styling
    return (
      <code
        className={`u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-text-sm u-text-primary ${
          className || ""
        }`}
        {...props}
      >
        {children}
      </code>
    );
  },
  h1: ({ children }: any) => (
    <h1 className="u-text-3xl u-font-bold u-mt-8 u-mb-4 u-text-primary-emphasis u-border-b u-border-secondary u-pb-2">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="u-text-2xl u-font-bold u-mt-8 u-mb-4 u-text-primary-emphasis u-border-b u-border-secondary u-pb-2">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="u-text-xl u-font-semibold u-mt-6 u-mb-3 u-text-primary-emphasis">
      {children}
    </h3>
  ),
  h4: ({ children }: any) => (
    <h4 className="u-text-lg u-font-semibold u-mt-5 u-mb-2 u-text-primary-emphasis">
      {children}
    </h4>
  ),
  h5: ({ children }: any) => (
    <h5 className="u-text-md u-font-semibold u-mt-4 u-mb-2 u-text-primary-emphasis">
      {children}
    </h5>
  ),
  h6: ({ children }: any) => (
    <h6 className="u-text-sm u-font-semibold u-mt-3 u-mb-2 u-text-primary-emphasis">
      {children}
    </h6>
  ),
  p: ({ children }: any) => (
    <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
      {children}
    </p>
  ),
  ul: ({ children }: any) => (
    <ul className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed u-pl-6 u-list-disc">
      {children}
    </ul>
  ),
  ol: ({ children }: any) => (
    <ol className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed u-pl-6 u-list-decimal">
      {children}
    </ol>
  ),
  li: ({ children }: any) => <li className="u-mb-2 u-pl-2">{children}</li>,
  blockquote: ({ children }: any) => (
    <blockquote className="u-border-left-4 u-border-primary u-pl-4 u-py-2 u-mb-4 u-bg-secondary-subtle u-rounded">
      {children}
    </blockquote>
  ),
  table: ({ children }: any) => (
    <div className="u-overflow-x-auto u-mb-6 u-rounded u-border u-border-secondary">
      <table className="u-w-100 u-border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }: any) => (
    <thead className="u-bg-secondary-subtle">{children}</thead>
  ),
  th: ({ children }: any) => (
    <th className="u-p-3 u-text-left u-border u-border-secondary u-font-semibold u-text-primary-emphasis u-text-sm">
      {children}
    </th>
  ),
  td: ({ children }: any) => (
    <td className="u-p-3 u-border u-border-secondary u-text-secondary-emphasis u-text-sm">
      {children}
    </td>
  ),
  tbody: ({ children }: any) => (
    <tbody className="u-bg-surface">{children}</tbody>
  ),
  a: ({ href, children }: any) => (
    <a
      href={href}
      className="u-text-primary uecoration-underline hover:u-text-primary-emphasis u-transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  hr: () => <hr className="u-my-8 u-border-secondary" />,
  strong: ({ children }: any) => (
    <strong className="u-font-bold u-text-primary-emphasis">{children}</strong>
  ),
  em: ({ children }: any) => <em className="u-text-italic">{children}</em>,
  pre: ({ children }: any) => <pre className="u-mb-4">{children}</pre>,
};

const MarkdownPage: FC<MarkdownPageProps> = ({
  title,
  description,
  markdownPath,
  heroImageSrc = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728",
}) => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        setLoading(true);
        // Convert markdown path to API route path
        // e.g., /atomix-doc-in-md/docs/CLI_README.md -> /api/markdown/CLI_README.md
        const apiPath = markdownPath.replace(
          "/atomix-doc-in-md/docs/",
          "/api/markdown/",
        );
        const response = await fetch(apiPath);
        if (!response.ok) {
          throw new Error(`Failed to load markdown: ${response.statusText}`);
        }
        const text = await response.text();
        setContent(text);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load content");
        setContent("");
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [markdownPath]);

  if (loading) {
    return (
      <div>
        <Hero
          className={styles.pageHero}
          backgroundImageSrc={heroImageSrc}
          title={title}
          text={description}
          alignment="center"
        />
        <Block spacing="md">
          <div className="u-text-center u-py-8">
            <div
              className="u-inline-block u-spinner u-spinner-border u-text-primary"
              role="status"
            >
              <span className="u-visually-hidden">Loading...</span>
            </div>
            <p className="u-text-secondary-emphasis u-mt-4">
              Loading content...
            </p>
          </div>
        </Block>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Hero
          className={styles.pageHero}
          backgroundImageSrc={heroImageSrc}
          title={title}
          text={description}
          alignment="center"
        />
        <Block spacing="md">
          <div className="u-text-center u-py-8">
            <p className="u-text-error">Error: {error}</p>
          </div>
        </Block>
      </div>
    );
  }

  return (
    <div>
      <Hero
        className={styles.pageHero}
        backgroundImageSrc={heroImageSrc}
        title={title}
        text={description}
        alignment="center"
      />
      <Block spacing="md">
        <div className={markdownStyles.markdownContent}>
          <ReactMarkdown components={markdownComponents}>
            {content}
          </ReactMarkdown>
        </div>
      </Block>
    </div>
  );
};

export default MarkdownPage;
