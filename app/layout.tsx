import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClientLayoutWrapper } from "./components/Layout/LayoutWrapper";
import { StoreHydration } from "./providers/StoreHydration";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://clanap.com"),
  applicationName: "Clan-AP Technologies",
  title: {
    template: "%s | Clan-AP Technologies",
    default: "Clan-AP Technologies - Quality Assurance Experts",
  },
  description:
    "Professional QA services including manual testing, automation, API testing, and performance testing for web and mobile applications.",
  keywords: [
    "QA services",
    "software testing",
    "automated testing",
    "manual testing",
    "API testing",
    "performance testing",
    "mobile app testing",
    "web application testing",
    "security testing",
    "database testing",
    "UI/UX testing",
    "test management",
    "functional testing",
    "regression testing",
    "load testing",
    "stress testing",
    "usability testing",
    "cross-browser testing",
    "cross-device testing",
    "test automation",
    "test strategy",
    "test planning",
    "test execution",
    "test reporting",
  ],
  authors: [{ name: "Clan-AP Technologies" }],
  creator: "Clan-AP Technologies",
  publisher: "Clan-AP Technologies",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },

  openGraph: {
    title: "Clan-AP Technologies | Quality Assurance Experts",
    description:
      "Professional QA services including manual testing, automation, API testing, and performance testing for web and mobile applications.",
    url: "https://clanap.com",
    siteName: "Clan-AP Technologies",
    images: [
      {
        url: "https://clanap.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Clan-AP Technologies Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clan-AP Technologies | Quality Assurance Experts",
    description:
      "Professional QA services including manual testing, automation, API testing, and performance testing for web and mobile applications.",
    images: ["https://clanap.com/images/twitter-image.jpg"],
    creator: "@clanaptech",
    site: "@clanaptech",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} max-w-[2520px] min-h-screen`}>
        <StoreHydration />
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
