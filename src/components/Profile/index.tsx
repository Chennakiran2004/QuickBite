import Logout from "../Logout";
import ProfileInformationAndPayment from "../ProfileInformationAndPayment";
import TabBar from "../TabBar";

import { TabBarContainer } from "../TodaysMenu/styledComponents";
import {
  ProfileHeading,
  ProfileHeadingContainer,
  ProfileHeadingDescription,
  ProfileMainContainer,
} from "./styledComponents";

const Profile = () => {
  return (
    <ProfileMainContainer>
      <ProfileHeadingContainer>
        <ProfileHeading>Account Settings</ProfileHeading>
        <ProfileHeadingDescription>
          Update your settings like notifications, payments, profile edit etc.
        </ProfileHeadingDescription>
      </ProfileHeadingContainer>

      <ProfileInformationAndPayment />

      <Logout />

      <TabBarContainer>
        <TabBar />
      </TabBarContainer>
    </ProfileMainContainer>
  );
};

export default Profile;
