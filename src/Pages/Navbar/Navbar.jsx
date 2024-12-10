import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Lessons</a>
              </li>

              <li>
                <a>Tutorial</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img
              src="/translate.png"
              alt="logo"
              className="h-[30px] md:h-[40px]"
            />
            <h2 className="text-[14px] md:text-[18px] text-[#301a52] font-urbanist font-black">
              Vocabulary-Ninja
            </h2>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>
                <NavLink
                  to="/lessons"
                  className="text-[12px] text-[#301a52] font-urbanist font-black uppercase"
                >
                  Lessons
                </NavLink>
              </a>
            </li>

            <li>
              <a>
                <NavLink
                  to="/tutorial"
                  className="text-[12px] text-[#301a52] font-urbanist font-black uppercase"
                >
                  Tutorial
                </NavLink>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="text-[12px] text-[#301a52] font-urbanist font-black uppercase">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
