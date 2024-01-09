import PropTypes from "prop-types";
import LeftPanel from "./LeftPanel";
import Dashboard from "./Dashboard";

const Solution = ({ pixelPerfect }) => {
  return (
    <>
      <div
        className={`${
          pixelPerfect ? "w-fit" : "w-screen overflow-x-hidden"
        } p-24 bg-slate-300 h-fit
      `}
      >
        <div
          className={`
        ${pixelPerfect ? "w-[1440px] h-[1482px]" : "w-full h-fit"} flex
        `}
        >
          <LeftPanel pixelPerfect={pixelPerfect} />
          <Dashboard pixelPerfect={pixelPerfect} />
        </div>
      </div>
    </>
  );
};

Solution.propTypes = {
  pixelPerfect: PropTypes.bool.isRequired,
};

export default Solution;
