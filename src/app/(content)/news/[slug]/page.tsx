import Link from "next/link";
import {
  notFound,
} from "next/navigation";
import React from "react";

import {
  ROUTE,
} from "@/constants/route";
import {
  getNewsItem,
} from "@/lib/news";

interface NewsDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function NewsDetailPage ({
  params,
}: NewsDetailPageProps) {
  const {
    slug,
  } = React.use(params);

  const news = getNewsItem(slug);

  if (!news) {
    notFound();
  }

  return (
    <article
      className="news-article"
    >
      <header>
        <Link
          href={ROUTE.NEWS_IMAGE(slug)}
        >
          <img
            src={`/images/news/${news.image}`}
            alt="news"
          />
        </Link>
        <h1>{news.title}</h1>
        <time
          dateTime={news.date}
        >
          {news.date}
        </time>
      </header>
      <main>
        <p>{news.content}</p>
      </main>
    </article>
  );
}
