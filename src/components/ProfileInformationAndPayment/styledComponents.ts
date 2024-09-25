import styled from "styled-components";

import {
  gothicA1Light,
  gothicA1Regular,
  gothicA1SemiBold,
} from "../../Constants/fontStyles";

export const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
`;

export const PersonalInfoItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

export const PersonalInfoItemImage = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const PersonalInfoItemSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const PersonalInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const PersonalInfoItemHeading = styled.p`
  ${gothicA1Light}
  color: #010f07;
  font-size: 16px;
  line-height: 16px; /* 100% */
  letter-spacing: -0.28px;
  margin: 0px;
`;

export const PersonalInfoItemDescription = styled.p`
  ${gothicA1Regular}
  color: #010f07;
  font-size: 14px;
  line-height: 12px; /* 85.714% */
  letter-spacing: -0.28px;
  opacity: 0.54;
  margin: 0px;
`;

export const PersonalInfoItemViewMoreButton = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  opacity: 0.84;
  rotate: 180deg;
`;

export const MoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin: auto;
`;

export const MoreContainerHeading = styled.h1`
  ${gothicA1SemiBold}
  color: var(--Main-Color, #010f07);
  font-size: 16px;
  line-height: 24px; /* 150% */
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;
