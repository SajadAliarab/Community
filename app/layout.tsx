
import type { Metadata } from "next";

import "./globals.css";
import NavBarMain from "./components/NavBarMain";
import { ThemeProvider } from 'next-themes'
import SideBarMain from "./components/SideBarMain";




export const metadata: Metadata = {
  title: "Toolstation Community Platform",
  description: "Thi is our Community Platform for Toolstation Customers to share knowledge and information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-secondary-100 dark:bg-primary-800">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <header className="fixed top-0 left-0 right-0">
            <NavBarMain />
          </header>
          <main className="flex w-screen" >
          
          <div className=" mt-20 h-screen w-1/5 ">
          <SideBarMain />
          </div>
          <div className="w-full">
            {children}
            </div>
          </main>
   
        </ThemeProvider>
      </body>
    </html>
  );
}
