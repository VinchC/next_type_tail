import pythagore from "./../public/images/pythagore.png";
import reciproque from "./../public/images/reciproque.png";
import pythagorePortrait from "./../public/images/pythagore-portrait.jpg";
import { ExerciseType } from "./types";

export const exercises: ExerciseType[] = [
  {
    _createdAt: new Date(),
    views: 0,
    author: { _id: 1, name: "Pythagore", portrait: pythagorePortrait.src},
    _id: 1,
    description:
      "Si un triangle est rectangle, alors le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés.",
    picture: pythagore.src,
    category: "Géométrie",
    title: "Théorème de Pythagore",
  },
  {
    _createdAt: new Date(),
    views: 0,
    author: { _id: 1, name: "Pythagore", portrait: pythagorePortrait.src},
    _id: 2,
    description:
      "Si dans un triangle, le carré de la longueur du plus grand côté est égal à la somme des carrés des longueurs des deux autres côtés, alors ce triangle est rectangle.",
    picture: reciproque.src,
    category: "Géométrie",
    title: "Réciproque du théorème de Pythagore",
  },
];
