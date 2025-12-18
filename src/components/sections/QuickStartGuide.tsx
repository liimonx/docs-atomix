"use client";

import { FC } from "react";
import { Button, Card, Icon, Steps } from "@shohojdhara/atomix";
import { EnhancedCodeBlock } from "@/components/showcase/EnhancedCodeBlock";
import { useRouter } from "next/navigation";

export const QuickStartGuide: FC = () => {
  const router = useRouter();

  const steps = [
    {
      number: 1,
      text: "Install Atomix - Add Atomix to your project using npm or yarn",
      content: (
        <div className="step-code">
          <EnhancedCodeBlock
            code={`npm install @shohojdhara/atomix
# or
yarn add @shohojdhara/atomix`}
            language="bash"
            showLineNumbers={false}
          />
        </div>
      ),
    },
    {
      number: 2,
      text: "Import Styles - Import the core CSS file in your main entry point",
      content: (
        <div className="step-code">
          <EnhancedCodeBlock
            code={`// In your main.tsx or App.tsx
import '@shohojdhara/atomix/css';`}
            language="typescript"
            showLineNumbers={false}
          />
        </div>
      ),
    },
    {
      number: 3,
      text: "Use Components - Start using Atomix components in your application",
      content: (
        <div className="step-code">
          <EnhancedCodeBlock
            code={`import { Button } from '@shohojdhara/atomix';

<Button variant="primary">Hello World</Button>`}
            language="typescript"
            showLineNumbers={false}
          />
        </div>
      ),
    },
  ];

  return (
    <section className="quick-start-guide">
      <div className="section-header">
        <h2>Quick Start Guide</h2>
        <p>Get up and running with Atomix in just a few minutes</p>
      </div>

      <Card className="quick-start-card">
        <Steps items={steps} activeIndex={0} vertical={true} />

        <div className="quick-start-actions">
          <Button
            size="lg"
            onClick={() => router.push("/docs/getting-started/installation")}
          >
            <Icon name="BookOpen" size="sm" />
            Read Full Guide
          </Button>

          <Button
            variant="outline-primary"
            size="lg"
            onClick={() => router.push("/docs/components/overview")}
          >
            <Icon name="Stack" size="sm" />
            Browse Components
          </Button>
        </div>
      </Card>
    </section>
  );
};
