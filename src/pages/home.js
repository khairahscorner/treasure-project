import React from "react";
import {NavLink} from 'react-router-dom';
import Layout from '../components/layout';
import {MainWrapper, ButtonWrapper} from '../components/styles';
import Logo from "../assets/main_logo.svg";
import Poster from "../assets/group.jpg";

const Home = () => {

    return (
      <Layout>
        <MainWrapper>
          <div className="first-section">
            <h1 className="heading">TEUHA!!</h1>
            <p className='sub'>트하!!</p>
            <div className="logo">
             <img src={Logo} alt="logo" />
            </div>
            <h2 className="quote">"안녕하세요, 트레저 입니다"</h2>
            <p className="sub span">"Hello, We Are Treasure"</p>
            <div className="about">
              <p>This was created by a<a target="_blank" rel="noreferrer" href="https://www.threads.net/@skincarebiased"> Treasure Maker</a>.</p>
              <p>It shares details about the boy group, <span className="span">Treasure</span>, its members and a way to stream all their songs and M/Vs.</p>
              <p style={{margin: "15px 0"}}>Debut Date: <span class="span" style={{color: "rgb(135, 206, 235)", backgroundColor: "#2e2e2e", padding: "4px 8px", borderRadius: "4px"}}>August 7, 2020 </span></p>
              <p>Official Fandom Color: <span className="span" style={{backgroundColor: "#87ceeb", padding: "2px 8px", borderRadius: "4px"}}>Sky Blue</span></p>
            </div>
          </div>
          <div className="second-section">
            <h2 className="section-heading" >~ ABOUT TREASURE ~</h2>
            <div className="bio-image">
              <img src={Poster} alt="treasure about"/>
              <div className="overlay"></div>
            </div>
            <div className="bio">
              Treasure (Hangul: 트레저; Japanese: トレジャー; stylized as TREASURE) is a South Korean boy band formed in 2019 by YG Entertainment, through YG Treasure Box (2018–2019); and consists of 10 members: Choi Hyun-suk, Jihoon, Yoshi, Junkyu, Yoon Jae-hyuk, Asahi, Doyoung, Haruto, Park Jeong-woo, and So Jung-hwan.
              <p>Source: <a className="source" href="https://en.wikipedia.org/wiki/Treasure_(band)">- Wikipedia</a></p>
            </div>
            <ButtonWrapper>
              <NavLink to="/members">Meet The Members</NavLink>
            </ButtonWrapper>
          </div>
        </MainWrapper>
      </Layout>
    );
}

export default Home;
