import Link from "next/link";

const Navigation = () => {
  return (
    <header className="w-full bg-[#0d0d0d] border-b border-yellow-500/40 py-4 shadow-lg flex justify-center">
      <nav className="flex gap-8 items-center">

        <Link
          href="/"
          className="relative text-gray-100 text-lg cursor-pointer transition-colors duration-300
                     hover:text-yellow-400
                     after:absolute after:left-0 after:bottom-[-3px]
                     after:h-[2px] after:w-0 after:bg-yellow-400
                     after:transition-all after:duration-300
                     hover:after:w-full"
        >
          Inicio
        </Link>

        <Link
          href="/bomba"
          className="relative text-gray-100 text-lg cursor-pointer transition-colors duration-300
                     hover:text-yellow-400
                     after:absolute after:left-0 after:bottom-[-3px]
                     after:h-[2px] after:w-0 after:bg-yellow-400
                     after:transition-all after:duration-300
                     hover:after:w-full"
        >
          Bomba de Infusión
        </Link>

      </nav>
    </header>
  );
};

export default Navigation;
