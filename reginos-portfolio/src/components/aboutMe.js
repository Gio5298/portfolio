import React from 'react';
import Styled from 'styled-components'

//image import
import selfImage from './imgs/selfImage.jpg'

const AboutDiv = Styled.div`
display: flex;
justify-content: center;
margin: 15rem auto;
`

const AboutImg = Styled.img`
width: 25rem;
border-radius: 300px;
margin-left: 50px;
`

const AboutCont = Styled.div`
display: flex;
flex-direction: column;
margin: 0 100px 0 50px;
width: 35%;
`

const AboutHeader = Styled.h2`
color: snow;
font-size: 3rem;
margin: 1.7rem 0 0 0;
`

const AboutPara = Styled.p`
color: snow;
font-size: 1.6rem;
`

function AboutMe() {
  return (
    <AboutDiv id="aboutMe">
      <AboutImg src={selfImage} />
      <AboutCont>
        <AboutHeader>About Me</AboutHeader>
        <AboutPara>I'm an Arizona native, born and raised in central city Phoenix. I've been all around the work industry from selling animal feed to working in offices. None however have gotten my attention like web development has. Because learning different coding libraries and working on a team to create and improve web applications has become a great joy for me. Since starting my journey into the programming world I have decided to strive for nothing but the best I can possibly produce. </AboutPara>
      </AboutCont>
    </AboutDiv>
  )
}

export default AboutMe;