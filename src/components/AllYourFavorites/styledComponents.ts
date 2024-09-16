import styled from "styled-components";

export const AllYourFavoritesContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative; 
width: 100%;
height: 100vh; 
`


export const AllYourFavoritesImage = styled.img`
position: relative;
top: 20%;
padding-left: 32px;
`

export const AllYourFavoritesDescriptionContainer = styled.div`
display: inline-flex;
flex-direction: column;
align-items: center;
gap: 16px;
width: 90%;
margin: 0px;
margin-top: 24%;
`

export const AllYourFavoritesContainerHeading = styled.h1`
color: var(--UI-Gray-80, #3A3A3A);
text-align: center;
font-family: Poppins;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 32px;
margin: 0px;
margin-top: 8px;
`

export const AllYourFavoritesContainerDescription = styled.p`
color: #3A3A3A;
text-align: center;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;`

export const GlobalButton = styled.button`
border-radius: 8px;
background: var(--Active-Color---1, #EEA734);
color: #FFF;
text-align: center;
font-feature-settings: 'liga' off, 'clig' off;
font-family: "Yu Gothic UI";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 24px;
letter-spacing: 0.8px;
text-transform: uppercase;
width: 100%;
border-width: 0px;
height: 48px;
margin-top: 8%;
`