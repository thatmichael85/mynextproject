'use client'
import Link from 'next/link';

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

  return (
    <nav>
      <ul className="flex space-x-4 p-4">
        {linksProps.map((linkProp, index) => (
          <li
            key={index}
            className="group"
          >
            <Link href={linkProp.link} prefetch={linkProp.prefetch ?? false}>
              <span className="inline-block px-4 py-2 hover:bg-gray-100">{linkProp.linkName}</span>
            </Link>
            {linkProp.children && linkProp.children.length > 0 && (
              <div className="z-10 group-hover:block hidden absolute">
                <ul className="bg-white top-0">
                  {linkProp.children.map((childLink, childIndex) => (
                    <li key={childIndex} className="border-b border-gray-100 last:border-0">
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
