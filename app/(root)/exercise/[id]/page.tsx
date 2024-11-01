import { EXERCISE_BY_ID_QUERY } from "@/sanity/lib/queries";
import ExerciseCard from "@/components/ExerciseCard";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

export const experimental_ppr = true;

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const exercise = await client.fetch(EXERCISE_BY_ID_QUERY, { id });

  if (!exercise) return notFound();

  return (
    <>
      <p className="text-3xl">
        `Voici la page relative à l&apos;exercice {id}`
      </p>
      <section>
        {exercise ? (
          <ExerciseCard exercise={exercise} />
        ) : (
          <p className="text-30-semibold">Aucun résultat</p>
        )}
      </section>
    </>
  );
}
