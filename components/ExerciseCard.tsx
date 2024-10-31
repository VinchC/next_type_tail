import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Author, Exercise } from "@/sanity/types";

export type ExerciseTypeCard = Omit<Exercise, "author"> & { author?: Author };

const ExerciseCard = ({ exercise }: { exercise: ExerciseTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
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
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>

          <Link href={`/exercise/${_id}`}>
            <h2 className="text-26-semibold line-clamp-1">{title}</h2>
          </Link>
        </div>

        {/* <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.portrait}
            alt={`Portrait of ${author?.name}`}
            width={48}
            height={48}
          />
        </Link> */}
      </div>

      <Link href={`/exercise/${_id}`}>
        <p className="exercise-card_desc">{description}</p>
        <div className="flex justify-center items-center hover:zoom h-[128px] max-h-[128px]">
          <Image src={picture} alt={title} width={128} height={128} />
        </div>
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="exercise-card_btn" asChild>
          <Link href={`/exercise/${_id}`}>Détails</Link>
        </Button>
      </div>
    </li>
  );
};

export default ExerciseCard;
