// stores/app.store.ts
import { Config, Page } from '@/payload-types'
import { PaginatedDocs } from 'payload'
import { createStore } from 'zustand/vanilla'

export type AppValues = {
  globalData: Config['globals'] | null
  currentDocs: PaginatedDocs<Page> | null
}

export type AppActions = {
  setState: (data: Partial<AppState>) => void
}

export type AppState = AppValues & AppActions

const defaultState: AppValues = {
  globalData: null,
  currentDocs: null,
}

export const createAppStore = (initialState?: Partial<AppState>) =>
  createStore<AppState>()((set) => ({
    ...defaultState,
    ...initialState,
    setState: (data) => set((state) => ({ ...state, ...data })),
  }))
