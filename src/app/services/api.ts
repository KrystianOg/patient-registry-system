import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import config from '../../config.json'
import { User } from '../../types/User'
import { RootState } from '../store'

const baseQuery = fetchBaseQuery({
    baseUrl: config.API_SERVER,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token
        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3})

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithRetry,
    tagTypes: [],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => '/users'
        })
    })
})

export const { useGetUsersQuery } = api