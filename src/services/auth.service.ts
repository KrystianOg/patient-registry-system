import { axiosPublic } from '../utils/axios';

const signUp = (email: string, password: string, confirmPassword: string) => {
    return axiosPublic.post('/auth/signup', {
        email,
        password,
        confirmPassword
    });
}

const signIn = (email: string, password: string) => {
    return axiosPublic.post('/auth/token/', {
        email,
        password
    }).then(res => {
        // do smth with Token
        return res.data
    })
}

const signOut = () => localStorage.removeItem('user')

export default {
    signUp,
    signIn,
    signOut
}