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


    const response = await fetch(url, options);
    const result = await response.json();
    return result;

};

export const post = (url, data, options = {}) => request("POST", url, data, options);