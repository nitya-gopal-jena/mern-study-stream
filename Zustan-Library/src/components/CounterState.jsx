
import { create } from 'zustand'

export const useCount = create((set) => {
    return {
        count1: 0,
        count2: 10,
        count3: 100,
        incrementCount1: () => set(state => {
            return {count1: state.count1 + 1}
        }),

        incrementCount2: () => set(state => ({
            count2: state.count2 + 1
        })),
        incrementCount3: () => set(state => ({
            count3: state.count3+ 1
        }))
    }
})