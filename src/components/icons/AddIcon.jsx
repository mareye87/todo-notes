import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

const AddIcon = () => {
  const { loading } = useGlobalContext();

  if (!loading)
    return (
      <Link to="/todo/create">
        <button>
          <CiCirclePlus className="text-slate-100 text-5xl hover:text-lime-400 hover:rotate-180 transition duration-150  " />
        </button>
      </Link>
    );
};

export default AddIcon;
