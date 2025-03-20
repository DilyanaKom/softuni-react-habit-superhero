
import { createContext, useContext } from "react";
import { UserContext } from "../user/UserContext";

export const NavigationContext = createContext([]);

export const NavigationProvider = ( {children}) => {
        const {accessToken} = useContext(UserContext);

        const commonLinks = [
            {id: 'home', name: 'Home', path:'/', className: 'navLink1' },
            {id: 'challenges', name: 'Challenges', path:'/challenges', className: 'navLink2' },
        ];

        const authLinks = [
            {id: 'createChallenge', name: 'Create', path:'/create', className: 'navLink7' },
            {id: 'profile', name: 'Profile', path:'/profile', className: 'navLink4' },
            {id: 'logout', name: 'Logout', path:'/logout', className: 'navLink6' },
           

        ];

        const guestLinks = [
            {id: 'register', name: 'Register', path:'/register', className: 'navLink3' },
            {id: 'login', name: 'Login', path:'/login', className: 'navLink5' },


        ]

    const navLinks = [
        ...commonLinks,
        ...(accessToken ? authLinks : guestLinks)
    ]

    return (
        <NavigationContext.Provider value={navLinks}>
            {children}
        </NavigationContext.Provider>
    )
};
