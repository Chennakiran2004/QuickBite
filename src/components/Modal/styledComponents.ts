import styled from "styled-components";
import {
  gothicA1Bold,
  gothicA1Light,
  gothicA1SemiBold,
} from "../../Constants/fontStyles";

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
  ${gothicA1SemiBold}
  color: var(--Main-Color, #010f07);
  text-align: center;
  font-size: 24px;
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
  align-items: center;
  gap: 24px;
`;

export const ModalItemQuantity = styled.p`
  ${gothicA1Light}
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 0.5px solid #868686;
  opacity: 0.9;
  background: #fff;
  color: #f8b64c;
  font-size: 16px;
  line-height: 24px; /* 150% */
`;

export const ModalItemName = styled.p`
  ${gothicA1Light}
  color: #010f07;
  font-size: 18px;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.315px;
  margin: 0;
`;

export const ModalItemPrice = styled.p`
  ${gothicA1SemiBold}
  color: #f8b64c;
  text-align: right;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.6px;
`;

export const ModalHorizontalLine = styled.hr`
  background: rgba(103, 103, 103, 0.1);
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
`;

export const PlaceOrderButton = styled.button`
  ${gothicA1Bold}
  border-radius: 8px;
  background: var(--Active-Color---1, #eea734);
  color: #fff;
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  width: 100%;
  border-width: 0px;
  height: 48px;
  margin-top: 8%;
  margin-bottom: 8%;
`;
