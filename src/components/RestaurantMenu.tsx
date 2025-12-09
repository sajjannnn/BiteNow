import { CDN_url } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import RestaurantCategories from "./RestaurantCategory";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useResMenu(resId);

  if (!menu?.data) return <Shimmer />;

  const cardSections = menu?.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards.filter((card) => {
    return card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
  }) || [];

  const { name, city, costForTwo, avgRating, sla } = menu?.data?.cards[2].card?.card?.info || {};
  // const itemCards = menu.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[3].card.card.categories?.[2]?.itemCards || menu.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[3].card.card.itemCards || [];
  return (
    <div className="mx-auto flex flex-col align-center">
      <div className="mx-auto">
      <div className="w-200 mx-auto">
        <h1 className=" text-3xl sm:text-4xl font-bold text-black text-center m-10">{name}</h1>
        <div className="bg-[#f1d0a2] border-2 border-black rounded-2xl h-50 py-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            ⭐ {avgRating} ● Cost For Two :{Number(costForTwo) / 100}
          </h2>
          <h3 className="text-base sm:text-lg font-medium text-black"> ● Outlet : {city}</h3>
          <h3 className="text-base sm:text-lg font-medium text-black"> ● Delivery Time : {sla?.deliveryTime} mins</h3>
        </div>
      </div>
    
      <RestaurantCategories section = {cardSections} />
      </div>

    </div>
  );
};

export default RestaurantMenu;
