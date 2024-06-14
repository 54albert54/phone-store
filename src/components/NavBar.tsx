import { useState } from "react";

const allMenus = [
  {
    id: 1,
    title: "celulares",
    path: "/about",
  },
  {
    id: 2,
    title: "ofertas",
    path: "/blog",
  },
  {
    id: 3,
    title: "accesorios",
    path: "/blog",
  },
  {
    id: 4,
    title: "reparaciones",
    path: "/blog",
  },
  {
    id: 5,
    title: "conocenos",
    path: "/about",
  },
];

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
 

  return (
    <header className="bg-white shadow-md sticky sm:block top-0 z-10">
      <nav className="flex items-center justify-between h-16 px-4">
        <a href="/">
          <img
            
            className="absolute top-[-5px] left-[-2px] w-28 h-20"
            src="/locoPNG.png"
            alt=""
          />
        </a>

        <div className="hidden sm:flex  gap-x-4">
          {allMenus.map((menu) => {
            return (
              <NavBarLinks
                key={menu.id}
                href={menu.path}
              
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
        <section className="fixed top-16 left-0  z-10 bg-red-200 w-screen h-screen flex flex-col gap-y-4 items-center pt-10">
          {allMenus.map((menu) => {
            return (
              <div key={menu.id} className="text-4xl w-3/4 h-16 flex  items-center pl-3 rounded-md bg-red-300 font-normal shadow-red-400 shadow-sm ">
              <NavBarLinks
                
                href={menu.path}
              
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
  children: string;
  
};
const NavBarLinks = ({ href, children }: NavBarLinksProps) => {

  
  return (
   
      <a href={href} className={`inline-block no-underline  capitalize `}>
        {children}
      </a>
   
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
