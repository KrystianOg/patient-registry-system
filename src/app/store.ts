import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './services/api'
import {auth, snack, requests, appointments } from '../features'

export const createStore = (
    options?: ConfigureStoreOptions['preloadedState'] | undefined
) => configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth,
        snack,
        requests,
        appointments
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware),
    ...options
})

export const store = createStore()

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
