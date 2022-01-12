import React from 'react';
import loadable from "@loadable/component";
import styled from "styled-components";
import {screens} from '../sizes';
import Logo from "../assets/main_logo.svg";

//Page loader style
const PreloaderWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    position: relative;
    img {
        position: absolute;
        width: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @media ${screens.mobileL} {
          width: 30%;
        }
    }
`

export const Preloader = (
  <PreloaderWrapper>
    <img src={Logo} alt="preloader logo" />
  </PreloaderWrapper>
);

export const Home = loadable(() => import("../pages/home"), {
  fallback: Preloader,
});

export const Members = loadable(() => import("../pages/members"), {
  fallback: Preloader,
});

export const Songs = loadable(() => import("../pages/media"), {
  fallback: Preloader,
});

export const Gallery = loadable(() => import("../pages/gallery"), {
  fallback: Preloader,
});

export const SingleSong = loadable(() => import("../pages/singleSong"), {
  fallback: Preloader,
});

//for more info about use of loadable-components -> https://github.com/gregberge/loadable-components
