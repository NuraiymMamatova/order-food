import React from "react";
import { styled } from "styled-components";
import { MealItemForm } from "./MealItemForm";

export const MealItem = ({ id, title, description, price }) => {
  return (
    <StyledMealItem>
      <div>
        <MealName>{title}</MealName>
        <MealDescription>{description}</MealDescription>
        <MealPrice>{Number(price).toFixed(2)}</MealPrice>
      </div>

      <MealItemForm id={id} />
    </StyledMealItem>
  );
};

const StyledMealItem = styled.li`
  display: flex;
  border-bottom: 1px solid grey;
  padding: 2% 0;
  justify-content: space-between;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const MealName = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
`;

const MealDescription = styled.p`
  font-weight: 400;
`;

const MealPrice = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  color: #ad5502;
`;
