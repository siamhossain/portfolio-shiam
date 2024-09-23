
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { staticData } from "../../data/staticData";
import scrollDown from "../../Static/icons/ic_scroll_down.png";
import resume from "../../Static/pdf/resume_shiam.pdf";
import '../../Static/StyleSheets/download-btn.css';
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/hero-section.css';



const HeroSection = () => {
    const {short_introduction} = staticData;
    return (
        <div>
            <div className="hero-section">
                <div className="container responsive-container">
                    <div className="row flex-row-reverse">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="bg-container">
                                <div className="hero-section-image-container">

                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                            <div className="content-container">
                                <div className="content">
                                    <h6 className="person-name">{short_introduction.name}</h6>
                                    <h1 className="title-text">{short_introduction.title}</h1>
                                    <div className="designation-list-wrap">
                                        <ul className="designation-list justify-content-center justify-content-md-start">
                                            <li className='designation-list-item'>Web Developer</li>
                                            <li className='designation-list-item'>Programmer</li>
                                            <li className='designation-list-item'>Software Engineer</li>
                                        </ul>
                                    </div>
                                    <p className="subtitle-text">{short_introduction.sub_title}</p>
                                    <div className="download-btn">
                                        <a href={resume} download='resume' className='cv-download-btn' >
                                            <i className="fa fa-download" aria-hidden="true"></i>
                                            Get Resume
                                        </a>
                                    </div>
                                    <div className="scroll-down-wrapper">
                                        <a href="#about">
                                            <div className="scroll-icon">
                                                <img src={scrollDown} alt=""/>
                                            </div>
                                            <div className="scroll-text">
                                                <h6>Scroll Down</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1 d-flex justify-content-center align-items-center">
                            <div className="social-container">
                                <div className="social-link">
                                    <ul>
                                        <li>
                                            <a href="https://github.com/siamhossain" target="blank">
                                                <i className="fa fa-github" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/shiam-hossain" target="blank">
                                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/siam.cse" target="blank">
                                                <i className="fa fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                                <div className="button">
                                    <button>
                                        Follow Me <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
