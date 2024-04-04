import React from "react";
import profilePicture from '../../../images/image-john.jpg'

const TestimonialJohn = () => {
    return (
        <div className="testimonial selected">
            <div className="testimonial">
                <p className="comment">“ If you want to lay the best foundation possible I’d recommend taking this course.
                    The depth the instructors go into is incredible. I now feel so confident about
                    starting up as a professional developer. ”</p>
                <ul className="user-info">
                    <li className="username">John Tarkpor</li>
                    <li className="role">Junior Front-end Developer</li>
                </ul>
            </div>
            <div className="picture-and-buttons">
                <img src={profilePicture} alt="profile illustration" className="profile picture"></img>
                <div className="buttons">
                    <i className="fa-solid fa-chevron-left"></i>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}

export default TestimonialJohn