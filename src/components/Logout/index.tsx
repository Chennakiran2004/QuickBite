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
    <LogoutMainContainer
      data-testid="LogoutMainContainer"
      onClick={onClickLogout}
    >
      <LogoutImage data-testid="logout-image" src="/Images/logout.svg" />
      <LogoutText data-testid="logout-text">Logout</LogoutText>
    </LogoutMainContainer>
  );
};

export default Logout;
