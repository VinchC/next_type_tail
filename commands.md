## Extract schema to generate GROQ types automatically

npx sanity@latest schema extract --path=./sanity/extract.json

## Generate types of the app (every time a type is updated or created)

npx sanity@latest typegen generate
