import { useContext, createContext } from "react";

const NavigationContext = createContext([]);

export const NavigationProvider = ( {children}) => {
    const navLinks = [
        {id: 'home', name: 'Home', path:'/', className: '1' },
        {id: 'register', name: 'Register', path:'/register', className: '2' },
        {id: 'login', name: 'Login', path:'/login', className: '3' },
        {id: 'logout', name: 'Logout', path:'/logout', className: '4' },
        {id: 'profile', name: 'Profile', path:'/profile', className: '5' },
        {id: 'catalog', name: 'Catalog', path:'/catalog', className: '6' }
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