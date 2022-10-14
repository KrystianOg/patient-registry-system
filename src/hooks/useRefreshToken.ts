import { IAuthContext } from "../types";
import { axiosPublic as axios } from "../utils/axios";
import useAuth from './useAuth'

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth()

    const refresh = async () => {
        const res = await axios.post('/auth/token/refresh/', { 
            withCredentials: true,
            refresh: auth?.refreshToken 
        })

        setAuth({
            ...auth,
            accessToken: res.data.access
        } as IAuthContext)

        return res.data.access
    }

    return refresh
}

export default useRefreshToken