import React from "react";
import { styled } from "styled-components";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { PlusIcon } from "../../assets";
import { ButtonIcon } from "../UI/ButtonIcon";

export const MealItemForm = ({ id }) => {
  return (
    <StyledForm>
      <Input id={id} />
      <Button size="small" /* disabled={true}  */ weight={"medium"}>
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
