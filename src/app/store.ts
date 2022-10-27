import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './services/api'
import {auth, snacks, requests, appointments } from '../features'

const thunk = (store: any) => (next: any) => (action: any) =>
    typeof action === 'function'
        ? action(store.dispatch, store.getState)
        : next(action)

const createStore = (
    options?: ConfigureStoreOptions['preloadedState'] | undefined
) => configureStore({
    reducer: {
        auth,
        snacks,
        requests,
        appointments,
        [api.reducerPath]: api.reducer,
    },
    devTools: true,
    middleware: [thunk, api.middleware]
})


export const store = createStore()

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
