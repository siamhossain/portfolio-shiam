import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/portfolio-section.css';
import portfolio01 from '../../Static/images/portfolio/portfolio01.png';
import portfolio02 from '../../Static/images/portfolio/portfolio02.png';
import portfolio03 from '../../Static/images/portfolio/portfolio03.png';
import portfolio04 from '../../Static/images/portfolio/portfolio04.png';
import portfolio05 from '../../Static/images/portfolio/portfolio05.png';
import {staticData} from "../../data/staticData";

const PortfolioSection = () => {
    const {portfolio_section} = staticData;

    useEffect(() => {
        (window as any).initializePortfolioTabs();
    });

    return (
        <div>
            <div className="portfolio-section" id="portfolio">
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
                                        {item?.grouped && item?.groupItmes ? (
                                            <React.Fragment>
                                                {item?.groupItmes?.map((groupItem: any, groupItemIndex: number) => (
                                                    <div className={`portfolio-card ${groupItem.size}`} key={groupItemIndex}>
                                                        <img src={groupItem.image} alt=""/>
                                                    </div>
                                                ))}
                                            </React.Fragment>
                                        ) : (
                                            <div className={`portfolio-card ${item.size}`}>
                                                <img src={item.image} alt=""/>
                                            </div>
                                        )}
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
