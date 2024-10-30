import { ExerciseType } from "@/app/types";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

export default function ExerciseCard({ exercise }: { exercise: ExerciseType }) {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name },
    _id,
    description,
    picture,
    category,
    title,
  } = exercise;
  return (
    <li className="exercise-card group">
      <div className="flex-between">
        <p className="exercise_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          {" "}
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/exercise/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt={name}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Image src={picture} alt={title} width={64} height={64} />
      <p>{description}</p>
      <p>{category}</p>
    </li>
  );
}
