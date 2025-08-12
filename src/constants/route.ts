export const ROUTE = {
  HOME: "/",
  NEWS: "/news",
  NEWS_DETAIL: (slug: string) => `/news/${slug}`,
  ARCHIVE: "/archive",
  ARCHIVE_DETAIL: (filter: string) => `/archive/${filter}`,
  NEWS_IMAGE: (slug: string) => `/news/${slug}/image`,
};
