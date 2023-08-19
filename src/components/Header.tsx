import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
type Props = { toggleSidebar: () => void };

const Header = (props: Props) => {
  const [title, setTitle] = useState("Contact Page");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "");
    if (path === "map") {
      setTitle("Charts and Maps");
    } else {
      setTitle("Contact Page");
    }
  }, [location]);

  return (
    <header className="flex fixed top-0 w-full z-[99999] items-center justify-center flex-wrap bg-sky-950 p-6">
      <p className="text-xl text-white font-bold">{title}</p>
      <button
        type="button"
        onClick={props.toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-white rounded-lg sm:hidden absolute right-0 mr-2 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
