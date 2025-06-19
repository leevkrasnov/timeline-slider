import { createContext, useContext, useMemo, useState } from 'react'
import { periods, IPeriod, IData } from '../data/periods'

interface DataContextType {
  activeIndex: number
  setActiveIndex: (idx: number) => void
  periods: IPeriod[]
  currentPeriod: IPeriod
  years: { from: number; to: number }
  events: IData[]
  label: string
  next: () => void
  prev: () => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const currentPeriod = useMemo(() => periods[activeIndex], [activeIndex])
  const years = useMemo(
    () => ({ from: currentPeriod.from, to: currentPeriod.to }),
    [currentPeriod]
  )
  const events = useMemo(() => currentPeriod.events, [currentPeriod])
  const label = useMemo(() => currentPeriod.label, [currentPeriod])

  const next = () => setActiveIndex((idx) => (idx + 1) % periods.length)
  const prev = () =>
    setActiveIndex((idx) => (idx - 1 + periods.length) % periods.length)

  const value: DataContextType = {
    activeIndex,
    setActiveIndex,
    periods,
    currentPeriod,
    years,
    events,
    label,
    next,
    prev,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useDataContext() {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error('useDataContext must be used within a DataProvider')
  return ctx
}
