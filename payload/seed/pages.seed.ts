import { toRichText } from '@/payload/utils/toRichText'
import { Payload } from 'payload'

export const pagesSeed = async (payload: Payload) => {
  //  Check existence using English (default locale)
  const existing = await payload.find({
    collection: 'pages',
    locale: 'en',
    where: { slug: { equals: 'about' } },
    limit: 1,
  })

  let pageId: string | number

  if (existing.docs.length > 0) {
    pageId = existing.docs[0].id
    console.log('○ Page "About Us" already exists, updating...')
  } else {
    //  Create English (en) version (Primary)
    const created = await payload.create({
      collection: 'pages',
      locale: 'en',
      data: {
        title: 'About Us',
        slug: 'about',
        excerpt: 'Learn more about our mission and vision.',
        content: toRichText({
          type: 'paragraph',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        }) as any,
      },
    })
    pageId = created.id
    console.log('✓ Page "About Us" (EN) created successfully.')
  }

  // Update/Add Spanish (es) version
  await payload.update({
    collection: 'pages',
    id: pageId,
    locale: 'es',
    data: {
      title: 'Sobre nosotros',
      slug: 'sobre-nosotros',
      excerpt: 'Conozca más sobre nuestra misión y visión.',
      content: toRichText({
        type: 'paragraph',
        text: 'El pasaje estándar de Lorem Ipsum, usado desde el año 1500.',
      }) as any,
    },
  })
  console.log('✓ Page "Sobre nosotros" (ES) updated successfully.')
}
