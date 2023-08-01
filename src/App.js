import { useContext } from "react";
import { Cart } from "./components/cart/Cart";
import { Header } from "./components/header/Header";
import { MealsSummary } from "./components/meals-summary/MealsSummary";
import { Meals } from "./components/meals/Meals";
import { ModalContext } from "./store/modal-context";

const DUMMY_MEALS = [
  {
    id: 1,
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: 2,
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16,
  },
  {
    id: 3,
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: 4,
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];

function App() {
  const { isModalOpen, onClose } = useContext(ModalContext);
  return (
    <div>
      <Header />
      <MealsSummary />
      <Meals meals={DUMMY_MEALS} />
      {isModalOpen && <Cart onClose={onClose} />}
    </div>
  );
}

export default App;
