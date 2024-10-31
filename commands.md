## Extract schema to generate GROQ types automatically

npx sanity@latest schema extract --path=./sanity/extract.json

## Generate types of the app (every time a type is updated or created)

npx sanity@latest typegen generate

## Ensure specific modules can only be used in server component to make the app more dynamic

npm i server-only

## Install Pa11y to check accessibility

npm install -g pa11y

pa11y http://localhost:3000/


