import { slugField, type CollectionConfig } from 'payload'

export default {
  slug: 'pages',
  labels: {
    singular: { en: 'Page', es: 'Página' },
    plural: { en: 'Pages', es: 'Páginas' },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    slugField({ localized: true }),
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: { en: 'Page Title', es: 'Título de la página' },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      localized: true,
      label: {
        en: 'Excerpt',
        es: 'Resumen',
      },
      admin: {
        description: {
          en: 'Short description, used for cards and meta description.',
          es: 'Descripción corta, utilizada para tarjetas y meta descripción.',
        },
      },
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      label: {
        en: 'Content',
        es: 'Contenido',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
      label: {
        en: 'Cover Image',
        es: 'Imagen de portada',
      },
    },
  ],
} as CollectionConfig
