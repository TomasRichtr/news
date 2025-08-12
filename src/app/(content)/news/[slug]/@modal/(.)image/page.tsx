import {
  notFound,
} from "next/navigation";
import React from "react";

import Overlay from "@/components/layout/overlay";
import {
  getNewsItem,
} from "@/lib/news";

interface NewsDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function InterceptedImagePage({
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
    <>
      <Overlay />
      <dialog
        className="modal"
        open
      >
        <div
          className="fullscreen-image"
        >
          <img
            src={`/images/news/${news.image}`}
            alt="news"
          />
        </div>
      </dialog>
    </>
  );
}
