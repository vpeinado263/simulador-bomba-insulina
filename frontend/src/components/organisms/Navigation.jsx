"use client"; 
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gray-50 border-b border-yellow-500/40 shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="text-xl font-semibold text-gray-700">
          Bomba de Infusión
        </h1>

 
        <nav className="hidden md:flex gap-8 items-center">
          <NavItem href="/">Inicio</NavItem>
          <NavItem href="/bomba">Bomba de Infusión</NavItem>
        </nav>

  
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-100 border-t border-gray-300 py-3">
          <div className="flex flex-col gap-4 px-6">

            <NavItem href="/" onClick={() => setOpen(false)}>
              Inicio
            </NavItem>

            <NavItem href="/bomba" onClick={() => setOpen(false)}>
              Bomba de Infusión
            </NavItem>

          </div>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="relative text-gray-700 text-lg cursor-pointer transition-colors duration-300
               hover:text-red-500
               after:absolute after:left-0 after:bottom-[-3px]
               after:h-[2px] after:w-0 after:bg-red-500
               after:transition-all after:duration-300
               hover:after:w-full"
  >
    {children}
  </Link>
);

export default Navigation;
