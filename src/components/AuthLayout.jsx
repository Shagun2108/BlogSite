import React, { useEffect, useState } from 'react'
import { set } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Protected = ({ children, authentication = true }) => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => authStatus.state.status);

    useEffect(() => {
        //will make it better later
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        }
        else if (!authentication && authStatus === authentication) {
            navigate("/")
        }

        setLoader(false);
    }, [authStatus, navigate, authentication])
    return (
        loader ? <h1>Loading...</h1> : {children}
    )
}

export default Protected;


// how to protect pages and routes in react using redux state