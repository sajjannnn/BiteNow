import ResCard, {GetParmotedCard}  from "./ResCard"
import {type Restaurant} from "../utils/mockData";
import {useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBodyMenu from "../utils/useBodyMenu";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const Res = useBodyMenu();

  const topRatedRestaurant = () : void => {
    const newList : Restaurant[] = Res.filter((restuarant) => restuarant.info.avgRating > 4)
    setRes(newList);
  } 

  const searchRes = () : void => {
    const searchList : Restaurant[] = resC.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
    setRes(searchList);
  }
const PromotedResCard = GetParmotedCard(ResCard);
  return Res.length === 0 ?
  <div>
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

   : (
    <div className="body">
      <div className=" flex justify-center">
      <input className="bg-[#FDFCDC] p-2 m-3"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder="Search..." type="text">
      </input>
        <button className="bg-[#8E0000] hover:bg- text-white font-bold py-2 px-4 rounded mx-3 my-2" onClick={searchRes}>
        Search
        </button>
      
      <button className="bg-[#8E0000] hover:bg- text-white font-bold py-2 px-4 rounded mx-3 my-2" onClick = {topRatedRestaurant}>
        Top Rated Restaurant
      </button>
      </div>
    
      <div className="flex flex-wrap">
        {Res?.map((restaurant)  => 
          
          <Link to = {"/restaurant/" + restaurant.info.id} key={restaurant.info.id}> 
          {
            restaurant.info.displayType === "PROMOTED" ? 
            <PromotedResCard {...restaurant.info} /> :
            <ResCard {...restaurant.info} />
          }
          </Link>
        )}
      </div>
    </div>
  )
 }

 export default Body;