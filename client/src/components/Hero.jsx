import { useState, useEffect } from "react";

import styles from './Hero.module.css';
import Search from "./Search";

export default function Hero() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselImages = [
        {
            src: 'heroImages/hero1.jpg',
            alt: 'Yoga'
        },
        {
            src: 'heroImages/hero2.jpg',
            alt: 'Mindfulness'
        },
        {
            src: 'heroImages/hero3.jpg',
            alt: 'Reading'
        },
        {
            src: 'heroImages/hero4.jpg',
            alt: 'Friends gathering'
        },
        {
            src: 'heroImages/hero5.jpg',
            alt: 'Gardening'
        },
        {
            src: 'heroImages/hero6.jpg',
            alt: 'Drinking water'
        },
        {
            src: 'heroImages/hero7.jpg',
            alt: 'Jogging'
        },
        {
            src: 'heroImages/hero8.jpg',
            alt: 'Healthy meal'
        },
        {
            src: 'heroImages/hero9.jpg',
            alt: 'Fitness'
        },
        {
            src: 'heroImages/hero10.jpg',
            alt: 'Trekking'
        },
        {
            src: 'heroImages/hero11.jpg',
            alt: 'Skincare'
        },
        {
            src: 'heroImages/hero12.jpg',
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