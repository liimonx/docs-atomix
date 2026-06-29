import type { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import { ResponsiveProvider } from "@/hooks/useResponsive";
import { SearchProvider } from "@/hooks/useSearch";
import { Providers } from "@/components/providers/Providers";
import { BASE_URL, OG_IMAGE_URL, OG_IMAGE_SIZE, OG_IMAGE_ALT } from "@/utils/siteConfig";
import "../src/styles/globals.scss";

export const viewport: Viewport = {
  themeColor: "#0066cc",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Atomix Documentation",
    template: "%s | Atomix Documentation",
  },
  description:
    "A modern React component library documentation site built with Atomix components.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/`,
    title: "Atomix - Modern React Component Library",
    description:
      "A comprehensive, accessible React component library built with TypeScript. Fast, customizable, and developer-friendly.",
    images: [
      {
        url: OG_IMAGE_URL,
        width: OG_IMAGE_SIZE.width,
        height: OG_IMAGE_SIZE.height,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atomix - Modern React Component Library",
    description:
      "A comprehensive, accessible React component library built with TypeScript. Fast, customizable, and developer-friendly.",
    images: [OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=localStorage.getItem('atomix-color-mode');if(m)document.body.setAttribute('data-atomix-color-mode',m)}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning data-atomix-color-mode="dark">
        <Providers>
          <ResponsiveProvider>
            <SearchProvider>{children}</SearchProvider>
          </ResponsiveProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
