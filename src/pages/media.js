import React, {useState, useEffect} from "react";
import {NavLink} from 'react-router-dom';
import moment from 'moment';
import Layout from '../components/layout';
import {MainWrapper, ButtonWrapper} from '../components/styles';
import {YOUTUBE_KEY, TITLE_TRACKS_ID, OTHER_TRACKS_ID, AUDIO_TRACKS_ID } from "../config";

const Songs = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({
    titleTracks: [],
    otherTracks: [],
    audioTracks: []
  })

  useEffect(() => {
    setLoading(true);
    //title tracks
    fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&maxResults=10&playlistId=${TITLE_TRACKS_ID}&key=${YOUTUBE_KEY}`)
    .then((res) => res.json())
    .then((res) => {
      const response = res.items
      //others
      fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&maxResults=10&playlistId=${OTHER_TRACKS_ID}&key=${YOUTUBE_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        const otherRes = res.items
        //audio
        fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&maxResults=10&playlistId=${AUDIO_TRACKS_ID}&key=${YOUTUBE_KEY}`)
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setResults({
            titleTracks: [...response],
            otherTracks: [...otherRes],
            audioTracks: [...res.items]
          });      
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
                {results.titleTracks.slice(0,6).map(el => (
                  <div className="flex-group" key={el.id}>
                    <NavLink to={`/songs/${el.snippet.resourceId.videoId}`}>
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
              {results.titleTracks.length > 6 ? (
                <div className="btn">
                  <ButtonWrapper>
                    <a target="_blank" rel="noreferrer" href={`https://www.youtube.com/playlist?list=${TITLE_TRACKS_ID}`}>
                      Watch more
                    </a>
                  </ButtonWrapper>
                </div>
              ): null}
            </div>
            <div className="section">
              <h2 className="section-heading" >~ OTHER TRACKS ~</h2>
              <div className="flex-row">
                {results.otherTracks.slice(0,6).map(el => (
                  <div className="flex-group" key={el.id}>
                    <NavLink to={`/songs/${el.snippet.resourceId.videoId}`}>
                      <div className="img-box">
                        <img src={el.snippet.thumbnails.high?.url ?? el.snippet.thumbnails.default.url} alt={el.id} /> 
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
              {results.otherTracks.length > 6 ? (
              <div className="btn">
                <ButtonWrapper>
                  <a target="_blank" rel="noreferrer" href={`https://www.youtube.com/playlist?list=${OTHER_TRACKS_ID}`}>
                    Watch more
                  </a>
                </ButtonWrapper>
                </div>
              ): null}
            </div>
            <div className="section">
              <h2 className="section-heading" >~ AUDIO ONLY ~</h2>
              <div className="flex-row">
                {results.audioTracks.slice(0,6).map(el => (
                  <div className="flex-group" key={el.id}>
                    <NavLink to={`/songs/${el.snippet.resourceId.videoId}`}>
                      <div className="img-box">
                        <img src={el.snippet.thumbnails.high?.url ?? el.snippet.thumbnails.default.url} alt={el.id} /> 
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
              {results.audioTracks.length > 6 ? (
              <div className="btn">
                <ButtonWrapper>
                  <a target="_blank" rel="noreferrer" href={`https://www.youtube.com/playlist?list=${AUDIO_TRACKS_ID}`}>
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

export default Songs;
