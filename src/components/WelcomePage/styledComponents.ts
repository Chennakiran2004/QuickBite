import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; /* Added to position elements inside relative to this container */
  width: 100%;
  height: 100vh; /* Adjust based on your needs */
`;


export const BackgroundImage = styled.img`
width: 106%;
height: 53%;
position: relative;
top: -14%;
right: 12%;
flex-shrink: 0;
`;


export const CarouselFirstImage = styled.svg`
position: absolute;
top: 24%;
width: 66%;
height: 33%;
`

export const DescriptionContainer = styled.div`
display: inline-flex;
flex-direction: column;
align-items: center;
gap: 16px;
width: 90%;
margin: 0px;
`

export const DescriptionHeading = styled.h3`
color: var(--UI-Gray-80, #3A3A3A);
text-align: center;
font-family: Poppins;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 32px;
margin: 0px;`


export const DescriptionText = styled.p`
color: #3A3A3A;
text-align: center;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */`

export const GetStartedButton = styled.button`
border-radius: 8px;
background: var(--Active-Color---1, #EEA734);
color: #FFF;
text-align: center;
font-feature-settings: 'liga' off, 'clig' off;
font-family: "Yu Gothic UI";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 171.429% */
letter-spacing: 0.8px;
text-transform: uppercase;
width: 100%;
border-width: 0px;
height: 48px;
margin-top: 12%;
`