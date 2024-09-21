import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BackImage,
  HorizontalLine,
  InputElement,
  InputLabel,
  SignAndLoginHeading,
  SignAndLoginInHeadingContainer,
  ErrorMessage,
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

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [maskedPassword, setMaskedPassword] = useState("");

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
    setMaskedPassword("*".repeat(inputPassword.length));
    if (inputPassword) {
      setPasswordError("");
    }
  };

  const handleAlreadyHaveAccount = () => {
    navigate("/signIn");
  };

  const handleSignUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let hasError = false;

    setFullNameError("");
    setEmailError("");
    setPasswordError("");

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
      navigate("/TodaysMenu");
    }
  };

  return (
    <SignUpMainContainer>
      <SignAndLoginInHeadingContainer>
        <BackImage src="/Images/back.svg" />
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
          <InputElement
            type="text"
            value={maskedPassword}
            onChange={onChangePassword}
          />
          <input type="hidden" value={password} />
          <HorizontalLine />
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        </>

        <GlobalButton type="submit">SIGN UP</GlobalButton>
      </CreateAccountFormContainer>
      <TermsAndConditionsText>
        By Signing up you agree to our Terms Conditions & Privacy Policy.
      </TermsAndConditionsText>
    </SignUpMainContainer>
  );
};

export default SignUp;
