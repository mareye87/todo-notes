import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link
      to="/"
      className="grid place-items-center px-4 py-1 mt-4 rounded-md bg-cyan-800 text-slate-100 w-fit mx-auto shadow-md hover:text-lime-400 transition duration-200"
    >
      <div className="flex items-center justify-center">
        <IoChevronBack />
        <span>Back</span>
      </div>
    </Link>
  );
};

export default BackButton;
