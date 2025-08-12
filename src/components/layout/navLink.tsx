"use client";

import Link from "next/link";
import {
  usePathname,
} from "next/navigation";
import {
  ReactNode,
} from "react";

export default function NavLink({
  children,
  href,
}: {children: ReactNode, href: string}) {
  const path = usePathname();

  return (
    <Link
      className={path.startsWith(href) ? "text-blue-500 underline" : ""}
      href={href}
    >
      {children}
    </Link>
  );
}
