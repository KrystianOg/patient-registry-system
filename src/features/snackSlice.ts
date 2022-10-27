import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store'

interface Snack {
    message: string;
    restorable?: boolean
}

const initialState: Snack[] = []

const slice = createSlice({
    name: 'snacks',
    initialState,
    reducers: {
        create: (state, action: PayloadAction<Snack>) => {
            state.push(action.payload)
        }
    }
})

export const { create } = slice.actions
export default slice.reducer

export const selectSnacks = (state: RootState) => state.snacks

