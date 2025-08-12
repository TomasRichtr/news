import "@/app/globals.css";
import {
  ReactNode,
} from "react";

import MainHeader from "@/components/layout/mainHeader";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function ContentLayout({
  children,
}: {children: ReactNode}) {
  return (
    <div
      id='page'
    >
      <MainHeader />
      {children}
    </div>
  );
}
