

import Header from "@/components/Header";
import "./globals.css";
import { JetBrains_Mono } from 'next/font/google';
import PageTransition from "@/components/PageTransition";


const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetBrainsMono",
  weight: ["100","200","300","400","500","600","700","800"]
})

export const metadata = {
  title: "Fangki Dev | Portfolio",
  description: "Showcasing projects, skills, and experiences of Fangki Dev.",
};

export default function
 RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} bg-neutral-900`}
      >
        <Header />
        <PageTransition className="container">
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
