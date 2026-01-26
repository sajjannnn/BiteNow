import { CDN_url } from "../utils/constants";
import { type ItemCard } from "../utils/menuMockData";

interface CartListsProps {
  items: ItemCard[];
  countItems: Record<string, number>;
}

const CartItems = ({ items, countItems }: CartListsProps) => {
  return (
    <div>
      {items.map((item) => {
        const price = item.card.info.defaultPrice ?? item.card.info.price ?? 0;

        const displayPrice = Math.round(price / 100);
        const id = item.card.info.id;

        return (
          <div key={id} className="sm:m-2 p-2 sm:flex justify-between bg-white">
            <div className="sm:w-3/4 p-5 bg-[#FDFCDC]">
              <div className="text-xl">{item.card.info.name}</div>
              <div>Rs. -{displayPrice}</div>
              <p className="text-sm">{item.card.info.description}</p>
            </div>

            <div className="bg-[#FDFCDC] sm:bg-white flex flex-col items-center">
              <p className="absolute bg-[#FDFCDC] rounded-2xl p-2 mt-1 font-semibold"> Quantity : {countItems[id]}</p>

              <img className="h-44 w-44 sm:h-56 sm:w-56 object-cover" src={CDN_url + item.card.info.imageId} alt="food image" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
