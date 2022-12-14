import { CheckIcon } from '@heroicons/react/24/outline'
import ColorfulText from './ColorfulText'
import Image from 'next/image'
import pear from "../public/img/pear.png";
import styled from 'styled-components';

const hobbyFeatures = ['Your own idea', 'Simple website', 'Free consultations']
const growthFeatures = ['Market research', 'Project based on research', 'Custom, responsive website', 'Free consultations', 'Social media presence']
const scaleFeatures = [
  'Everything from Growth plan',
  'Long term support',
  'Courses for staff',
]

export default function PricingSection() {
  return (
    <PricingBackground>
        <div className="text-center">
          <PreTitle>
          <Logo>
            <Image alt="stayImage" layout='fill' objectFit='contain'  src={pear}></Image>
          </Logo>
          <h2 style={{width: "100%"}}>Pricing</h2>
          </PreTitle>
          <Title>
            The right <ColorfulText>price for you</ColorfulText>, whatever you do
          </Title>
          <Description>
            We are flexible and open for negotiations. Pitch to us your idea and get an individual plan!
          </Description>
        </div>
        <div className='flex justify-center'>
          <ContactButton href='#contact'>Contact us!</ContactButton> 
        </div>
    </PricingBackground>
  )
}

const PricingBackground = styled.div`
  margin-top: 40vw;
  width: 100%;
  position: relative;
  z-index: 1;
  padding: 12vw 4vw 16vw 4vw;
  background-color: black;
  @media only screen and (min-width: 768px) {
    padding: 6vw 4vw 8vw 4vw;
    margin-top: 14vw;
  }
`

const PreTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10vw;
  color: #D9D7E6;
  font-weight: 800;
  font-size: 6.5vw;
  @media only screen and (min-width: 768px) {
    margin-bottom: 4vw;
    font-size: 2.5vw;
  }
`

const Title = styled.h2`
  color: white;
  font-size: 8vw;
  font-weight: 800;
  @media only screen and (min-width: 768px) {
    font-size: 4vw;
  }

`
const Logo = styled.div`
  position: relative;
  width: 10vw;
  height: 10vw;
  margin-bottom: 2vw;
  margin-right: 1vw;
  @media only screen and (min-width: 768px) {
    width: 4vw;
    height: 4vw;
    margin-right: 0.6vw;
    margin-bottom: 0.5vw;
  }
`

const Description = styled.p`
  font-size: 4vw;
  color: #D9D7E6;
  font-weight: 600;
  margin-top: 8vw;
  @media only screen and (min-width: 768px) {
    margin-top: 1vw;
    font-size: 1.4vw;
  }

`

const ContactButton = styled.a`
        border-radius: 10px; 
        background: linear-gradient(20deg, #5755F9, #69C0FF);
        background: -webkit-linear-gradient(20deg, #5755F9, #69C0FF);
        font-weight: 700;
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
          font-weight: 600;
          width: 16vw;
          height: 4vw;
          font-size: 1.2vw;
          margin-top: 7vw;
        }
`
