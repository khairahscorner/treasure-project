import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import Layout from '../components/layout';
import {MainWrapper} from '../components/styles';

const SingleSong = (props) => {
  const {songId} = useParams();

  useEffect(() => {
    
  })

  return (
    <Layout>
      <MainWrapper>{songId} Song page</MainWrapper>
    </Layout>
  );
}

export default SingleSong;
