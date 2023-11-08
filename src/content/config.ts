import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
