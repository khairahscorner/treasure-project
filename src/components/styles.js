import styled from 'styled-components';
import {screens} from '../sizes';
// const red = '#be0028';
const blue = "#87ceeb";

export const HeaderWrapper = styled.header`
    position: sticky;
    width: 100%;
    top: -1px;
    z-index: 100;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px;
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
            z-index: 100;
            top: 0;
            bottom:0;
            right: 0;
            width: 10%;
            padding: 70px 0 50px;
            flex-direction: column;
            align-items: center;
            background-color: ${blue};
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
        @media ${screens.mobileL} {
            width: 50%;
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
                border-bottom: 2px dotted ${blue};
                color: ${blue};
            }
        }
    }
`
export const ButtonWrapper = styled.button`
    padding: 10px 20px;
    background-color: ${blue};
    border: 1px solid transparent;
    border-radius: 10px;
    transition: transform .5s ease-in-out;
    a {
        color: #ffffff;
        font-weight: 600;
    }
    &:hover {
        transform: translateY(-5px);
    }
`

export const MainWrapper = styled.main`
    width: 80%;
    margin: 0 auto;
    padding: 50px 0;
    min-height: 100vh;
    @media ${screens.mobileL} {
        width: 100%; 
    }
    .first-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 30px;
        border-bottom: 1px solid #777777;
    }
    .heading {
        font-size: 36px; 
        text-align: center;
    }
    .sub {
        font-size: 28px;
        @media ${screens.mobileL} {
            font-size: 20px; 
        }
    }
    .span {          
        font-style: italic;
    }
    .logo {
        width: 30%;
        height: auto;
        margin: 50px 0;
        img {
            width: 100%;
            object-fit: contain;
        }
        @media ${screens.mobileL} {
            width: 70%;
        }
    }
    .quote {
        font-style: italic;
        font-size: 30px;
        color: #282828;
        @media ${screens.mobileL} {
            font-size: 20px; 
        }
    }
    .about {
        margin: 30px auto;
        width: 45%;
        text-align: center;
        line-height: 36px;
        font-weight: 600;
        @media ${screens.mobileL} {
            width: 80%;
        }
    }
    .second-section {
        margin: 70px 0 50px;
        text-align: center;
    }
    .bio-image {
        position: relative;
        width: 100%;
        img {
            width: 100%;
            object-fit: contain;
        }
    }
    .bio {
        width: 90%;
        margin: 60px auto 20px;
        font-weight: 600;
        line-height: 32px;
        p {
            padding: 10px 0;
        }
    }
    .source {
        font-style: italic;
        font-weight: 400;
        text-decoration: underline;
        color: ${blue};
    }
    .section {
        padding: 50px 0;
    }
    .section-heading {
        font-size: 32px;
        margin-bottom: 60px;
        text-align: center;
        text-transform: uppercase;
        @media ${screens.mobileL} {
            font-size: 28px;
        }
    }
    .loading {
        padding: 100px;
        font-size: 40px;
        text-align: center;
        font-weight: 600;
    }
    .flex-row {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1rem;
        @media ${screens.mobileL} {
            grid-template-columns: repeat(1, minmax(0, 1fr));
            padding: 0 15px;
        }
        .member {
            width: 100%;
        }
        .flex-group {
            width: 30%;
        }
        .flex-group, .member {         
            display: flex;
            flex-direction: column;
            margin-bottom: 40px;
        }
        .img-box {
            position: relative;
            width: 100%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .img-group {
            position: relative;
            border: 1px solid transparent;
            width: 48%;
            margin-bottom: 60px;
            transition: transform 1s ease;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            &:hover {
                border: 1px solid ${blue};
                transform: scale(1.02);
            }
            @media ${screens.mobileL} {
                width 80%;
            }
        }
    }
    .text {
        margin-top: 10px;
        span {
            font-weight: 700;
        }
    }
    .content {
            display: flex;
            justify-content: space-between;
            align-items: start;
            .btn {
                margin-left: 30px;
                cursor: pointer;
                transition: all 0.5s ease;
                outline: transparent;
                margin-top: 10px;
            }
            .toggle {
                transform: rotate(180deg);
            }
        }
    .reduced {
        width: 80%;
        margin-top: 30px;
    }
    .song-section {
        text-align: center;
        width: 70%;
        margin: 50px auto;
        @media ${screens.tablet} {
            width 90%;
        }
        .video-player {
            width: 100%;
            height: 500px;
            display: flex;
            padding: 10px 0;
            border: 1px solid #282828;
            margin-bottom: 30px;
            .video {
                width: 95%;
                height: 100%;
                margin: 0 auto;
            }
            @media ${screens.mobileSm} {
                height: 300px;
                padding: 0;
                border: none;
                .video {
                    width: 100%;
                }
            }
        }
        .category {
            font-size: 24px;
            @media ${screens.mobileL} {
                font-size: 18px;
            }
        }
    }
    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #f7f7f7;
        height: 50px;
        z-index: -1;
    }
    .btn {
        text-align: center;
    }
`
