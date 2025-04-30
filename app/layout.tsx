import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClientLayoutWrapper } from "./components/Layout/LayoutWrapper";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clan-AP Technologies | Quality Assurance Experts",
  description:
    "Professional QA services including manual testing, automation, API testing, and performance testing for web and mobile applications.",
  keywords:
    "QA services, software testing, automated testing, manual testing, API testing, performance testing, mobile app testing",
  authors: [{ name: "Clan-AP Technologies" }],
  creator: "Clan-AP Technologies",
  publisher: "Clan-AP Technologies",
  openGraph: {
    title: "Clan-AP Technologies | Quality Assurance Experts",
    description:
      "Professional QA services including manual testing, automation, API testing, and performance testing for web and mobile applications.",
    url: "https://www.clanap.com",
    siteName: "Clan-AP Technologies",
    images: [
      {
        url: "/images/logo.png",
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
    images: ["/images/twitter-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
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
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
