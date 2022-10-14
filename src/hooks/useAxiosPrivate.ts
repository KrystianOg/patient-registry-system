import { axiosPrivate } from '../utils/axios';
import { useEffect } from 'react'
import useRefreshToken from './useRefreshToken'
import useAuth from './useAuth'
import jwt_decode from 'jwt-decode';

const useAxiosPrivate = () => {
    const refresh = useRefreshToken()
    const { auth } = useAuth()

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            async config => {
                if(auth?.accessToken){
                    const token: any = jwt_decode(auth?.accessToken)
                    const isExpired = token.exp < Date.now() / 1000
                    if (isExpired) {
                        await refresh().then((accessToken: string) => {
                            config.headers!['Authorization'] = `Bearer ${accessToken}`
                        })
                        return config
                    }
                }

                config.headers!['Authorization'] = `Bearer ${auth?.accessToken}`
                return config 
            }, error => {
                return Promise.reject(error)
            }
        )

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept)
        }
    }, [auth, refresh])

    return axiosPrivate
}

export default useAxiosPrivate