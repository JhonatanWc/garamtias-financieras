import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopping } from "../../features/tasks/pizzaSlice";

function ReduxPrueba() {
  // ! tema de redux
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();

  return (
    <>
      {/* //! de redux */}
      {pizza.toppings.map((topping, index) => (
        <div key={topping + index}>{topping}</div>
      ))}
      <button onClick={() => dispatch(addTopping("pepperoni"))}>
        Add Peperoni
      </button>
    </>
  );
}

export default ReduxPrueba;
