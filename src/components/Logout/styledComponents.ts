import styled from "styled-components";
import { gothicA1Light } from "../../Constants/fontStyles";

export const LogoutMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin: auto;
  gap: 16px;
`;

export const LogoutImage = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  opacity: 0.54;
`;

export const LogoutText = styled.p`
  ${gothicA1Light}
  color: #010f07;
  font-size: 16px;
  line-height: 24px; /* 150% */
  letter-spacing: -0.28px;
`;
