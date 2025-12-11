import ResCard from "./ResCard";
import { type Restaurant } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
let resC: Restaurant[];
import { Link } from "react-router-dom";

const Body = () => {
  const [Res, setRes] = useState([] as Restaurant[]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://corsproxy.io/https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);

      // const json =  await data.json();
      resC = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      return setRes(resC);
    };
    fetchData();
  }, []);

  const topRatedRestaurant = (): void => {
    const newList: Restaurant[] = Res.filter((restuarant) => restuarant.info.avgRating > 4);
    setRes(newList);
  };

  const searchRes = (): void => {
    const searchList: Restaurant[] = resC.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setRes(searchList);
  };

  return Res.length === 0 ? (
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
  ) : (
    <div>
      <div className="sm:flex justify-center text-md font-bold">
        <div className="flex justify-center m-2 ">
          <input className="bg-yellow-100 p-1 mx-2 rounded sm:p-3" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search..." type="text"></input>
          <button className="text-white bg-[#7A0000] p-1 px-4 rounded-sm" onClick={searchRes}>
            Search
          </button>
        </div>
        <div className="flex justify-center m-2">
          <button className="text-white bg-[#7A0000] p-1 rounded-sm px-12" onClick={topRatedRestaurant}>
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="sm:flex flex-wrap justify-around">
        {Res?.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
            {" "}
            <ResCard {...restaurant.info} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
