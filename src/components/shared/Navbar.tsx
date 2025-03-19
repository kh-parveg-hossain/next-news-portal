"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { ThemeContext } from "@/context/themeContext";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme }: any = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`sticky top-0 z-50 py-4 shadow-md bg-white dark:bg-gray-900 dark:text-white`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="font-bold text-xl">
          <Link href="/" className="dark:text-white">
            Daily News
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/news" className={`${pathname === "/news" ? "text-red-500 font-semibold" : "dark:text-white"}`}>
                  News
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={`${pathname === "/services" ? "text-red-500 font-semibold" : "dark:text-white"}`}>
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="dark:bg-gray-800 dark:text-white">
                <ul className="rounded-md px-5 py-4 space-y-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/web-development">Web Development</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/mobile-apps">Mobile Apps</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/seo">SEO</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className={`${pathname === "/about" ? "text-red-500 font-semibold" : "dark:text-white"}`}>
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact" className={`${pathname === "/contact" ? "text-red-500 font-semibold" : "dark:text-white"}`}>
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Dark Mode & Login Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <div onClick={toggleTheme} className="flex items-center cursor-pointer">
            <span className="mr-2 dark:text-white">Dark mode</span>
            <Switch />
          </div>
          <Button className="ml-4" variant="default">
            Login
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="dark:text-white">
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 dark:text-white shadow-md absolute top-16 left-0 w-full py-4 px-6">
          <ul className="space-y-4">
            <li>
              <Link href="/news" className={`${pathname === "/news" ? "text-red-500 font-semibold" : ""}`} onClick={toggleMenu}>
                News
              </Link>
            </li>
            <li>
              <Link href="/services" className={`${pathname === "/services" ? "text-red-500 font-semibold" : ""}`} onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className={`${pathname === "/about" ? "text-red-500 font-semibold" : ""}`} onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`${pathname === "/contact" ? "text-red-500 font-semibold" : ""}`} onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li className="flex items-center justify-between">
              <span>Dark mode</span>
              <Switch onClick={toggleTheme} />
            </li>
            <li>
              <Button variant="default" className="w-full" onClick={toggleMenu}>
                Login
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
