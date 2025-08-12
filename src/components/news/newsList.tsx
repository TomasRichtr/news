import NewsItem from "@/components/news/newsItem";
import {
  News,
} from "@/types/news";

interface NewsListProps {
  newsList: News[];
}

export default function NewsList({
  newsList,
}: NewsListProps) {
  return (
    <ul
      className="news-list"
    >
      {newsList.map((news ) => (
        <NewsItem
          {...news}
          key={news.slug}
        />
      ))}
    </ul>
  );
}
