import { type SchemaTypeDefinition } from 'sanity'

import { author } from "@/sanity/schemaTypes/author";
import { exercise } from './exercise';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, exercise],
}
