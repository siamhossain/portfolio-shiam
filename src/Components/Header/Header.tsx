import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { useEffect } from 'react';
import Headroom from 'react-headroom';
import { staticData } from "../../data/staticData";
import moon from "../../Static/icons/ic_moon.png";
import sun from "../../Static/icons/ic_sun.png";
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/header.css';
import '../../Static/StyleSheets/headroom.css';
import Sidebar from "../Sidebar/Sidebar";



const Header = () => {

    const {header_section} = staticData;

    useEffect(() => {
        // apply dark theme is set
        if ((window as any).isDarkTheme()) {
            (window as any).toggleTheme("dark");
        }

        // populate the theme switcher icon
        (window as any).populateThemeSwitcherIcon();

        const themeButton = document.querySelector('[data-toggle="theme"]');

        if (themeButton) {
            themeButton.addEventListener('click', function () {
                (window as any).toggleTheme();
            });
        }

        document.querySelectorAll('[data-toggle="sidebar-menu"]').forEach(function (element) {
            element.addEventListener('click', function () {
                (window as any).toggleSidebarMenu();
            });
        });

    })

    return (
        <div>
            <Headroom 
                disableInlineStyles={true}
                style={{
                    WebkitTransition: 'all .5s ease-in-out',
                    MozTransition: 'all .5s ease-in-out',
                    OTransition: 'all .5s ease-in-out',
                    transition: 'all .5s ease-in-out',
                }}
            >
                <div className={`header-section`}>
                    <div className="container">
                        <nav>
                            <table>
                                <tr>
                                    <td>
                                        <a href="/">
                                            <div className="logo"><p>{header_section.logo_letter}</p></div>
                                        </a>
                                    </td>
                                    <td>
                                        <ul>
                                            <li><a href="/" className="active">Home</a></li>
                                            <li><a href="#about">About Me</a></li>
                                            <li><a href="#services">Services</a></li>
                                            <li><a href="#portfolio">Portfolio</a></li>
                                            <li><a href="#testimonial">Testimonial</a></li>
                                            <li><a href="#blog">Blog</a></li>
                                        </ul>
                                    </td>
                                    <td>
                                        <div className="wrapper">
                                            <div>
                                                {/* <button id="#contact">Hire Me</button> */}
                                                <a href="#contact" className='button'>Hire Me</a>
                                            </div>
                                            <div className="theme-toggle" data-toggle="theme">
                                                <img src={moon} alt="" data-theme-icon="moon"/>
                                                <img src={sun} alt="" data-theme-icon="sun"/>
                                            </div>
                                            <div className="menu-icon" data-toggle="sidebar-menu">
                                                <i className="fa fa-bars"></i>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </nav>
                    </div>
                </div>
            </Headroom>
            <Sidebar/>
        </div>
    );
};

export default Header;
