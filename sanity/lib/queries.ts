import { defineQuery } from "next-sanity";

export const EXERCISES_QUERY = defineQuery(
  `*[_type == "exercise" && defined(slug.current)] | order(_createdAt desc) { 
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
