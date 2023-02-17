import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Links = () => {
  return (
    <>
      <Link to="/1">
        <motion.button
          className="btn"
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
        >
          First
        </motion.button>
      </Link>
      <Link to="/2">
        <motion.button
          className="btn"
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
        >
          Second
        </motion.button>
      </Link>
    </>
  );
};

export default Links;
