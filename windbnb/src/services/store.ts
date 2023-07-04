import { create } from 'zustand'
import { Stay } from '../types'
interface StatyState {
    stays: Stay[]
    filteredStays: Stay[]
    filteredLocations: string[]
    searchCity: string
    searchGuest: number
    setStays: (newStays: Stay[]) => void
    setFilterdStays: (newStays: Stay[]) => void
    setFilteredLocations: (newLocations: string[]) => void
    setSearchCity: (city: string) => void
    setSearchGuest: (guest: number) => void

}
const useStayStore = create<StatyState>((set) => ({
    stays: [],
    filteredStays: [],
    filteredLocations: [],
    searchCity: '',
    searchGuest: 0,
    setStays: (newStays) => set((state) => ({ ...state, stays: newStays })),
    setFilterdStays: (newStays) => set((state) => ({ ...state, filteredStays: newStays })),
    setFilteredLocations: (newLocations) => set((state) => ({ ...state, filteredLocations: newLocations })),
    setSearchCity: (city) => set(state => ({ ...state, searchCity: city })),
    setSearchGuest: (guest) => set(state => ({ ...state, searchGuest: guest }))

}))

export default useStayStore