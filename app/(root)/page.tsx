import ExerciseCard from "@/components/ExerciseCard";
import SearchForm from "../../components/SearchForm";
import { exercises } from "../data";

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
      <section className="">
        <p>
          {queryB
            ? `Résultats de recherche pour ${queryB}`
            : "Tous les résultats"}
        </p>
        <ul>
          {exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </ul>
      </section>
    </>
  );
}
