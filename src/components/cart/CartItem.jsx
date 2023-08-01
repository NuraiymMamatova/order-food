import React, { useContext } from "react";
import { styled } from "styled-components";
import { MinusIcon, PlusIcon } from "../../assets";
import { CartContext } from "../../store/cart-context";
import { ButtonIcon } from "../UI/ButtonIcon";

export const CartItem = ({
  id,
  title = "Название блюда",
  price = 22.99,
  amount = 5,
}) => {
  const { onAddMeal } = useContext(CartContext);

  const onClickAdd = () => {
    onAddMeal({ id, title, price, amount: 1 }, "plus");
  };

  const onClickDelete = () => {
    onAddMeal({ id, title, price, amount: 1 }, "minus");
  };

  return (
    <ListItem>
      <Content>
        <h2>{title}</h2>
        <PriceContainer>
          <span className="price">${price}</span>
          <span className="amount">x{amount}</span>
        </PriceContainer>
      </Content>

      <ActionsContainer>
        <ButtonIcon Icon={MinusIcon} onClick={onClickDelete} />
        <ButtonIcon
          Icon={PlusIcon}
          onClick={onClickAdd} /* disabled={true} */
        />
      </ActionsContainer>
    </ListItem>
  );
};

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Content = styled.div`
  & h2 {
    color: #222222;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  & > .price {
    color: #ad5502;
    font-size: 18px;
    font-weight: 600;
  }

  & > .amount {
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    padding: 6px 14px;
    color: #222222;
    font-weight: 500;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid #d6d6d6;
  &:first-of-type {
    padding-top: 0;
  }
`;
