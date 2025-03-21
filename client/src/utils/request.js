async function request(method, url, data, options = {}){

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
    } catch (error) {
        throw error;
    }
    
    
    return result;

};

export const post = (url, data, options = {}) => request("POST", url, data, options);