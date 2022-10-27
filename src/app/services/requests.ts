import { retry } from '@reduxjs/toolkit/query/react'
import { api } from './api'
import { Request } from '../../types'

type Requests = Request[]

export const requestsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getRequests: build.query<Requests, void>({
            query: () => ({
                url: '/requests/',
                method: 'GET'
            }),
            providesTags: ['Request']
        }),
        addRequest: build.mutation<Request, Partial<Request>>({
            query: (body: Request) => {
                return {
                    url: '/requests/',
                    method: 'POST',
                    body
                }
            },
            invalidatesTags: ['Request']
        }),
        getRequest: build.query<Request, number>({
            query: (id: number) => `/requests/${id}/`,
        }),
        updateRequest: build.mutation<Request, Partial<Request>>({
            query: (data: Request) => {
                const { id, ...body } = data
                return {
                    url: `/requests/${id}/`,
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['Request']
        }),
        deleteRequest: build.mutation<{success: boolean, id: number}, number>({
            query: (id: number) => {
                return {
                    url: `/requests/${id}/`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: ['Request']
        })
    })
})

export const {
    useGetRequestsQuery,
    useAddRequestMutation,
    useGetRequestQuery,
    useUpdateRequestMutation,
    useDeleteRequestMutation
} = requestsApi

export const {
    endpoints: { getRequests, addRequest, getRequest, updateRequest, deleteRequest }
} = requestsApi
