import React, {useEffect, useState} from "react";
import axios from 'axios';
import Layout from '../components/layout';
import {MainWrapper} from '../components/styles';

const Gallery = () => {
    const [allImages, setAllImages] = useState([]);

    useEffect(() => {
        axios.get('https://res.cloudinary.com/khairahscorner/image/list/gallery.json')
        .then(res => {
        setAllImages([...res.data.resources]);     
        })
    })
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
                {
                    allImages.length> 0 && (
                        allImages.map(el => (
                        <div className="img-group" key={el.public_id}>
                            <img 
                            src={`https://res.cloudinary.com/khairahscorner/image/upload/${el.public_id}.jpg`} 
                            alt={`${el.public_id} poster`} />
                            <div className="overlay"/>
                        </div>))
                    )}
                
            </div>
        </div>
      </MainWrapper>
    </Layout>
  );
}

export default Gallery;
