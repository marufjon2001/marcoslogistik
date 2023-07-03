import { create } from 'zustand'

export const useStore = create((set) => ({
  isFalse: false,
  increasePopulation: (value) => set((state) => ({ isFalse: value })),
}))