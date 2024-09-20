import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

export const ModalBackground = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
    background-color: #fff;
    border-radius: 10px;
    z-index: 1000;
    overflow: scroll;
    padding-bottom: 30px;
`;

export const ModalContent = styled.div`
    padding: 20px;
    height: 50vh;
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
`;

export const ModalHeading = styled.h1`
    color: var(--Main-Color, #010F07);
    text-align: center;
    font-family: "Yu Gothic UI";
    font-size: 24px;
    font-weight: 600;
    line-height: 24px; /* 150% */
    letter-spacing: -0.4px;
`;

export const ModalCloseButton = styled.button`
    position: absolute; 
    left: 0; 
    cursor: pointer;
    background: none;
    border: none;
    font-size: 16px;
`;

export const ModalBody = styled.div`
    width: 96%;
`;

export const ModalUnorderedList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
    padding: 0px;
`;

export const ModalListItem = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const ModalListItemContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`;

export const ModalItemQuantity = styled.p`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 0.5px solid #868686;
    opacity: 0.3;
    background: #FFF;
    color: #F8B64C;
    font-family: "Yu Gothic UI";
    font-size: 16px;
    font-weight: 300;
    line-height: 24px; /* 150% */
    letter-spacing: -0.28px;
`;

export const ModalItemName = styled.p`
    color: #010F07;
    font-family: "Yu Gothic UI";
    font-size: 18px;
    font-weight: 300;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.315px;
    margin: 0;
`;

export const ModalItemPrice = styled.p`
color: #F8B64C;
text-align: right;
font-family: "Yu Gothic UI";
font-size: 14px;
font-weight: 600;
line-height: 20px;
letter-spacing: 0.6px;
`;

export const ModalHorizontalLine = styled.hr`
background: rgba(103, 103, 103, 0.10);
height: 1px;
width: 100%;
border: none; 
`;

export const ModalFooter = styled.div`
    margin-bottom: 30px;
`;

export const ModalItemDescriptionContainer = styled.div`
display: flex;
flex-direction: column;
text-align: start;
`

export const PlaceOrderButton = styled.button`
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
margin-bottom: 8%;
`