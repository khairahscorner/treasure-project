import React from "react";
import Layout from '../components/layout';
import {MainWrapper} from '../components/styles';
import Live from '../assets/orange-live.jpg'
import Wayo from '../assets/wayo.jpg'
import Wayo2 from '../assets/wayo2.jpg'
import Chp1 from '../assets/chp1-track-list.jpg'
import Chp2 from '../assets/chp2-track-list.jpg'
import Chp3 from '../assets/chp3-track-list.jpg'
import MMM from '../assets/mmm.jpg'
import Love from '../assets/i-love-you.jpg'
import Orange from '../assets/orange.jpg'
import BLT from '../assets/bling-like-this.png'
import Come from '../assets/come-to-me.png'
import Boy from '../assets/boy.jpg'
import Last from '../assets/treasure2.jpg'

const Gallery = (props) => {

  return (
    <Layout>
      <MainWrapper>
        <div className="first-section">
          <h1 className="heading">Treasure Gallery</h1>
          <div className="about">
            Just a couple of random digital photocards of 트레저.
          </div>
        </div>
        <div className="section">
            <div className="flex-row">
                <div className="img-group">
                    <img src={Chp3} alt="track list chp 3 poster" />
                </div>
                <div className="img-group">
                    <img src={Chp2} alt="track list chp 2 poster" />
                </div>
                <div className="img-group">
                    <img src={MMM} alt="mmm poster" />
                </div>
                <div className="img-group">
                    <img src={Love} alt="saranghe poster" />
                </div>
                <div className="img-group">
                    <img src={Chp1} alt="track list chp 1 poster" />
                </div>
                <div className="img-group">
                    <img src={Live} alt="orange live poster" />
                </div>
                <div className="img-group">
                    <img src={Orange} alt="orange poster" />
                </div>
                <div className="img-group">
                    <img src={BLT} alt="blt poster" />
                </div>
                <div className="img-group">
                    <img src={Wayo} alt="wayo poster" />
                </div>
                <div className="img-group">
                    <img src={Wayo2} alt="wayo other poster" />
                </div>
                <div className="img-group">
                    <img src={Come} alt="come to me poster" />
                </div>
                <div className="img-group">
                    <img src={Boy} alt="boy poster" />
                </div>
                <div className="img-group">
                    <img src={Last} alt="treasure group poster" />
                </div>
            </div>
        </div>
      </MainWrapper>
    </Layout>
  );
}

export default Gallery;
