import {filter, map, orderBy, take, uniq} from "lodash";

import {DUMMY_NEWS} from "@/constants/dummyNews";

export const getAllNews = () => DUMMY_NEWS;

export const getLatestNews = () => take(DUMMY_NEWS, 3);

export const getAvailableNewsYears = () =>
  orderBy(
    uniq(map(DUMMY_NEWS, news => new Date(news.date).getFullYear())),
    [],
    ["desc"]
  );

export const getAvailableNewsMonths = (year: number) =>
  orderBy(
    uniq(
      map(
        filter(DUMMY_NEWS, news => new Date(news.date).getFullYear() === +year),
        news => new Date(news.date).getMonth() + 1
      )
    ),
    [],
    ["desc"]
  );

export const getNewsForYear = (year: number) =>
  filter(DUMMY_NEWS, news => new Date(news.date).getFullYear() === +year);

export const getNewsForYearAndMonth = (year: number, month: number) =>
  filter(DUMMY_NEWS, news => {
    const newsDate = new Date(news.date);
    return newsDate.getFullYear() === +year && newsDate.getMonth() + 1 === +month;
  });
