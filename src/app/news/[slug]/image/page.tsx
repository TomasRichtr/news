import {notFound} from "next/navigation";

import {DUMMY_NEWS} from "@/constants/dummyNews";

interface NewsDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ImagePage({
  params
}: NewsDetailPageProps) {
  const {
    slug
  } = await params;

  const news = DUMMY_NEWS.find((news) => news.slug === slug);

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
