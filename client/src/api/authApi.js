import { post } from "../utils/request";

const url = 'http://localhost:3030/users';

export const useLogin = () => {
    const login = async (email, password) => {
        return post(`${url}/login`, {email, password});
    }

    return {
        login
    }
};

