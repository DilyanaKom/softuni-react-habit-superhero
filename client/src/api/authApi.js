import { post } from "../utils/request";

const url = 'http://localhost:3030/users';

export const useLogin = () => {
    const login = async (email, password) => {
        try {
            const response = await post(`${url}/login`, {email, password});
            return response;
            
        } catch (error) {
            console.log(error);
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
}

