import { useNavigate } from "react-router-dom";
import { GlobalButton } from "../AllYourFavorites/styledComponents";
import {
  BackImage,
  FormContainer,
  HorizontalLine,
  InputElement,
  InputLabel,
  SignAndLoginHeading,
  SignAndLoginInHeadingContainer,
} from "../SignIn/styledComponents";
import { ProfileInfoMainContainer } from "./styledComponents";
import { useState } from "react";

const ProfileInfo = () => {
  const navigate = useNavigate();

  const [username, setUserName] = useState("Kiran_Kumar");
  const [email, setEmail] = useState("kirankumar@gmail.com");
  const [password, setPassword] = useState("********");

  const handleClickBack = () => {
    navigate("/profile");
  };

  const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <SignAndLoginInHeadingContainer style={{ marginTop: "16px" }}>
        <BackImage
          src="/Images/back.svg"
          onClick={handleClickBack}
          style={{ paddingLeft: "16px" }}
        />
        <SignAndLoginHeading>Edit Profile</SignAndLoginHeading>
      </SignAndLoginInHeadingContainer>
      <HorizontalLine style={{ marginTop: "0", opacity: "0.4" }} />
      <ProfileInfoMainContainer>
        <FormContainer onSubmit={onSubmit}>
          <>
            <InputLabel>USER Name</InputLabel>
            <InputElement value={username} onChange={onChangeUserName} />
            <HorizontalLine style={{ marginTop: "16px", opacity: "0.3" }} />
          </>

          <>
            <InputLabel>EMAIL</InputLabel>
            <InputElement value={email} onChange={onChangeEmail} />
            <HorizontalLine style={{ marginTop: "16px", opacity: "0.3" }} />
          </>

          <>
            <InputLabel>PASSWORD</InputLabel>
            <InputElement value={password} onChange={onChangePassword} />
            <HorizontalLine style={{ marginTop: "16px", opacity: "0.3" }} />
          </>
          <GlobalButton type="button">SUBMIT</GlobalButton>
        </FormContainer>
      </ProfileInfoMainContainer>
    </>
  );
};

export default ProfileInfo;
