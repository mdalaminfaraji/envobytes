"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="  py-4 px-14">
      <div className="max-w-[1902px] mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/Envobyte/logo-white.png"
            alt="Envobyte Logo"
            width={122}
            height={34}
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "text-[#FF693B]" : "text-white"
            } hover:text-[#FF693B] transition-colors`}
          >
            HOME
          </Link>
          <Link
            href="/service"
            className={`${
              pathname === "/service" ? "text-[#FF693B]" : "text-white"
            } hover:text-[#FF693B] transition-colors`}
          >
            SERVICE
          </Link>
          <Link
            href="/combo-sales"
            className={`${
              pathname === "/combo-sales" ? "text-[#FF693B]" : "text-white"
            } hover:text-[#FF693B] transition-colors`}
          >
            COMBO SALES
          </Link>
          <Link
            href="/portfolio"
            className={`${
              pathname === "/portfolio" ? "text-[#FF693B]" : "text-white"
            } hover:text-[#FF693B] transition-colors`}
          >
            PORTFOLIO
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about" ? "text-[#FF693B]" : "text-white"
            } hover:text-[#FF693B] transition-colors`}
          >
            ABOUT US
          </Link>
          <Link
            href="/blogs"
            className={`${
              pathname === "/blogs" ? "text-[#FF693B]" : "text-white"
            } hover:text-[#FF693B] transition-colors`}
          >
            BLOGS
          </Link>
        </nav>

        <div className="flex items-center">
          <button className="px-16 py-3 rounded-md bg-[#FF693B] text-white hover:bg-orange-600 transition-colors font-medium">
            See Pricing
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
