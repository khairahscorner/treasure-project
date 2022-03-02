import React, {useEffect, useState} from "react";
import axios from 'axios';
import Layout from '../components/layout';
import {MainWrapper} from '../components/styles';
import {Preloader} from '../pageloader/index';
import {SPACE_ID, ACCESS_TOKEN} from '../config';
import {ReactComponent as ArrowIcon} from '../assets/arrow-down.svg';
import Poster from '../assets/group.jpeg';

export const findImg = (val, arr) => {
  const result = arr.find((el) => el.public_id.includes(val) === true)
  return result.public_id
}

const query = `
{
  memberDetailsCollection(order: sys_firstPublishedAt_ASC) {
    items {
      fullName
      stageName
      dob
      yob
      nickname
      position
      hobbies
      tag
      truz
    }
  }
}
`

const Members = (props) => {
  //State for toggling all team member contents
  const [allVisible, setAllVisible] = useState([]);
  const [allImages, setAllImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [memberDetails, setMemberDetails] = useState(null);

  useEffect(() => {
    fetch(`https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      })
      .then((res) => res.json())
      .then((res) => {
        setMemberDetails(res.data.memberDetailsCollection.items);
        axios.get('https://res.cloudinary.com/khairahscorner/image/list/member.json')
        .then(res => {
          setAllImages([...res.data.resources]);     
        })
        // create an array of false states for all team members
        const allMembers = [...res.data.memberDetailsCollection.items];
        let arr = [];
        // eslint-disable-next-line
        for(let _ in allMembers) {
          arr.push(false) 
        }
        setAllVisible(arr)
        setLoading(false)
      });
  }, []);

  //For toggling the clicked member
  const toggleVisible = (key) => {
    const arr = [...allVisible];
    arr[key] = !arr[key];
    setAllVisible(arr);
  }

  return (
    <>
     {loading ? Preloader : (
      <Layout>
        <MainWrapper className="members">
          <div className="first-section">
            <h1 className="heading">Find Your Treasure</h1>
            <div className="bio-image reduced">
              <img src={Poster} alt="treasure about" />
              <div className="overlay"/>
            </div>
            <div className="about text">
              Learn about each member; full names, nicknames, ages, hobbies and
              individual positions in TREASURE. <br />
              <span>ALL THE MEMBER AGES ARE IN KOREAN AGE. </span><br />
              All info were gotten through intro content from their 
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCx9hXYOCvUYwrprEqe4ZQHA"> YouTube channel</a>.
            </div>
          </div>
          {allImages.length>0 && (
            <>
              <div className="section">
                <h2 className="section-heading">~ HYUNG LINE (형) ~</h2>
                <div className="flex-row">
                  {memberDetails.slice(0,4).map((member, index) => (
                    <div className="member" key={member.stageName}>
                      <div className="img-box">
                        <img src={`https://res.cloudinary.com/khairahscorner/image/upload/${findImg(member.tag, allImages)}.jpg`} alt={member.stageName} />
                        <div className="overlay"/>
                      </div>
                      <div className="content" onClick={() => toggleVisible(index)} style={{cursor:'pointer'}}>
                        <div className="text">
                          <span>Name: </span>{member.stageName}
                        </div>
                        <div className={`btn ${allVisible[index] ? "toggle" : ""}`}> 
                          <ArrowIcon />
                        </div>
                      </div>
                      {allVisible[index] ? (
                        <>
                          <div className="text">
                            <span>Full Name: </span> {member.fullName}
                          </div>
                          <div className="text">
                            <span>Age: </span> {(new Date()).getUTCFullYear() - member.yob + 1}
                          </div>
                          <div className="text">
                            <span>Date of Birth: </span> {member.dob}, {member.yob}
                          </div>
                          <div className="text">
                            <span>Nickname: </span> {member.nickname}
                          </div>
                          <div className="text">
                            <span>Position: </span> {member.position}
                          </div>
                          <div className="text">
                            <span>Hobbies: </span> {member.hobbies}
                          </div>
                          <div className="text">
                            <span>Truz Character: </span> {member.truz}
                          </div>
                          </>)
                      : null}
                    </div>
                  ))}      
                </div>
              </div>
              <div className="section">
                <h2 className="section-heading">~ MIDDLE LINE (가운데) ~</h2>
                <div className="flex-row">
                {memberDetails.slice(4,8).map((member, index) => (
                    <div className="member" key={member.stageName}>
                      <div className="img-box">
                        <img src={`https://res.cloudinary.com/khairahscorner/image/upload/${findImg(member.tag, allImages)}.jpg`}  alt={member.stageName} />
                        <div className="overlay"/>
                      </div>
                      <div className="content" onClick={() => toggleVisible(index+4)} style={{cursor:'pointer'}}>
                        <div className="text">
                          <span>Name: </span>{member.stageName}
                        </div>
                        <div className={`btn ${allVisible[index+4] ? "toggle" : ""}`} > 
                          <ArrowIcon />
                        </div>
                      </div>
                      {allVisible[index+4] ? (
                        <>
                          <div className="text">
                            <span>Full Name: </span> {member.fullName}
                          </div>
                          <div className="text">
                            <span>Age: </span> {(new Date()).getUTCFullYear() - member.yob + 1}
                          </div>
                          <div className="text">
                            <span>Date of Birth: </span> {member.dob}, {member.yob}
                          </div>
                          <div className="text">
                            <span>Nickname: </span> {member.nickname}
                          </div>
                          <div className="text">
                            <span>Position: </span> {member.position}
                          </div>
                          <div className="text">
                            <span>Hobbies: </span> {member.hobbies}
                          </div>
                          <div className="text">
                            <span>Truz Character: </span> {member.truz}
                          </div>
                          </>)
                      : null}
                    </div>
                  ))}
                </div>
              </div>
              <div className="section">
                <h2 className="section-heading">~ MAKNAE LINE (막내) ~</h2>
                <div className="flex-row">
                  {memberDetails.slice(8,12).map((member, index) => (
                    <div className="member" key={member.stageName}>
                      <div className="img-box">
                        <img src={`https://res.cloudinary.com/khairahscorner/image/upload/${findImg(member.tag, allImages)}.jpg`}  alt={member.stageName} />
                        <div className="overlay"/>
                      </div>
                      <div className="content" onClick={() => toggleVisible(index+8)} style={{cursor:'pointer'}}>
                        <div className="text">
                          <span>Name: </span>{member.stageName}
                        </div>
                        <div className={`btn ${allVisible[index+8] ? "toggle" : ""}`} > 
                          <ArrowIcon />
                        </div>
                      </div>
                      {allVisible[index+8] ? (
                        <>
                          <div className="text">
                            <span>Full Name: </span> {member.fullName}
                          </div>
                          <div className="text">
                            <span>Age: </span> {(new Date()).getUTCFullYear() - member.yob + 1}
                          </div>
                          <div className="text">
                            <span>Date of Birth: </span> {member.dob}, {member.yob}
                          </div>
                          <div className="text">
                            <span>Nickname: </span> {member.nickname}
                          </div>
                          <div className="text">
                            <span>Position: </span> {member.position}
                          </div>
                          <div className="text">
                            <span>Hobbies: </span> {member.hobbies}
                          </div>
                          <div className="text">
                            <span>Truz Character: </span> {member.truz}
                          </div>
                          </>)
                      : null}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </MainWrapper>   
      </Layout>
     )}
    </>
  );
}

export default Members;
