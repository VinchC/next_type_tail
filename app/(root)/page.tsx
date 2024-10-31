import ExerciseCard, { ExerciseTypeCard } from "@/components/ExerciseCard";
import SearchForm from "../../components/SearchForm";
import { EXERCISES_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const queryB = (await searchParams).query;

  const { data: exercises } = await sanityFetch({ query: EXERCISES_QUERY });

  return (
    <>
      <section className="blue_container">
        <h1 className="heading">Tu n&apos;aimes pas les maths ?</h1>
        <p className="sub-heading !max-w-3xl">Tu es au bon endroit !</p>
        <SearchForm query={queryB} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {queryB
            ? `Résultats de recherche pour ${queryB}`
            : "Tous les résultats"}
        </p>

        <ul className="mt-7 card-grid">
          {exercises?.length > 0 ? (
            exercises.map((exercise: ExerciseTypeCard) => (
              <ExerciseCard key={exercise?._id} exercise={exercise} />
            ))
          ) : (
            <p className="text-30-semibold">Aucun résultat</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
