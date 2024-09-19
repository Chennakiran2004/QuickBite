// import { PlusIcon, TodaysMenuFoodAddButton, TodaysMenuFoodImage, TodaysMenuFoodImageContainer, TodaysMenuImage, TodaysMenuItemContainer, TodaysMenuItemDescription, TodaysMenuItemDescriptionContainer, TodaysMenuItemDescriptionHeading, TodaysMenuItemPrice } from "./styledComponents"



// const TodaysMenuItem = ({ item }: {item: MenuItem}) => {
//     return (
//         <TodaysMenuItemContainer>
//             <TodaysMenuItemDescriptionContainer>
//                 <TodaysMenuImage />
//                 <TodaysMenuItemDescriptionHeading>{item.name}</TodaysMenuItemDescriptionHeading>
//                 <TodaysMenuItemPrice>{`₹${item.price}`}</TodaysMenuItemPrice>
//                 <TodaysMenuItemDescription>{item.description}</TodaysMenuItemDescription>
//             </TodaysMenuItemDescriptionContainer>
//             <TodaysMenuFoodImageContainer>
//                 <TodaysMenuFoodImage src={item.image} />
//                 <TodaysMenuFoodAddButton>
//                     ADD
//                     <PlusIcon
//                         width="8"
//                         height="8"
//                         viewBox="0 0 8 8"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M4.00008 1.66675V6.33341M1.66675 4.00008H6.33341" stroke="#CA8A04" stroke-linecap="round" stroke-linejoin="round" />
//                     </PlusIcon>
//                 </TodaysMenuFoodAddButton>
//             </TodaysMenuFoodImageContainer>
//         </TodaysMenuItemContainer>
//     )
// }

// export default TodaysMenuItem



import { useState } from "react";
import { PlusIcon, MinusIcon, TodaysMenuFoodAddButton, TodaysMenuFoodImage, TodaysMenuFoodImageContainer, TodaysMenuItemContainer, TodaysMenuItemDescription, TodaysMenuItemDescriptionContainer, TodaysMenuItemDescriptionHeading, TodaysMenuItemPrice, CountContainer, TodaysMenuFoodCountButton } from "./styledComponents";

interface MenuItem {
    name: string;
    price: number;
    description: string;
    image: string;
}

const TodaysMenuItem = ({ item }: {item: MenuItem}) => {
    const [count, setCount] = useState(0);

    const handleAddClick = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleMinusClick = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <TodaysMenuItemContainer>
            <TodaysMenuItemDescriptionContainer>
                <TodaysMenuItemDescriptionHeading>{item.name}</TodaysMenuItemDescriptionHeading>
                <TodaysMenuItemPrice>{`₹${item.price}`}</TodaysMenuItemPrice>
                <TodaysMenuItemDescription>{item.description}</TodaysMenuItemDescription>
            </TodaysMenuItemDescriptionContainer>
            <TodaysMenuFoodImageContainer>
                <TodaysMenuFoodImage src={item.image} />
                {count === 0 ? (
                    <TodaysMenuFoodAddButton onClick={handleAddClick}>
                        ADD
                        <PlusIcon
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M4.00008 1.66675V6.33341M1.66675 4.00008H6.33341" stroke="#CA8A04" stroke-linecap="round" stroke-linejoin="round" />
                        </PlusIcon>
                    </TodaysMenuFoodAddButton>
                ) : (
                    <CountContainer>
                        <TodaysMenuFoodCountButton onClick={handleMinusClick}>
                            <MinusIcon
                                width="8"
                                height="8"
                                viewBox="0 0 8 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1.66675 4.00008H6.33341" stroke="#CA8A04" stroke-linecap="round" stroke-linejoin="round" />
                            </MinusIcon>
                        </TodaysMenuFoodCountButton>
                        <span>{count}</span>
                        <TodaysMenuFoodCountButton onClick={handleAddClick}>
                            <PlusIcon
                                width="8"
                                height="8"
                                viewBox="0 0 8 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M4.00008 1.66675V6.33341M1.66675 4.00008H6.33341" stroke="#CA8A04" stroke-linecap="round" stroke-linejoin="round" />
                            </PlusIcon>
                        </TodaysMenuFoodCountButton>
                    </CountContainer>
                )}
            </TodaysMenuFoodImageContainer>
        </TodaysMenuItemContainer>
    );
};

export default TodaysMenuItem;
