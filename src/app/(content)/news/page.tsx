import NewsList from "@/components/news/newsList";
import {
  getAllNews,
} from "@/lib/news";

export default function NewsPage() {
  const news = getAllNews();

  return (
    <>
      <header>
        <h1>
          News Page
        </h1>
      </header>

      <main>
        <NewsList
          newsList={news}
        />
      </main>
    </>
  );
}
