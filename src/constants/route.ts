export const ROUTE = {
  HOME: "/",
  NEWS: "/news",
  NEWS_DETAIL: (slug: string) => `/news/${slug}`,
  ARCHIVE: "/archive",
  NEWS_IMAGE: (slug: string) => `/news/${slug}/image`,
};
