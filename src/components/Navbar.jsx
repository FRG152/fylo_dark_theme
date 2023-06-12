import Logo from "../assets/logo.svg";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="nav-logo">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          src={Logo}
          alt="logo"
        />
      </a>
      <motion.ul
        className="links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <li>
          <a className="link" href="#Features">
            Features
          </a>
        </li>
        <li>
          <a className="link" href="#Team">
            Team
          </a>
        </li>
        <li>
          <a className="link" href="#SignIn">
            Sign In
          </a>
        </li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
