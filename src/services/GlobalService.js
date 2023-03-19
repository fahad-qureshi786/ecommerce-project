import axios from "axios";
import {APIs} from "../const/APIs";
import {useContext} from "react";
import {GlobalContext} from "../context/GlobalContext";

/**
 * Like below function, you may write here all type of business logic functions and can handle all the global APIs data in the centralize place,
 *
 * @param username
 * @param password
 * @returns {Promise<void>}
 */
export const LOGIN = async (username, password) => {
    const {setLoginUserCredentials} = useContext(GlobalContext)
    await axios.post(APIs.Credentials.Login, {
        username: username,
        password: password
    }).then(res => {
        setLoginUserCredentials(res.data)
    }).catch(err=>{
        alert("Error")
    })
}
