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
    },[])
    useEffect(() => {
        if (user) {
            if (action === "POP") {
                history.replace("/");
            } else {
                history.goBack();
            }
        }
    }, []);
    return render();
}