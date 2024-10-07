import { ChangeEvent, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { fetchApi } from "../../utils/fetchApi";
import { getCookie, setCookie } from "../../utils/StorageUtilites";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import {
  BackImage,
  InputLabel,
  InputElement,
  ForgotPassword,
  FormContainer,
  HorizontalLine,
  SignAndLoginHeading,
  SignAndLoginInHeadingContainer,
  SignInDescription,
  SignInHeading,
  SignInMainContainer,
  SignInTextContainer,
  ErrorMessage,
  SignInCreateAccountContainer,
  DontHaveAccountText,
  CreateNewAccountButton,
  PasswordDescriptionContainer,
} from "./styledComponents";

import { GlobalButton } from "../AllYourFavorites/styledComponents";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();

  const jwtToken = getCookie();
  if (jwtToken) {
    return <Navigate to="/TodaysMenu" />;
  }

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
  };

  const onSubmitSuccess = (accessToken: string) => {
    setCookie("access_token", accessToken, { expires: 30, secure: true });
    navigate("/TodaysMenu");
  };

  const onSubmitFailure = (errorMsg: string) => {
    setApiError(errorMsg);
  };

  const onsubmitSignIn = async () => {
    setApiError("");

    try {
      const headers = {
        "Content-Type": "application/json",
      };

      const response = await axios.post(
        `${fetchApi}qb_users/signin/user/`,
        {
          username: userName,
          password: password,
        },
        { headers }
      );

      const { access_token } = response.data;
      onSubmitSuccess(access_token);
    } catch (error: any) {
      if (error.response) {
        onSubmitFailure(
          error.response.data.error || "Failed to sign in. Please try again."
        );
        console.error("Error during sign-in:", error.response.data);
      } else {
        onSubmitFailure("Failed to sign in. Please try again.");
        console.error("Error during sign-in:", error);
      }
    }
  };

  const onClickCarousel = () => {
    navigate("/");
  };

  const handleCreateAccount = () => {
    navigate("/signUp");
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <SignInMainContainer data-testid="signInContainer">
      <SignAndLoginInHeadingContainer data-testid="heading-container">
        <BackImage
          data-testid="backImage"
          onClick={onClickCarousel}
          src="/Images/back.svg"
        />
        <SignAndLoginHeading data-testid="signIn-text">
          Sign In
        </SignAndLoginHeading>
      </SignAndLoginInHeadingContainer>
      <SignInTextContainer data-testid="text-container">
        <SignInHeading data-testid="text-heading">
          Welcome to QuickBite Food Services
        </SignInHeading>
        <SignInDescription data-testid="text-description">
          Enter your Phone number or Email <br /> address for sign in. Enjoy
          your food :)
        </SignInDescription>
      </SignInTextContainer>
      <FormContainer data-testid="form-container">
        <InputLabel data-testid="email">USER NAME</InputLabel>
        <InputElement
          data-testid="email-input"
          value={userName}
          onChange={onChangeEmail}
          type="text"
        />
        <HorizontalLine />
        <InputLabel data-testid="password">PASSWORD</InputLabel>
        <PasswordDescriptionContainer>
          <InputElement
            type={showPassword ? "password" : "text"}
            data-testid="password-input"
            onChange={onChangePassword}
            value={password}
          />
          <div onClick={togglePassword}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </PasswordDescriptionContainer>
        {/* <input type="hidden" value={password} /> */}
        <HorizontalLine />
        <ForgotPassword data-testid="forgot-password">
          Forgot Password?
        </ForgotPassword>
        <GlobalButton
          data-testid="signIn-button"
          type="button"
          onClick={onsubmitSignIn}
        >
          SIGN IN
        </GlobalButton>
        {apiError && <ErrorMessage>{apiError}</ErrorMessage>}
      </FormContainer>
      <SignInCreateAccountContainer>
        <DontHaveAccountText>Don't have an account?</DontHaveAccountText>
        <CreateNewAccountButton onClick={handleCreateAccount}>
          Create new account
        </CreateNewAccountButton>
      </SignInCreateAccountContainer>
    </SignInMainContainer>
  );
};

export default SignIn;
