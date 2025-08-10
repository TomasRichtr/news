import Link from "next/link";

import {ROUTE} from "@/constants/route";
import {News} from "@/types/news";

import classes from "./newsItem.module.css";

export default function NewsItem({
  title,
  slug,
  image,
}: News) {
  return (
    <li>
      <Link
        className={classes.link}
        href={ROUTE.NEWS_DETAIL(slug)}
      >
        <img
          src={`/images/news/${image}`}
          alt="news"
        />
        <p
          className="text-center px-4 line-clamp-2"
        >
          {title}
        </p>
      </Link>
    </li>
  );
}
