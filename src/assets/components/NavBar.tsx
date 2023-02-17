import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-evenly h-36 p-4">
      <Link to="/1" className="upper text-xl hover:scale-110 origin-top">
        First
      </Link>
      <Link to="/2" className="upper text-xl hover:scale-110 origin-top">
        Second
      </Link>
    </div>
  );
};

export default NavBar;
