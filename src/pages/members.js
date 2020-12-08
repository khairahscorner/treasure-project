import React from "react";
import Layout from '../components/layout';
import {MainWrapper} from '../components/styles';
import Poster from '../assets/treasure1.jpg';
import Hyung1 from '../assets/hyunsuk.jpg';
import Hyung2 from '../assets/jihoon.jpg';
import Hyung3 from '../assets/yoshi.jpg';
import Hyung4 from '../assets/junkyu.jpg';
import Middle1 from '../assets/mashiho.jpg';
import Middle2 from '../assets/jaehyuk.jpg';
import Middle3 from '../assets/asahi.jpg';
import Middle4 from '../assets/yedam.jpg';
import Maknae1 from '../assets/doyoung.jpg';
import Maknae2 from '../assets/haruto.jpg';
import Maknae3 from '../assets/jeongwoo.jpg';
import Maknae4 from '../assets/junghwan.jpg';

const Members = (props) => {
  
  return (
    <Layout>
      <MainWrapper className="members">
        <div className="first-section">
          <h1 className="heading">Find Your Treasure</h1>
          <div className="bio-image reduced">
            <img src={Poster} alt="treasure about" />
          </div>
          <div className="about">
            Learn about each member; full names, nicknames, ages, hobbies and
            individual positions in TREASURE.
          </div>
        </div>
        <div className="section">
          <h2 className="section-heading">~ HYUNG LINE (형) ~</h2>
          <div className="flex-row">
            <div className="member">
              <div className="img-box">
                <img src={Hyung1} alt="Hyunsuk" />
                {/* <div className="overlay">Play</div> */}
              </div>
              <div className="text">
                <span>Name: </span> Choi Hyun Suk
              </div>
            </div>
            <div className="member">
              <div className="img-box">
                <img src={Hyung2} alt="Jihoon" />
                {/* <div className="overlay">Play</div> */}
              </div>
              <div className="text">
                <span>Name: </span> Park Ji Hoon
              </div>
            </div>
            <div className="member">
              <div className="img-box">
                <img src={Hyung3} alt="Yoshi" />
                {/* <div className="overlay">Play</div> */}
              </div>
              <div className="text">
                <span>Name: </span> Yoshi Kanemoto
              </div>
            </div>
            <div className="member">
              <div className="img-box">
                <img src={Hyung4} alt="Junkyu" />
                {/* <div className="overlay">Play</div> */}
              </div>
              <div className="text">
                <span>Name: </span> Kim Jun Kyu
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2 className="section-heading">~ MIDDLE LINE (가운데) ~</h2>
          <div className="flex-row">
            <div className="member">
              <div className="img-box">
                <img src={Middle1} alt="Mashiho" />
                {/* <div className="overlay">Play</div> */}
              </div>
              <div className="text">
                <span>Name: </span> Mashiho Takata
              </div>
            </div>
            <div className="member">
              <div className="img-box">
                <img src={Middle2} alt="Jaehyuk" />
                {/* <div className="overlay">Play</div> */}
              </div>
              <div className="text">
                <span>Name: </span> Yoon Jae Hyuk
              </div>
            </div>
            <div className="member">
              <div className="img-box">
                <img src={Middle3} alt="Asahi" />
                {/* <div className="overlay">Play</div> */}
              </div>
              <div className="text">
                <span>Name: </span> Asahi Hamada
              </div>
            </div>
            <div className="member">
              <div className="img-box">
                <img src={Middle4} alt="Yedam" />
                {/* <div className="overlay">Play</div> */}
              </div>
              <div className="text">
                <span>Name: </span> Bang Ye Dam
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2 className="section-heading">~ MAKNAE LINE (막내) ~</h2>
          <div className="flex-row">
            <div className="member">
              <div className="img-box">
                <img src={Maknae1} alt="Maknae" />
                {/* <div className="overlay">Play</div> */}
              </div>
              <div className="text">
                <span>Name: </span> Kim Do Young
              </div>
            </div>
            <div className="member">
              <div className="img-box">
                <img src={Maknae2} alt="Haruto" />
                {/* <div className="overlay">Play</div> */}
              </div>
              <div className="text">
                <span>Name: </span> Haruto Watanabe
              </div>
            </div>
            <div className="member">
              <div className="img-box">
                <img src={Maknae3} alt="Jeongwoo" />
                {/* <div className="overlay">Play</div> */}
              </div>
              <div className="text">
                <span>Name: </span> Park Jeong Woo
              </div>
            </div>
            <div className="member">
              <div className="img-box">
                <img src={Maknae4} alt="Junghwan" />
                {/* <div className="overlay">Play</div> */}
              </div>
              <div className="text">
                <span>Name: </span> So Jung Hwan
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </Layout>
  );
}

export default Members;
