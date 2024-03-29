
'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation';

export default function NavBarComponet() {
  const path = usePathname()
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="https://www.flowbite-react.com/favicon.svg"  alt="Flowbite React Logo" />
        {/* <Image src="/favicon.svg" alt='Landscape picture' className="mr-3 h-6 sm:h-9"/> */}
        <span className="ml-5 self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/about" className={`${path == "/about"? "bg-red-600" : ""}`}>
          About
        </Navbar.Link>
        <Navbar.Link as={Link} href="/service" className={`${path == "/service"? "bg-red-600" : ""}`}>Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}