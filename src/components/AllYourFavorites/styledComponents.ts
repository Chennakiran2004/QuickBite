import styled from "styled-components";

import { gothicA1Bold, gothicA1Regular } from "../../Constants/fontStyles";

export const AllYourFavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const AllYourFavoritesImage = styled.img`
  position: relative;
  top: 20%;
  padding-left: 32px;
`;

export const AllYourFavoritesDescriptionContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 90%;
  margin: 0px;
  margin-top: 24%;
`;

export const AllYourFavoritesContainerHeading = styled.h1`
  ${gothicA1Bold}
  color: var(--UI-Gray-80, #3a3a3a);
  text-align: center;
  font-size: 28px;
  line-height: 32px;
  margin: 0px;
  margin-top: 8px;
`;

export const AllYourFavoritesContainerDescription = styled.p`
  color: #3a3a3a;
  text-align: center;
  font-size: 16px;
  line-height: 24px;

  ${gothicA1Regular}
`;

export const GlobalButton = styled.button`
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
  z-index: 3;
`;
