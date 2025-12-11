import { CDN_url } from "../utils/constants";
import { type ItemCard } from "../utils/menuMockData";
import { useDispatch } from "react-redux";

interface ItemListsProps {
  items: ItemCard[];
}
const ItemLists = ({ items }: ItemListsProps) => {
  // console.log(items);

  const dispatch = useDispatch();

  const addItemToCart = (item: ItemCard) => {
    dispatch({
      type: "cart/addItem",
      payload: item,
    });
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.card.info.id} className="sm:m-2 p-2 sm:flex justify-between h-auto bg-white">
            <div className="sm:w-3/4 p-5 bg-[#FDFCDC] ">
              <div className="text-xl">{item.card.info.name}</div>
              <div>Rs. - {item.card.info.defaultPrice / 100 || Math.round(item.card.info.price / 100)}</div>
              <p className="text-sm ">{item.card.info.description}</p>
            </div>
            <div className=" bg-[#FDFCDC] sm:bg-white flex flex-col overflow-hidden items-center">
              <img className="bg-[#FDFCDC] h-44 w-44 sm:h-56 sm:w-56 object-cover object-center" src={CDN_url + item.card.info.imageId} alt="food image" />
              <button className="sm:absolute x- w-25 bg-white border-2 border-black rounded-lg hover:bg-[#ebd77b]" onClick={() => addItemToCart(item)}>
                Add+
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemLists;
