import { createSlice } from '@reduxjs/toolkit'

let initialState = { count: 0 }
const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => ({ count: state.count + 1 }),
        decrement: (state) => ({ count: state.count - 1 })
    }
})

export let { increment, decrement } = CounterSlice.actions
export default CounterSlice.reducer;