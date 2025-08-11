import NewsList from "@/components/news/newsList";
import {getLatestNews} from "@/utils/news";

export default function LatestNewsPage() {
  const newsListLatest = getLatestNews();
  return(
    <>
      <h1>Latest News Page</h1>
      <NewsList
        newsList={newsListLatest}
      />
    </>
  );
}
