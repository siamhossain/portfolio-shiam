import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/blog-section.css';
import {staticData} from "../../data/staticData";



const BlogSection = () => {

    const {blog_section} = staticData;

    return (
        <React.Fragment>
            {blog_section?.data && blog_section?.data?.length > 0 && (
                <div className="blog-section" id="blog">
                    <div className="container">
                        <div className="row">
                            <h2>{blog_section.section_title}</h2>
                            <div className="subtitle-text">
                                <div className="text">
                                    <p>{blog_section.sub_title}</p>
                                </div>
                                <div className="text-link">
                                    <a href="/blog_list"> See All</a>
                                </div>
                            </div>
                            {blog_section?.data?.map((item: any, index: number) => (
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4" key={index}>
                                    <div className="blog-card-container">
                                        <div className="laptop-image">
                                        </div>
                                        <div className="card-date">
                                            <p>{item.date}</p>
                                            <h3>{item.title}</h3>
                                        </div>
                                        <div className="right-arrow-icon">
                                            <i className="fa fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default BlogSection;
