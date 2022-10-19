import { retry } from '@reduxjs/toolkit/query/react'
import { api } from './api'
import { Appointment } from '../../types'

type Appointments = Appointment[]

export const appointmentsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAppointments: build.query<Appointments, void>({
            query: () => ({
                url: '/appointments/',
                method: 'GET'
            }),
        }),
        addAppointment: build.mutation<Appointment, Partial<Appointment>>({
            query: (body: Appointment) => {
                return {
                    url: '/appointments/',
                    method: 'POST',
                    body
                }
            },
        }),
        getAppointment: build.query<Appointment, number>({
            query: (id: number) => `/appointments/${id}/`,
        }),
        updateAppointment: build.mutation<Appointment, Partial<Appointment>>({
            query: (data: Appointment) => {
                const { id, ...body } = data
                return {
                    url: `/appointments/${id}/`,
                    method: 'PUT',
                    body
                }
            }
        }),
        deleteAppointment: build.mutation<{success: boolean, id: number}, number>({
            query: (id: number) => {
                return {
                    url: `/appointments/${id}/`,
                    method: 'DELETE'
                }
            }
        })
    })
})

export const {
    useGetAppointmentsQuery,
    useAddAppointmentMutation,
    useGetAppointmentQuery,
    useUpdateAppointmentMutation,
    useDeleteAppointmentMutation
} = appointmentsApi
