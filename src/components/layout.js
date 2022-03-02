import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {HeaderWrapper, FooterWrapper} from './styles';
import Logo from "../assets/main_logo.svg";
import {ReactComponent as FooterLogo} from "../assets/main_logo.svg";
import {ReactComponent as FacebookIcon} from "../assets/facebook.svg";
import {ReactComponent as InstagramIcon} from "../assets/instagram.svg";
import {ReactComponent as TwitterIcon} from "../assets/twitter.svg";
import {ReactComponent as YoutubeIcon} from "../assets/youtube.svg";
import {ReactComponent as WeverseIcon} from "../assets/weverse.svg";
import {ReactComponent as VliveIcon} from "../assets/v-live.svg";

const Layout = ({children}) => {
  //State for toggling menu for mobile
  const [navMobileVisible, setNavMobileVisible] = useState(false)

  const toggleMenu = () => {
    setNavMobileVisible(!navMobileVisible)
  }

    return (
      <div>
        <HeaderWrapper>
          <div className="logo">
            <NavLink to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>
          <nav>
            <ul className={`nav-items ${navMobileVisible ? "nav-open" : ""}`}>
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/members" className="nav-link" activeClassName="active">
                  Members
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/songs" className="nav-link" activeClassName="active">
                  Songs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dramas" className="nav-link" activeClassName="active">
                  Dramas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/gallery" className="nav-link" activeClassName="active">
                  Gallery
                </NavLink>
              </li>
            </ul>
            <div
              className={`hamburger tab-btn ${navMobileVisible ? "toggle" : ""}`}
              onClick={toggleMenu}
              onKeyDown={toggleMenu}
              tabIndex="0"
              role="button"
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </nav>
        </HeaderWrapper>
        {children}
        <FooterWrapper>
          <div className="footer-logo">
            <FooterLogo />
          </div>
          <div className="social-icons">
            <div className="icon">
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCx9hXYOCvUYwrprEqe4ZQHA">
                <YoutubeIcon />
              </a>
            </div>
            <div className="icon">
              <a target="_blank" rel="noreferrer" href="https://twitter.com/treasuremembers">
                <TwitterIcon />
              </a>
            </div>
            <div className="icon">
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/yg_treasure_official/">
                <InstagramIcon />
             </a>
            </div>
            <div className="icon">
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/OfficialTreasure/">
                <FacebookIcon />
              </a>
            </div>
            <div className="icon">
              <a target="_blank" rel="noreferrer" href="https://www.weverse.io/treasure/feed">
                <WeverseIcon />
              </a>
            </div>
            <div className="icon">
              <a target="_blank" rel="noreferrer" href="https://www.vlive.tv/channel/B978B7">
                <VliveIcon />
              </a>
            </div>
          </div>
          <div className="credit">
            Made with 🖤, by a <a target="_blank" rel="noreferrer" href="https://www.instagram.com/khairahscorner">Teume</a>
          </div>
        </FooterWrapper>
      </div>
    );
}

export default Layout;
