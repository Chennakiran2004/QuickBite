import styled from "styled-components";
import { gothicA1SemiBold } from "../../Constants/fontStyles";

export const PreviousOrdersMainContainer = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export const PreviousOrdersHeading = styled.h1`
  ${gothicA1SemiBold}
  color: var(--Main-Color, #010f07);
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 24px;
  line-height: 24px; /* 150% */
  letter-spacing: -0.4px;
  margin: 0px;
  padding-top: 24px;
`;

export const PreviousOrdersListContainer = styled.div`
  height: 100%;
  margin-bottom: 160px;
`;
