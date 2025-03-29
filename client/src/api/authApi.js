import { useErrorHandler } from "../hooks/errorHandler";
import { post, get } from "../utils/request";

const url = 'http://localhost:3030/users';

export const useLogin = () => {
    const { error, setError, clearError } = useErrorHandler();
    const login = async (email, password) => {
        try {
            const response = await post(`${url}/login`, { email, password });

            if (!response || response.error) {
                setError(response?.message || 'Login failed');
                return null;
            }


                return response;



        } catch (error) {
            setError(error.message || 'Login failed');
            return null;
        }


    }

    return {
        login,
        error,
        clearError
    }
};

export const useRegister = () => {
    const { error, setError, clearError } = useErrorHandler();
    const register = async (username, email, password) => {
        try {
            const response = await post(`${url}/register`, { username, email, password });
            return response;
        } catch (error) {
            setError(error.message || 'Register failed');
            return null;

        }

    }

    return {
        register,
        error,
        setError,
        clearError
    }
};

export const useLogout = () => {
    const { error, setError, clearError } = useErrorHandler();
    const logout = async () => {
        try {
            return await get(`${url}/logout`);
        } catch (error) {
            setError(error.message || "Logout failed.")
            
        }
    
    }

    return {
        logout,
        error,
        clearError
    }

}

