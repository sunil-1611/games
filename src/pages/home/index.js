import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    name: "Archer",
    link: "/archer",
  },
  {
    name: "Dice",
    link: "/dice",
  },
  {
    name: "Shuffle",
    link: "/shuffle",
  },
  {
    name: "Spin",
    link: "/spin",
  },
];
const Home = () => (
  <div className="welcome">
    <div>
      <h1>Welcome</h1>

      <ul>
        {links.map(({ name, link }) => (
          <li key={link}>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Home;
