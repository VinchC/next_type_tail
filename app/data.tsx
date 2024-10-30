import pythagore from "./../public/images/pythagore.png";
import reciproque from "./../public/images/reciproque.png";
import { ExerciseType } from "./types";

export const exercises: ExerciseType[] = [
  {
    createdAt: "yesterday",
    views: 0,
    author: "Pythagore",
    _id: 1,
    description:
      "Si un triangle est rectangle, alors le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés.",
    picture: pythagore.src,
    category: "Géométrie",
    title: "Théorème de Pythagore",
  },
  {
    createdAt: "yesterday",
    views: 0,
    author: "Pythagore",
    _id: 2,
    description:
      "Si dans un triangle, le carré de la longueur du plus grand côté est égal à la somme des carrés des longueurs des deux autres côtés, alors ce triangle est rectangle.",
    picture: reciproque.src,
    category: "Géométrie",
    title: "Réciproque du théorème de Pythagore",
  },
];
