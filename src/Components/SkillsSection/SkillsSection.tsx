import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { useEffect } from 'react';
import { staticData } from "../../data/staticData";
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/skills.css';

const SkillsSection = () => {

    const {skills} =staticData;

    useEffect(() => {
        (window as any).handleSkillTabButtonClick();
        (window as any).showFirstSkillTab();
    });

    return (
        <div>
            <div className="skill-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="skill-tab-pane">
                            <h2>{skills.section_title}</h2>
                            <div className="btnContainer">
                                {skills?.data?.categories?.map((category:any, index: number) => (
                                    <button key={index} className={`tab-btn ripple ${category?.initial ? "active" : ""}`}
                                            data-target-tab={category?.key}>{category.title}</button>
                                ))}
                            </div>
                        </div>

                        {skills?.data.categories.map((category: any, index: number) => (
                            <div className={`skill-tab-content ${category.initial ? "show" : ""}`} data-tab-name={category.key} key={index}>
                                <div className="row">
                                    {category.items.map((item: any, itemIndex: number) => (
                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                            <div className={`item ${item.color}`}>
                                                <div className="icon">
                                                    <img src={item.icon} alt="" />
                                                </div>
                                                <div className="content">
                                                    <div className="sub-content">
                                                        <h3>{item.title}</h3>
                                                        {/* <span>{item.progress}</span> */}
                                                    </div>
                                                    {/* <div className="progress-bar" style={{width: `${item.progress}` }}></div> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
