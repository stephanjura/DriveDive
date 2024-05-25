import { useEffect, useState, createContext, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";  

const AuthContext = createContext();  

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser(user);  
                setUserLoggedIn(true);
                setLoading(false);  
            } else {
                setCurrentUser(null);
                setUserLoggedIn(false);
                setLoading(false);  
            }
        }); 
        return unsubscribe;  
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, userLoggedIn, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
