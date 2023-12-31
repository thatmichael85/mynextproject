import NavBar from "./components/NavBar";
import HamburgerNavbar from "./components/NavBarHamburger";
export default function Home() {
  const navBarLinks = [
    {
      link: "/meta",
      linkName: "Meta Engineering Blog",
      children: [
        { link: "/meta/design", linkName: "Design Innovations" },
        { link: "/meta/ai", linkName: "AI Research" },
      ],
    },
    {
      link: "/google",
      linkName: "Google Developers Blog",
      children: [{ link: "/google/cloud", linkName: "Cloud Infrastructure" }],
    },
    {
      link: "/netflix",
      linkName: "Netflix Tech Blog",
      children: [
        { link: "/netflix/data", linkName: "Data Science" },
        { link: "/netflix/ux", linkName: "User Experience" },
        { link: "/netflix/systems", linkName: "Systems Architecture" },
      ],
    },
    {
      link: "/tesla",
      linkName: "Tesla Engineering Blog",
      // No children for Tesla
    },
    {
      link: "/airbnb",
      linkName: "Airbnb Engineering & Data Science",
      children: [
        { link: "/airbnb/machine-learning", linkName: "Machine Learning" },
      ],
    },
  ];

  return (
    <>
      <NavBar linksProps={navBarLinks} />
      <HamburgerNavbar/>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
