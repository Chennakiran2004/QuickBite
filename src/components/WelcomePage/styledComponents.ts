import styled from "styled-components";
import {
  gothicA1Bold,
  gothicA1Regular,
  gothicA1SemiBold,
} from "../../Constants/fontStyles";

export const MainContainer = styled.div`
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

export const CarouselFirstImage = styled.img`
  position: absolute;
  top: 24%;
  width: 66%;
  height: 33%;
`;

export const DescriptionContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 90%;
  margin: 0px;
`;

export const DescriptionHeading = styled.h3`
  ${gothicA1Bold}
  color: var(--UI-Gray-80, #3a3a3a);
  text-align: center;
  font-family: Poppins;
  font-size: 28px;
  line-height: 32px;
  margin: 0px;
`;

export const DescriptionText = styled.p`
  ${gothicA1Regular}
  color: #3a3a3a;
  text-align: center;
  font-size: 16px;
  line-height: 24px; /* 150% */
`;

export const GetStartedButton = styled.button`
  ${gothicA1SemiBold}
  border-radius: 8px;
  background: var(--Active-Color---1, #eea734);
  color: #fff;
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 14px;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.8px;
  text-transform: uppercase;
  width: 100%;
  border-width: 0px;
  height: 48px;
  margin-top: 12%;
`;
