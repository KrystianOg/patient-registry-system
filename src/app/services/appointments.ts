import { retry } from '@reduxjs/toolkit/query/react'
import { api } from './api'
import { Appointment, CreateAppointment } from '../../types'

type Appointments = Appointment[]

export const appointmentsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAppointments: build.query<Appointments, void>({
            query: () => ({
                url: '/appointments/',
                method: 'GET'
            }),
            providesTags: ['Appointment']
        }),
        addAppointment: build.mutation<Appointment, Partial<CreateAppointment>>({
            query: (body: CreateAppointment) => {
                return {
                    url: '/appointments/',
                    method: 'POST',
                    body
                }
            },
            invalidatesTags: ['Appointment', 'Request']
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
            },
            invalidatesTags: ['Appointment']
        }),
        deleteAppointment: build.mutation<{success: boolean, id: number}, number>({
            query: (id: number) => {
                return {
                    url: `/appointments/${id}/`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: ['Appointment']
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

export const {
    endpoints: { getAppointments, addAppointment, getAppointment, updateAppointment, deleteAppointment }
} = appointmentsApi

export const selectAllAppointments = appointmentsApi.endpoints.getAppointments.select()
