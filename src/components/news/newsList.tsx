import NewsItem from "@/components/news/newsItem";
import {DUMMY_NEWS} from "@/constants/dummyNews";

export default function NewsList() {
  return (
    <ul
      className="news-list"
    >
      {DUMMY_NEWS.map((news ) => (
        <NewsItem
          {...news}
          key={news.slug}
        />
      ))}
    </ul>
  );
}
