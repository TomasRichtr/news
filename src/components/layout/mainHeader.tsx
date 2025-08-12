"use client";

import Link from "next/link";
import {
  usePathname,
} from "next/navigation";

import MainHeaderLinks from "@/components/layout/mainHeaderLinks";
import {
  ROUTE,
} from "@/constants/route";

const MainHeader = () => {
  const path = usePathname();

  return (
    <header
      className="container main-header flex gap-4 py-4 md:py-8 justify-between items-center mx-auto"
    >
      <Link
        id="logo"
        href={ROUTE.HOME}
        className={path === ROUTE.HOME ? "text-blue-500 font-bold text-2xl underline" : "font-bold text-2xl"}
      >
        HOME
      </Link>

      <nav>
        <ul
          className="flex flex-row-reverse gap-4"
        >
          <MainHeaderLinks />
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
