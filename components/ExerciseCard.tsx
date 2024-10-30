import { ExerciseType } from "@/app/types";
import Image from "next/image";

export default function ExerciseCard({ exercise }: { exercise: ExerciseType }) {
  return (
    <div>
      <h1>{exercise.author}</h1>
      <p>{exercise.views}</p>
      <Image
        src={exercise.picture}
        alt={exercise.title}
        width={64}
        height={64}
      />
      <p>{exercise.description}</p>
      <p>{exercise.category}</p>
      <p>{exercise.title}</p>
    </div>
  );
}
