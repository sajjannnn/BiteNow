import ResCard  from "./ResCard"
import {type Restaurant} from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
let resC : Restaurant[]
import { Link } from "react-router-dom";


const Body = () => {
  const [Res, setRes] = useState([] as Restaurant[]);
  const [searchText, setSearchText] = useState("");

     useEffect(() => {
     const fetchData = async() => {
      const data= await fetch("https://corsproxy.io/https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json();
      console.log(json);
      
      // const json =  await data.json();
      resC = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      return setRes(resC)
    }
   fetchData();   
}, []);


  const topRatedRestaurant = () : void => {
    const newList : Restaurant[] = Res.filter((restuarant) => restuarant.info.avgRating > 4)
    setRes(newList);
  } 

  const searchRes = () : void => {
    const searchList : Restaurant[] = resC.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
    setRes(searchList);
  }

  return Res.length === 0 ?
  <div id ="shimmer-container">
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
          
          <Link to = {"/restaurant/" + restaurant.info.id} key={restaurant.info.id}> <ResCard {...restaurant.info} />  </Link>
        )}
      </div>
    </div>
  )
 }

 export default Body;