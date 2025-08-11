import NavLink from "@/components/layout/NavLInk";
import {ROUTE} from "@/constants/route";

export default function MainHeaderLinks () {
  return (
    <>
      <li
        className="text-lg"
      >
        <NavLink
          href={ROUTE.NEWS}
        >
          NEWS
        </NavLink>
      </li>

      <li
        className="text-lg"
      >
        <NavLink
          href={ROUTE.ARCHIVE}
        >
          ARCHIVE
        </NavLink>
      </li>
    </>
  );
}
