// import "./globals.css";
import { Inter } from "next/font/google";
import CustomSideBar from "./component/common/customSideBar";
import isLogin from "@/lib/isLogin";
import LoginPage from "../login/page";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  const login = isLogin();
  return (
    <html lang="en">
      <body className={inter.className}>
            {children}
      </body>
    </html>
  );
}
