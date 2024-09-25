import styled from "styled-components";
import { gothicA1Regular, gothicA1SemiBold } from "../../Constants/fontStyles";

export const ProfileMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 24px;
`;

export const ProfileHeadingContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  margin-top: 24px;
`;

export const ProfileHeading = styled.h1`
  ${gothicA1SemiBold}
  color: var(--Main-Color, #010f07);
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 28px;
  line-height: 42px; /* 123.529% */
  margin-bottom: 8px;
`;

export const ProfileHeadingDescription = styled.p`
  ${gothicA1Regular}
  color: var(--Body-Text, #868686);
  font-size: 16px;
  line-height: 24px; /* 150% */
  text-align: start;
  margin: 0px;
`;
