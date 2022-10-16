import { api } from './api'
import { User } from '../../types'

interface SignInCredentials {
    email: string,
    password: string
}

interface SignUpCredentials {
    email: string,
    password: string,
    password2: string
}

export const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        signin: build.mutation<{token: string, user: User}, Partial<SignInCredentials>>({
            query: (credentials: SignInCredentials) => ({
                url: '/auth/token/',
                method: 'POST',
                body: credentials
            }),
        }),
        signup: build.mutation<{message: string}, Partial<SignUpCredentials>>({
            query: (credentials: SignUpCredentials) => ({
                url: '/auth/signup/',
                method: 'POST',
                body: credentials
            }),
        }),
        signinWithGoogle: build.mutation<{idtoken: string}, Partial<string>>({
            query: (idToken: string) => ({
                url: '/auth/google/signin/',
                method: 'GET',
                headers: {
                    Authorization: idToken,
                    'Content-Type': 'application/json'
                }
            })
        })

    })
})

export const {
    useSigninMutation,
    useSigninWithGoogleMutation
} = authApi

export const {
    endpoints: { signin, signinWithGoogle }
} = authApi