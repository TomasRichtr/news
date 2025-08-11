import {isEmpty} from "lodash";
import Link from "next/link";
import React from "react";

import NewsList from "@/components/news/newsList";
import {DUMMY_NEWS} from "@/constants/dummyNews";
import {News} from "@/types/news";
import {getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth} from "@/utils/news";

interface NewsDetailPageProps {
    params: Promise<{
        filter: [string, string?];
    }>;
}

export default async function YearNewsPage({
  params
}: NewsDetailPageProps) {
  const {
    filter
  } = React.use(params);

  const selectedYear = +filter?.[0];
  const selectedMonth = filter?.[1] && +filter[1];

  let news: News[] = DUMMY_NEWS;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found...</p>;

  if (!isEmpty(news)) {
    newsContent = (
      <NewsList
        newsList={news}
      />
    );
  }

  if (
    selectedYear && !getAvailableNewsYears().includes(selectedYear) ||
      selectedMonth && !selectedMonth && getAvailableNewsMonths(selectedYear).includes(selectedMonth)
  ) {
    throw new Error("Invalid filter");
  }

  return (
    <>
      <header
        id="archive-header"
      >
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear ? `${selectedYear}/${link}` : `${link}`;
              return (
                <li
                  key={link}
                >
                  <Link
                    href={`/src/app/(content)/archive/${href}`}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
