import { CiEdit } from "react-icons/ci";
import { useGlobalContext } from "../../context";

const EditIcon = () => {
  const { loading } = useGlobalContext();
  if (!loading)
    return (
      <CiEdit className="text-slate-100 text-5xl hover:text-lime-400 transition duration-150 " />
    );
};

export default EditIcon;
