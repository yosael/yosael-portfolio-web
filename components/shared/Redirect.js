import React,{ useEffect } from 'react';
import { router, useRouter } from 'next/router';

const Redirect = ({url}) => {

    const router =  useRouter();
    useEffect(() => {
        router.push(url);
    }, [])
    return null;
}

export default Redirect;