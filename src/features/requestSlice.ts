import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store'
import type { Request } from '../types'

const initialState: Request[] = []

const slice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        // TODO: check if payload differs
        add: (state, action: PayloadAction<Request>) => {
            state.push(action.payload)
        },
        bulkAdd: (state, action: PayloadAction<Request[]>) => {
            state.push(...action.payload)
        },
        update: (state, action: PayloadAction<Request>) => {
            const index = state.findIndex(appointment => appointment.id === action.payload.id)
            state[index] = {
                ...action.payload,
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            const index = state.findIndex(appointment => appointment.id === action.payload)
            state.splice(index, 1)
        }
    }
})

export const { add, bulkAdd, update, remove } = slice.actions
export default slice.reducer

export const selectAppointments = (state: RootState) => state.requests
export const selectRequest = (state: RootState, id: number) => state.requests.find(request => request.id === id)

