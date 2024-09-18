import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { staticData } from "../../data/staticData";
import '../../Static/StyleSheets/blog-section.css';
import '../../Static/StyleSheets/contact-form.css';
import '../../Static/StyleSheets/global.css';



const ContactForm = () => {
    const {contact_section} = staticData;
    return (
        <div>
            <div className="contact-section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="contact-wrap">
                            <h2>{contact_section.section_title}</h2>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="info-details">
                                    <div className="card-phone-info">
                                        <i className="fa fa-phone-square" aria-hidden="true"></i>
                                        <h3>phone</h3>
                                    </div>
                                    <div className="card-info-details-phone-background">
                                        {contact_section?.phone?.map((item: any, index: number) => (
                                            <h4>{item}</h4>
                                            ))}
                                    </div>
                                </div>
                                <div className="info-details">
                                    <div className="card-phone-info">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <h3>Email</h3>
                                    </div>
                                    <div className="card-info-details-email-background">
                                        {contact_section?.email?.map((item: any, index: number) => (
                                            <h4>{item}</h4>
                                            ))}
                                    </div>
                                </div>

                                <div className="info-details">
                                    <div className="card-phone-info">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <h3>Location</h3>
                                    </div>
                                    <div className="card-info-details-location-background">
                                        {contact_section?.location?.map((item: any, index: number) => (
                                            <h4>{item}</h4>
                                        ))}
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

export default ContactForm;
