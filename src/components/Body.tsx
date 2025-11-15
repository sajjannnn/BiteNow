import ResCard  from "./ResCard"
import { mockData, type Restaurant} from "../utils/mockData";
import { useState } from "react";



const resList = mockData.data.cards[1].card.card.gridElements?.infoWithStyle.restaurants ?? [] ; 
const Body = () => {
  const [Res, setRes] = useState(resList);
  const topRatedRestaurant = () => {
    const newList : Restaurant[] = resList.filter((restuarant) => restuarant.info.avgRating > 4)
    setRes(newList);
  } 

  
  return (
    <div className="body">
      <div className="search">
        Search
      </div>
      
      <button onClick = {topRatedRestaurant}>
        Top Rated Restaurant
      </button>

      <div className="card-container">
        {Res?.map((restaurant)  => 
          <ResCard {...restaurant.info} key={restaurant.info.id}/>
        )}
      </div>
    </div>
  )
 }

 export default Body;