import styled from "styled-components";

export const SignUpMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 88%;
  height: 100vh;
  margin: auto;
`;

export const CreateAccountTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  text-align: start;
`;

export const CreateAccountHeading = styled.h1`
  color: var(--Main-Color, #010f07);
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-family: "Yu Gothic UI";
  font-size: 34px;
  font-weight: 300;
  line-height: 42px; /* 123.529% */
`;

export const CreateAccountDescription = styled.p`
  color: var(--Body-Text, #868686);
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-family: "Yu Gothic UI";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const AlreadyHaveAccountTextSpan = styled.span`
  color: var(--Active-Color---1, #eea734);
  padding-left: 8px;
`;

export const CreateAccountFormContainer = styled.form`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const TermsAndConditionsText = styled.p`
  color: var(--Body-Text, #868686);
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-family: "Yu Gothic UI";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.4px;
`;
