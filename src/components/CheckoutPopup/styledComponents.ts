import styled from "styled-components";

export const CheckoutPopupMainContainer = styled.div`
display: flex;
padding: 8px;
justify-content: space-between;
align-items: center;
align-self: stretch;
border-radius: 16px;
background: #EEA734;
`

export const CheckoutPopupTotalContainer = styled.div`
display: flex;
align-items: center;
gap: 12px;
`

export const ItemsCount = styled.p`
color: #FFF;
font-feature-settings: 'liga' off, 'clig' off;
font-family: "Yu Gothic UI";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; 
/* letter-spacing: -0.28px; */
`

export const VerticalLine = styled.div`
background: #FFF;
width: 1px;
height: 16px;
`

export const TotalItemsPrice = styled.p`
color: #FFF;
font-feature-settings: 'liga' off, 'clig' off;
font-family: "Yu Gothic UI";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
letter-spacing: -0.28px;
`

export const CheckoutPopupButtonContainer = styled.div`
display: flex;
align-items: center;
gap: 8px;
`

export const CheckoutImage = styled.img`
width: 24px;
height: 24px;
`

export const CheckoutText = styled.p`
color: #FFF;
font-feature-settings: 'liga' off, 'clig' off;
font-family: "Yu Gothic UI";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */
letter-spacing: -0.28px;
`