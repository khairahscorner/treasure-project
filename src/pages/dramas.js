import React, {useState, useEffect} from "react";
import {NavLink} from 'react-router-dom';
import moment from 'moment';
import Layout from '../components/layout';
import {MainWrapper, ButtonWrapper} from '../components/styles';
import {YOUTUBE_KEY, DRAMAS_ID } from "../config";

const Dramas = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&maxResults=10&playlistId=${DRAMAS_ID}&key=${YOUTUBE_KEY}`)
    .then((res) => res.json())
    .then((res) => {
        setLoading(false);
        setResults([...res.items]);
    });
  }, []);

  return (
    <Layout>
      <MainWrapper>
      <div className="first-section">
          <h1 className="heading">Treasure Drama Series</h1>
          <div className="about">
            Watch TREASURE hone their acting skills!
          </div>
        </div>
        {loading ? <div className="loading">LOADING...</div>: (
          <>
            <div className="section">
              <h2 className="section-heading" >~ WEB DRAMAS ~</h2>
              <div className="flex-row">
                {results.slice(0,6).map(el => (
                  <div className="flex-group" key={el.id}>
                    <NavLink to={`/dramas/${el.snippet.resourceId.videoId}`}>
                      <div className="img-box">
                        <img src={el.snippet.thumbnails.high?.url ?? el.snippet.thumbnails.default.url} alt={el.id} /> 
                        {/* <div className="overlay">Play</div> */}
                      </div>
                    </NavLink>
                      <div className="text">
                        <span>Title: </span> {el.snippet.title}
                      </div>
                      <div className="text">
                        <span>Premiered on: </span> {moment(el.contentDetails.videoPublishedAt).format("Do MMM, YYYY")}
                      </div>
                  </div>
                ))}
              </div>
              {results.length > 6 ? (
                <div className="btn">
                  <ButtonWrapper>
                    <a target="_blank" rel="noreferrer" href={`https://www.youtube.com/playlist?list=${DRAMAS_ID}`}>
                      Watch more
                    </a>
                  </ButtonWrapper>
                </div>
              ): null}
            </div>
          </>
        )}
      </MainWrapper> 
    </Layout>
  );
}

export default Dramas;
