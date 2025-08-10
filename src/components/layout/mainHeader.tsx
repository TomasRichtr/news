import Link from "next/link";

import {ROUTE} from "@/constants/route";

const MainHeader = () => {
  return (
    <header
      className="container flex gap-4 py-4 md:py-8 justify-between items-center mx-auto"
    >
      <Link
        href={ROUTE.HOME}
        className="font-bold text-2xl"
      >
        HOME
      </Link>

      <Link
        href={ROUTE.NEWS}
        className="text-lg"
      >
        NEWS
      </Link>
    </header>
  );
};

export default MainHeader;
