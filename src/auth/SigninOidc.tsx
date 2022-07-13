import React, {useEffect, FC} from "react";
import { useNavigate } from "react-router-dom";
import { signinRedirectCallback } from './user-service';


const SigninOidc: FC<{}> = ()=>{
    const history = useNavigate();
    useEffect(()=>{
        async function singinAsync() {
            await signinRedirectCallback();
            history('/');
        }
        singinAsync();
    },[history]);

    return <div>Redirecting...</div>
}

export default SigninOidc;