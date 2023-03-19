import React, {createContext, useState} from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [loginUserCredentials, setLoginUserCredentials] = useState({});


    //combining all the values
    return (
        <GlobalContext.Provider value={{
            loginUserCredentials, setLoginUserCredentials
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
