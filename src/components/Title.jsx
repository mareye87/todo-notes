import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const Title = ({ text, icon }) => {
  return (
    <div className="flex justify-between items-center py-4 px-8 shadow-2xl bg-cyan-600">
      <h1 className="text-2xl text-center text-slate-100"> {text}</h1>
      {icon}
    </div>
  );
};

export default Title;
