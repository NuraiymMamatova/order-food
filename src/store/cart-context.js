import React, { useReducer, useState } from "react";

export const CartContext = React.createContext({
  addedMeals: [],
  totalAmount: 0,
  onAddMeal: () => {},
});

const reducer = (prevState, { type, payload }) => {
  switch (type) {
    case "ADD_MEAL":
      return { ...prevState, addedMeals: [...prevState.addedMeals, payload] };
    case "REPLACE_MEALS":
      return { ...prevState, addedMeals: payload };
    default:
      return prevState;
  }
};

const initialState = {
  addedMeals: [],
};

export const CartProvider = ({ children }) => {
  const [{ addedMeals }, dispatch] = useReducer(reducer, initialState);

  const addNewHandler = (newMeal, variant) => {
    const currentIndex = addedMeals.findIndex((m) => m.id === newMeal.id);
    if (currentIndex === -1) {
      return dispatch({ type: "ADD_MEAL", payload: newMeal });
    }

    const newMeals = addedMeals.map((meal) => {
      if (meal.id === newMeal.id) {
        return {
          ...meal,
          amount:
            variant === "plus"
              ? meal.amount + newMeal.amount
              : meal.amount - newMeal.amount,
        };
      }

      return meal;
    });

    const filteredMeals = newMeals.filter((meal) => !meal.amount <= 0);

    dispatch({ type: "REPLACE_MEALS", payload: filteredMeals });
  };

  return (
    <CartContext.Provider
      value={{
        addedMeals,
        onAddMeal: addNewHandler,
        totalAmount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
