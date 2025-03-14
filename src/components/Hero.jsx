import { useState, useEffect } from "react";

export default function Hero(){

    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselImages = [
        {src: '/hero.jpg',
         alt: 'Bird swimming'
        }
    ];
    useEffect(() => {
        setInterval(() => {
            setCurrentIndex((index) => {
                if(index === carouselImages.length - 1 ){
                    return 0;
                }
                return index + 1;
            })
        }, 5000)
    }, []);

    const currentImage = carouselImages[currentIndex];



    return (
        <div className="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll" data-image-src="/hero.jpg">
            
      </div>
    )
}