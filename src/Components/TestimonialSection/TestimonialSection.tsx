import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/testimonials.css';
import {staticData} from "../../data/staticData";



const TestimonialSection = () => {
    const {testimonial_section} = staticData;
    return (
        <div>
            <div className="testimonial-section" id="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
                            <div className="wrapper d-flex justify-content-center align-content-center">
                                <div className="testimonial-img-bg">
                                    <div className="testimonial-img-card"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                            <div className="testimonial-text-content">
                                <h1>{testimonial_section.section_title}</h1>

                                <img src="../assets/icons/ic_qoutes.png" alt="" />
                                {testimonial_section?.data?.map ((item: any, index: number) => (
                                    <React.Fragment>
                                        <p>{item.description}</p>
                                        <h5>{item.name}</h5>
                                        <p className="occupation">{item.designation}</p>
                                    </React.Fragment>
                                ))}


                                <div className="slider-control-buttons d-flex align-items-center">
                                    <button><i className="fa fa-chevron-left"></i></button>
                                    <i className="fa-solid fa-chevron-right"></i>
                                    <button><i className="fa fa-chevron-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
