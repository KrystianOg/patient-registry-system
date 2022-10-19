import { retry } from '@reduxjs/toolkit/query/react'
import { api } from './api'
import { User } from '../../types'

type UsersResponse = User[]

export const usersApi = api.injectEndpoints({
    endpoints: (build) => ({
    })
})