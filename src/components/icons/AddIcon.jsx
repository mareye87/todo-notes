import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const AddIcon = () => {
  return (
    <Link to="/todo/create">
      <CiCirclePlus className="text-slate-100 text-5xl hover:text-lime-400 hover:rotate-180 transition duration-150  " />
    </Link>
  );
};

export default AddIcon;
