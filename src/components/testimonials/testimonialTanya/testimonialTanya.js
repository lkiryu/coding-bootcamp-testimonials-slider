import React from "react";
import Buttons from "../../buttons/buttons";
import profilePicture from '../../../images/image-tanya.jpg'

const TestimonialTanya = () => {
    return (
        <div className="testimonial selected">
            <div className="testimonial">
                <p className="comment">“ I’ve been interested in coding for a while but never taken the jump, until now.
                    I couldn’t recommend this course enough. I’m now in the job of my dreams and so
                    excited about the future. ”</p>
                <ul className="user-info">
                    <li className="username">Tanya Sinclair</li>
                    <li className="role">UX Engineer</li>
                </ul>
            </div>
            <div className="picture-and-buttons">
                <img src={profilePicture} alt="profile illustration" className="profile picture"></img>
                <Buttons />
            </div>
        </div>
    )
}

export default TestimonialTanya