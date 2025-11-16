// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string().default("Andrew Appuhamy"),
    date: z.date(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blogs: blogCollection,
};
