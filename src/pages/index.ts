import { lazy } from 'react'

export const Home = lazy(() => import ('./Home'))
export const SignIn = lazy(() => import ('./Auth/SignIn'))
export const SignUp = lazy(() => import ('./Auth/SignUp'))
export const RestorePassword = lazy(() => import ('./Auth/RestorePassword'))
export const Unauthorized = lazy(() => import ('./Unauthorized'))
export const NotFound = lazy(() => import ('./NotFound'))
export const Appointments = lazy(() => import ('./Appointments'))
export const AddAppointment = lazy(() => import ('./Appointments/AddAppointment'))
export const Account = lazy(() => import ('./Account'))
export const Requests = lazy(() => import ('./Requests'))
export const Request = lazy(() => import ('./Requests/Request'))
export const AddRequest = lazy(() => import ('./Requests/AddRequest'))
