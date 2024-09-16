import { TodaysMenuFoodAddButton, TodaysMenuFoodImage, TodaysMenuFoodImageContainer, TodaysMenuImage, TodaysMenuItemContainer, TodaysMenuItemDescription, TodaysMenuItemDescriptionContainer, TodaysMenuItemDescriptionHeading, TodaysMenuItemPrice } from "./styledComponents"

const TodaysMenuItem = () => {
    return(
        <TodaysMenuItemContainer>
            <TodaysMenuItemDescriptionContainer>
                <TodaysMenuImage/>
                <TodaysMenuItemDescriptionHeading>The Halal Guys</TodaysMenuItemDescriptionHeading>
                <TodaysMenuItemPrice>₹399</TodaysMenuItemPrice>
                <TodaysMenuItemDescription>Choice of Lorem Ipsum</TodaysMenuItemDescription>
            </TodaysMenuItemDescriptionContainer>
            <TodaysMenuFoodImageContainer>
                <TodaysMenuFoodImage src="/Images/Food1.svg"/>
                <TodaysMenuFoodAddButton>Add</TodaysMenuFoodAddButton>
            </TodaysMenuFoodImageContainer>
        </TodaysMenuItemContainer>
    )
}

export default TodaysMenuItem