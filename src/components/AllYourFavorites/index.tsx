
import HeadingComponent from "../HeadingComponent";
import { useNavigate } from "react-router-dom";
import {AllYourFavoritesContainer, GlobalButton, AllYourFavoritesContainerDescription, AllYourFavoritesContainerHeading, AllYourFavoritesDescriptionContainer, AllYourFavoritesImage } from "./styledComponents";
const AllYourFavorites = () => {

    const navigate = useNavigate()

    const handleGetStartedButton = () => {
        navigate("/signIn")
        console.log("button clicked")
    }

    return (
        <AllYourFavoritesContainer>
            <div>
                <HeadingComponent/>
                <AllYourFavoritesImage src="/Images/AllYourFavorites.svg"/>
            </div>
            <AllYourFavoritesDescriptionContainer>
                <AllYourFavoritesContainerHeading>All Your Favorites</AllYourFavoritesContainerHeading>
                <AllYourFavoritesContainerDescription>Order from the best local restaurants with easy, on-demand delivery.</AllYourFavoritesContainerDescription>
                <GlobalButton onClick={handleGetStartedButton}>GET STARTED</GlobalButton>
            </AllYourFavoritesDescriptionContainer>
        </AllYourFavoritesContainer>
    );
}

export default AllYourFavorites