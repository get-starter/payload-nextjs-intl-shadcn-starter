import type { CollectionConfig } from 'payload'

export default {
  slug: 'users',
  labels: {
    singular: {
      en: 'User',
      es: 'Usuario',
    },
    plural: {
      en: 'Users',
      es: 'Usuarios',
    },
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      label: {
        en: 'Full Name',
        es: 'Nombre completo',
      },
    },
    {
      name: 'role',
      type: 'select',
      label: {
        en: 'Role',
        es: 'Rol',
      },
      options: [
        { label: { en: 'Admin', es: 'Administrador' }, value: 'admin' },
        { label: { en: 'Editor', es: 'Editor' }, value: 'editor' },
      ],
      defaultValue: 'editor',
    },
  ],
} as CollectionConfig
