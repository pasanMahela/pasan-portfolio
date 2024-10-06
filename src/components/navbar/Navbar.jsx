import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Pasan Mahela
        </motion.span>
        <div className="social">
          <a href="https://github.com/pasanMahela">
            <img src="./assets/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/pasan-mahela-0760b8253">
            <img src="./assets/linkedin.png" alt="" />
          </a>
          <a href="https://www.facebook.com/pasan.mahela.77">
            <img src="./assets/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/pasan.mahela/profilecard/">
            <img src="./assets/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
