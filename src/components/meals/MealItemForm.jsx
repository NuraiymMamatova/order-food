import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { PlusIcon } from "../../assets";
import { CartContext } from "../../store/cart-context";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

export const MealItemForm = ({ id, onAddMeal }) => {
  const [enteredAmount, setEneterdAmount] = useState(1);
  const { addedMeals } = useContext(CartContext);
  const amountChangeHandler = (e) => {
    setEneterdAmount(Number(e.target.value));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onAddMeal(enteredAmount);
  };

  return (
    <StyledForm>
      <Input id={id} onChange={amountChangeHandler} value={enteredAmount} />
      <Button
        onClick={submitHandler}
        size="small"
        disabled={
          addedMeals.filter((meal) => meal.id === id && meal.amount).length !==
          0
        }
        weight={"medium"}
      >
        <PlusIcon /> Add
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-end;
`;
