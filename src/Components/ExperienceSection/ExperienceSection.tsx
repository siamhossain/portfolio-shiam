import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { staticData } from "../../data/staticData";
import { StaticData } from '../../data/staticData.d';
import '../../Static/StyleSheets/experience.css';
import '../../Static/StyleSheets/global.css';

interface ExperienceCardProps {
    data: StaticData['experience_section']['data'][0],
}




const ExperienceSection = () => {
    const {experience_section} = staticData;

    return (
        <React.Fragment>
            {experience_section?.data && experience_section?.data?.length > 0 && (
                <div className="experience-section">
                    <div className="container responsive-container">
                        <div className="section-heading">
                            <h1>{experience_section.section_title}</h1>
                        </div>
                        <div className="experience-card-area">
                            <div className="row pad">
                                {experience_section?.data?.map((item: any, index: number) => (
                                    <div
                                        className={`col-xs-12 col-sm-12 col-md-12 col-lg-12`} key={index}>
                                        <div className="experience-card">
                                            <div className="experience-card-info">
                                                <div className="company-logo">
                                                    <img src={item.logo} alt="logo" />
                                                </div>
                                                <p className='ex-year'>{item.year}</p>
                                                <h4 className='company-name'>{item.title} </h4>
                                                <p className="designation">{item.designation}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default ExperienceSection;
