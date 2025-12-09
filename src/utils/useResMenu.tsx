import { useEffect, useState} from "react"
import { Menu_url } from "../utils/constants"
import { type Menu } from "../utils/menuMockData"

let Mdata : Menu;
const useResMenu = (resId? : string) => {
    const [menu, setMenu] = useState(null as Menu | null);



    useEffect(() => {
        fetchMenu();
    },[]);


    const fetchMenu = async () => {
            const response = await fetch(Menu_url + resId);
            Mdata = await response.json();
            setMenu(Mdata); z    
}
return menu;
}
export default useResMenu;