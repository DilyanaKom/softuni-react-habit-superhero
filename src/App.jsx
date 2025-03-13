import './css/bootstrap.min.css';
import './css/templatemo-style.css';

import { NavigationProvider } from './components/navigation/NavigationContext';
import Navigation from './components/navigation/Navigation';
import { BrowserRouter } from 'react-router';


function App() {


  return (
    <>
    <BrowserRouter>
    <NavigationProvider>
    <Navigation />

    <div className="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll" data-image-src="/hero.jpg">
        <form className="d-flex tm-search-form">
            <input className="form-control tm-search-input" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success tm-search-btn" type="submit">
                <i className="fas fa-search"></i>
            </button>
        </form>
    </div>

    <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row mb-4">
            <h2 className="col-6 tm-text-primary">
                Latest Photos
            </h2>
            <div className="col-6 d-flex justify-content-end align-items-center">
                <form action="" className="tm-text-primary">
                    Page <input type="text" value="1" size="1" className="tm-input-paging tm-text-primary"/> of 200
                </form>
            </div>
        </div>
        <div className="row tm-mb-90 tm-gallery">
        	<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Clocks</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">18 Oct 2020</span>
                    <span>9,906 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="/img-04.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Plants</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">14 Oct 2020</span>
                    <span>16,100 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="/img-05.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Morning</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">12 Oct 2020</span>
                    <span>12,460 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="/img-06.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Pinky</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">10 Oct 2020</span>
                    <span>11,402 views</span>
                </div>
            </div>
            
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="/img-01.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Hangers</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">24 Sep 2020</span>
                    <span>16,008 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="/img-02.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Perfumes</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">20 Sep 2020</span>
                    <span>12,860 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="/img-07.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Bus</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">16 Sep 2020</span>
                    <span>10,900 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="/img-08.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>New York</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">12 Sep 2020</span>
                    <span>11,300 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="/img-09.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Abstract</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">10 Sep 2020</span>
                    <span>42,700 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="/img-10.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Flowers</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">8 Sep 2020</span>
                    <span>11,402 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="/img-11.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Rosy</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">4 Sep 2020</span>
                    <span>32,906 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="/img-12.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Rocki</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">28 Aug 2020</span>
                    <span>50,700 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="/img-13.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Purple</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">22 Aug 2020</span>
                    <span>107,510 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="/img-14.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Sea</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">14 Aug 2020</span>
                    <span>118,006 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="/img-15.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Turtle</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">9 Aug 2020</span>
                    <span>121,300 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="/img-16.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Peace</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">3 Aug 2020</span>
                    <span>21,204 views</span>
                </div>
            </div>         
        </div>
        <div className="row tm-mb-90">
            <div className="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                <a href="javascript:void(0);" className="btn btn-primary tm-btn-prev mb-2 disabled">Previous</a>
                <div className="tm-paging d-flex">
                    <a href="javascript:void(0);" className="active tm-paging-link">1</a>
                    <a href="javascript:void(0);" className="tm-paging-link">2</a>
                    <a href="javascript:void(0);" className="tm-paging-link">3</a>
                    <a href="javascript:void(0);" className="tm-paging-link">4</a>
                </div>
                <a href="javascript:void(0);" className="btn btn-primary tm-btn-next">Next Page</a>
            </div>            
        </div>
    </div> 


    {/* <footer className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
        <div className="container-fluid tm-container-small">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-12 px-5 mb-5">
                    <h3 className="tm-text-primary mb-4 tm-footer-title">About Catalog-Z</h3>
                    <p>Catalog-Z is free <a rel="sponsored" href="https://v5.getbootstrap.com/">Bootstrap 5</a> Alpha 2 HTML Template for video and photo websites. You can freely use this TemplateMo layout for a front-end integration with any kind of CMS website.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                    <h3 className="tm-text-primary mb-4 tm-footer-title">Our Links</h3>
                    <ul className="tm-footer-links pl-0">
                        <li><a href="#">Advertise</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Our Company</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                    <ul className="tm-social-links d-flex justify-content-end pl-0 mb-5">
                        <li className="mb-2"><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
                        <li className="mb-2"><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                        <li className="mb-2"><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
                        <li className="mb-2"><a href="https://pinterest.com"><i className="fab fa-pinterest"></i></a></li>
                    </ul>
                    <a href="#" className="tm-text-gray text-right d-block mb-2">Terms of Use</a>
                    <a href="#" className="tm-text-gray text-right d-block">Privacy Policy</a>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-md-7 col-12 px-5 mb-3">
                    Copyright 2020 Catalog-Z Company. All rights reserved.
                </div>
                <div className="col-lg-4 col-md-5 col-12 px-5 text-right">
                    Designed by <a href="https://templatemo.com" className="tm-text-gray" rel="sponsored" target="_parent">TemplateMo</a>
                </div>
            </div>
        </div>
    </footer> */}
    </NavigationProvider>
    </BrowserRouter>
    </>
  )
}

export default App
