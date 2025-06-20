import { createContext, useContext, useMemo, useState } from 'react'
import { periods, IPeriod, IData } from '../data/periods'

interface DataContextType {
  activeIndex: number
  setActiveIndex: (index: number) => void
  periods: IPeriod[]
  periodsLength: number
  currentPeriod: IPeriod
  years: { from: number; to: number }
  events: IData[]
  next: () => void
  prev: () => void
  goTo: (index: number) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const periodsLength = periods.length

  const currentPeriod = useMemo(() => periods[activeIndex], [activeIndex])

  const years = useMemo(
    () => ({ from: currentPeriod.from, to: currentPeriod.to }),
    [currentPeriod]
  )
  const events = useMemo(() => currentPeriod.events, [currentPeriod])

  const next = () => setActiveIndex((index) => (index + 1) % periods.length)

  const prev = () =>
    setActiveIndex((index) => (index - 1 + periods.length) % periods.length)

  const goTo = (index: number) => {
    if (index < 0 || index >= periods.length) return
    setActiveIndex(index)
  }

  const value: DataContextType = {
    activeIndex,
    setActiveIndex,
    periods,
    periodsLength,
    currentPeriod,
    years,
    events,
    next,
    prev,
    goTo,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useDataContext() {
  const ctx = useContext(DataContext)

  if (!ctx) throw new Error('useDataContext must be used within a DataProvider')

  return ctx
}
