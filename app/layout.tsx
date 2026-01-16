import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load custom fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site metadata for SEO and browser
export const metadata: Metadata = {
  title: "Aldershot Lions Chess Club",
  description: "Homepage for the Aldershot Lions Chess Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Use Aldershot logo as favicon */}
        <link rel="icon" href="../public/images/aldershot_logo.png" type="image/png" />
      </head>
      {/* Main body with custom fonts */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
