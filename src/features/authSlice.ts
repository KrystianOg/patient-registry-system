import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store'
import { AuthUser, Token } from '../types';
import jwt_decode from 'jwt-decode';

interface AuthState {
    user?: AuthUser | null;
    token: Token | null;
}

interface TokenContents {
    user_id: number;
    types: string[];
    email: string;
}

const localUser: AuthUser = JSON.parse(localStorage.getItem('user') || 'null');
const localToken: Token = JSON.parse(localStorage.getItem('token') || 'null')

const initialState: AuthState = {
    user: localUser || null,
    token: localToken || null,
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<Token>) => {
            state.token = action.payload
            localStorage.setItem('token', JSON.stringify(state.token))
        },
        setUserInfo: (state, action: PayloadAction<AuthUser>) => {
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(state.user))
        },
        signout: (state) => {
            state.user = null
            state.token = null
            localStorage.removeItem('user')
            localStorage.removeItem('token')
        },
    }
})

export const { setCredentials, setUserInfo, signout } = slice.actions
export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectIsAuthenticated = (state: RootState) => state.auth.user !== null
export const selectIdFromToken = (state: RootState) => {
    if (state.auth.token) {
        const { user_id }: TokenContents = jwt_decode(state.auth.token.access)
        return user_id
    }
    return null
}
