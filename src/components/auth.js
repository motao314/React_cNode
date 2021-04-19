import React from "react";
import useUser from "../hooks/useUser";
import { useDispatch, useLocation } from "dva"
import { useEffect } from "react";
import { Redirect } from "react-router-dom"
export default function (props) {
    const user = useUser();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    useEffect(() => {
        if (!user) {
            dispatch({
                type: "user/setPrevPath",
                prevPath: pathname
            })
        }
    }, [])
    if (user) {
        return <>{props.children}</>
    }
    return <Redirect to="/login" />
}