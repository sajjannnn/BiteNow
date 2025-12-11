import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import RestaurantCategories from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useResMenu(resId);

  if (!menu?.data)
    return (
      <div className="sm:flex flex-wrap justify-around">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );

  const cardSections =
    menu?.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards.filter((card) => {
      return card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    }) || [];

  const { name, city, costForTwo, avgRating, sla } = menu?.data?.cards[2].card?.card?.info || {};
  // const itemCards = menu.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[3].card.card.categories?.[2]?.itemCards || menu.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[3].card.card.itemCards || [];
  return (
    <div className="mx-auto flex justify-center">
      <div className="mx-auto">
        <div className="md:mb-8 mx-auto sm:w-150 ">
          <h1 className=" m-2 text-3xl sm:m-10 sm:text-4xl font-bold text-black text-center ">{name}</h1>
          <div className="m-2 bg-[#FDFCDC] border-2 border-black sm:mx-2 p-4 sm:p-7  rounded-2xl">
            <h2 className="text-xl sm:text-2xl font-semibold text-black flex justify-between">
              <span>● Cost For Two :{Number(costForTwo) / 100} </span>
              <span>⭐ :{avgRating} </span>
            </h2>
            <h3 className="sm:text-lg font-medium text-black"> ● Outlet : {city}</h3>
            <h3 className="sm:text-lg font-medium text-black"> ● Delivery Time : {sla?.deliveryTime} mins</h3>
          </div>
        </div>

        <RestaurantCategories section={cardSections} />
      </div>
    </div>
  );
};

export default RestaurantMenu;
