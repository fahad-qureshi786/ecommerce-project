import {BACKEND_SERVER_BASE_URL} from "./ServersBaseURLs";

export const APIs = {
    Credentials: {
        Login: `${BACKEND_SERVER_BASE_URL}user/login`,
        SignUp: `${BACKEND_SERVER_BASE_URL}user/signUp`
    }
}
