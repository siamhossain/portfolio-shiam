import React, {useEffect} from 'react';
import '../../Static/StyleSheets/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../Static/StyleSheets/header.css';
import '../../Static/StyleSheets/sidebar.css';



const Sidebar = () => {
    return (
        <div>
            <div className="sidebar-container">
                <div className="sidebar">
                    <div className="sidebar-header">

                        <a href="/">
                            <span>M</span>
                        </a>

                        <div className="close" data-toggle="sidebar-menu">
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About Me</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Portfolio</a></li>
                            <li><a href="">Testimonial</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                    <div className="hire-btn">
                        <button>Hire Me</button>
                    </div>
                </div>

                <div className="sidebar-overlay" data-toggle="sidebar-menu"></div>
            </div>
        </div>
    );
};

export default Sidebar;
