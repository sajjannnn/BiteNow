import { useState } from "react";
import { CDN_url } from "../utils/constants";
import { type ItemCard } from "../utils/menuMockData";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../utils/cartSlice";
import type { RootState } from "../utils/appStore";

interface ItemListsProps {
  items: ItemCard[];
}

const ItemLists = ({ items }: ItemListsProps) => {
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const dispatch = useDispatch();
  const countItems = useSelector((store: RootState) => store.cart.countItem);

  const addItemToCart = (item: ItemCard) => {
    const id = item.card.info.id;
    if (countItems[id]) {
      const num = countItems[id]+1;
      dispatch(addCount({id,num}))
    } else {
      // countItems.set(id, 1);
      dispatch({
        type: "cart/addItem",
        payload: item,
      });
      const num = 1;
      dispatch(addCount({id,num}))
    }

    setAddedItems((prev) => ({
      ...prev,
      [id]: true,
    }));

    setTimeout(() => {
      setAddedItems((prev) => ({
        ...prev,
        [id]: false,
      }));
    }, 1000);
  };

  return (
    <div>
      {items.map((item) => {
        if (!item.card.info.imageId) return null;

        const price = item.card.info.defaultPrice ?? item.card.info.price ?? 0;

        const displayPrice = Math.round(price / 100);
        const id = item.card.info.id;
        const isAdded = addedItems[id];

        return (
          <div key={id} className="sm:m-2 p-2 sm:flex justify-between bg-white">
            <div className="sm:w-3/4 p-5 bg-[#FDFCDC]">
              <div className="text-xl">{item.card.info.name}</div>
              <div>Rs. -{displayPrice}</div>
              <p className="text-sm">{item.card.info.description}</p>
            </div>

            <div className="bg-[#FDFCDC] sm:bg-white flex flex-col items-center">
              <img className="h-44 w-44 sm:h-56 sm:w-56 object-cover" src={CDN_url + item.card.info.imageId} alt="food image" />

              <button
                onClick={() => addItemToCart(item)}
                disabled={isAdded}
                className={`
                  absolute 
                
                  mt-2
                  w-25
                  
                  
                  rounded-lg
                  transition-all
                  duration-300
                  ${isAdded ? "bg-green-500 text-white cursor-default" : "bg-white hover:bg-[#ebd77b] cursor-pointer"}
                `}
              >
                {isAdded ? "Added " : "Add+"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemLists;
