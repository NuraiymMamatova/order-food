import React, { useState } from "react";

export const CartContext = React.createContext({
  addedMeals: [],
  totalAmount: 0,
  onAddMeal: () => {},
});

export const CartProvider = ({ children }) => {
  const [addedMeals, setAddedMeals] = useState([]);

  const addNewHandler = (newMeal, variant) => {
    const currentIndex = addedMeals.findIndex((m) => m.id === newMeal.id);
    if (currentIndex === -1) {
      return setAddedMeals([...addedMeals, newMeal]);
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

    setAddedMeals(filteredMeals);
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
