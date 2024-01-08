import PropTypes from "prop-types";
import LeftPanel from "./LeftPanel";
import Dashboard from "./Dashboard";

const Solution = ({ pixelPerfect }) => {
  return (
    <>
      <div className="p-24 w-fit h-fit bg-slate-400">
        <div className="w-[1440px] h-[1482px] flex">
          <LeftPanel />
          <Dashboard />
        </div>
      </div>
    </>
  );
};

Solution.propTypes = {
  pixelPerfect: PropTypes.bool.isRequired,
};

export default Solution;
