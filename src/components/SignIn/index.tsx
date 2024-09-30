import { ChangeEvent, useState } from "react";

import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

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
} from "./styledComponents";

import { GlobalButton } from "../AllYourFavorites/styledComponents";
import axios from "axios";
import { fetchApi } from "../../utils/fetchApi";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [maskedPassword, setMaskedPassword] = useState("");
  const [userNameError, serUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
    if (event.target.value) {
      serUserNameError("");
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
    setMaskedPassword("*".repeat(inputPassword.length));
    if (inputPassword) {
      setPasswordError("");
    }
  };

  const onsubmitSignIn = async () => {
    serUserNameError("");
    setPasswordError("");
    setApiError("");

    let hasError = false;

    if (!userName) {
      serUserNameError("User Name is required");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    }

    if (!hasError) {
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

        Cookies.set("access_token", access_token, {
          expires: 30,
          secure: true,
        });

        console.log("Signed in successfully:", response.data);

        navigate("/TodaysMenu");
      } catch (error: any) {
        if (error.response) {
          setApiError(
            error.response.data.error || "Failed to sign in. Please try again."
          );
          console.error("Error during sign-in:", error.response.data);
        } else {
          setApiError("Failed to sign in. Please try again.");
          console.error("Error during sign-in:", error);
        }
      }
    }
  };

  const onClickCarousel = () => {
    navigate("/");
  };

  const handleCreateAccount = () => {
    navigate("/signUp");
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
        {userNameError && (
          <ErrorMessage data-testid="email-error">{userNameError}</ErrorMessage>
        )}
        <InputLabel data-testid="password">PASSWORD</InputLabel>
        <InputElement
          type="text"
          data-testid="password-input"
          onChange={onChangePassword}
          value={maskedPassword}
        />
        <input type="hidden" value={password} />
        <HorizontalLine />
        {passwordError && (
          <ErrorMessage data-testid="password-error">
            {passwordError}
          </ErrorMessage>
        )}
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
        {apiError && <ErrorMessage>{apiError}</ErrorMessage>}{" "}
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
