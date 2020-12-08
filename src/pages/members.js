import React from "react";
import Layout from '../components/layout';
import {MainWrapper} from '../components/styles';
import Poster from '../assets/treasure1.jpg';
import Hyung1 from '../assets/hyunsuk.jpg';
// import Hyung2 from '../assets/jihoon.jpg';
// import Hyung3 from '../assets/yoshi.jpg';
// import Hyung4 from '../assets/junkyu.jpg';
import Middle1 from '../assets/mashiho.jpg';
import Maknae1 from '../assets/doyoung.jpg';

const Members = (props) => {
  
  return (
    <Layout>
      <MainWrapper className="members">
        <div className="first-section">
          <h1 className="heading">Find Your Treasure</h1>
          <div className="bio-image reduced">
              <img src={Poster} alt="treasure about"/>
            </div>
          <div className="about">
            Learn about each member; full names, nicknames, ages, hobbies and individual positions in TREASURE.
          </div>
        </div>
        <div className="section">
          <h2 className="section-heading" >~ HYUNG LINE (형) ~</h2>
          <div className="flex-row">
            <div className="flex-group">
                      <div className="img-box">
                        <img src={Hyung1} alt="Hyung"/> 
                        {/* <div className="overlay">Play</div> */}
                      </div>
                      <div className="text">
                        <span>Name: </span> Choi Hyun Suk
                      </div>
                  </div>
              </div>
        </div>
        <div className="section">
          <h2 className="section-heading" >~ MIDDLE LINE (가운데) ~</h2>
          <div className="flex-row">
            <div className="flex-group">
                      <div className="img-box">
                        <img src={Middle1} alt="Middle"/> 
                        {/* <div className="overlay">Play</div> */}
                      </div>
                      <div className="text">
                        <span>Name: </span> Mashiho Takata
                      </div>
                  </div>
              </div>
        </div>
        <div className="section">
          <h2 className="section-heading" >~ MAKNAE LINE (막내) ~</h2>
          <div className="flex-row">
            <div className="flex-group">
                      <div className="img-box">
                        <img src={Maknae1} alt="Maknae" /> 
                        {/* <div className="overlay">Play</div> */}
                      </div>
                      <div className="text">
                        <span>Name: </span> Kim Do Young
                      </div>
                  </div>
              </div>
        </div>
      </MainWrapper>
    </Layout>
  );
}

export default Members;
