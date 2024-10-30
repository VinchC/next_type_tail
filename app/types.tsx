export type ExerciseType = {
  _createdAt: string;
  views: number;
  author: { _id: number; name: string; portrait: string };
  _id: number;
  description: string;
  picture: string;
  category: string;
  title: string;
};
