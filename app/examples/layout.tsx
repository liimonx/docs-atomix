import { AppLayout } from "@/components/layout/AppLayout";

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppLayout>
      <div className="u-container u-pt-10 u-pb-16">
        <header className="u-text-center u-mb-12">
          <h1 className="u-text-4xl u-font-bold u-mb-3">
            Example Applications
          </h1>
          <p className="u-text-lg u-text-secondary-emphasis">
            Browse sample applications built with Atomix to inspire your next
            project
          </p>
        </header>
        <main>{children}</main>
      </div>
    </AppLayout>
  );
}
