import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import {
  BackImage,
  HorizontalLine,
  InputElement,
  InputLabel,
  SignAndLoginHeading,
  SignAndLoginInHeadingContainer,
  ErrorMessage,
  PasswordDescriptionContainer,
} from "../SignIn/styledComponents";
import {
  AlreadyHaveAccountTextSpan,
  CreateAccountDescription,
  CreateAccountFormContainer,
  CreateAccountHeading,
  CreateAccountTextContainer,
  SignUpMainContainer,
  TermsAndConditionsText,
} from "./styledComponents";
import { GlobalButton } from "../AllYourFavorites/styledComponents";
import { fetchApi } from "../../utils/fetchApi";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();

  const onChangeFullName = (event: ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
    if (event.target.value) {
      setFullNameError("");
    }
  };

  const onChangeEmailAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(event.target.value);
    if (event.target.value) {
      setEmailError("");
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
  };

  const handleAlreadyHaveAccount = () => {
    navigate("/signIn");
  };

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let hasError = false;

    setFullNameError("");
    setEmailError("");
    setPasswordError("");
    setApiError("");

    if (!fullName) {
      setFullNameError("Full Name is required");
      hasError = true;
    }

    if (!emailAddress) {
      setEmailError("Email is required");
      hasError = true;
    } else if (!emailAddress.includes("@")) {
      setEmailError("Please enter a valid email");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      hasError = true;
    }

    if (!hasError) {
      try {
        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.post(
          `${fetchApi}qb_users/create/user/`,
          {
            username: fullName,
            email: emailAddress,
            password: password,
          },
          { headers }
        );

        const accessToken = response.data.access_token;
        console.log(accessToken);
        Cookies.set("access_token", accessToken, { expires: 30, secure: true });

        console.log("Account created successfully:", response.data);
        navigate("/TodaysMenu");
      } catch (error: any) {
        if (error.response) {
          console.error("Error creating account:", error.response.data);
          setApiError(
            error.response.data.error ||
              "Failed to create account. Please try again."
          );
        } else {
          setApiError("Failed to create account. Please try again.");
          console.error("Error creating account:", error);
        }
      }
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SignUpMainContainer>
      <SignAndLoginInHeadingContainer>
        <BackImage src="/Images/back.svg" onClick={handleAlreadyHaveAccount} />
        <SignAndLoginHeading>Create Account</SignAndLoginHeading>
      </SignAndLoginInHeadingContainer>

      <CreateAccountTextContainer>
        <CreateAccountHeading>Create Account</CreateAccountHeading>
        <CreateAccountDescription>
          Enter your Name, Email, and Password for sign up.
          <AlreadyHaveAccountTextSpan onClick={handleAlreadyHaveAccount}>
            Already have an account?
          </AlreadyHaveAccountTextSpan>
        </CreateAccountDescription>
      </CreateAccountTextContainer>

      <CreateAccountFormContainer onSubmit={handleSignUp}>
        <>
          <InputLabel>FULL NAME</InputLabel>
          <InputElement
            type="text"
            value={fullName}
            onChange={onChangeFullName}
          />
          <HorizontalLine />
          {fullNameError && <ErrorMessage>{fullNameError}</ErrorMessage>}
        </>
        <>
          <InputLabel>EMAIL ADDRESS</InputLabel>
          <InputElement
            type="text"
            value={emailAddress}
            onChange={onChangeEmailAddress}
          />
          <HorizontalLine />
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        </>
        <>
          <InputLabel>PASSWORD</InputLabel>
          <PasswordDescriptionContainer>
            <InputElement
              type={showPassword ? "password" : "text"}
              value={password}
              onChange={onChangePassword}
            />
            <div onClick={togglePassword}>
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </PasswordDescriptionContainer>
          {/* <input type="hidden" value={password} /> */}
          <HorizontalLine />
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        </>
        <GlobalButton type="submit">SIGN UP</GlobalButton>
        {apiError && <ErrorMessage>{apiError}</ErrorMessage>}{" "}
      </CreateAccountFormContainer>
      <TermsAndConditionsText>
        By Signing up you agree to our Terms Conditions & Privacy Policy.
      </TermsAndConditionsText>
    </SignUpMainContainer>
  );
};

export default SignUp;
