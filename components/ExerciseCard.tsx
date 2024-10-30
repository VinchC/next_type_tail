import { ExerciseType } from "@/app/types";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

export default function ExerciseCard({ exercise }: { exercise: ExerciseType }) {
  return (
    <div>
      <h2>{exercise.title}</h2>
      <p>{exercise.author}</p>
      <p>{formatDate(exercise._createdAt)}</p>
      <p>{exercise.views}</p>
      <Image
        src={exercise.picture}
        alt={exercise.title}
        width={64}
        height={64}
      />
      <p>{exercise.description}</p>
      <p>{exercise.category}</p>
    </div>
  );
}
