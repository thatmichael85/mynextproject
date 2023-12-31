import Link from 'next/link';

type LinkProperties = {
  link: string;
  linkName: string;
  prefetch?: boolean;
  children?: LinkProperties[];
}

type NavBarProps = {
  linksProps: LinkProperties[];
}

const NavBar: React.FC<NavBarProps> = ({ linksProps }) => {
  return (
    <nav className="bg-blue-600 text-white">
      <ul className="flex space-x-4 p-4">
        {linksProps.map((linkProp, index) => (
          <li key={index} className="relative group">
            <Link href={linkProp.link} prefetch={linkProp.prefetch ?? false}>
              <span className="inline-block px-4 py-2 hover:bg-blue-700 cursor-pointer">{linkProp.linkName}</span>
            </Link>
            {linkProp.children && linkProp.children.length > 0 && (
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                {/* <ul className="bg-white text-blue-600 left-0 w-full mt-px shadow-md z-10"> */}
                <ul className="bg-white text-blue-600 top-0">
                  {linkProp.children.map((childLink, childIndex) => (
                    <li key={childIndex} className="border-b border-gray-200 last:border-0">
                      <Link href={childLink.link} prefetch={childLink.prefetch ?? false}>
                        <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">{childLink.linkName}</span>
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
