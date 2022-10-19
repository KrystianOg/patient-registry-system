import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store'
import { User } from '../types';

interface AuthState {
    user: User | null;
    token: string | null;
}



const local: AuthState = JSON.parse(localStorage.getItem('user') || 'null');

const initialState: AuthState = local || {
    user: null,
    token: null,
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signin: (state, action: PayloadAction<AuthState>) => {
            state = action.payload;
        },
        signout: () => initialState,
    }
})

export const { signout } = slice.actions
export default slice.reducer

export const selectIsAuthenticated = (state: RootState) => state.auth.user !== null

