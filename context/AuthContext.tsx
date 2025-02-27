import { useSQLiteContext } from "expo-sqlite";
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

/* const database = useSQLiteContext(); */

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () =>  useContext(AuthContext)


export const AuthProvider = ({ children }: PropsWithChildren ) => {

    const [state, setstate] = useState<StateTest>(StateTest.checking)

    const [showEmail,setShowEmail] = useState("")

    /* const loginUser = async () => {
        try {
          // Desactivar todos los usuarios
          await database.execAsync(`UPDATE user SET active = 0;`);
          // Activar el usuario con el email dado
          await database.execAsync(`UPDATE user SET active = 1 WHERE email = ${showEmail};`,);
          console.log(`Usuario con email ${showEmail} ha iniciado sesión y ahora está activo.`);
        } catch (error) {
          console.error("Error al iniciar sesión:", error);
        }
      };

      const logoutUser = async () => {
        try {
          await database.execAsync(`UPDATE user SET active = 0 WHERE email = ${showEmail};`);
          console.log(`Usuario con email ${showEmail} ha cerrado sesión y ahora está inactivo.`);
        } catch (error) {
          console.error("Error al cerrar sesión:", error);
        }
      }; */
    
    const logingEmailWithPassword = (email:string, password:string) => {
        setstate(StateTest.login);
        setShowEmail(email);
        /* loginUser(); */
    }
    
    const logout = () => {
        setstate(StateTest.closed);
        setShowEmail("");
        /* logoutUser(); */
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