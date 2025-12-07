import { useState } from "react";
import { logoUrl } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

 const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState("Login")
  const onlineState = useOnlineStatus()
  return (
    <div className="bg-[#C62828] flex justify-between text-white font-extrabold text-lg">
      <div>
        <img className="w-30" src ={logoUrl} />
      </div>

      <div className="text-color-whitenav-items content-center">
        <ul className="flex ">
          <li className="p-3">
            Online : { 
              onlineState ? "✅" : "🔴"
            }
          </li> 
           <li className="p-3 text-color-white">
            <Link to= "/">Home</Link>
          </li>
          <li className="p-3"> 
            <Link to = "/about" >About</Link>
          </li>
          <li className="p-3">
            <Link to= "/contact">Contact Us</Link>
          </li> 
          <li className="p-3">
            <Link to= "/grocery">Grocery Store</Link>
          </li>
          <li className="p-3">
            Cart
            </li>
          <button className="bg-[#5C0000] hover:bg- text-white font-bold py-2 px-4 rounded mx-3" onClick={() => isLoggedIn === "Login" ? setLoggedIn("Logout") : setLoggedIn("Login")}>
            {isLoggedIn}
          </button>
        </ul>
      </div>
    </div>
  )
 }

 export default Header;