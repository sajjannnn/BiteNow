import { useState } from "react";
import { logoUrl } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

 const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState("Login")
  const onlinState = useOnlineStatus()
  return (
    <div className="header">
      <div>
        <img className="logo" src ={logoUrl} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            Online : { 
              onlinState ? "✅" : "🔴"
            }
          </li> 
           <li>
            <Link to= "/">Home</Link>
          </li>
          <li>
            <Link to = "/about" >About</Link>
          </li>
          <li>
            <Link to= "/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button onClick={() => isLoggedIn === "Login" ? setLoggedIn("Logout") : setLoggedIn("Login")
          }>{isLoggedIn}</button>
        </ul>
      </div>
    </div>
  )
 }

 export default Header;