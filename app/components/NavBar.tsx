'use client'
import Link from 'next/link';
import { useState } from 'react';

type LinkProperties = {
  link: string;
  linkName: string;
  prefetch?: boolean;
  children?: LinkProperties[];
};

type NavBarProps = {
  linksProps: LinkProperties[];
};

const NavBar: React.FC<NavBarProps> = ({ linksProps }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number>(0); 

  const handleMouseEnter = (index: number) => {
    setHoveredLink(index);

    setTimeout(() => {
      setShowDropdown(true);
    }, 150); // Adjust the delay time as needed (in ms)
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
    setHoveredLink(0);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <ul className="flex space-x-4 p-4">
        {linksProps.map((linkProp, index) => (
          <li
            key={index}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={linkProp.link} prefetch={linkProp.prefetch ?? false}>
              <span className="inline-block px-4 py-2 hover:bg-blue-700">{linkProp.linkName}</span>
            </Link>
            {linkProp.children && linkProp.children.length > 0 && hoveredLink === index && showDropdown && (
              <div className="z-10 group-hover:block hidden absolute">
                <ul className="bg-white text-blue-600 top-0">
                  {linkProp.children.map((childLink, childIndex) => (
                    <li key={childIndex} className="border-b border-gray-200 last:border-0">
                      <Link href={childLink.link} prefetch={childLink.prefetch ?? false}>
                        <span className="block px-4 py-2 hover:bg-gray-100">{childLink.linkName}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
