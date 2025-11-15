import { logoUrl } from "../utils/constants"

 const Header = () => {
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
        </ul>
      </div>
    </div>
  )
 }

 export default Header;