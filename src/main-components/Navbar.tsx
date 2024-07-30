import sortingHatLogo from "../assets/sorting-hat-logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 h-16 w-full bg-[#052929] backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full items-center justify-center text-white">
        <div className="logo flex h-full w-1/3 items-center pl-2 lg:pl-4">
          <div className="flex space-x-4">
            <img
              src={sortingHatLogo}
              alt="Sorting Hat"
              className="max-w-[35px] rounded-full bg-white p-1"
            />

            <input
              type="text"
              placeholder="Search Wizards"
              className="hidden rounded-full border-none px-2 py-1 text-black md:block md:w-full"
            />
          </div>
        </div>
        <div className="h-full w-1/3 px-1 py-1">
          <ul className="hidden h-full w-full items-center justify-center gap-4 pt-2 text-center tracking-wider md:flex md:gap-4 lg:gap-16 lg:text-lg">
            <NavLink
              className="min-h-10 w-1/4 items-center justify-center"
              to="/"
            >
              <li className="nav-li flex min-h-10 w-full items-center duration-100 ease-in  hover:text-red-500">
                <button className="flex  w-full items-center justify-center">
                  Home
                </button>
              </li>
            </NavLink>
            <NavLink
              className="min-h-10 w-1/4 items-center justify-center"
              to="video"
            >
              <li className="nav-li flex min-h-10 w-full items-center duration-100 ease-in  hover:text-yellow-500">
                <button className="flex h-full w-full items-center justify-center">
                  Video
                </button>
              </li>
            </NavLink>
            <NavLink
              className="min-h-10 w-1/4 items-center justify-center"
              to="diagon-alley"
            >
              <li className="nav-li flex min-h-10 w-full items-center duration-100 ease-in  hover:text-green-500">
                <button className="flex h-full w-full items-center justify-center text-nowrap">
                  Diagon Alley
                </button>
              </li>
            </NavLink>
            <NavLink
              className="min-h-10 w-1/4 items-center justify-center"
              to="houses"
            >
              <li className="nav-li flex min-h-10 w-full items-center duration-100 ease-in  hover:text-blue-500">
                <button className="flex h-full w-full items-center justify-center">
                  Houses
                </button>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="h-full w-1/3 py-1 pr-2 lg:pr-4">
          <ul className="flex h-full w-full items-center justify-end gap-4 pt-2 tracking-wider lg:text-lg">
            <NavLink to="menu">
              <li className="nav-li duration-100 ease-in hover:scale-110 hover:text-red-500 md:hidden">
                <button>Menu</button>
              </li>
            </NavLink>

            <li className="nav-li duration-100 ease-in hover:scale-110 hover:text-yellow-500">
              <button>Howler</button>
            </li>

            <li className="nav-li duration-100 ease-in hover:scale-110 hover:text-green-500">
              <button className="text-nowrap">Owl-Post</button>
            </li>
            <NavLink to="account">
              <li className="nav-li duration-100 ease-in hover:scale-110 hover:text-blue-500">
                <button>Account</button>
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
