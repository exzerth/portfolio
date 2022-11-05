import React from "react";
import testimonialImg from "../images/testimonial.png";

const Testimonial = () => {
    return (
        <div className="testimonial">
            <div className="testimonial-container">
                <h4 className="testimonial-title">TESTIMONIALS</h4>
                <h1 className="testimonial-subtitle">HAPPY CLIENTS</h1>
                <h5 className="testimonial-extratitle">see what clients are saying</h5>
                <div className="carousel-container">
                    <section class="carousel" aria-label="Gallery">
                        <ol class="carousel__viewport">
                            <li id="carousel__slide1" tabindex="0" class="carousel__slide">
                                <div className="testimonies">
                                    <img src={testimonialImg} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis justo, consequat a arcu et, lobortis tempor ex. Sed sed scelerisque orci. Cras turpis justo, consequat a arcu et, lobortis tempor ex.</p>
                                    <h4>Jane Doe</h4>
                                    <h6>Client</h6>
                                </div>
                                <div class="carousel__snapper">
                                    <a href="#carousel__slide4" class="carousel__prev">Go to last slide</a>
                                    <a href="#carousel__slide2" class="carousel__next">Go to next slide</a>
                                </div>
                            </li>
                            <li id="carousel__slide2" tabindex="0" class="carousel__slide">
                                <div className="testimonies">
                                    <img src={testimonialImg} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis justo, consequat a arcu et, lobortis tempor ex. Sed sed scelerisque orci. Cras turpis justo, consequat a arcu et, lobortis tempor ex.</p>
                                    <h4>Jane Doe</h4>
                                    <h6>Client</h6>
                                </div>
                                <div class="carousel__snapper"></div>
                                <a href="#carousel__slide1" class="carousel__prev">Go to previous slide</a>
                                <a href="#carousel__slide3" class="carousel__next">Go to next slide</a>
                            </li>
                            <li id="carousel__slide3" tabindex="0" class="carousel__slide">
                                <div className="testimonies">
                                    <img src={testimonialImg} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis justo, consequat a arcu et, lobortis tempor ex. Sed sed scelerisque orci. Cras turpis justo, consequat a arcu et, lobortis tempor ex.</p>
                                    <h4>Jane Doe</h4>
                                    <h6>Client</h6>
                                </div>
                                <div class="carousel__snapper"></div>
                                <a href="#carousel__slide2" class="carousel__prev">Go to previous slide</a>
                                <a href="#carousel__slide1" class="carousel__next">Go to first slide</a>
                            </li>
                        </ol>
                        <aside class="carousel__navigation">
                            <ol class="carousel__navigation-list">
                                <li class="carousel__navigation-item">
                                    <a href="#carousel__slide1"
                                    class="carousel__navigation-button">Go to slide 1</a>
                                </li>
                                <li class="carousel__navigation-item">
                                    <a href="#carousel__slide2"
                                    class="carousel__navigation-button">Go to slide 2</a>
                                </li>
                                <li class="carousel__navigation-item">
                                    <a href="#carousel__slide3"
                                    class="carousel__navigation-button">Go to slide 3</a>
                                </li>
                            </ol>
                        </aside>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;