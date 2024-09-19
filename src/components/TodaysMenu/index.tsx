// import CategoryDropDown from "../CategoryDropDown"
// import TabBar from "../TabBar"
// import { TodaysMenuHeading, TodaysMenuMainContainer, TabBarContainer, TodaysMenuSubContainer } from "./styledComponents"

// const TodaysMenu = () => {
//     return(
//         <TodaysMenuMainContainer>
//             <TodaysMenuSubContainer>
//                 <TodaysMenuHeading>Today's Menu</TodaysMenuHeading>
//                 <CategoryDropDown/>
//             </TodaysMenuSubContainer>
//             <TabBarContainer>
//                 <TabBar/>
//             </TabBarContainer>
//         </TodaysMenuMainContainer>
//     )
// }

// export default TodaysMenu


import CategoryDropDown from "../CategoryDropDown"
import TabBar from "../TabBar"
import { TodaysMenuHeading, TodaysMenuMainContainer, TabBarContainer, TodaysMenuSubContainer, CategoryDropDownListContainer } from "./styledComponents"

const TodaysMenu = () => {
    const categories = [
        {
            title: "Recommendations",
            items: [
                { name: "The Halal Guys", price: 399, description: "Choice of Lorem Ipsum", image: "/Images/Food1.svg" },
                { name: "The Halal Guys", price: 399, description: "Choice of Lorem Ipsum", image: "/Images/Food1.svg" },
                { name: "Biryani Bliss", price: 299, description: "Delicious Biryani", image: "/Images/Food2.svg" }
            ]
        },
        {
            title: "Popular",
            items: [
                { name: "Pizza Palace", price: 499, description: "Cheesy goodness", image: "/Images/Food3.svg" },
                { name: "Burger Bonanza", price: 199, description: "Juicy burgers", image: "/Images/Food4.svg" },
                { name: "Burger Bonanza", price: 199, description: "Juicy burgers", image: "/Images/Food4.svg" }
            ]
        }
    ]

    return (
        <TodaysMenuMainContainer>
            <TodaysMenuSubContainer>
                <TodaysMenuHeading>Today's Menu</TodaysMenuHeading>
                <CategoryDropDownListContainer>
                    {categories.map((category, index) => (
                        <CategoryDropDown key={index} title={category.title} items={category.items} />
                    ))}
                </CategoryDropDownListContainer>
            </TodaysMenuSubContainer>
            <TabBarContainer>
                <TabBar />
            </TabBarContainer>
        </TodaysMenuMainContainer>
    )
}

export default TodaysMenu
