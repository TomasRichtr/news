import {
  isEmpty,
} from "lodash";
import Link from "next/link";
import React, {
  Suspense,
} from "react";

import NewsList from "@/components/news/newsList";
import {
  ROUTE,
} from "@/constants/route";
import {
  getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth,
} from "@/lib/news";
import {
  News,
} from "@/types/news";

interface NewsDetailPageProps {
    params: Promise<{
        filter: [string, string?];
    }>;
}

async function FilteredNews({
  year, month,
}: {year: string, month?: string}) {
  let news: News[] = [];
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found...</p>;

  if (!isEmpty(news)) {
    newsContent = (
      <NewsList
        newsList={news}
      />
    );
  }

  return newsContent;
}

async function FilteredNewsHeader({
  year, month,
}: {year: string, month?: string}) {
  const availableYears = getAvailableNewsYears();
  const availableMonths = await getAvailableNewsMonths(year);

  let links = availableYears;

  if (
    year && !availableYears.includes(year) ||
      month && !month && availableMonths.includes(month)
  ) {
    throw new Error("Invalid filter");
  }


  if (year && !month) {
    links = await getAvailableNewsMonths(year);
  }
  if (year && month) {
    links = [];
  }

  return (
    <header
      id="archive-header"
    >
      <nav>
        <ul>
          {links.map((link) => {
            const filter = year ? `${year}/${link}` : `${link}`;
            return (
              <li
                key={link}
              >
                <Link
                  href={ROUTE.ARCHIVE_DETAIL(filter)}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default function FilteredNewsPage({
  params,
}: NewsDetailPageProps) {
  const {
    filter,
  } = React.use(params);

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1] && filter[1];

  return (
    <>
      <Suspense
        fallback={<p>Loading filter...</p>}
      >
        <FilteredNewsHeader
          year={selectedYear}
          month={selectedMonth}
        />
      </Suspense>
      <Suspense
        fallback={<p>Loading news...</p>}
      >
        <FilteredNews
          year={selectedYear}
          month={selectedMonth}
        />
      </Suspense>
    </>
  );
}
