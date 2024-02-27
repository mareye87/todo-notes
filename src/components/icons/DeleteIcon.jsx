import { CiTrash } from "react-icons/ci";
import { useGlobalContext } from "../../context";

const DeleteIcon = () => {
  const { loading } = useGlobalContext();

  if (!loading)
    return (
      <CiTrash className="text-slate-100 text-5xl hover:text-red-600 transition duration-150 " />
    );
};

export default DeleteIcon;
