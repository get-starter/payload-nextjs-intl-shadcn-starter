// seed/nav.seed.ts
import { type Payload } from 'payload'

export const navSeed = async (payload: Payload) => {
  await payload.updateGlobal({
    slug: 'nav',
    locale: 'all',
    data: {
      items: [
        {
          type: 'custom',
          label: { en: 'Home', es: 'Inicio' } as any,
          href: '/',
          newTab: false,
        },
        {
          type: 'custom',
          label: { en: 'About Us', es: 'Sobre nosotros' } as any,
          href: { en: '/about', es: '/sobre-nosotros' } as any,
          newTab: false,
        },
        {
          type: 'custom',
          label: { en: 'Contact', es: 'Contacto' } as any,
          href: { en: '/contact', es: '/contacto' } as any,
          newTab: false,
        },
      ],
    },
  })

  console.log('✓ Nav craated')
}
