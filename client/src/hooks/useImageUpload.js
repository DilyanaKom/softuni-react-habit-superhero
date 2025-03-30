import { useState } from "react";

const url = 'https://api.imgbb.com/1/upload';


const useImageUpload =  () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('key', '54c03c59f0f501b9ac5b33cb61a43855');
    
        setIsLoading(true);
    
        const response = await fetch(url, {
            method: "POST",
            body: formData
        });
    
        const data = await response.json();
        setImageUrl(data.data.url);
        setIsLoading(false);
    
    }
    

    return {
        uploadImage,
        imageUrl,
        isLoading
    }

};

export default useImageUpload;