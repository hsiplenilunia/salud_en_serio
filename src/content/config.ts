import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
        schema: z.object({
            title: z.string(),
            image: z.string(),
            date: z.string().optional(),
            categories: z.array(z.string()).optional(),
        }),
});

export const collections = {
    blog,
};