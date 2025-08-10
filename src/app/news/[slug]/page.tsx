interface NewsDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function NewsDetailPage ({
  params
}: NewsDetailPageProps) {
  const {
    slug
  } = await params;

  return (
    <header>
      <h1>News Detail Page</h1>
      {slug}
    </header>
  );
}
