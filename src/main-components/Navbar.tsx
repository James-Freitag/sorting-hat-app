import sortingHatLogo from "../assets/sorting-hat-logo.png";

const Navbar = () => {
  // const colors = ["red", "yellow", "green", "blue"];
  // const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="fixed left-0 top-0 h-16 w-full bg-[#052929] backdrop-blur-md">
      <nav className="mx-auto flex h-full w-full items-center justify-center text-white">
        <div className="flex w-1/3 items-center space-x-4 px-4 lg:px-8">
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
        <div className="w-1/3 px-4 py-1 lg:px-8">
          <ul className="hidden items-center justify-center gap-4 pt-2 tracking-wider md:flex md:gap-4 lg:gap-16 lg:text-lg">
            <li className="nav-li duration-100 ease-in hover:scale-110 hover:text-red-500">
              <button>Home</button>
            </li>
            <li className="nav-li duration-100 ease-in hover:scale-110 hover:text-yellow-500">
              <button>Video</button>
            </li>
            <li className="nav-li duration-100 ease-in hover:scale-110 hover:text-green-500">
              <button className="text-nowrap">Diagon Alley</button>
            </li>
            <li className="nav-li duration-100 ease-in hover:scale-110 hover:text-blue-500">
              <button>Houses</button>
            </li>
          </ul>
        </div>
        <div className="w-1/3 px-4 py-1 lg:px-8">
          <ul className="flex items-center justify-end gap-4 pt-2 tracking-wider lg:text-lg">
            <li className="nav-li duration-100 ease-in hover:scale-110 hover:text-red-500 md:hidden">
              <button>Menu</button>
            </li>
            <li className="nav-li duration-100 ease-in hover:scale-110 hover:text-yellow-500">
              <button>Howler</button>
            </li>
            <li className="nav-li duration-100 ease-in hover:scale-110 hover:text-green-500">
              <button className="text-nowrap">Owl-Post</button>
            </li>
            <li className="nav-li duration-100 ease-in hover:scale-110 hover:text-blue-500">
              <button>Account</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
