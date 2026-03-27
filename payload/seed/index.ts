import type { SanitizedConfig } from 'payload'

import payload from 'payload'
import { baseSeed } from './base.seed'
import { pagesSeed } from './pages.seed'
import { navSeed } from './nav.seed'

// Script must define a "script" function export that accepts the sanitized config
export const script = async (config: SanitizedConfig) => {
  await payload.init({ config })
  /// data
  await baseSeed(payload)
  await pagesSeed(payload)
  await navSeed(payload)

  payload.logger.info('Successfully seeded!')
  process.exit(0)
}
