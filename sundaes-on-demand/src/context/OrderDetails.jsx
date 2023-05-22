import { createContext, useContext, useState } from "react";
import { pricePerItem } from "../constants";

const OrderDetails = createContext();

// create custom hook to check whether we're inside a provider
export function useOrderDetails() {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error(
      "useOrderDetails must be used within an OrderDetailsProvider"
    );
  }

  return context;
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {}, // example: { chocolate: 1 , vanilla: 2 }
    toppings: {}, // example: { "Gummi Bears": 1 }
  });

  function updateItemCount(itemName, newItemCount, optionType) {
    // make a copy of existing state
    const newOptionCounts = { ...optionCounts };

    // update option count for this item with the new value
    newOptionCounts[optionType][itemName] = newItemCount;

    // update the state with the update copy
    setOptionCounts(newOptionCounts);
  }

  function resetOrder() {
    setOptionCounts({
      scoops: {},
      toppings: {},
    });
  }

  // utility function to calculate the subtotal
  function calculateTotal(optionType) {
    //  get an array of counts for the option type (for example, [1, 2])
    const countsArray = Object.values(optionCounts[optionType]);

    // total the values in the array of counts
    const totalCount = countsArray.reduce((total, value) => total + value, 0);

    // multiply the total number of items by the price for this item type
    return totalCount * pricePerItem[optionType];
  }

  const totals = {
    scoops: calculateTotal("scoops"),
    toppings: calculateTotal("toppings"),
  };

  const value = { optionCounts, totals, updateItemCount, resetOrder };

  return <OrderDetails.Provider value={value} {...props} />;
}
