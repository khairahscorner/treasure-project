import React from "react";
import Layout from '../components/layout';
import {MainWrapper} from '../components/styles';
import Logo from "../assets/main_logo.svg";

const Home = (props) => {

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
              <p>This was created by a<a target="_blank" rel="noreferrer" href="https://www.instagram.com/khairahscorner"> Treasure Maker</a>.</p>
              <p>It shares details about the boy group, <span className="span">Treasure</span>, its members and a way to stream all their songs and M/Vs.</p>
            </div>
          </div>
          <div className="second-section">
            <h2 className="section-heading">~ ABOUT TREASURE ~</h2>
            <div className="bio">

            </div>
          </div>
        </MainWrapper>
      </Layout>
    );
}

export default Home;
