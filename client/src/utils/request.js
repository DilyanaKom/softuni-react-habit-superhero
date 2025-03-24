async function request(method, url, data, options = {}) {
    const user = JSON.parse(localStorage.getItem('auth'));

    if (user?.accessToken) {
       
        options = {
            ...options,
            headers: {
                'X-Authorization': user.accessToken,
                ...options.headers,
            }



        }
    }

    if (method !== "GET") {
        options.method = method;
    }

    if (data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(data)
        }
    }

    try {
        const response = await fetch(url, options);

        if(response.status === 204){
            return;
        }
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message);
        }
        return result;
    } catch (error) {
        throw error;
    }




};

export const post = (url, data, options = {}) => request("POST", url, data, options);
export const get = (url, options = {}) => request("GET", url, null, options)