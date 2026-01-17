import { useSelector, useDispatch } from "react-redux";
import ItemLists from "./ItemLists";
import type { RootState, AppDispatch } from "../utils/appStore";
import { LuShoppingBag } from "react-icons/lu";
import { Link } from "react-router-dom";

const Cart = () => {
  const addedItems = useSelector((store: RootState) => store.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const clearAddedItems = () => {
    // Dispatch an action to clear the cart
    dispatch({
      type: "cart/clearCart",
    });
  };
  return (
    <div className="h-dvh ">
      <div className="text-4xl font-bold  m-4 sm:m-16"> Cart Items </div>

      <div className="mx-auto sm:w-[630px] lg:w-[950px]">
        {" "}
        {addedItems.length == 0 ? (
          <div className=" flex flex-col h-[30dvh] items-center justify-center">
            <LuShoppingBag className="text-8xl" />
            <div className="font-bold text-2xl">Your cart is empty</div>
            <p className="text-gray-600">Add some delicious items to get started!</p>
            <Link to="/" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-4 ">
              Browse Restaurant
            </Link>
          </div>
        ) : (
          <div>
            <ItemLists items={addedItems} />
            <div className="flex justify-end ">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-4" onClick={clearAddedItems}>
                {" "}
                Clear Cart{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
