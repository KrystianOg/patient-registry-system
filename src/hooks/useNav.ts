import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'

export enum Page {
	Appointments = '/appointments',
	Requests = '/requests',
	Calendar = '/calendar',
	Account = '/account',
}

export const useNav = () => {
    const [page, setPage] = useState<Page>(Page.Appointments);
    const location = useLocation();

    useEffect(()=> {
        setPage(location.pathname as Page);
    },[location])

    return page
}

export default useNav
