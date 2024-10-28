import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About Us" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact Us" },
    { id: 5, path: "/profile", name: "Profile" },
  ];
  return (
    <nav className="bg-slate-100 py-5 px-2">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-3xl">Logo</h1>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer"
        >
          {open === true ? (
            <IoMdClose className="text-3xl" />
          ) : (
            <HiMenuAlt1 className="text-3xl" />
          )}
        </div>
        <ul
          className={`md:flex gap-5 justify-end bg-slate-700 md:bg-transparent md:text-black text-white px-7 py-4 absolute md:static duration-500 md:duration-0 w-full space-y-3 ${
            open ? "top-20 right-0" : "-top-60 right-0"
          }`}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
