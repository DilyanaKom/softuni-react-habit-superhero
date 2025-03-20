
import { createContext } from "react";

export const NavigationContext = createContext([]);

export const NavigationProvider = ( {children}) => {
    const navLinks = [
        {id: 'home', name: 'Home', path:'/', className: 'navLink1' },
        {id: 'challenges', name: 'Challenges', path:'/challenges', className: 'navLink2' },
        {id: 'register', name: 'Register', path:'/register', className: 'navLink3' },
        {id: 'profile', name: 'Profile', path:'/profile', className: 'navLink4' },
        {id: 'login', name: 'Login', path:'/login', className: 'navLink5' },
        {id: 'logout', name: 'Logout', path:'/logout', className: 'navLink6' },
        {id: 'createChallenge', name: 'Create', path:'/challenges/create', className: 'navLink7' },
          
    ];

    return (
        <NavigationContext.Provider value={navLinks}>
            {children}
        </NavigationContext.Provider>
    )
};
