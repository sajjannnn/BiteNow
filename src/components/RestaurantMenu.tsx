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

      <div id="res-Menu">
              <h1>{name}</h1>
              <div id="menu-Top">
                <h2>⭐ {avgRating} ● Cost For Two :{Number(costForTwo)/100}</h2>
                <h3> ● Outlet : {city}</h3>
              <h3> ● Delivery Time : {sla?.deliveryTime} mins</h3>
              </div>

            

            {itemCards.map((item) => {
              return(
                 <div id="menu-items"   key ={item.card.info.id}>
                    <div>
                      <h2>{item.card.info?.name}</h2> 
                      <h3> Rating : {item.card.info?.ratings?.aggregatedRating?.rating}</h3> 
                      <h3> Rs. {(item.card.info?.price || 0)/100}</h3> 
                      <span>{item.card.info?.description}</span> 
                    </div>
                 <img id="menu-img" src={CDN_url + item.card.info?.imageId} alt="" />
               
              </div> 
              
              )
            }
          )}             
          </div>
    )
}


    export default RestaurantMenu;