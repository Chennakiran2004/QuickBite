import PreviousOrderItem from "../PreviousOrderItem";
import TabBar from "../TabBar";

import { TabBarContainer } from "../TodaysMenu/styledComponents";
import {
  PreviousOrdersHeading,
  PreviousOrdersListContainer,
  PreviousOrdersMainContainer,
} from "./styledCompnents";

const PreviousOrders = () => {
  return (
    <PreviousOrdersMainContainer>
      <PreviousOrdersHeading>Orders</PreviousOrdersHeading>
      <PreviousOrdersListContainer>
        <PreviousOrderItem />
        <PreviousOrderItem />
        <PreviousOrderItem />
        <PreviousOrderItem />
        <PreviousOrderItem />
        <PreviousOrderItem />
        <PreviousOrderItem />
        <PreviousOrderItem />
      </PreviousOrdersListContainer>
      <TabBarContainer>
        <TabBar />
      </TabBarContainer>
    </PreviousOrdersMainContainer>
  );
};

export default PreviousOrders;
