import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sidebar2Videos',
  title: 'Sidebar 2 Videos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'youtubeLink',
      title: 'YouTube Video Link',
      type: 'url',
      description: 'Enter the full YouTube video URL (e.g., https://www.youtube.com/watch?v=...)',
      validation: (Rule) => Rule.required().uri({
        scheme: ['http', 'https'],
        allowRelative: false,
      }),
    }),
    // defineField({
    //   name: 'description',
    //   title: 'Description',
    //   type: 'text',
    //   validation: (Rule) => Rule.max(200),
    // }),
    // defineField({
    //   name: 'order',
    //   title: 'Display Order',
    //   type: 'number',
    //   description: 'Order in which this video should appear in the sidebar',
    //   validation: (Rule) => Rule.required().min(1),
    // }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'youtubeLink',
    },
  },
})