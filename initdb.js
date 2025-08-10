// eslint-disable-next-line @typescript-eslint/no-require-imports
const sql = require("better-sqlite3");
const db = sql("news.db");

const dummyNews = [
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS news (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const news of dummyNews) {
    stmt.run(news);
  }
}

initData();
