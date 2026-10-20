import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <header className="border-b">
  <nav className="container mx-auto grid grid-cols-3 items-center px-4 py-3">
    {/* Left: logo */}
    <Link href="/" className="justify-self-start">
      <Image
        src={logo}
        alt="Company logo"
        height={60}
        className="h-14 w-auto"
        priority
      />
    </Link>

    {/* Middle: links */}
    <ul className="flex items-center justify-center gap-6">
      <li><Link href="#">Blog</Link></li>
      <li><Link href="#">About</Link></li>
    </ul>

    {/* Right: button */}
    <div className="justify-self-end">
      <button className="btn btn-primary">Explore</button>
    </div>
  </nav>
</header>
    );
};

export default Navbar;