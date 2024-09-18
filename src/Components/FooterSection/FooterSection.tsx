import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { staticData } from '../../data/staticData';
import '../../Static/StyleSheets/footer.css';
import '../../Static/StyleSheets/global.css';

const FooterSection = () => {
    const {footer_section, social_links} = staticData;

    return (
        <div>
            <div className="footer-section">
                <div className="container">
                    {footer_section?.topCard && (
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                                <div className="footer-banner">
                                    <h2>{footer_section.topCard?.title}<br/><span>{footer_section.topCard?.subtitle}</span></h2>
                                    <div className="btn-wrapper">
                                        {footer_section.topCard.hireButton && (
                                            <a href={footer_section.topCard.hireButton?.href} className="btn-banner"> {footer_section.topCard.hireButton?.title} </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="footer-nav">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-3 col-xl-3 col-xxl-3">
                                <div className="footer-logo">
                                    <a href="/">
                                        <div className="logo">
                                            <p>
                                                {footer_section?.logo_letter}
                                            </p>
                                        </div>
                                    </a>

                                    {footer_section?.description && (
                                        <p>{footer_section?.description}</p>
                                    )}
                                </div>
                                <div className="social-list">
                                    <ul>
                                        {footer_section?.showSocialIcons && (
                                            <React.Fragment>
                                            <li><a href={social_links?.linkedin?.href}><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href={social_links?.github?.href}><i className="fa fa-github"></i></a></li>
                                            <li><a href={social_links?.facebook?.href} target="blank"><i className="fa fa-facebook-f"></i></a></li>
                                            <li><a href={social_links?.twitter?.href}><i className="fa fa-twitter"></i></a></li>
                                            </React.Fragment>
                                        )}

                                    </ul>
                                </div>
                            </div>
                            {footer_section?.service_links && footer_section?.service_links?.length > 0 && (
                                <div className="col-xs-12 col-sm-6 col-md-3 col-xl-3 col-xxl-3">
                                    <div className="footer-menu">
                                        <h3>Menus</h3>
                                        <ul>
                                            {footer_section?.service_links?.map((link, index) => (
                                                <li key={index}>
                                                    <a href={link.href} >{link.title}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {footer_section?.about_links && footer_section?.about_links?.length > 0 && (
                                <div className="col-xs-12 col-sm-6 col-md-3 col-xl-3 col-xxl-3">
                                    <div className="footer-menu">
                                        <h3>Services</h3>
                                        <ul>
                                            {footer_section?.about_links?.map((link, index) => (
                                                <li key={index}>
                                                    <a href={link.href} target="blank">{link.title}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                            
                            {footer_section?.contact_info && (
                                <div className="col-xs-12 col-sm-6 col-md-3 col-xl-3 col-xxl-3">
                                    <div className="footer-menu">
                                        <h3>Contact</h3>
                                        <ul>
                                            <li><a href={`callto:${footer_section?.contact_info?.phone}`}>{footer_section?.contact_info?.phone}</a></li>
                                            <li><a href={`mailto:${footer_section?.contact_info?.email}`}>{footer_section?.contact_info?.email}</a></li>
                                            <li>{footer_section?.contact_info?.address}</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <hr className="hr_r"/>
                    <div className="row">
                        <div className="footer-copyright">
                            <p>©<span id="year"></span> All rights reserved by siam-hossain</p>
                        </div>
                    </div>
                </div>
                <a href="#top" className="top" title="Back to top">&#8593;</a>
            </div>
        </div>
    );
};

export default FooterSection;
