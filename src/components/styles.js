import styled from 'styled-components';
import {screens} from '../sizes';
const red = '#be0028';

export const MainWrapper = styled.main`
    width: 80%;
    margin: 0 auto;
    min-height: 100vh;
`

export const HeaderWrapper = styled.header`
    position: sticky;
    width: 100%;
    top: 0;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    .nav-wrapper {
        position: relative;
    }
    .logo {
        display:flex;
        width: 65px;
        height: auto;
        img {
            max-width: 100%;
            @media ${screens.mobileL} {
                max-width:85%;
            }
        }
    }
    .nav-items {
            position: fixed;
            top: 0;
            bottom:0;
            right: 0;
            width: 10%;
            padding: 70px 0 50px;
            flex-direction: column;
            align-items: center;
            background-color: ${red};
            transform: translateX(110%);
            transition: all 0.5s ease;
            @media ${screens.mobileL} {
                width: 20%;
            }
            @media ${screens.mobileSm} {
                width: 40%;
            }
    }
    .nav-open {
        transform: translateX(0);
    }
    .nav-item {
        margin-left: 0;
        padding: 20px;
        a {
            width: 100%;
        }
    }
    .nav-link {       
            font-weight: 500;
            font-size: 18px;
            padding-bottom: 5px;
            border-bottom: 4px solid transparent;
            transition: all 0.5s ease;
            color: #ffffff;
            &:hover {
                border-bottom: 4px solid #ffffff;
            }
            @media ${screens.tablet} {
                font-size: 16px;
            }
    }
    .active {
        font-weight:700;
        padding-bottom: 4px;
        border-bottom: 4px solid #ffffff;
    }
    .hamburger {
            display: block;
            cursor: pointer;          
            z-index: 100;
    }
    .hamburger div {
        width:23px;
        height:3px;
        margin-bottom: 5px;
        transition: transform 0.5s ease, background-color 0.5s ease;
        background-color: #282828;
    }
    .toggle {
        position: fixed;
        top: 35px;
        right: 20px;
        div {
         background-color: #ffffff;
        }
    }
    .toggle .line1 {
        transform-origin: top left;
        transform: rotate(45deg);
    }
    .toggle .line2 {
        opacity:0;
    }
    .toggle .line3 {
        transform-origin: bottom left;
        transform: rotate(-45deg);
    }
    
`
export const FooterWrapper = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px auto 0;
    padding: 30px 0;
    background-color: #282828;
    svg path, svg g {
        fill: #ffffff;
    }
    .footer-logo {
        width: 20%;
        margin: 20px 0 30px;
        svg {
            width: 100%;
            object-align: cover;
        }
    }
    .social-icons {
        display: flex;
        width: 70%;
        padding: 20px 0 30px;
        justify-content: space-evenly;
        align-items: center;
        .icon {
            a {
                transition: transform 0.5s ease;
                &:hover {
                    svg {
                        transform: scale(1.2);
                    }
                }
            }
        }
    }
    .credit {      
        color: #ffffff;
        padding: 20px 0 0;
        width: 100%;
        text-align: center;
        border-top: 1px solid #ffffff;
        letter-spacing: 1px;
        a {
            font-weight: 700;
            color: #ffffff;
            border-bottom: 2px dotted #ffffff;
            transition: color 0.5s ease, border-bottom 0.5s ease;
            &:hover {
                border-bottom: 2px dotted ${red};
                color: ${red};
            }
        }
    }
`