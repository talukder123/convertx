import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (

    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={logo}
            alt="Company logo"
            height={60}
            className="h-10 w-auto sm:h-14"
            priority
          />
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-1 sm:gap-4">
          <li>
            <Link
              href="/Blog"
              className="rounded-md border border-transparent px-2 py-2 text-sm font-semibold text-black transition hover:border-gray-200 hover:bg-gray-100 sm:px-3"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className="rounded-md border border-transparent px-2 py-2 text-sm font-semibold text-black transition hover:border-gray-200 hover:bg-gray-100 sm:px-3"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Explore Button */}
        <Link href="/#main-box" className="btn btn-primary btn-sm sm:btn-md">
          Convert Now
        </Link>
      </nav>
    </header>

  );
};

export default Navbar;