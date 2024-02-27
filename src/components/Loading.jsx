import RotateLoader from "react-spinners/RotateLoader";

const Loading = () => {
  return (
    <div className="w-full flex justify-center p-4">
      <RotateLoader color="darkgray" />
    </div>
  );
};

export default Loading;
