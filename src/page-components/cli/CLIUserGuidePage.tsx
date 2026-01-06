"use client";

import { FC } from "react";
import MarkdownPage from "@/components/documentation/MarkdownPage";

const CLIUserGuidePage: FC = () => {
  return (
    <MarkdownPage
      title="Atomix CLI - User Guide"
      description="The official command-line interface for the Atomix Design System"
      markdownPath="/atomix-doc-in-md/docs/CLI_USER_GUIDE.md"
      heroImageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
    />
  );
};

CLIUserGuidePage.displayName = "CLIUserGuidePage";

export default CLIUserGuidePage;







