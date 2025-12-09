import { CDN_url } from "../utils/constants";
import { type ItemCard } from "../utils/menuMockData";

interface ItemListsProps {
  items: ItemCard[];
}

const ItemLists = ({ items }: ItemListsProps) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div key = {item.card.info.id} className=" flex justify-between h-auto bg-amber-200">
            <div>
              <div>{item.card.info.name}</div>
              <div>Rs. - {item.card.info.defaultPrice/100 || 0}</div>
              <p className="text-sm ">{item.card.info.description}</p>
            </div>
            <img className= "h-50"src={CDN_url + item.card.info.imageId} alt="food image" />
          </div>
        );
      })}
    </div>
  );
};
export default ItemLists;
