async function request(method, url, data, options = {}){
    const user = localStorage.getItem('auth');

    if(user){
        const token = JSON.parse(user).accessToken;
        options.headers = {
            ...options.headers,
            'X-Autorization': token,

        }
    }

    if(method !== "GET"){
        options.method = method;
    }

    if(data){
        options = {
            ...options,
            headers:{
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(data)
        }
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if(!response.ok){
            throw new Error(result.message);        
        }
        return result;
    } catch (error) {
        throw error;
    }
    
    
   

};

export const post = (url, data, options = {}) => request("POST", url, data, options);
export const get = (url) => request("GET", url, null, options)