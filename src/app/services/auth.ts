import { api } from './api'
import type { SigninCredentials, SignupCredentials, Token } from '../../types/Auth'


export const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        signin: build.mutation<Token, SigninCredentials>({
            query: (credentials: SigninCredentials) => ({
                url: '/auth/token/',
                method: 'POST',
                body: credentials,
            }),
        }),
        signup: build.mutation<Token, Partial<SignupCredentials>>({
            query: (credentials: SignupCredentials) => ({
                url: '/auth/signup/',
                method: 'POST',
                body: credentials,
            }),
        }),
        signupDoctor: build.mutation<Token, Partial<SignupCredentials>>({
            query: (credentials: SignupCredentials) => ({
                url: '/auth/signup/doctor/',
                method: 'POST',
                body: credentials,
            }),
        }),
        signinWithGoogle: build.mutation<Token, Partial<string>>({
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
    useSignupMutation,
    useSigninWithGoogleMutation
} = authApi

export const {
    endpoints: { signin, signup, signinWithGoogle }
} = authApi
