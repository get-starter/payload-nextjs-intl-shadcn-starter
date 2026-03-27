import { GlobalConfig } from 'payload'

export default {
  slug: 'settings',
  dbName: 'gl_settings',
  label: {
    en: 'Settings',
    es: 'Ajustes',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'meta',
      type: 'group',
      label: {
        en: 'General',
        es: 'General',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              localized: true,
              admin: { width: '50%' },
              label: {
                en: 'Meta Title',
                es: 'Meta título',
              },
            },
            {
              name: 'slogan',
              type: 'text',
              required: true,
              localized: true,
              admin: { width: '50%' },
              label: {
                en: 'Short Description',
                es: 'Descripción corta',
              },
            },
          ],
        },
        {
          name: 'desc',
          type: 'textarea',
          localized: true,
          admin: { rows: 3 },
          label: {
            en: 'Meta Description',
            es: 'Meta descripción',
          },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              admin: { width: '50%' },
              label: {
                en: 'Logo',
                es: 'Logo',
              },
            },
            {
              name: 'favicon',
              type: 'upload',
              relationTo: 'media',
              admin: { width: '50%' },
              label: {
                en: 'Favicon',
                es: 'Favicon',
              },
            },
          ],
        },
      ],
    },
  ],
} as GlobalConfig
