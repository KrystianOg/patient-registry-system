import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store'
import { User } from '../../types';

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
}

const local: AuthState = JSON.parse(localStorage.getItem('user') || 'null');

const initialState: AuthState = local || {
    user: null,
    token: null,
    isAuthenticated: false
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signout: () => initialState,
    }
})

export const { signout } = slice.actions
export default slice.reducer

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated

