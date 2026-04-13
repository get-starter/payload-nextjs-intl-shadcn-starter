/**
 * Global
 * Server functions
 */
'use server'

import { FindOptions, getPayload } from 'payload'
import config from '@payload-config'
import { routing } from '@/i18n/routing'
import { Config } from '@/payload-types'

export const payloadFind = async (options: FindOptions<any, any>) => {
  const payload = await getPayload({ config })
  const result = await payload.find(options)
  return result
}

export async function getCollBySlug({
  coll,
  slug,
  locale = 'all',
}: {
  coll: keyof Config['collections']
  slug: string
  locale?: Partial<typeof routing.locales>[number] | 'all'
}) {
  const payload = await getPayload({ config })
  try {
    const find = await payload.find({ collection: coll, where: { slug: { equals: slug } }, locale })
    return find.docs[0]
  } catch (error) {
    return null
  }
}

export async function getPageById(id: any, locale: any = 'all') {
  const payload = await getPayload({ config })
  try {
    const find = await payload.find({ collection: 'pages', where: { id: { equals: id } }, locale })
    return find.docs[0]
  } catch (error) {
    return null
  }
}

export async function getPages({ slugs, locale = 'all' }: { slugs?: string[]; locale?: Partial<typeof routing.locales>[number] | 'all' }) {
  try {
    const payload = await getPayload({ config })
    const whereQuery = slugs && slugs.length > 0 ? { slug: { in: slugs } } : {}
    const pageDocs = await payload.find({
      collection: 'pages',
      depth: 0,
      locale,
      where: whereQuery as any,
      overrideAccess: true,
    })
    return pageDocs.docs
  } catch (error) {
    return null
  }
}
