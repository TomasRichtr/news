import NewsList from "@/components/news/newsList";
import {DUMMY_NEWS} from "@/constants/dummyNews";


export default function NewsPage() {
  return (
    <>
      <header>
        <h1>
          News Page
        </h1>
      </header>
        
      <main>
        <NewsList
          newsList={DUMMY_NEWS}
        />
      </main>
    </>
  );
}
