import { GlobalConfig } from 'payload'

export default {
  slug: 'nav',
  dbName: 'gl_nav',
  label: {
    en: 'Navigation Menu',
    es: 'Menú de navegación',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      label: {
        en: 'Menu Items',
        es: 'Elementos del menú',
      },
      minRows: 1,
      maxRows: 12,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/payload/globals/nav.rowlabel#RowLabel',
        },
      },
      fields: [
        {
          name: 'type',
          type: 'radio',
          label: { en: 'Type', es: 'Tipo' },
          options: [
            { label: { en: 'Custom Link', es: 'Enlace personalizado' }, value: 'custom' },
            { label: { en: 'Page', es: 'Página' }, value: 'page' },
          ],
          defaultValue: 'custom',
          admin: { layout: 'horizontal' },
        },
        {
          name: 'label',
          type: 'text',
          localized: true,
          label: { en: 'Label', es: 'Etiqueta' },
          admin: {
            width: '50%',
            condition: (_, siblingData) => siblingData?.type === 'custom',
          },
        },
        {
          name: 'href',
          type: 'text',
          localized: true,
          label: { en: 'Link', es: 'Enlace' },
          admin: {
            width: '50%',
            condition: (_, siblingData) => siblingData?.type === 'custom',
          },
        },
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages',
          label: { en: 'Page', es: 'Página' },
          maxDepth: 1,
          admin: {
            width: '75%',
            condition: (_, siblingData) => siblingData?.type === 'page',
          },
        },
        {
          name: 'newTab',
          type: 'checkbox',
          label: { en: 'Open in new tab', es: 'Abrir en nueva pestaña' },
          defaultValue: false,
          admin: {
            width: '25%',
            style: { alignSelf: 'flex-end', paddingBottom: '0.5rem' },
          },
        },
        {
          name: 'children',
          type: 'array',
          label: { en: 'Sub Items', es: 'Sub-elementos' },
          maxRows: 8,
          admin: {
            initCollapsed: true,
            condition: (_, siblingData) => siblingData?.type === 'custom',
            components: {
              RowLabel: '@/payload/globals/nav.rowlabel#RowLabel',
            },
          },
          fields: [
            {
              name: 'type',
              type: 'radio',
              label: { en: 'Type', es: 'Tipo' },
              options: [
                { label: { en: 'Custom Link', es: 'Enlace personalizado' }, value: 'custom' },
                { label: { en: 'Page', es: 'Página' }, value: 'page' },
              ],
              defaultValue: 'custom',
              admin: { layout: 'horizontal' },
            },
            {
              name: 'label',
              type: 'text',
              localized: true,
              label: { en: 'Label', es: 'Etiqueta' },
              admin: {
                width: '50%',
                condition: (_, siblingData) => siblingData?.type === 'custom',
              },
            },
            {
              name: 'href',
              type: 'text',
              localized: true,
              label: { en: 'Link', es: 'Enlace' },
              admin: {
                width: '50%',
                condition: (_, siblingData) => siblingData?.type === 'custom',
              },
            },
            {
              name: 'page',
              type: 'relationship',
              relationTo: 'pages',
              label: { en: 'Page', es: 'Página' },
              maxDepth: 1,
              admin: {
                width: '75%',
                condition: (_, siblingData) => siblingData?.type === 'page',
              },
            },
            {
              name: 'desc',
              type: 'textarea',
              localized: true,
              maxLength: 120,
              label: { en: 'Description', es: 'Descripción' },
              admin: { rows: 2 },
            },
            {
              name: 'newTab',
              type: 'checkbox',
              label: { en: 'Open in new tab', es: 'Abrir en nueva pestaña' },
              defaultValue: false,
              admin: {
                width: '25%',
                style: { alignSelf: 'flex-end', paddingBottom: '0.5rem' },
              },
            },
          ],
        },
      ],
    },
  ],
} as GlobalConfig
