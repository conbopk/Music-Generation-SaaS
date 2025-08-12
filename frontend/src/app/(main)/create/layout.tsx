import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import {Providers} from "~/components/providers";
import {Toaster} from "~/components/ui/sonner";

export const metadata: Metadata = {
  title: "Create",
  description: "Music Generator",
  icons: [{ rel: "icon", url: "/music_folder_20312.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
