import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/services.css';
import explore from '../../Static/icons/ic_explore.png';
import graphic from '../../Static/icons/ic_graphic.png';
import AppDevelopment from '../../Static/icons/App-Development.png';
import WebDevelopment from '../../Static/icons/Web-Development.png';
import {staticData} from "../../data/staticData";


const ServicesSection = () => {
    const {service_section} = staticData;
    return (
        <React.Fragment>
            {service_section?.data && service_section?.data?.length > 0 && (
                <div className="service-section" id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="my-services">
                                    <h1>{service_section.section_title}</h1>
                                    <p>{service_section.sub_title}</p>
                                    <div className="explore-btn">
                                        <button><img src={explore} alt=""/> Explore More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                                <div className="row">
                                    {service_section?.data?.map((item: any, index: number) => (
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6" key={index}>
                                            <div className="service-card graphic-design">
                                                <div className="service-card-icon">
                                                    <img src={item.icon} alt=""/>
                                                </div>
                                                <h2>{item.title}</h2>
                                                <p>{item.description}
                                                </p>
                                                <div className="card-details-button">
                                                    <a href={item.button?.href}>
                                                        <button>{item.button.title}</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default ServicesSection;
