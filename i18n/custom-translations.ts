// custom-translations.ts
import { enTranslations } from '@payloadcms/translations/languages/en'
import type { NestedKeysStripped } from '@payloadcms/translations'

export const customTranslations = {
  en: {},
}

export type CustomTranslationsObject = typeof customTranslations.en & typeof enTranslations
export type CustomTranslationsKeys = NestedKeysStripped<CustomTranslationsObject>
