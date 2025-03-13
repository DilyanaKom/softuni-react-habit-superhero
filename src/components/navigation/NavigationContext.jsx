import { useContext, createContext } from "react";

const NavigationContext = createContext([]);

export const NavigationProvider = ( {children}) => {
    const navLinks = [
        {id: 'home', name: 'Home', path:'/', className: '1' },
        {id: 'catalog', name: 'Catalog', path:'/catalog', className: '2' },
        {id: 'register', name: 'Register', path:'/register', className: '3' },
        {id: 'profile', name: 'Profile', path:'/profile', className: '4' },
        {id: 'login', name: 'Login', path:'/login', className: '5' },
        {id: 'logout', name: 'Logout', path:'/logout', className: '6' },
        
        
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