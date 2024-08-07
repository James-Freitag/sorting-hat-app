// Components
import LeftLayout from "../layouts/LeftLayout";
import MiddleLayout from "../layouts/MiddleLayout";
import RightLayout from "../layouts/RightLayout";

const Middle = () => {
  return (
    <div className="flex min-h-screen w-full lg:justify-center">
      {/* ----------------Left Side--------------------------- */}
      <LeftLayout />
      {/* ----------------Middle--------------------------- */}
      <MiddleLayout />
      {/* ----------------Right Side--------------------------- */}

      <RightLayout />
    </div>
  );
};

export default Middle;
