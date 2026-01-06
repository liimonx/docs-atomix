"use client";

import { FC } from "react";
import MarkdownPage from "@/components/documentation/MarkdownPage";

const CLIOverviewPage: FC = () => {
  return (
    <MarkdownPage
      title="Atomix CLI Documentation"
      description="Complete documentation for the Atomix Design System CLI"
      markdownPath="/atomix-doc-in-md/docs/CLI_README.md"
      heroImageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
    />
  );
};

CLIOverviewPage.displayName = "CLIOverviewPage";

export default CLIOverviewPage;







