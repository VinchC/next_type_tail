import { defineQuery } from "next-sanity";

export const EXERCISES_QUERY = defineQuery(
  `*[_type == "exercise" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) { 
        _createdAt,
        views,
        author -> { 
          _id,
          name,
          portrait
        },
        _id,
        description,
          picture,
        category,
        title,
      }
`
);

export const EXERCISE_BY_ID_QUERY = defineQuery(
  `*[_type == "exercise" && _id == $id][0]{ 
    _id,
    title,
    slug,
    _createdAt,
    author -> { 
      _id, name, portrait
    },
    views,
    description,
    category,
    picture,
    pitch,
  }
`
)
