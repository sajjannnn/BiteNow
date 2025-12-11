import { useSelector, useDispatch } from "react-redux";
import ItemLists from "./ItemLists";

const Cart = () => {
  const addedItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearAddedItems = () => {
    // Dispatch an action to clear the cart
    dispatch({
      type: "cart/clearCart",
    });
  };
  return (
    <div>
      <div className="text-center text-xl font-bold"> Cart Items </div>
      <div className="flex justify-end lg:pr-56">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-4" onClick={clearAddedItems}>
          {" "}
          Clear Cart{" "}
        </button>
      </div>

      <div className="mx-auto sm:w-[630px] lg:w-[950px]">
        {" "}
        <ItemLists items={addedItems} />{" "}
      </div>
    </div>
  );
};
export default Cart;
