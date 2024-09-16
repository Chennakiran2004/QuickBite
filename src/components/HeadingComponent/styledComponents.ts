import styled from "styled-components";


export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 10%; /* Adjust based on where you want the heading to be */
  right: -13%;
  transform: translateX(-50%); /* Center the heading horizontally */
  z-index: 1; /* Ensure it stays on top of the image */
  gap: 30px;
`;



export const Logo = styled.svg`
width: 48px;
height: 48px;
flex-shrink: 0;
`

export const LogoHeading = styled.h1`
color: #000;
font-feature-settings: 'liga' off;
font-family: Poppins;
font-size: 37px;
font-style: normal;
font-weight: 700;
line-height: 40px; /* 108.108% */`