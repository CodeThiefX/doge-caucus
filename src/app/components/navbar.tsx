import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="flex p-4 lg:px-8 justify-between"
        style={{ backgroundColor: "rgb(26, 54, 104)" }}
      >
        <div className="flex">
          <img src="coin.PNG" alt="coin" width="60" height="60" />
          <img src="text-logo.png" alt="text-logo" width="200" height="60" />
        </div>

        {/* Desktop Menu */}
        <div className="lg:flex gap-4 items-center hidden font-extrabold">
          <a className="text-white text-3xl" href="#">
            HOME
          </a>
          <a className="text-white text-3xl" href="#about">
            MISSION
          </a>
          <a className="text-white text-3xl" href="#tokenomics">
            TOKENOMICS
          </a>

          <img src="buy-now.PNG" alt="buy-now" width="100" height="40" />
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-yellow-500" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className="lg:hidden absolute w-full z-50"
          style={{ backgroundColor: "rgb(26, 54, 104)" }}
        >
          <div className="flex flex-col items-center gap-4 p-4">
            <a className="text-white text-xl" href="#">
              HOME
            </a>
            <a className="text-white text-xl" href="#about">
              MISSION
            </a>
            <a className="text-white text-xl" href="#tokenomics">
              TOKENOMICS
            </a>
            <img src="buy-now.PNG" alt="buy-now" width="100" height="40" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
