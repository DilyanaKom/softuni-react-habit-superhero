import { useContext } from "react";
import { post, get } from "../utils/request";
import { UserContext } from "../components/user/UserContext";

const url = 'http://localhost:3030/users';

export const useLogin = () => {
    const login = async (email, password) => {
        try {
            const response = await post(`${url}/login`, {email, password});
            return response;
            
        } catch (error) {
            console.log(error.message);
        }

        
    }

    return {
        login
    }
};

export const useRegister = () => {
    const register = async (username, email, password) => {
        return post(`${url}/register`, {username, email, password})
    }

    return {
        register
    }
};

export const useLogout = () => {
    const logout = async () => {
        return get(`${url}/logout`);
    }

    return {
        logout
    }

}

