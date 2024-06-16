import { useEffect, useState } from "react";

const allMenus = [
  {
    id: 1,
    title: "ofertas ",
    path: "/ofertas",
  },
  {
    id: 2,
    title: "celulares",
    path: "/celulares",
  },

  {
    id: 3,
    title: "accesorios ",
    path: "/accesorios",
  },
  {
    id: 4,
    title: " Servicios ",
    path: "/servicios",
  },
  {
    id: 5,
    title: " conocenos ",
    path: "/about",
  },
];

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    // Verificar si estamos en el cliente
    if (typeof window !== "undefined") {
      const url = window.location.pathname.split("/")[1];
      setCurrentPage("/" + url);
    }
  }, []);

  return (
    <header className="bg-white shadow-md sticky sm:block top-0 z-50 mb-10 text-[#1b1b1b]">
      <nav className="flex items-center justify-between h-16 px-4 max-w-[1080px] mx-auto">
        <div className="flex items-center  w-full h-6">
          <a href="/" className="flex items-center ">
            <img
              className=" top-[-5px] left-[-2px] w-28 h-20"
              src="/dummyPhoto/logoDummyremovebg.png"
              alt=""
            />
          </a>
        </div>

        <div className="hidden sm:flex  gap-x-4">
          {allMenus.map((menu) => {
            return (
              <NavBarLinks
                key={menu.id}
                href={menu.path}
                active={currentPage === menu.path}
              >
                {menu.title}
              </NavBarLinks>
            );
          })}
        </div>
        <div className="relative" onClick={() => setShowMenu(!showMenu)}>
          {/* Hamburger menu */}
          <div
            className={` sm:hidden p-2 rounded-lg ${
              showMenu ? "bg-red-400/60 shadow-red-400 shadow-sm " : ""
            } `}
          >
            <MenuIcon />
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      {showMenu && (
        <section className="fixed top-16 left-0 sm:hidden  z-50 bg-slate-200 w-screen h-screen flex flex-col gap-y-4 items-center pt-10">
          {allMenus.map((menu) => {
            return (
              <div
                key={menu.id}
                className="text-4xl w-3/4 h-16 flex  items-center justify-start  rounded-md bg-slate-400/80 font-normal shadow-slate-400 shadow-sm "
              >
                <NavBarLinks
                  href={menu.path}
                  active={currentPage === menu.path}
                >
                  {menu.title}
                </NavBarLinks>
              </div>
            );
          })}
        </section>
      )}
    </header>
  );
};

export default NavBar;

type NavBarLinksProps = {
  href: string;
  active: boolean;
  children: string;
};
const NavBarLinks = ({ href, active, children }: NavBarLinksProps) => {
  return (
    <div className="flex pl-4 sm:pl-0 sm:items-center flex-col gap-x-2 w-[220px]   sm:w-[100px]">
      <a href={href} className={`inline-block no-underline  capitalize `}>
        {children}
      </a>
      <span
        className={` ${
          active ? "bg-red-400/60 w-full" : "w-3"
        } mt-2  h-2 rounded-full transition-all ease-out duration-200`}
      ></span>
    </div>
  );
};

const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-menu-2"
    >
      <path d="M4 6l16 0"></path>
      <path d="M4 12l16 0"></path>
      <path d="M4 18l16 0"></path>
    </svg>
  );
};
