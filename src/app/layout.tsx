import "@/app/globals.css";
import {ReactNode} from "react";

import MainHeader from "@/components/layout/mainHeader";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
    >
      <body>
        <MainHeader />
        <main
          className="container mx-auto py-4 md:py-8"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
