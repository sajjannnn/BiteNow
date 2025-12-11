import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  const onlineState = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-[#C62828] text-white w-full">
      {/* TOP BAR */}
      <div
        className="
          mx-auto max-w-6xl
          flex items-center justify-between
          px-4 sm:px-6 lg:px-10
          h-[80px] md:h-[110px]
        "
      >
        {/* LOGO */}
        <div className="flex items-center h-100">
          <Link to="/">{<img src="https://img.icons8.com/doodle/48/zomato.png" alt="logo" className="h-[40px] md:h-[60px]" />}</Link>
        </div>

        {/* DESKTOP MENU */}
        <ul
          className="
            hidden md:flex items-center gap-6
            font-bold
            text-base lg:text-lg
          "
        >
          <li className="flex items-center gap-1">
            <span>Online</span>
            <span>{onlineState ? "🌍" : "☁️"}</span>
          </li>

          <li className="transition-colors duration-200 hover:text-[#FFE5E5] hover:underline underline-offset-4">
            <Link to="/">Home</Link>
          </li>
          <li className="transition-colors duration-200 hover:text-[#FFE5E5] hover:underline underline-offset-4">
            <Link to="/about">About</Link>
          </li>
          <li className="transition-colors duration-200 hover:text-[#FFE5E5] hover:underline underline-offset-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="transition-colors duration-200 hover:text-[#FFE5E5] hover:underline underline-offset-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="transition-colors duration-200 hover:text-[#FFE5E5] hover:underline underline-offset-4">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>

          <button
            className="
              bg-[#5C0000] px-5 py-2 rounded
              hover:bg-[#7A0000]
              transition-colors duration-200
            "
            onClick={() => setLoggedIn(isLoggedIn === "Login" ? "Logout" : "Login")}
          >
            {isLoggedIn}
          </button>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <ul className="md:hidden bg-[#B71C1C] px-4 pb-4 space-y-3 font-bold text-sm">
          <li>Online: {onlineState ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/grocery" onClick={() => setMenuOpen(false)}>
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              Cart ({cartItems.length})
            </Link>
          </li>

          <button
            className="w-full bg-[#5C0000] py-2 rounded"
            onClick={() => {
              setLoggedIn(isLoggedIn === "Login" ? "Logout" : "Login");
              setMenuOpen(false);
            }}
          >
            {isLoggedIn}
          </button>
        </ul>
      )}
    </header>
  );
};

export default Header;
