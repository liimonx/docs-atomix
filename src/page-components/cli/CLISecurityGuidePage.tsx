"use client";

import { FC } from "react";
import MarkdownPage from "@/components/documentation/MarkdownPage";

const CLISecurityGuidePage: FC = () => {
  return (
    <MarkdownPage
      title="Atomix CLI - Security Guide"
      description="Security best practices and features of the Atomix CLI"
      markdownPath="/atomix-doc-in-md/docs/CLI_SECURITY_GUIDE.md"
      heroImageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
    />
  );
};

CLISecurityGuidePage.displayName = "CLISecurityGuidePage";

export default CLISecurityGuidePage;







