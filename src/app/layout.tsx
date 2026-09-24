import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { spaceGrotesk } from "./fonts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://portfolio-kewinskys-projects.vercel.app/";
const siteName = "Kewin Tao Anh - Full-Stack Software Engineer & AI Engineer";
const siteDescription =
  "Full-Stack Software Engineer and AI Engineer with 4+ years of experience building production-ready web, mobile, and AI-powered products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Software Engineer",
    "AI Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Native Developer",
    "LLM Integration",
    "AI Agents",
    "Model Context Protocol",
    "Portfolio",
    "Kewin Tao Anh",
    "Gdańsk",
    "Poland",
    "Remote Developer",
  ],
  authors: [{ name: "Kewin Tao Anh", url: siteUrl }],
  creator: "Kewin Tao Anh",
  publisher: "Kewin Tao Anh",
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
        alt: "Kewin Tao Anh - Full-Stack Software Engineer and AI Engineer",
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
  name: "Kewin Tao Anh",
  jobTitle: "Full-Stack Software Engineer and AI Engineer",
  url: siteUrl,
  image: `${siteUrl}/avatar.JPG`,
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
    "React Native",
    "Supabase",
    "Full Stack Development",
    "AI Engineering",
    "LLM Integration",
    "AI Agents",
    "Model Context Protocol",
    "Web Development",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "MSc in Computer Science",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "BEng in Computer Science",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "BEng in Ocean Engineering",
    },
  ],
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
