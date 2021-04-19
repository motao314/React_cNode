import React, { useCallback } from "react";
import useUser from "../hooks/useUser";
import { useHistory, useLocation } from "dva"
import { useEffect } from "react";
export default function (props) {
    const user = useUser();
    const history = useHistory();
    const { action } = useLocation();
    const render = useCallback(()=>{
        if(user){
            return <></>
        }
        return <>{props.children}</>;
    },[props.children, user])
    useEffect(() => {
        console.log("111");
        if (user) {
            if (action === "POP") {
                history.replace("/");
            } else {
                history.goBack();
            }
        }
    }, [action, history, user]);
    return render();
}