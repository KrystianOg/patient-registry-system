import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import config from '../../config.json'
import { BaseUser } from '../../types/User'
import { RootState } from '../store'

const baseQuery = fetchBaseQuery({
    baseUrl: config.API_SERVER,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token
        if (token) {
            headers.set('Authorization', `Bearer ${token.access}`)
        }
        return headers
    }
})

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    tagTypes: ['Appointment', 'Request'],
    endpoints: (builder) => ({
        getUsers: builder.query<BaseUser[], void>({
            query: () => '/users'
        })
    })
})

export const { useGetUsersQuery } = api
