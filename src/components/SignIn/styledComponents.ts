import styled from "styled-components";

export const SignInMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 88%;
  margin: auto;
  height: 100vh;
`;

export const SignAndLoginInHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-top: 8%;
`;

export const BackImage = styled.img`
  height: 24px;
  width: 24px;
  position: absolute;
  left: 0;
`;

export const SignAndLoginHeading = styled.h3`
  color: var(--Main-Color, #010f07);
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-family: "Yu Gothic UI";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1px;
`;

export const SignInTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  text-align: start;
`;

export const SignInHeading = styled.h1`
  color: #000;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px; /* 161.538% */
  letter-spacing: 0.22px;
`;

export const SignInDescription = styled.p`
  color: var(--Body-Text, #868686);
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-family: "Yu Gothic UI";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 0px;
`;
export const FormContainer = styled.form`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const InputLabel = styled.label`
  color: var(--Body-Text, #868686);
  font-family: "Yu Gothic UI";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px; /* 166.667% */
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export const InputElement = styled.input`
  color: var(--Main-Color, #010f07);
  font-family: "Yu Gothic UI";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.28px;
  width: 80%;
  margin-top: 16px;
  outline: none;
  border: none;
`;

export const HorizontalLine = styled.hr`
  /* height: 1px; */
  width: 100%;
  background-color: #ffffff;
`;

export const ForgotPassword = styled.button`
  color: var(--Main-Color, #010f07);
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-family: "Yu Gothic UI";
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  text-align: center;
  width: 100%;
  border: none;
  background: none;
  margin-top: 16px;
  opacity: 0.64;
`;

export const SignInCreateAccountContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const DontHaveAccountText = styled.p`
  color: var(--Main-Color, #010f07);
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-family: "Yu Gothic UI";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  opacity: 0.64;
`;

export const CreateNewAccountButton = styled.button`
  color: var(--Active-Color---1, #eea734);
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-family: "Yu Gothic UI";
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px; /* 166.667% */
  outline: none;
  border: none;
  background: none;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;
