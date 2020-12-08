import React, {useState, useEffect} from "react";
import {NavLink} from 'react-router-dom';
import moment from 'moment';
import Layout from '../components/layout';
import {MainWrapper} from '../components/styles';

const Songs = (props) => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({
    titleTracks: [],
    otherTracks: []
  })

  useEffect(() => {
    setLoading(true);
    //title tracks
    fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&playlistId=PLehSpAZwgtvAVjTJKrOGlnIC_3jgCiC6z&key=AIzaSyCGk8-2hrhfVlemHzYhcJvVRU0cCa2nt9c')
    .then((res) => res.json())
    .then((res) => {
      const response = res.items
      //others
      fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&playlistId=PLehSpAZwgtvA7B1inU6r-Atzvh9GfZqNA&key=AIzaSyCGk8-2hrhfVlemHzYhcJvVRU0cCa2nt9c')
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setResults({
          titleTracks: [...response],
          otherTracks: [...res.items]
        });
      });
    });
  }, []);

  return (
    <Layout>
      <MainWrapper>
      <div className="first-section">
          <h1 className="heading">Treasure Songs</h1>
          <div className="about">
            Watch MVs, selfie cams or live videos of all TREASURE songs.
          </div>
        </div>
        {loading ? <div className="loading">LOADING...</div>: (
          <>
            <div className="section">
              <h2 className="section-heading" >~ TITLE TRACKS ~</h2>
              <div className="flex-row">
                {results.titleTracks.map(el => (
                  <div className="flex-group" key={el.id}>
                    <NavLink to={`/songs/${el.snippet.resourceId.videoId}`}>
                      <div className="img-box">
                        <img src={el.snippet.thumbnails.standard.url} alt={el.id} /> 
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
            </div>
            <div className="section">
              <h2 className="section-heading" >~ OTHER TRACKS ~</h2>
              <div className="flex-row">
                {results.otherTracks.map(el => (
                  <div className="flex-group" key={el.id}>
                    <NavLink to={`/songs/${el.snippet.resourceId.videoId}`}>
                      <div className="img-box">
                        <img src={el.snippet.thumbnails.standard.url} alt={el.id} /> 
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
            </div>
          </>
        )}
      </MainWrapper> 
    </Layout>
  );
}

export default Songs;
