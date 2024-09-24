import { ChangeEvent, useState } from "react";

import { useNavigate } from "react-router-dom";

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
} from "./styledComponents";

import { GlobalButton } from "../AllYourFavorites/styledComponents";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [maskedPassword, setMaskedPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value) {
      setEmailError("");
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

  const validEmail = "Q";
  const validPassword = "Q";

  const onsubmitSignIn = () => {
    setEmailError("");
    setPasswordError("");

    let hasError = false;

    if (!email) {
      setEmailError("Email is required");
      hasError = true;
    } else if (email !== validEmail) {
      setEmailError("Invalid email");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    } else if (password !== validPassword) {
      setPasswordError("Invalid password");
      hasError = true;
    }

    if (!hasError) {
      navigate("/TodaysMenu");
    }
  };

  const onClickCarousel = () => {
    navigate("/");
  };

  return (
    <SignInMainContainer>
      <SignAndLoginInHeadingContainer>
        <BackImage onClick={onClickCarousel} src="/Images/back.svg" />
        <SignAndLoginHeading>Sign In</SignAndLoginHeading>
      </SignAndLoginInHeadingContainer>
      <SignInTextContainer>
        <SignInHeading>Welcome to QuickBite Food Services</SignInHeading>
        <SignInDescription>
          Enter your Phone number or Email <br /> address for sign in. Enjoy
          your food :)
        </SignInDescription>
      </SignInTextContainer>
      <FormContainer onSubmit={(event) => event.preventDefault()}>
        <InputLabel>EMAIL ADDRESS</InputLabel>
        <InputElement value={email} onChange={onChangeEmail} type="text" />
        <HorizontalLine />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}

        <InputLabel>PASSWORD</InputLabel>
        <InputElement
          type="text"
          onChange={onChangePassword}
          value={maskedPassword}
        />
        <input type="hidden" value={password} />
        <HorizontalLine />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}

        <ForgotPassword>Forgot Password?</ForgotPassword>

        <GlobalButton type="button" onClick={onsubmitSignIn}>
          SIGN IN
        </GlobalButton>
      </FormContainer>
      {/* <SignInCreateAccountContainer>
                <DontHaveAccountText>Don't have an account?</DontHaveAccountText>
                <CreateNewAccountButton onClick={handleCreateAccount}>
                    Create new account
                </CreateNewAccountButton>
            </SignInCreateAccountContainer> */}
    </SignInMainContainer>
  );
};

export default SignIn;
