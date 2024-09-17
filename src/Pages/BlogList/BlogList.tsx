import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/header.css';
import '../../Static/StyleSheets/blog-list.css';
import Header from "../../Components/Header/Header";
import Camera from "../../Static/images/Blog-List/camera.png";
import skateboard from "../../Static/images/Blog-List/skateboard.png";

const BlogList = () => {
    return (
        <div>
            <Header/>

            <div className="blog-list" id="blog">
                <div className="container responsive-container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
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
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
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
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
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
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
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
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div className="categories">
                                <h2>Categories</h2>
                                <ul className={"categories-item-list"}>
                                    <li><a href="#" className={"categories-item"}>Trending <span> 13 </span> </a></li>
                                    <li><a href="#" className={"categories-item"}>Branding <span> 25 </span></a></li>
                                    <li><a href="#" className={"categories-item"}>Guide <span> 60 </span></a></li>
                                    <li><a href="#" className={"categories-item"}>UI/UX <span> 69 </span></a></li>
                                    <li><a href="#" className={"categories-item"}>Trending <span> 43 </span></a></li>
                                    <li><a href="#" className={"categories-item"}>Branding <span> 13 </span></a></li>
                                    <li><a href="#" className={"categories-item"}>Guide <span> 19 </span></a></li>
                                </ul>
                            </div>

                            <div className="recent-posts">
                                <h2>Recent Post</h2>
                                <div className="post">
                                    <img src={skateboard} alt="" />
                                        <h6>A series of iOS 7 inspire vector</h6>
                                </div>
                                <div className="post">
                                    <img src={Camera} alt="" />
                                        <h6>A series of iOS 7 inspire vector</h6>
                                </div>
                                <div className="post">
                                    <img src={skateboard} alt="" />
                                        <h6>A series of iOS 7 inspire vector</h6>
                                </div>
                                <div className="post">
                                    <img src={Camera} alt="" />
                                        <h6>A series of iOS 7 inspire vector</h6>
                                </div>
                                <div className="post">
                                    <img src={skateboard} alt="" />
                                        <h6>A series of iOS 7 inspire vector</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogList;
