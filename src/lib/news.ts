import sql, {
  Database,
} from "better-sqlite3";
import {
  map,
} from "lodash";

import {
  News,
} from "@/types/news";

interface YearRow {
  year: string;
}

interface MonthRow {
  month: string;
}

export type NewsItem = News;
export type NewsYear = string;
export type NewsMonth = string;

const db: Database = sql("data.db");

export const getAllNews = (): NewsItem[] => {
  return db.prepare("SELECT * FROM news").all() as NewsItem[];
};

export const getNewsItem = (slug: string): NewsItem | undefined => {
  return db
    .prepare("SELECT * FROM news WHERE slug = ?")
    .get(slug) as NewsItem | undefined;
};

export const getLatestNews = (limit: number = 3): NewsItem[] => {
  return db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT ?")
    .all(limit) as NewsItem[];
};

export const getAvailableNewsYears = (): string[] => {
  const yearRows = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all() as YearRow[];

  return map(yearRows, "year");
};

export const getAvailableNewsMonths = async (year: NewsYear): Promise<NewsMonth[]> => {
  await new Promise(r => setTimeout(r, 3000));

  const monthRows = db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?",
    )
    .all(year) as MonthRow[];

  return map(monthRows, "month");
};

export const getNewsForYear = async (year: NewsYear): Promise<News[]> => {
  await new Promise(r => setTimeout(r, 3000));
  return db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC",
    )
    .all(year) as NewsItem[];
};

export const getNewsForYearAndMonth = async (year: NewsYear, month: NewsMonth): Promise<News[]> => {
  await new Promise(r => setTimeout(r, 3000));
  return db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC",
    )
    .all(year, month) as NewsItem[];
};
