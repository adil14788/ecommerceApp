import { loginFailed, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from '../requestMethod';


export const login = async (dispath, user) => {
    dispath(loginStart());
    try {
        const res = await publicRequest.post("auth/login", user);
        dispath(loginSuccess(res.data));

    }
    catch (err) {
        dispath(loginFailed());
    }
};