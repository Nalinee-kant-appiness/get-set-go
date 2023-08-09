import isLogin from "@/lib/isLogin";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const login=isLogin()
  return (
    <html lang="en">
      <body className={inter.className}>{!login && children}</body>
    </html>
  );
}