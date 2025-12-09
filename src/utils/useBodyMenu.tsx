import { useState,useEffect } from "react";
import { type Restaurant } from "../utils/mockData"

let resC : Restaurant[]

const useBodyMenu = () => {
      const [Res, setRes] = useState([] as Restaurant[]);

        useEffect(() => {
             fetchData();   
        }, []);

      const fetchData = async() => {
      const data= await fetch("https://corsproxy.io/https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json();
      
      resC = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setRes(resC)
    }


    return Res;
}
export default useBodyMenu;