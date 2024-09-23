import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { useEffect } from 'react';
import { staticData } from "../../data/staticData";
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/portfolio-section.css';

const PortfolioSection = () => {
    const {portfolio_section} = staticData;

    useEffect(() => {
        (window as any).initializePortfolioTabs();
    });

    return (
        <div>
            <div className="portfolio-section section-padding" id="portfolio">
                <div className="container responsive-container">
                    <h1>{portfolio_section.section_title}</h1>
                    <div className="portfolio-tab-pane">
                        <div className="btn-container">
                            <button className="tab-btn" data-target-tab="all">All</button>
                            {portfolio_section.data.categories.map((category: any, index: number) => (
                                <button key={index} className={`tab-btn ${category?.initial ? "active" : ""}`}
                                        data-target-tab={category.key}>{category.title}</button>
                            ))}
                        </div>
                    </div>

                    {portfolio_section.data.categories.map((category: any, index: number) => (
                        <div className={`tab ${category.initial ? "show" : ""}`} data-tab={category.key} key={index}>
                            <div className="row portfolio-cards-container">
                                {category.items.map((item: any, itemIndex: number) => (
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4" key={itemIndex}>
                                        <div className="portfolio-card">
                                            <h3 className='title'>
                                                <a href={item.portfolioLink} className='title-link' target="blank">{item.name}</a>
                                            </h3>
                                            <p className='description'>{item.description}</p>

                                            <div className="project-link-wrap">
                                                <ul className="link-list">
                                                    <li className='link'>
                                                        <a href={item.githubLink} target="blank">
                                                            <i className="fa fa-github" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className='link'>
                                                        <a href={item.portfolioLink} target="blank" title="Visit Site">
                                                            <i className="fa fa-external-link-square" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="project-technology-wrap">
                                                <ul className="technology-list">
                                                    <label htmlFor="">Tech: </label>
                                                    {item?.technologies?.map((technology: any, technologyIndex: number) =>( 
                                                        <li className='technology' key={technologyIndex}>
                                                            {technology.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/*  <div className="tab show" data-tab="design">
                        <div className="row portfolio-cards-container">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="portfolio-card large">
                                    <img src={portfolio01} alt=""/>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="portfolio-card small">
                                    <img src={portfolio02} alt=""/>
                                </div>
                                <div className="portfolio-card medium">
                                    <img src={portfolio03} alt=""/>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="portfolio-card medium">
                                    <img src={portfolio04} alt=""/>
                                </div>
                                <div className="portfolio-card small">
                                    <img src={portfolio05} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab" data-tab="development">
                        <div className="row portfolio-cards-container">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="portfolio-card medium">
                                    <img src={portfolio04} alt=""/>
                                </div>
                                <div className="portfolio-card small">
                                    <img src={portfolio05} alt=""/>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="portfolio-card large">
                                    <img src={portfolio01} alt=""/>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="portfolio-card small">
                                    <img src={portfolio02} alt=""/>
                                </div>
                                <div className="portfolio-card medium">
                                    <img src={portfolio03} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab" data-tab="photography">
                        <div className="row portfolio-cards-container">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="portfolio-card small">
                                    <img src={portfolio02} alt=""/>
                                </div>
                                <div className="portfolio-card medium">
                                    <img src={portfolio03} alt=""/>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="portfolio-card large">
                                    <img src={portfolio01} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;
