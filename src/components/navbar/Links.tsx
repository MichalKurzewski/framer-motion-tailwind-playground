import { Link } from "react-router-dom";
import { links } from "../../App";
import { motion } from "framer-motion";

const Links = ({ variants = {} }) => {
  return (
    <>
      {Object.keys(links).map((link, index) => (
        <motion.div
          key={index}
          variants={variants}
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
        >
          <Link to={"/" + link}>
            <button className="btn z-20">{link}</button>
          </Link>
        </motion.div>
      ))}
    </>
  );
};

export default Links;
