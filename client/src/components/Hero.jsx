import { useState, useEffect } from "react";

import styles from './Hero.module.css';
import Search from "./Search";

export default function Hero() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselImages = [
        {
            src: '/public/heroImages/hero1.jpg',
            alt: 'Yoga'
        },
        {
            src: '/public/heroImages/hero2.jpg',
            alt: 'Mindfulness'
        },
        {
            src: '/public/heroImages/hero3.jpg',
            alt: 'Reading'
        },
        {
            src: '/public/heroImages/hero4.jpg',
            alt: 'Friends gathering'
        },
        {
            src: '/public/heroImages/hero5.jpg',
            alt: 'Gardening'
        },
        {
            src: '/public/heroImages/hero6.jpg',
            alt: 'Drinking water'
        },
        {
            src: '/public/heroImages/hero7.jpg',
            alt: 'Jogging'
        },
        {
            src: '/public/heroImages/hero8.jpg',
            alt: 'Healthy meal'
        },
        {
            src: '/public/heroImages/hero9.jpg',
            alt: 'Fitness'
        },
        {
            src: '/public/heroImages/hero10.jpg',
            alt: 'Trekking'
        },
        {
            src: '/public/heroImages/hero11.jpg',
            alt: 'Skincare'
        },
        {
            src: '/public/heroImages/hero12.jpg',
            alt: 'Family time in the snow'
        },


    ];
    useEffect(() => {
        setInterval(() => {
            setCurrentIndex((index) => {
                if (index === carouselImages.length - 1) {
                    return 0;
                }
                return index + 1;
            })
        }, 7000)
    }, []);

    const currentImage = carouselImages[currentIndex];



    return (
        <div className={styles.heroCarousel}>
            <div className={styles.heroSlide}>
                <img
                    src={currentImage.src}
                    alt={currentImage.alt || 'Hero image'}
                    className={styles.heroImage}
                />
                <div className={styles.searchContainer}>
                    <Search />
                </div>
            </div>
        </div>
    )
}