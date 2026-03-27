'use client'
import { useRef } from 'react'
import { useAppStore } from './app.provider'

export function CollInitializer({ currentDocs }: { currentDocs: any }) {
  const initialized = useRef(false)
  const setState = useAppStore((s) => s.setState)

  if (!initialized.current) {
    setState({ currentDocs })
    initialized.current = true
  }
  return null
}
