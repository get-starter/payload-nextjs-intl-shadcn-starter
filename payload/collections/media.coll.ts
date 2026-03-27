import type { CollectionConfig } from 'payload'

export default {
  slug: 'media',
  labels: {
    singular: {
      en: 'Media',
      es: 'Medio',
    },
    plural: {
      en: 'Media',
      es: 'Medios',
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      //required: true,
      localized: true,
      label: {
        en: 'Alt Text',
        es: 'Texto alternativo',
      },
    },
  ],
  upload: true,
} as CollectionConfig
