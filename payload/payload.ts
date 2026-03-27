import { getPayload } from 'payload'
import config from '@payload-config'
import type { Config } from '@/payload-types'
import { unstable_cache } from 'next/cache'

type Global = keyof Config['globals']
type Collections = keyof Config['collections']

export const getPayloadClient = async () => {
  return await getPayload({ config })
}

async function getGlobal(slug: Global, depth = 0) {
  const payload = await getPayload({ config })
  const global = await payload.findGlobal({ slug, depth })
  return global
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getGlobalCached = (slug: Global, depth = 0) =>
  unstable_cache(async () => getGlobal(slug, depth), [slug], {
    tags: [`global_${slug}`],
  })

export const getCollectionItem = async ({ coll, slug, locale }: { coll: Collections; slug: string; locale: string }) => {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'sss' } },
    limit: 1,
    locale: locale as any,
  })
}
