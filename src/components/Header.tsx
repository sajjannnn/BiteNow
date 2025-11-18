import { useState } from "react";
import { logoUrl } from "../utils/constants"

 const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState("Login")
  return (
    <div className="header">
      <div>
        <img className="logo" src ={logoUrl} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact us</li>
          <button onClick={() => isLoggedIn === "Login" ? setLoggedIn("Logout") : setLoggedIn("Login")
          }>{isLoggedIn}</button>
        </ul>
      </div>
    </div>
  )
 }

 export default Header;