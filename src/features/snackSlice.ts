import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store'
import { User } from '../types';

interface Snack {
    message: string;
    restorable?: boolean
}

const initialState: Snack[] = []

const slice = createSlice({
    name: 'snack',
    initialState,
    reducers: {
        create: (state, action: PayloadAction<Snack>) => {
            state.push(action.payload)
        }
    }
})

export const { create } = slice.actions
export default slice.reducer

export const selectSnacks = (state: RootState) => state.snack

