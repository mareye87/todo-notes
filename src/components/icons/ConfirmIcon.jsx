import { useGlobalContext } from "../../context";
import { CiCircleCheck } from "react-icons/ci";

const ConfirmIcon = () => {
  const { loading } = useGlobalContext();
  if (!loading)
    return (
      <CiCircleCheck className="text-slate-100 text-5xl hover:text-lime-400 transition duration-150 " />
    );
};

export default ConfirmIcon;
