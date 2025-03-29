import { useState } from "react";

export const useErrorHandler = () => {
    const [error, setError] = useState(null);

    const clearError = () => setError(null);
    
    return{
        error,
        setError,
        clearError
    }
}