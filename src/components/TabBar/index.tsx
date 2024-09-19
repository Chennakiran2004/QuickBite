import { useNavigate } from "react-router-dom";
import { useTabContext } from "../../Context/TabContext";
import { TabBarContainerMainContainer, TabBarItemContainer, TabBarItemImage, TabBarItemName, TabBarSubContainer } from "./styledComponents";
import { useEffect } from "react";

const TabBar = () => {
  const { activeTab, setActiveTab } = useTabContext();
  const navigate = useNavigate();

  useEffect(() => {
    switch (activeTab) {
      case "Home":
        navigate("/TodaysMenu");
        break;
      // case "Search":
      //   navigate("/searchPage");
      //   break;
        case "Orders":
        navigate("/orders");
        break;
      case "Profile":
        navigate("/profile");
        break;
      default:
        break;
    }
  }, [activeTab, navigate])

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  };

  return (
    <TabBarContainerMainContainer>
      <TabBarSubContainer>
        <TabBarItemContainer onClick={() => handleTabClick("Home")}>
          <TabBarItemImage isActive={activeTab === "Home"} width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4502 12.5025L11 8H10V12.5C10 14.433 11.567 16 13.5 16C15.433 16 17 14.433 17 12.5V8H16L15.5498 12.5025C15.5215 12.7849 15.2838 13 15 13C14.7162 13 14.4785 12.7849 14.4502 12.5025L14 8H13L12.5498 12.5025C12.5215 12.7849 12.2838 13 12 13C11.7162 13 11.4785 12.7849 11.4502 12.5025ZM14.5555 18.9985C14.5243 18.4383 14.061 18 13.5 18C12.939 18 12.4757 18.4383 12.4445 18.9985L12.0832 25.5023C12.0817 25.5285 12.081 25.5548 12.081 25.581C12.081 26.3647 12.7163 27 13.5 27C13.5263 27 13.5525 26.9993 13.5787 26.9978C14.3612 26.9543 14.9603 26.2848 14.9168 25.5023L14.5555 18.9985ZM22.5 20C23.0634 20 23.5311 20.4354 23.5712 20.9975L23.8931 25.5038C23.9481 26.2732 23.3689 26.9415 22.5995 26.9965C22.5664 26.9988 22.5332 27 22.5 27C21.7286 27 21.1033 26.3747 21.1033 25.6033C21.1033 25.5701 21.1045 25.5369 21.1069 25.5038L21.4288 20.9975C21.4689 20.4354 21.9366 20 22.5 20ZM24 18V8C21.7909 8 20 9.79086 20 12V18H24Z" />
          </TabBarItemImage>
          <TabBarItemName isActive={activeTab === "Home"}>Home</TabBarItemName>
        </TabBarItemContainer>

        {/* <TabBarItemContainer onClick={() => handleTabClick("Search")}>
          <TabBarItemImage isActive={activeTab === "Search"} width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 23C12.134 23 9 19.866 9 16C9 12.134 12.134 9 16 9C19.866 9 23 12.134 23 16C23 17.8276 22.2996 19.4917 21.1525 20.7383L24.7071 24.2929C25.0976 24.6834 25.0976 25.3166 24.7071 25.7071C24.3166 26.0976 23.6834 26.0976 23.2929 25.7071L19.594 22.0082C18.5434 22.638 17.314 23 16 23ZM16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z" />
          </TabBarItemImage>
          <TabBarItemName isActive={activeTab === "Search"}>Search</TabBarItemName>
        </TabBarItemContainer> */}

        <TabBarItemContainer onClick={() => handleTabClick("Orders")}>
          <TabBarItemImage isActive={activeTab === "Orders"} width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9.6C9 9.03995 9 8.75992 9.10899 8.54601C9.20487 8.35785 9.35785 8.20487 9.54601 8.10899C9.75992 8 10.0399 8 10.6 8H23.4C23.9601 8 24.2401 8 24.454 8.10899C24.6422 8.20487 24.7951 8.35785 24.891 8.54601C25 8.75992 25 9.03995 25 9.6V24.4C25 24.9601 25 25.2401 24.891 25.454C24.8431 25.5481 24.7809 25.6334 24.7071 25.7071L23 24L21.5 25.5L20 24L18.5 25.5L17 24L15.5 25.5L14 24L12.5 25.5L11 24L9.29289 25.7071C9.21914 25.6334 9.15693 25.5481 9.10899 25.454C9 25.2401 9 24.9601 9 24.4V9.6ZM11.0545 10.273C11 10.38 11 10.52 11 10.8V11.2C11 11.48 11 11.62 11.0545 11.727C11.1024 11.8211 11.1789 11.8976 11.273 11.9455C11.38 12 11.52 12 11.8 12H22.2C22.48 12 22.62 12 22.727 11.9455C22.8211 11.8976 22.8976 11.8211 22.9455 11.727C23 11.62 23 11.48 23 11.2V10.8C23 10.52 23 10.38 22.9455 10.273C22.8976 10.1789 22.8211 10.1024 22.727 10.0545C22.62 10 22.48 10 22.2 10H11.8C11.52 10 11.38 10 11.273 10.0545C11.1789 10.1024 11.1024 10.1789 11.0545 10.273Z" />
          </TabBarItemImage>
          <TabBarItemName isActive={activeTab === "Orders"}>Orders</TabBarItemName>
        </TabBarItemContainer>

        <TabBarItemContainer onClick={() => handleTabClick("Profile")}>
          <TabBarItemImage isActive={activeTab === "Profile"} width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13 12C13 14.2091 14.7909 16 17 16C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8C14.7909 8 13 9.79086 13 12ZM16.9833 18C12.2619 18 8.38826 20.4265 8.00065 25.1992C7.97954 25.4592 8.47671 26 8.7275 26H25.2467C25.9979 26 26.0096 25.3955 25.9979 25.2C25.7049 20.2932 21.7712 18 16.9833 18Z" />
          </TabBarItemImage>
          <TabBarItemName isActive={activeTab === "Profile"}>Profile</TabBarItemName>
        </TabBarItemContainer>
      </TabBarSubContainer>
    </TabBarContainerMainContainer>
  );
};

export default TabBar;
