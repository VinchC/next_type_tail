import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const queryB = (await searchParams).query;

  return (
    <>
      <section className="blue_container">
        <h1 className="heading">Tu n&apos;aimes pas les maths ?</h1>
        <p className="sub-heading !max-w-3xl">Tu es au bon endroit !</p>
        <SearchForm query={queryB} />
      </section>
    </>
  );
}
