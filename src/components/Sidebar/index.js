import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoS} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="noobietubie" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink
                    onClick={() => setShowNav(false)}
                    exact="true" 
                    activeclassname="active" 
                    to="/"
                >
                    <FontAwesomeIcon icon={faHome} color="#FFF" />
                </NavLink>
                <NavLink
                    onClick={() => setShowNav(false)}
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                >
                    <FontAwesomeIcon icon={faUser} color="#FFF" />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    activeclassname="active" 
                    className="portfolio-link"
                    to="/portfolio"
                >
                    <FontAwesomeIcon icon={faSuitcase} color="#FFF" />
                </NavLink>
                <NavLink
                    onClick={() => setShowNav(false)}
                    activeclassname="active" 
                    className="contact-link" 
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#FFF" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#292983"
                    size="3x"
                    className='close-icon'
                />
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/noobietubie/">
                        <FontAwesomeIcon icon={faLinkedin} color='#FFF' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://github.com/treasure3210/">
                        <FontAwesomeIcon icon={faGithub} color='#FFF' />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#292983"
                size="3x"
                className='hamburger-icon'
            />
        </div>
    )
}

export default Sidebar