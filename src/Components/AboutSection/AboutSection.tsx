import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { staticData } from "../../data/staticData";
import resume from "../../Static/pdf/resume_shiam.pdf";
import '../../Static/StyleSheets/about-section.css';
import '../../Static/StyleSheets/global.css';

const AboutSection = () => {
    const {about_section} = staticData;
    return (
        <div>
            <div className="about-section" id="about">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 about-img-container">
                            <div className="about-img"></div>
                        </div> */}
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10">
                            <div className="about-text-content">
                                <h1>{about_section.section_title}</h1>
                                <p dangerouslySetInnerHTML={{ __html: about_section.description }}></p>
                                <p></p>
                            </div>

                            <div className="download-btn">
                                <a href={resume} download='resume' className='cv-download-btn' >
                                    <i className="fa fa-download" aria-hidden="true"></i>
                                    Get Resume
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
