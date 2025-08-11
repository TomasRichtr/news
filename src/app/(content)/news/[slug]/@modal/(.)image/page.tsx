"use client";
import {notFound, useRouter} from "next/navigation";
import React from "react";

import {DUMMY_NEWS} from "@/constants/dummyNews";

interface NewsDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function InterceptedImagePage({
  params
}: NewsDetailPageProps) {
  const {
    slug
  } =  React.use(params);

  const news = DUMMY_NEWS.find((news) => news.slug === slug);
  if (!news) {
    notFound();
  }

  const router = useRouter();

  return (
    <>
      <div
        className="modal-backdrop"
        onClick={router.back}
      />
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
