import React from "react";

const Navbar = () => {
  return (
    <header className="flex font-medium justify-between items-center px-8 py-2 bg-[#A6B71B] text-slate-100">
      <div>
        <h2 className="text-xl">ARMY | NAVY | AIRFORCE</h2>
        <h4 className="text-sm">SEPARATE HOSTEL FOR BOTH BOYS AND GIRLS</h4>
      </div>
      <nav>
        <ul className="flex justify-around gap-6">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Spi-courses</a>
          </li>
          <li>
            <a href="#">Results</a>
          </li>
          <li>
            <a href="#">Interview</a>
          </li>
          <li>
            <a href="#">Videos</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
