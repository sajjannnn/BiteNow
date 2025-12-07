import {CDN_url} from "../utils/constants"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const RestaurantMenu = () => {
  const {resId} = useParams()
  const menu = useResMenu(resId);
  console.log(typeof(resId))

   if(!menu?.data) return <Shimmer/>
   const {name, city,costForTwo ,avgRating,sla} = menu?.data?.cards[2].card?.card?.info || {} ;
   const itemCards = menu.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[3].card.card.categories?.[2]?.itemCards || menu.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[3].card.card.itemCards || [] ;

   console.log(menu.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[3].card.card);
  return(

      <div className=" flex flex-col align-center">
        <div className="w-200 mx-auto">
              <h1 className=" text-3xl sm:text-4xl font-bold text-black text-center m-10">{name}</h1>
              <div className="bg-[#f1d0a2] border-2 border-black rounded-2xl h-50 py-3">
                <h2 className="text-xl sm:text-2xl font-semibold text-black">⭐ {avgRating} ● Cost For Two :{Number(costForTwo)/100}</h2>
                <h3 className="text-base sm:text-lg font-medium text-black"> ● Outlet : {city}</h3>
              <h3 className="text-base sm:text-lg font-medium text-black"> ● Delivery Time : {sla?.deliveryTime} mins</h3>
              </div>
        </div>


            

            {itemCards.map((item) => {
              return(
                 <div className="w-200 h-60 bg-amber-300 m-5 flex mx-auto" key ={item.card.info.id}>
                    <div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-black">{item.card.info?.name}</h2> 
                    <h3 className="text-base sm:text-lg font-medium text-black"> Rating : {item.card.info?.ratings?.aggregatedRating?.rating}</h3> 
                    <h3 className="text-base sm:text-lg font-medium text-black"> Rs. {(item.card.info?.price || 0)/100}</h3> 
                      <span>{item.card.info?.description}</span> 
                    </div>
                 <img className="h-60" src={CDN_url + item.card.info?.imageId} alt="" />
               
              </div> 
              
              )
            }
          )}             
          </div>
    )
}


    export default RestaurantMenu;