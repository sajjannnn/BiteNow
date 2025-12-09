import { useState } from "react";
import { type Card4 } from "../utils/menuMockData";
import ItemLists from "./ItemLists";

type RestaurantCategoriesProps = {
  section: Card4[];
};

const RestaurantCategories = ({ section }: RestaurantCategoriesProps) => {
  // const [showItems,setShowItems] = useState(false);
  const [showIndex, setShowIndex] = useState(0);

  function handleClick(index: number) {
    setShowIndex(index);
  }
  return (
    <div>
      {section.map((category, index) => {
        return (
          <div key={category.card.card.imageId} className=" my-3 w-250 text-2xl sm:text-2xl font-medium text-black  shadow shadow-gray-400 border-b-2 border-gray-300">
            <div className="flex justify-between" onClick={() => handleClick(index)}>
              <div className="">
                {category.card.card.title}({category.card.card.itemCards?.length})
              </div>
              <div>▼</div>
            </div>
            {index === showIndex && <ItemLists items={category.card.card.itemCards || []} />}
          </div>
        );
      })}
    </div>
  );
};
export default RestaurantCategories;
