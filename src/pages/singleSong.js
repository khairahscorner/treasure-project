import React, {useEffect, useState} from "react";
import {useParams, NavLink} from 'react-router-dom';
import moment from 'moment';
import YouTube from 'react-youtube';
import Layout from '../components/layout';
import {MainWrapper, ButtonWrapper} from '../components/styles';
import {URL, YOUTUBE_KEY} from '../config';

const SingleSong = () => {
  const {video, songId} = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [results, setResults] = useState({});
  const options = {
    playerVars: {
      rel: 0,
      enablejsapi: 1,
      // origin: "http://localhost:3000/"
      origin: URL
    }
  }

  useEffect(() => {
    setLoading(true);
    //details
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${songId}&key=${YOUTUBE_KEY}`)
    .then((res) => res.json())
    .then((res) => {
      if(res.items.length === 0) {
        errorLoaded()
      }
      setResults({...res.items[0]});
      setLoading(false);
    });
  }, [songId]);

  const playVideo = e => {
    setTimeout(()=>{
      e.target.playVideo();
    }, 2000)
  }
  const errorLoaded = e => {
    setError("Could not Load Such Video")
  }

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Layout>
      <MainWrapper>
        <h1 className="heading">Watch Treasure</h1>
        <div className="song-section">
          <YouTube
            className="video"
            containerClassName="video-player"
            videoId={songId}
            opts={options}
            onReady={playVideo}
            onError={errorLoaded}
          >
            {error ? <p>{error}</p>: null}
          </YouTube>
          {loading  ? <p className="text">Loading...</p>: (
            results && error === null && (
              <>
              <div className="text category">
                <span>Title: </span>{results.snippet.title}
              </div>
              <div className="text category">
                <span>Premiered: </span>{moment(results.snippet.publishedAt).format("Do MMM, YYYY")}
              </div>
              <div className="text category">
                <span>Total Views: </span>{numberWithCommas(results.statistics.viewCount)}
              </div>
            </>)
          )}
          <ButtonWrapper style={{fontSize: "18px", margin: "30px auto"}}>
              <NavLink to={`/${video}`}>Go Back</NavLink>
            </ButtonWrapper>
        </div>
      </MainWrapper>
    </Layout>
  );
}

export default SingleSong;
