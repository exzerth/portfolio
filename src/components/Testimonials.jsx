import React from "react";
import "../css/testimonials.css";
import testimonialImg from "../images/testimonial.png";

const Testimonial = () => {
    return (
        <div className="testimonial">
            <div className="testimonial-container">
                <h4 className="testimonial-title">TESTIMONIALS</h4>
                <h1 className="testimonial-subtitle">HAPPY CLIENTS</h1>
                <h5 className="testimonial-extratitle">see what clients are saying</h5>
                <div className="carousel-container">
                    <section className="carousel" aria-label="Gallery">
                        <ol className="carousel__viewport">
                            <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
                                <div className="testimonies">
                                    <img src={testimonialImg} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis justo, consequat a arcu et, lobortis tempor ex. Sed sed scelerisque orci. Cras turpis justo, consequat a arcu et, lobortis tempor ex.</p>
                                    <h4>Jane Doe</h4>
                                    <h6>Client</h6>
                                </div>
                                <div className="carousel__snapper">
                                    <a href="#carousel__slide4" className="carousel__prev">Go to last slide</a>
                                    <a href="#carousel__slide2" className="carousel__next">Go to next slide</a>
                                </div>
                            </li>
                            <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
                                <div className="testimonies">
                                    <img src={testimonialImg} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis justo, consequat a arcu et, lobortis tempor ex. Sed sed scelerisque orci. Cras turpis justo, consequat a arcu et, lobortis tempor ex.</p>
                                    <h4>Jane Doe</h4>
                                    <h6>Client</h6>
                                </div>
                                <div className="carousel__snapper"></div>
                                <a href="#carousel__slide1" className="carousel__prev">Go to previous slide</a>
                                <a href="#carousel__slide3" className="carousel__next">Go to next slide</a>
                            </li>
                            <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
                                <div className="testimonies">
                                    <img src={testimonialImg} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis justo, consequat a arcu et, lobortis tempor ex. Sed sed scelerisque orci. Cras turpis justo, consequat a arcu et, lobortis tempor ex.</p>
                                    <h4>Jane Doe</h4>
                                    <h6>Client</h6>
                                </div>
                                <div className="carousel__snapper"></div>
                                <a href="#carousel__slide2" className="carousel__prev">Go to previous slide</a>
                                <a href="#carousel__slide1" className="carousel__next">Go to first slide</a>
                            </li>
                        </ol>
                        <aside className="carousel__navigation">
                            <ol className="carousel__navigation-list">
                                <li className="carousel__navigation-item">
                                    <a href="#carousel__slide1"
                                    className="carousel__navigation-button">Go to slide 1</a>
                                </li>
                                <li className="carousel__navigation-item">
                                    <a href="#carousel__slide2"
                                    className="carousel__navigation-button">Go to slide 2</a>
                                </li>
                                <li className="carousel__navigation-item">
                                    <a href="#carousel__slide3"
                                    className="carousel__navigation-button">Go to slide 3</a>
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