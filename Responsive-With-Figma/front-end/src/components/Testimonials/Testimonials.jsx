import React from 'react'
import "./Testimonials.css"
import testimonials from "./testimonals"


const Testimonials = () => {
    return (
        <section id="testimonials" className="dark-gray">
            <div className="wrapper">
                <h2>What our students say?</h2>

                <div className="content-container">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial" key={index}>
                            <a href="#">
                                <img src={testimonial.image} alt="" />
                            </a>
                            <div className="reviewer-details">
                                <div className="name">{testimonial.name}</div>
                                <div className="company-name">{testimonial.company}</div>
                                <div className="review">{testimonial.message}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials