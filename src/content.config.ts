import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // ✅ この `schema` だけでOK。slugも自動生成されます。
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
  }),
  // ✅ 必要に応じてslugの指定も可能（省略可）
  slug: ({ id }) => id.split('/').pop()?.replace(/\.md$/, ''), // "001.md" → "001"
});

export const collections = { blog };
