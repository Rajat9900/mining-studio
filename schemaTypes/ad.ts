import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ad',
  title: 'Advertisement',
  type: 'document',
  fields: [
    defineField({
      name: 'banner',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayOn',
      title: 'Display Location',
      type: 'string',
      options: {
        list: [
          {title: 'Home Page', value: 'home'},
          {title: 'News List Page', value: 'news-list'},
          {title: 'News Detail Page', value: 'news-detail'},
          {title: 'Category Page', value: 'category'},
          {title: 'Country Page', value: 'country'},
          {title: 'Search Results', value: 'search'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      options: {
        list: [
          {title: 'Top', value: 'top'},
          {title: 'Bottom', value: 'bottom'},
          {title: 'Sidebar', value: 'sidebar'},
          {title: 'Between Content', value: 'between-content'},
          {title: 'Header', value: 'header'},
          {title: 'Footer', value: 'footer'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Whether this advertisement is active',
      initialValue: true,
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'displayOn',
      subtitle: 'position',
      media: 'banner',
    },
  },
}) 