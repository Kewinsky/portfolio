import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { spaceGrotesk } from "./fonts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://portfolio-kewinskys-projects.vercel.app/";
const siteName = "Kevin Tao Anh - Software Engineer";
const siteDescription =
  "Software Engineer with over 4 years of experience building production applications. Specialized in React, Next.js, TypeScript, and full-stack development. Open to full-time positions and contract opportunities.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Kevin Tao Anh",
    "Gdańsk",
    "Poland",
    "Remote Developer",
  ],
  authors: [{ name: "Kevin Tao Anh", url: siteUrl }],
  creator: "Kevin Tao Anh",
  publisher: "Kevin Tao Anh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Kevin Tao Anh - Software Engineer Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  verification: {
    // Add your verification codes if you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kevin Tao Anh",
  jobTitle: "Software Engineer",
  url: siteUrl,
  image: `${siteUrl}/avatar.jpg`,
  sameAs: [
    "https://www.linkedin.com/in/kewin-taoanh/",
    "https://github.com/Kewinsky",
  ],
  email: "kewin.taoanh@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gdańsk",
    addressCountry: "PL",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Full Stack Development",
    "Web Development",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Software Engineering",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          spaceGrotesk.className
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
