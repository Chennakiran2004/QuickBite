import styled from "styled-components";


export const TodaysMenuMainContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
padding-top: 16px;
margin: auto;
`

export const TodaysMenuSubContainer = styled.div`
width: 96%;
margin: auto;
`

export const TodaysMenuHeading = styled.h1`
color: var(--Main-Color, #010F07);
text-align: center;
font-feature-settings: 'liga' off, 'clig' off;
font-family: "Yu Gothic UI";
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 32px; /* 133.333% */
`
export const TabBarContainer = styled.div`
  position: fixed;
  width: 100vw;
  bottom: 0;
`;

export const CategoryDropDownListContainer = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
margin-bottom: 160px;
`

export const CheckOutPopupHomeContainer = styled.div`
width: 96%;
margin: auto;
margin-bottom: 8px;
`