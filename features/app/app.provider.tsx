'use client'

import { createContext, useContext, useEffect, useRef } from 'react'
import { useStore } from 'zustand'
import { createAppStore, AppState } from '@/features/app/app.store'
import type { StoreApi } from 'zustand'
import { usePathname, useRouter } from 'next/navigation'

const AppStoreContext = createContext<StoreApi<AppState> | null>(null)

export function AppProvider({ children, initialState }: { children: React.ReactNode; initialState: Partial<AppState> }) {
  const storeRef = useRef<StoreApi<AppState> | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  if (!storeRef.current) {
    storeRef.current = createAppStore(initialState)
  }

  useEffect(() => {
    if (storeRef.current && initialState) {
      storeRef.current.getState().setState(initialState)
    }
  }, [initialState])

  return <AppStoreContext.Provider value={storeRef.current}>{children}</AppStoreContext.Provider>
}

export function useAppStore<T>(selector: (state: AppState) => T): T {
  const store = useContext(AppStoreContext)

  if (!store) {
    throw new Error('useAppStore must be used within AppProvider')
  }

  return useStore(store, selector)
}
