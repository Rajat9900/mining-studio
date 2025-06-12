import {defineField, defineType} from 'sanity'
import TinyMCEEditor from '../components/QuillEditor'

export default defineType({
  name: 'magazine',
  title: 'Magazine',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
   
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
        name: 'longDescription',
        title: 'Long Description',
        type: 'string',
        // of: [{type: 'block'}],
        
        components: {
          input: TinyMCEEditor
        },
        validation: (Rule) => Rule.required(),
      }),
    defineField({
      name: 'magazineFile',
      title: 'Magazine File',
      type: 'object',
      fields: [
        {
          name: 'file',
          title: 'PDF File',
          type: 'file',
          options: {
            accept: '.pdf',
          },
        },
        {
          name: 'fileLink',
          title: 'File Link',
          type: 'url',
        },
      ],
      validation: (Rule) =>
        Rule.custom((fields) => {
          if (!fields?.file && !fields?.fileLink) {
            return 'Either a file or a link must be provided'
          }
          return true
        }),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'thumbnail',
    },
  },
}) 