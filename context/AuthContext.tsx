import { createContext, PropsWithChildren, useContext, useState } from "react";

/* arreglo */
enum StateTest {
    'checking',
    'login',
    'closed',
}

interface AuthState{
    state: StateTest;
    showEmail: string,
    logingEmailWithPassword: (email: string, password: string) => void
    logout: () => void
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () =>  useContext(AuthContext)

export const AuthProvider = ({ children }: PropsWithChildren ) => {

    const [state, setstate] = useState<StateTest>(StateTest.checking)

    const [showEmail,setShowEmail] = useState("")
    
    const logingEmailWithPassword = (email:string, password:string) => {
        setstate(StateTest.login)
        setShowEmail(email)
    }
    
    const logout = () => {
        setstate(StateTest.closed)
        setShowEmail("")
    }

    return(
        <AuthContext.Provider value={{
            state: state,
            showEmail,
            logingEmailWithPassword,
            logout

        }} >
            {children}

        </AuthContext.Provider>
    )
}