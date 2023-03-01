import { useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "../../App";
import { motion } from "framer-motion";

const Links = ({ variants = {} }) => {
  return (
    <div>
      {Object.keys(links).map((link, index) => (
        <Link key={index} to={"/" + link}>
          <motion.button
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="btn z-20"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 1.2 }}
          >
            {link}
          </motion.button>
        </Link>
      ))}
    </div>
  );
};

export default Links;
