import React, {useEffect, useState} from "react";
import axios from 'axios';
import Layout from '../components/layout';
import {MainWrapper} from '../components/styles';
import {ReactComponent as ArrowIcon} from '../assets/arrow-down.svg';
import Poster from '../assets/treasure1.jpg';

export const findImg = (val, arr) => {
  const result = arr.find((el) => el.public_id.includes(val) === true)
  return result.public_id
}

const HyungMembers = [
  {
    full_name: "Choi Hyun Suk",
    stage_name: "Hyunsuk (현석)",
    dob: "Apr 21",
    yob: "1999",
    nickname: "Jelly Hyun",
    position: "Leader, Rapper",
    hobbies: "Fashion, Soccer, HipHop, Songwriting",
    tag: "hyunsuk"
    // image: Hyung1
  },
  {
    full_name: "Park Ji Hoon",
    stage_name: "Jihoon (지훈)",
    dob: "Mar 14",
    yob: "2000",
    nickname: "Hoony",
    position: "Leader, Vocal, Dancer",
    hobbies: "Longboarding, Taking pictures",
    tag: "jihoon"
    // image: Hyung2
  },
  {
    full_name: "Yoshinori Kanemoto",
    stage_name: "Yoshi (요시)",
    dob: "May 15",
    yob: "2000",
    nickname: "Destroyer",
    position: "Rapper",
    hobbies: "Skateboarding, Beatboxing, Songwriting, Drawing",
    tag: "yoshi"
    // image: Hyung3
  },
  {
    full_name: "Kim Jun Kyu",
    stage_name: "Junkyu (준규)",
    dob: "Sep 9",
    yob: "2000",
    nickname: "Handsome Koala",
    position: "Vocal, Moodmaker",
    hobbies: "Listening to music, Playing survival games",
    tag: "junkyu"
    // image: Hyung4
  }
]

const MiddleMembers = [
  {
    full_name: "Mashiho Takata",
    stage_name: "Mashiho (마시호)",
    dob: "Mar 25",
    yob: "2001",
    nickname: "Mashi",
    position: "Vocal, Dancer",
    hobbies: "Playing basketball, Acrobatics",
    tag: "mashiho"
    // image: Middle1
  },
  {
    full_name: "Yoon Jae Hyuk",
    stage_name: "Jaehyuk (재혁)",
    dob: "Jul 23",
    yob: "2001",
    nickname: "Chow Chow",
    position: "Vocal, Dancer",
    hobbies: "Watching cooking videos",
    tag: "jaehyuk"
    // image: Middle2
  },
  {
    full_name: "Asahi Hamada",
    stage_name: "Asahi (아사히)",
    dob: "Aug 20",
    yob: "2001",
    nickname: "Robot",
    position: "Vocal",
    hobbies: "Drawing, Working on music",
    tag: "asahi"
    // image: Middle3
  },
  {
    full_name: "Bang Ye Dam",
    stage_name: "Yedam (예담)",
    dob: "May 7",
    yob: "2002",
    nickname: "God Yedam",
    position: "Vocal",
    hobbies: "Playing soccer, Taking pictures of flowers, Looking at animals",
    tag: "yedam"
    // image: Middle4
  }
]

const MaknaeMembers = [
  {
    full_name: "Kim Do Young",
    stage_name: "Doyoung (도영)",
    dob: "Dec 4",
    yob: "2003",
    nickname: "Dobby",
    position: "Vocal, Dancer",
    hobbies: "Playing basketball, Soccer, Skateboarding",
    tag: "doyoung"
    // image: Maknae1
  },
  {
    full_name: "Haruto Watanabe",
    stage_name: "Haruto (하루토)",
    dob: "Apr 5",
    yob: "2004",
    nickname: "Ruto",
    position: "Rapper",
    hobbies: "Playing games",
    tag: "haruto"
    // image: Maknae2
  },
  {
    full_name: "Park Jeong Woo",
    stage_name: "Jeongwoo (정우)",
    dob: "Sep 23",
    yob: "2004",
    nickname: "Chocolate Jeongwoo",
    position: "Vocal, Moodmaker",
    hobbies: "Playing games",
    tag: "jeongwoo"
    // image: Maknae3
  },
  {
    full_name: "So Jung Hwan",
    stage_name: "Junghwan (정환)",
    dob: "Feb 13",
    yob: "2005",
    nickname: "Super King Cow Baby",
    position: "Dancer, Maknae",
    hobbies: "Watching movies, Playing games, Eating sweets",
    tag: "junghwan"
    // image: Maknae4
  }
]

const Members = (props) => {
  //State for toggling all team member contents
  const [allVisible, setAllVisible] = useState([]);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    axios.get('https://res.cloudinary.com/khairahscorner/image/list/member.json')
    .then(res => {
      setAllImages([...res.data.resources]);     
    })
    // create an array of false states for all team members
    const allMembers = [...HyungMembers, ...MiddleMembers, ...MaknaeMembers];
    let arr = [];
    // eslint-disable-next-line
    for(let _ in allMembers) {
      arr.push(false) 
    }
    setAllVisible(arr)
  }, [])

  //For toggling the clicked member
  const toggleVisible = (key) => {
    const arr = [...allVisible];
    arr[key] = !arr[key];
    setAllVisible(arr);
  }

  return (
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
            <span>Member ages are in Korean age. </span><br />
            All info were gotten through intro content from their 
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCx9hXYOCvUYwrprEqe4ZQHA"> YouTube channel</a>.
          </div>
        </div>
        {allImages.length>0 && (
          <>
            <div className="section">
              <h2 className="section-heading">~ HYUNG LINE (형) ~</h2>
              <div className="flex-row">
                {HyungMembers.map((member, index) => (
                  <div className="member" key={member.stage_name}>
                    <div className="img-box">
                      <img src={`https://res.cloudinary.com/khairahscorner/image/upload/${findImg(member.tag, allImages)}.jpg`} alt={member.stage_name} />
                      <div className="overlay"/>
                    </div>
                    <div className="content">
                      <div className="text">
                        <span>Name: </span>{member.stage_name}
                      </div>
                      <div className={`btn ${allVisible[index] ? "toggle" : ""}`} onClick={() => toggleVisible(index)} > 
                        <ArrowIcon />
                      </div>
                    </div>
                    {allVisible[index] ? (
                      <>
                        <div className="text">
                          <span>Full Name: </span> {member.full_name}
                        </div>
                        <div className="text">
                          <span>Age: </span> {(new Date()).getUTCFullYear() - parseInt(member.yob) + 1}
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
                        </>)
                    : null}
                  </div>
                ))}      
              </div>
            </div>
            <div className="section">
              <h2 className="section-heading">~ MIDDLE LINE (가운데) ~</h2>
              <div className="flex-row">
              {MiddleMembers.map((member, index) => (
                  <div className="member" key={member.stage_name}>
                    <div className="img-box">
                      <img src={`https://res.cloudinary.com/khairahscorner/image/upload/${findImg(member.tag, allImages)}.jpg`}  alt={member.stage_name} />
                      <div className="overlay"/>
                    </div>
                    <div className="content">
                      <div className="text">
                        <span>Name: </span>{member.stage_name}
                      </div>
                      <div className={`btn ${allVisible[index+4] ? "toggle" : ""}`} onClick={() => toggleVisible(index+4)} > 
                        <ArrowIcon />
                      </div>
                    </div>
                    {allVisible[index+4] ? (
                      <>
                        <div className="text">
                          <span>Full Name: </span> {member.full_name}
                        </div>
                        <div className="text">
                          <span>Age: </span> {(new Date()).getUTCFullYear() - parseInt(member.yob) + 1}
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
                        </>)
                    : null}
                  </div>
                ))}
              </div>
            </div>
            <div className="section">
              <h2 className="section-heading">~ MAKNAE LINE (막내) ~</h2>
              <div className="flex-row">
                {MaknaeMembers.map((member, index) => (
                  <div className="member" key={member.stage_name}>
                    <div className="img-box">
                      <img src={`https://res.cloudinary.com/khairahscorner/image/upload/${findImg(member.tag, allImages)}.jpg`}  alt={member.stage_name} />
                      <div className="overlay"/>
                    </div>
                    <div className="content">
                      <div className="text">
                        <span>Name: </span>{member.stage_name}
                      </div>
                      <div className={`btn ${allVisible[index+8] ? "toggle" : ""}`} onClick={() => toggleVisible(index+8)} > 
                        <ArrowIcon />
                      </div>
                    </div>
                    {allVisible[index+8] ? (
                      <>
                        <div className="text">
                          <span>Full Name: </span> {member.full_name}
                        </div>
                        <div className="text">
                          <span>Age: </span> {(new Date()).getUTCFullYear() - parseInt(member.yob) + 1}
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
  );
}

export default Members;
