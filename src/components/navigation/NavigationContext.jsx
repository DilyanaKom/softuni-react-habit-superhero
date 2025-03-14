import { useContext, createContext } from "react";

const NavigationContext = createContext([]);

export const NavigationProvider = ( {children}) => {
    const navLinks = [
        {id: 'home', name: 'Home', path:'/', className: 'navLink1' },
        {id: 'catalog', name: 'Catalog', path:'/catalog', className: 'navLink2' },
        {id: 'register', name: 'Register', path:'/register', className: 'navLink3' },
        {id: 'profile', name: 'Profile', path:'/profile', className: 'navLink4' },
        {id: 'login', name: 'Login', path:'/login', className: 'navLink5' },
        {id: 'logout', name: 'Logout', path:'/logout', className: 'navLink6' },
        
        
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