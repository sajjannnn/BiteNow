import { useEffect } from "react"


const RestaurantMenu = () => {

    useEffect(() => {
        // fetch restaurant menu data
        const fetchMenu = async () => {
            const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=752411&catalog_qa=undefined&submitAction=ENTER");
            const data = await res.json();
            console.log(data);
            
        };
        fetchMenu();

    },[]);

    return (
        <div>
            <h1>name</h1>
        </div>
    )
}



    export default RestaurantMenu;