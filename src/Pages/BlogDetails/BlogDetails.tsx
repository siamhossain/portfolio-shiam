import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/header.css';
import '../../Static/StyleSheets/blog-list.css';
import '../../Static/StyleSheets/blog-details.css';
import Header from "../../Components/Header/Header";
import Camera from "../../Static/images/Blog-List/camera.png";
import skateboard from "../../Static/images/Blog-List/skateboard.png";

const BlogDetails = () => {
    return (
        <div>
            <Header/>
            <div className="blog-details-section">
                <div className="container inner-container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                            <div className="big-image">
                            </div>
                        </div>
                        <p>August 30, 2021</p>
                        <h1>Best website traffics Booster with great tools.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis. Nulla non ligula vel nisi blandit egestas vel
                            eget leo. Praesent fringilla dapibus dignissim. Pellentesque quis quam enim. Vestibulum
                            ultrices, leo id suscipit efficitur</p>

                        <p>odio lorem rhoncus dolor, a facilisis neque mi ut ex. Quisque tempor urna a nisi pretium, a
                            pretium massa tristique. Nullam in aliquam diam. cenas at nibh gravida, ornare eros non,
                            commodo ligula. Sed efficitur sollicitudin auctor. Quisque nec imperdiet purus, in ornare
                            odio. Quisque odio felis, vestibulum et.</p>


                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis. Nulla non ligula vel nisi blandit egestas vel
                            eget leo. Praesent fringilla dapibus dignissim. Pellentesque quis quam enim. Vestibulum
                            ultrices, leo id suscipit efficitur,</h5>

                        <p>odio lorem rhoncus dolor, a facilisis neque mi ut ex. Quisque tempor urna a nisi pretium, a
                            pretium massa tristique. Nullam in aliquam diam. cenas at nibh gravida, ornare eros non,
                            commodo ligula. Sed efficitur sollicitudin auctor. Quisque nec imperdiet purus, in ornare
                            odio. Quisque odio felis, vestibulum et.</p>


                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-5 col-xl-5">
                            <div className="blog-small-img1">

                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-5 col-xl-5">
                            <div className="blog-small-img2">

                            </div>
                        </div>

                        <p>odio lorem rhoncus dolor, a facilisis neque mi ut ex. Quisque tempor urna a nisi pretium, a
                            pretium massa tristique. Nullam in aliquam diam. cenas at nibh gravida, ornare eros non,
                            commodo ligula. Sed efficitur sollicitudin auctor. Quisque nec imperdiet purus, in ornare
                            odio. Quisque odio felis, vestibulum et.</p>

                        <div className="social-container">
                            <h5>Share:</h5>
                            <div className="social-link">
                                <ul>
                                    <li><a href=""><i className="fa fa-facebook-f"></i></a></li>
                                    <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                    <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog-section" id="blog">
                    <div className="container inner-container">
                        <div className="row">
                            <h2>Recent Blog</h2>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                <div className="blog-card-container">
                                    <div className="laptop-image">
                                    </div>
                                    <div className="card-date">
                                        <p>August 30, 2022</p>
                                        <h3>Market Place UI/UX</h3>
                                    </div>
                                    <div className="right-arrow-icon">
                                        <i className="fa fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                <div className="blog-card-container">
                                    <div className="watch-image">
                                    </div>
                                    <div className="card-date">
                                        <p>September 30, 2021</p>
                                        <h3>Branding Supharman</h3>
                                    </div>
                                    <div className="right-arrow-icon">
                                        <i className="fa fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                <div className="blog-card-container">
                                    <div className="joystick-image">
                                    </div>
                                    <div className="card-date">
                                        <p>October 30, 2021</p>
                                        <h3>The Day for Happines</h3>
                                    </div>
                                    <div className="right-arrow-icon">
                                        <i className="fa fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogDetails;
