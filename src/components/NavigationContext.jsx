import { useContext, createContext } from "react";

const NavigationContext = createContext([]);

export const NavigationProvider = ( {children}) => {
    const navLinks = [
        {id: 'home', name: 'Home', path:'/'},
        {id: 'register', name: 'Register', path:'/register'},
        {id: 'login', name: 'Login', path:'/login'},
        {id: 'logout', name: 'Logout', path:'/logout'},
        {id: 'profile', name: 'Profile', path:'/profile'},
        {id: 'catalog', name: 'Catalog', path:'/catalog'}
    ];

    return (
        <NavigationContext.Provider value={navLinks}>
            {children}
        </NavigationContext.Provider>
    )
};

export const useNavigation = () => { 
    return useContext(NavigationContext);
};