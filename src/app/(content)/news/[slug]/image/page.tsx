import {
  notFound,
} from "next/navigation";
import React from "react";

import {
  getNewsItem,
} from "@/lib/news";

interface NewsDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function ImagePage({
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
    <div
      className="fullscreen-image"
    >
      <img
        src={`/images/news/${news.image}`}
        alt="news"
      />
    </div>
  );
}
