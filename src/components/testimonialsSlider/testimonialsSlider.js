import React from "react";
import TestimonialTanya from "../testimonials/testimonialTanya/testimonialTanya";
import TestimonialJohn from "../testimonials/testimonialJohn/testimonialJohn";

import './testimonialsSlider.css'

const TestimonialsSlider = () => {
    return(
        <main className="container">
            <TestimonialTanya />

            <TestimonialJohn />
        </main>
    )
}

export default TestimonialsSlider