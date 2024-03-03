import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harmony Within",
  description: "A meditation app for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
         {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
