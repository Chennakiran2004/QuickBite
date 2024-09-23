import styled from "styled-components";
import { gothicA1SemiBold } from "../../Constants/fontStyles";

export const TodaysMenuMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 16px;
  margin: auto;
`;

export const TodaysMenuSubContainer = styled.div`
  width: 96%;
  margin: auto;
`;

export const TodaysMenuHeading = styled.h1`
  ${gothicA1SemiBold}
  color: var(--Main-Color, #010f07);
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 24px;
  line-height: 32px; /* 133.333% */
`;
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
`;

export const CheckOutPopupHomeContainer = styled.div`
  width: 96%;
  margin: auto;
  margin-bottom: 8px;
`;
