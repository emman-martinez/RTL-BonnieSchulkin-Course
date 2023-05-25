import React from "react";
import Options from "./Options";
import { useOrderDetails } from "../../context/OrderDetails";
import { formatCurrency } from "../../utilities";

const OrderEntry = ({ setOrderPhase }) => {
  const { totals } = useOrderDetails();
  const { scoops, toppings } = totals;

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {formatCurrency(scoops + toppings)}</h2>
    </div>
  );
};

export default OrderEntry;
