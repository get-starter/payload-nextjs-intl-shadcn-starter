'use client'

import { useRowLabel } from '@payloadcms/ui'
import { useLocale } from '@payloadcms/ui'
import { useState, useEffect } from 'react'

type NavItem = {
  type: 'custom' | 'page' | 'service'
  label?: string
  href?: string
  page?: string
  service?: string
}

const cache = new Map<string, string>()

export function RowLabel() {
  const { data, rowNumber } = useRowLabel<NavItem>()
  const { code: locale } = useLocale()
  const [relatedTitle, setRelatedTitle] = useState<string | null>(null)

  useEffect(() => {
    const id = data?.type === 'page' ? data?.page : data?.type === 'service' ? data?.service : null
    const collection = data?.type === 'page' ? 'pages' : 'services'

    if (!id) return setRelatedTitle(null)

    const cacheKey = `${locale}:${id}`

    if (cache.has(cacheKey)) {
      setRelatedTitle(cache.get(cacheKey)!)
      return
    }

    fetch(`/api/${collection}/${id}?depth=0&locale=${locale}&select[title]=true`)
      .then((r) => r.json())
      .then((d) => {
        if (d?.title) cache.set(cacheKey, d.title)
        setRelatedTitle(d?.title ?? null)
      })
  }, [data?.type, data?.page, data?.service, locale])

  const label = data?.type === 'custom' ? data?.label || data?.href || 'Custom Link' : relatedTitle || `Öğe ${(rowNumber ?? 0) + 1}`

  return <span>{label}</span>
}
