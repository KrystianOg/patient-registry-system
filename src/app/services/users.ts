import { api } from './api'
import { BaseUser, AuthUser } from '../../types'

type BaseUsers = BaseUser[]

export const requestsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query<BaseUsers, void>({
            query: () => ({
                url: '/users/',
                method: 'GET'
            }),
            providesTags: ['Request']
        }),
        getUser: build.query<AuthUser, number>({
            query: (id: number) => `/auth/user/${id}/`,
        }),
        updateUser: build.mutation<AuthUser, Partial<AuthUser>>({
            query: (data: AuthUser) => {
                const { id, ...body } = data
                return {
                    url: `/auth/user/${id}/`,
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['Request']
        }),
        deleteUser: build.mutation<{success: boolean, id: number}, number>({
            query: (id: number) => {
                return {
                    url: `/auth/user/${id}/`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: ['Request']
        })
    })
})

export const {
    useGetUsersQuery,
    useGetUserQuery,
    useUpdateUserMutation,
    useDeleteUserMutation
} = requestsApi

export const {
    endpoints: { getUsers, getUser, updateUser, deleteUser }
} = requestsApi
