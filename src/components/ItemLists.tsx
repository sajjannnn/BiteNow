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
}


  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.card.info.id} className=" flex justify-between h-auto bg-amber-200">
            <div>
              <div>{item.card.info.name}</div>
              <div>Rs. - {item.card.info.defaultPrice / 100 || Math.round(item.card.info.price/100)}</div>
              <p className="text-sm ">{item.card.info.description}</p>
            </div>
            <button className=" h-10 mt-5 mb-5 bg-white border-2 border-black rounded-lg hover:bg-red-900" onClick={() => addItemToCart(item)}>
              Add+</button>
            <img className="h-50" src={CDN_url + item.card.info.imageId} alt="food image" />
          </div>
        );
      })}
    </div>
  );
};
export default ItemLists;
