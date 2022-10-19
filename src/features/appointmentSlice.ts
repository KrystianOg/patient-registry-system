import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store'
import type { Appointment } from '../types'

const initialState: Appointment[] = []

const slice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        // TODO: check if payload differs
        add: (state, action: PayloadAction<Appointment>) => {
            state.push(action.payload)
        },
        bulkAdd: (state, action: PayloadAction<Appointment[]>) => {
            state.push(...action.payload)
        },
        update: (state, action: PayloadAction<Appointment>) => {
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

export const selectAppointments = (state: RootState) => state.appointments
export const selectAppointment = (state: RootState, id: number) => state.appointments.find(appointment => appointment.id === id)

