import { useNavigate } from "react-router-dom";
import {
  LogoutImage,
  LogoutMainContainer,
  LogoutText,
} from "./styledComponents";

const Logout = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    navigate("/signIn");
  };

  return (
    <LogoutMainContainer onClick={onClickLogout}>
      <LogoutImage src="/Images/logout.svg" />
      <LogoutText>Logout</LogoutText>
    </LogoutMainContainer>
  );
};

export default Logout;
