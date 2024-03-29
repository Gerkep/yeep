import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import PricingSection from "../components/PricingSection";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import ColorfulText from '../components/ColorfulText';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import AppearingTitle from '../components/animation/AppearingTitle';
import SlideLeft from '../components/animation/SlideLeft';
import { send } from "@emailjs/browser";
import codeIcon from '../public/img/codeIcon.png';
import openaiLogo from '../public/img/openaiLogo.png';
import chatbotIcon from '../public/img/chatbotIcon.png';
import findIcon from '../public/img/findIcon.png';
import victorLogo from '../public/img/victor.png';
import konkretLogo from '../public/img/konkretlogo.png';
import dataIcon from '../public/img/dataIcon.png';
import phoneIcon from '../public/img/phoneIcon.png';
import desktopIcon from '../public/img/desktopIcon.png';
import discountImage from '../public/img/yeppmacbook.png';
const Countdown = dynamic(() => import('../components/Countdown'), {ssr: false})
import Image from 'next/image';
import { showNotification } from '@mantine/notifications';
import dynamic from 'next/dynamic';
import background from "../public/img/background.png";
import mobileBackground from "../public/img/background-mobile.png";
import maingradient from "../public/img/background-gradient.png";
import maingradientmobile from "../public/img/background-gradient-mobile.png";

const Home: NextPage = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    if(window.innerWidth >= 768){
      setMobile(false);
    }
  }, [])

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      email: `${email}`,
      message: `${message}`,
      name: `${name}`,
    };

    send("service_frl23bb","template_0sqonfg", templateParams, process.env.NEXT_PUBLIC_EMAILJS_USER_KEY)
    .then(function(response) {
        showNotification({
          id: 'email sent',
          disallowClose: true,
          autoClose: 4000,
          title: "Email sent successfully!",
          message: 'We will reply as soon as possible. Thank you.',
          color: 'green',
      })
        setLoading(false);
    }, function(error) {
        console.log('FAILED...', error);
        setLoading(false);
    });  
  }

  const handleScroll = () => {
    const contactSection = document.getElementById("leearnMore")!;
    contactSection.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact")!;
    contactSection.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  return (
    <div className='w-full h-full relative'>
      <Navbar contactScroll={() => handleContactScroll()}/>
      {!mobile ? 
        <>
        <Image alt="background" layout='fill' objectFit='cover'  src={background}></Image> 
        <WorldBackground>
          <Image alt="background" layout='fill' objectFit='cover'  src={maingradient}></Image> 
        </WorldBackground>
        </>
      :
        <>
        <Image alt="background" layout='fill' objectFit='cover'  src={mobileBackground}></Image>
        <WorldBackground>
          <Image alt="background" layout='fill' objectFit='cover'  src={maingradientmobile}></Image> 
        </WorldBackground>
        </>
      }
      <AppearingTitle>
        {!mobile ?
          <MainTitle>Build <ColorfulText>your AI & web3</ColorfulText> ideas with Yepp</MainTitle>
        :
          <MainTitle>Build new web <ColorfulText>with Yepp</ColorfulText></MainTitle>
        }
      </AppearingTitle>
      <MainDescription>We bring your best ideas into a reality. ChatGPT plugins, web3 and AI solutions.</MainDescription>
      <ButtonsContainer>
          <ContactButton href={'https://calendly.com/yeppstudios'}>Get started for free</ContactButton>
          <LearnMoreButton onClick={() => handleScroll()}><ColorfulText>Learn more</ColorfulText></LearnMoreButton>
      </ButtonsContainer>
      <ConsultationContainer>
        <ConsultationComponent href={'https://calendly.com/yeppstudios'}>
          <PhoneIcon>
            <Image alt="phoneIcon" layout='fill' objectFit='contain'  src={phoneIcon}></Image>
          </PhoneIcon>
          <ConsultationTitle className='consultationText'>Book 1h consultation now!</ConsultationTitle>
          <ConsultationPrice className='consultationPrice'><p style={{textDecoration: "line-through", display: "inline"}}>$30</p> <ColorfulText>Free!</ColorfulText></ConsultationPrice>
        </ConsultationComponent>
      </ConsultationContainer>
      <AppearingTitle>
        <Subtitle id='learnMore'>Solutions for all industries</Subtitle>
        <Description>Tested and recommended by leaders of major brands from diverse industries.</Description>
      </AppearingTitle>
      <Testimonials>
        <TestimonialContainer>
          <TestimonialLogo>
            <Image alt="logo" layout='fill' objectFit='contain'  src={konkretLogo}></Image>
          </TestimonialLogo>
          <Testimonial>
          Grupa Konkret invests in three segments of the real estate market: investments in land properties, revitalization of historic buildings and development of residential and commercial properties. 
          We are more than happy to start working with a dynamic and ambitious YEEP Team.
          We believe it is part of real estate market’s future and it will be a bridge between tradition and innovation.
          </Testimonial>
            <TestimonialRole>Paulina Prusiecka, Grupa Konkret</TestimonialRole>
        </TestimonialContainer>
        <TestimonialContainer>
          <TestimonialLogo>
            <Image alt="logo" layout='fill' objectFit='contain'  src={victorLogo}></Image>
          </TestimonialLogo>
          <Testimonial>
            The main reason of partnership with Yepp company, during high art project, was full support guaranteed by the software house. An individual attitude toward our idea has resulted in final success. All in all guys, we are grateful for your 
            significant amount of efforts in order to evaluate Victor Gallery NFT.
          </Testimonial>
          <div style={{display: "flex", alignItems: "center"}}>
            <TestimonialRole>Wiktor Gaweł, Victor Gallery</TestimonialRole>
          </div>
        </TestimonialContainer>
      </Testimonials>
      <AppearingTitle>
        <Subtitle>Packed with advanced features</Subtitle>
        <Description>A complete suite of technological and legal features. Setting you up for success</Description>
      </AppearingTitle>
      <Features>
      <Feature>
          <FeatureIcon>
            <Image alt="icon" layout='fill' objectFit='contain'  src={openaiLogo}></Image>
          </FeatureIcon>
          <FeatureTitle>ChatGPT plugins</FeatureTitle>
          <FeatureDescription>Make your own idea and business accessible through the fastest growing platform ever.</FeatureDescription>
      </Feature>
      <Feature>
          <FeatureIcon>
            <Image alt="icon" layout='fill' objectFit='contain'  src={chatbotIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>AI chatbots</FeatureTitle>
          <FeatureDescription>Optimize your support and empower your websites and apps with AI assistant that will help you satisfy customers</FeatureDescription>
      </Feature>
      <Feature>
          <FeatureIcon>
            <Image alt="icon" layout='fill' objectFit='contain'  src={dataIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>Tokens & NFTs</FeatureTitle>
          <FeatureDescription>Everything can be tokenized, stored on blockchain and monetized. From house to coffee you drink in the morning</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
                <Image alt="icon" layout='fill' objectFit='contain'  src={codeIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>Smart contracts</FeatureTitle>
          <FeatureDescription>Our team of professional web3 devs will develop for you smart contracts with latest technologies</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Image alt="icon" layout='fill' objectFit='contain'  src={desktopIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>Custom websites</FeatureTitle>
          <FeatureDescription>Built with Next.js and serverside rendering. From Figma to code</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Image alt="icon" layout='fill' objectFit='contain'  src={findIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>Market research</FeatureTitle>
          <FeatureDescription>Get to know what your competitors are cooking in web3 and AI space. We will make sure you outpace them in this race</FeatureDescription>
        </Feature>
      </Features>
      <div style={{display: "flex", justifyContent: "center", width: "100%", marginTop: "4vw"}}>
      </div>
      <PricingSection></PricingSection>
      <AppearingTitle>
        <Subtitle>Why build with us?</Subtitle>
        <Description>We are like no other software house, pioneering is our specialty.</Description>
      </AppearingTitle>
      <Features>
        <ReasonContainer>
          <ReasonImage><Image alt="icon" layout='fill' objectFit='cover'  src={"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"}></Image></ReasonImage>
          <ReasonTitle>Uniqueness</ReasonTitle>
          <ReasonDescription>
          The vast majority of software houses is obsolete and specializes in an old way of building software. We are always up-to-date and working on latest technology solutions with latest standards and frameworks.
          </ReasonDescription>
        </ReasonContainer>
        <ReasonContainer>
          <ReasonImage><Image alt="icon" layout='fill' objectFit='cover'  src={"https://images.unsplash.com/photo-1565728744382-61accd4aa148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"}></Image></ReasonImage>
          <ReasonTitle>Expertise</ReasonTitle>
          <ReasonDescription>
            Our CTO is the winner of ETHAmsterdam and ETHWarsaw global hackathons with major prizes from other web3 events in New York, San Francisco, Paris and Berlin. It means, we build great products in short amout of time.
          </ReasonDescription>
        </ReasonContainer>
        <ReasonContainer>
          <ReasonImage><Image alt="icon" layout='fill' objectFit='cover'  src={"https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"}></Image></ReasonImage>
          <ReasonTitle>Creativity & Flexibility</ReasonTitle>
          <ReasonDescription>
            You don&apos;t need an idea on how to level up your business with web3 nor AI. Our creative team will find the best solutions for you and do the necessary market research, so that your company will benefit the most.
          </ReasonDescription>
        </ReasonContainer>
      </Features>
      <AppearingTitle>
        <Subtitle id='contact'>Contact us</Subtitle>
        <Description>No matter if you have an idea or not, we will find a way to take your business to another level.</Description>
      </AppearingTitle>
      <ContactForm onSubmit={(e) => sendEmail(e)}>
        <ContactInput placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} type="text" required></ContactInput>
        <ContactInput placeholder='your@email.com' value={email} onChange={(e) => setEmail(e.target.value)} type="email" required></ContactInput>
        <ContactTextField placeholder='Your message to us...' value={message} onChange={(e) => setMessage(e.target.value)} required></ContactTextField>
        <SubmitButton>
        {!loading ?
          <p>Send</p>
          : 
          <p className='spinner-white'></p>
          }
        </SubmitButton>
      </ContactForm>
      <Footer />
    </div>
  )
}

export default Home

createGlobalStyle`
  body {
    color: black;
    background-image:  url('https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80');
    background-position: center;
    background-size: cover;

  } 
`

const WorldBackground = styled.div`
  width: 100%;
  height: 104vh;
  position: absolute;
  @media only screen and (min-width: 768px) {
    height: 110vh;
  }
`
const MainTitle = styled.h1`
  margin: 0 auto;
  line-height: 12vw;
  padding-top: 40vw;
  position: relative;
  z-index: 1;
  text-align: center;
  font-weight: 900;
  width: 90%;
  font-size: 12vw;
  @media only screen and (min-width: 768px) {
    line-height: 6.5vw;
    padding-top: 10vw;
    font-size: 5.2vw;
    width: 54vw;
  }
`
const MainDescription = styled.p`
  display: none;
  font-weight: 600;
  @media only screen and (min-width: 768px) {
    margin: 0 auto;
    position: relative;
    z-index: 1;
    display: block;
    text-align: center;
    width: 45vw;
    margin-top: 3vw;
    font-size: 1.8vw;
    color: black;
  }
`
const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: center;
  margin-top: 8vw;
  @media only screen and (min-width: 768px) {
    margin-top: 6vw;
  }
`
const ConsultationContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 100;
  position: relative;
  z-index: 100;
  @media only screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: -1.5vw;
    margin-top: 2vw;
  }
`
const ConsultationComponent = styled.a`
  width: 70vw;
  padding: 4vw;
  background-color: #16151B;
  cursor: pointer;
  margin-right: 1vw;
  border-radius: 10px;
  margin-top: 10vw;
  position: relative;
  display: grid; 
  grid-template-columns: 10% 90%; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "phoneIcon consultationText"
    "phoneIcon consultationPrice"; 
    align-items: center;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 10px; 
    padding: 3px; 
    background:linear-gradient(20deg, #5755F9, #69C0FF); 
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude; 
  }
  @media only screen and (min-width: 768px) {
    margin-top: 0vw;
    transition: all 0.3s ease;
    border-radius: 20px;
    grid-template-columns: 15% 85%; 
    width: 20vw;
    padding: 1.5vw;
    position: relative;
    &:hover  {
      transform: scale(1.05);
      box-shadow: 1px 1px 45px #7297FC;
    }
    top: 2vw;
    &:before {
      border-radius: 20px; 
    }
  }
`

const ConsultationPrice = styled.div`
  color: white; 
  grid-area: consultationPrice; 
  font-size: 5vw; 
  text-align: right;
  @media only screen and (min-width: 768px) {
    font-size: 1.5vw; 
  }
`

const PhoneIcon = styled.div`
  width: 8vw;
  height: 8vw;
  grid-area: phoneIcon;
  position: relative;
  @media only screen and (min-width: 768px) {
    width: 2.5vw;
    height: 2.5vw;
  }
`

const ConsultationTitle = styled.h3`
  color: white; 
  font-size: 4vw;
  grid-area: consultationText;
  text-align: right;
  font-weight: 600;
  margin-top: -2vw;
  @media only screen and (min-width: 768px) {
    font-size: 1.1vw; 
    margin-top: -1vw;
  }
`

const ContactButton = styled.a`
        border-radius: 10px; 
        background: linear-gradient(20deg, #5755F9, #69C0FF);
        background: -webkit-linear-gradient(20deg, #5755F9, #69C0FF);
        font-weight: 700;
        color: white;
        cursor: pointer;
        width: 70vw;
        height: 15vw;
        font-size: 4vw;
        transition: all 0.3s ease;
        color: white;
        display:flex;
        align-items: center;
        justify-content: center;
        border: none;
        margin-top: 18vw;
        color: white;
        &:hover  {
            transform: scale(1.05);
            box-shadow: 1px 1px 45px #7297FC;
        }
        @media only screen and (min-width: 768px) {
          background: black;
          font-weight: 600;
          width: 20vw;
          height: 4vw;
          font-size: 1.2vw;
          margin-top: 0vw;
        }
`

const LearnMoreButton = styled.a`
  width: 16vw;
  height: 4vw;
  border-radius: 10px;
  border: none;
  margin-left: 5vw;
  font-size: 1.2vw;
  font-weight: 500;
  display: none;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: white;
  &:hover  {
    transform: scale(1.05);
    box-shadow: 1px 1px 45px #7297FC;
  }
  @media only screen and (min-width: 768px) {
    width: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }
`
const Subtitle = styled.h2`
  width: 16vw;
  margin: 0 auto;
  margin-top: 40vw;
  text-align: center;
  position: relative;
  z-index: 1;
  color: black;
  font-weight: 900;
  width: 90%;
  font-size: 9vw;
  @media only screen and (min-width: 768px) {
    margin-top: 14vw;
    font-size: 3vw;
    width: 50vw;
  }
`

const Description = styled.p`
  margin: 0 auto;
  text-align: center;
  width: 80vw;
  margin-top: 5vw;
  font-weight: 600;
  position: relative;
  z-index: 1;
  font-size: 4vw;
  color: #B7BACA;
  @media only screen and (min-width: 768px) {
    width: 32vw;
    margin-top: 1.5vw;
    font-size: 1.4vw;
  }
`

const Testimonials = styled.div`
  background-color: black;
  margin: 0 auto;
  margin-top: 16vw;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  width: 90vw;
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "."
    "."; 
    @media only screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr; 
      grid-template-rows: 1fr; 
      gap: 0px 0px; 
      grid-template-areas: 
        ". ."; 
      width: 80vw;
      border-radius: 20px;
      margin-top: 5vw;
    }
`

const TestimonialContainer = styled.div`
  padding: 12vw 8vw 12vw 8vw;
  border-radius: 10px;
  border-top: 1px solid rgb(70, 70, 70);
  @media only screen and (min-width: 768px) {
    border-radius: 20px;
    border-left: 1px solid rgb(70, 70, 70);
    border-top: none;
    padding: 4vw 3vw 3vw 3vw;
  }
`

const TestimonialLogo = styled.div`
  width: 40vw;
  height: 12vw;
  position: relative;
  border-radius: 10px;
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  @media only screen and (min-width: 768px) {
    width: 8vw;
    height: 3vw;
  }
`

const Testimonial = styled.div`
  color: #D1D1D1;
  margin-top: 6vw;
  font-size: 4vw;
  @media only screen and (min-width: 768px) {
    margin-top: 2vw;
    font-size: 1.2vw;
  }
`
// const TestimonialProfileImage = styled.div`
//   width: 12vw;
//   height: 12vw;
//   border-radius: 50%;
//   background-color: gray;
//   margin-top: 6vw;
//   @media only screen and (min-width: 768px) {
//     width: 3vw;
//     height: 3vw;
//     margin-top: 2vw;
//   }
// `
const TestimonialRole = styled.div`
  color: #D1D1D1;
  margin-top: 6vw;
  @media only screen and (min-width: 768px) {
    margin-top: 2vw;
  }
`

const Features = styled.div`
  width: 100%;
  margin-top: 8vw;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 5vw;
  }
`

const Feature = styled.div`
  padding: 12vw 8vw 10vw 8vw;
  width: 90vw;
  border-radius: 10px;
  background-color: black;
  margin-top: 8vw;
  @media only screen and (min-width: 768px) {
    width: 25vw;
    height: 18vw;
    padding: 3vw 2vw 2vw 2vw;
    margin: 0 1vw 2vw 1vw;
    border-radius: 20px;
  }
`

const FeatureIcon = styled.div`
  width: 12vw;
  height: 12vw;
  position: relative;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media only screen and (min-width: 768px) {
    width: 3vw;
    height: 3vw;
  }
`

const FeatureTitle = styled.h3`
  color: white;
  font-size: 5vw;
  margin-top: 6vw;
  font-weight: 500;
  @media only screen and (min-width: 768px) {
    font-size: 1.5vw;
    margin-top: 1.5vw;
  }
`

const FeatureDescription = styled.p`
  color: white;
  font-size: 4vw;
  margin-top: 4vw;
  color: #D1D1D1;
  @media only screen and (min-width: 768px) {
    font-size: 1vw;
    margin-top: 0.5vw;
  }
`

const ReasonContainer = styled.div`
  padding: 1vw 6vw 10vw 6vw;
  width: 90vw;
  border-radius: 10px;
  background-color: black;
  margin-top: 8vw;
  @media only screen and (min-width: 768px) {
    width: 25vw;
    height: 31vw;
    padding: 1vw 1vw 2vw 1vw;
    margin: 0vw 2vw 0 2vw;
    border-radius: 20px;
  }
`
const ReasonImage = styled.div`
  width: 100%;
  height: 40vw;
  border-radius: 10px;
  margin-top: 8vw;
  position: relative;
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    margin: 0 auto;
    width: 23vw;
    height: 15vw;
    padding: 0;
    border-radius: 20px;
  }
`
const ReasonTitle = styled.h3`
color: white;
font-size: 6vw;
margin-top: 6vw;
font-weight: 500;
@media only screen and (min-width: 768px) {
  font-size: 1.8vw;
  margin-top: 1.5vw;
}
`
const ReasonDescription = styled.p`
  color: white;
  font-size: 4vw;
  margin-top: 4vw;
  color: #D1D1D1;
  @media only screen and (min-width: 768px) {
    font-size: 1vw;
    margin-top: 0.5vw;
    width: 95%;
  }
`

const ContactForm = styled.form`
  width: 90vw;
  padding 7vw 8vw 7vw 8vw;
  background-color: black;
  position: relative;
  z-index: 1;
  margin: 0 auto;
  margin-top: 8vw;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    margin-top: 5vw;
    border-radius: 20px;
    padding: 4vw 3vw 3vw 3vw;
    justify-content: left;
  }
`

const ContactInput = styled.input`
  width: 100%;
  border-radius: 10px;
  margin: 5vw 0vw 5vw 0vw;
  border: none;
  height: 15vw;
  padding: 0 3vw 0 3vw;
  color: white;
  font-size: 4vw;
  background-color: #25222B;
  @media only screen and (min-width: 768px) {
    width: 46%;
    height: 4vw;
    font-size: 1.2vw;
    padding: 0 1vw 0 1vw;
    margin: 0vw 2vw 0vw 0vw;
  }
`

const ContactTextField = styled.textarea`
  width: 100%;
  border-radius: 10px;
  color: white;
  border: none;
  height: 35vw;
  padding: 3vw 3vw 0 3vw;
  font-size: 4vw;
  background-color: #25222B;
  margin: 5vw 0 5vw 0;
  @media only screen and (min-width: 768px) {
    margin: 2vw 0 1vw 0;
    height: 10vw;
    font-size: 1.2vw;
    padding: 1vw 1vw 0 1vw;
  }
`

const SubmitButton = styled.button`
  width: 80%;
  border-radius: 10px;
  border: none;
  color: white;
  display: flex;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  height: 15vw;
  font-size: 4vw;
  background: linear-gradient(20deg, #5755F9, #69C0FF);
  background: -webkit-linear-gradient(20deg, #5755F9, #69C0FF);
  font-weight: 500;
  cursor: pointer;
  margin: 5vw 0 5vw 0;
  @media only screen and (min-width: 768px) {
    height: 4vw;
    font-size: 1.2vw;
    width: 20%;
    margin: 2vw 0vw 0vw 0;
    transition: all 0.3s ease;
    &:hover  {
      transform: scale(1.05);
    }
  }
`