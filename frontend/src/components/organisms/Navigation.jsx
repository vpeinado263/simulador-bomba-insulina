import React from 'react'

const Navigation = () => {
  return (
    <header className="w-full bg-[#0d0d0d] border-b border-yellow-500/40 py-4 shadow-lg flex justify-center">
      <nav className="flex gap-8 items-center">
        <Link href="/" className="nav-item">
          Inicio
        </Link>

        <Link href="/" className="nav-item">
          Bomba de Infusión
        </Link>
      </nav>

      <style jsx>{`
        .nav-item {
          @apply text-gray-100 text-lg relative cursor-pointer transition-colors duration-300;
        }

        .nav-item:hover {
          @apply text-yellow-400;
        }

        .nav-item::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0%;
          height: 2px;
          background: gold;
          transition: width 0.3s ease;
        }

        .nav-item:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  )
}

export default Navigation;
