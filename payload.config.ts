import 'dotenv/config'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
///
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { importExportPlugin } from '@payloadcms/plugin-import-export'
/// i18n
import { en } from '@payloadcms/translations/languages/en'
import { es } from '@payloadcms/translations/languages/es'
import { customTranslations } from './i18n/custom-translations'
/// collections
import { Globals } from './payload/globals'
import { Collections, UsersCollection } from '@/payload/collections'
///
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  bin: [
    {
      scriptPath: path.resolve(dirname, 'payload/seed/index.ts'),
      key: 'seed',
    },
  ],
  admin: {
    user: UsersCollection.slug,
    importMap: { baseDir: path.resolve(dirname) },
    components: {},
  },
  collections: Collections,
  globals: Globals,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || '' },
  }),
  sharp,
  jobs: {
    autoRun: [{ cron: '*/5 * * * *', allQueues: true }],
  },

  plugins: [
    importExportPlugin({
      collections: [{ slug: 'users' }, { slug: 'pages' }, { slug: 'media' }],
    }),
  ],
  i18n: {
    translations: customTranslations,
    supportedLanguages: { en, es },
    fallbackLanguage: 'en',
  },
  localization: {
    defaultLocale: 'en',
    locales: [
      {
        label: { en: 'English', es: 'Inglés' },
        code: 'en',
      },
      {
        label: { en: 'Spanish', es: 'Español' },
        code: 'es',
      },
    ],
  },
})
