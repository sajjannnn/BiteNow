import { useEffect,useState} from "react"
import { Menu_url ,CDN_url} from "../utils/constants"
import { type Menu } from "../utils/menuMockData"
import Shimmer from "./Shimmer";

let Mdata : Menu;
const RestaurantMenu = () => {

  const [menu, setMenu] = useState({} as Menu);

    useEffect(() => {
        fetchMenu();

    },[]);
    const fetchMenu = async () => {
            const response = await fetch(Menu_url + "766502");
            Mdata = await response.json();
            setMenu(Mdata);     
    };
    


   if(!menu?.data) return <Shimmer/>
   const {name, city,costForTwo ,avgRating,sla} = menu?.data?.cards[2].card?.card?.info || {} ;
   const itemCards = menu.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[3].card.card.categories?.[1].itemCards || [];

   
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