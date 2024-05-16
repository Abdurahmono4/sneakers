import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/collection",
    text: "collection",
  },
  {
    id: 3,
    url: "/men",
    text: "men",
  },
  {
    id: 3,
    url: "/women",
    text: "women",
  },
  {
    id: 5,
    url: "/about",
    text: "about",
  },

  {
    id: 6,
    url: "/contact",
    text: "contact",
  },
];

function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <NavLink className="capitalize" to={link.url}>
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
