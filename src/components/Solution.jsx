import PropTypes from "prop-types";
import LeftPanel from "./LeftPanel";
import Dashboard from "./Dashboard";

const Solution = ({ pixelPerfect }) => {
  return (
    <>
      <div
        className={`${pixelPerfect ? "p-24 w-fit h-fit bg-slate-300" : ""}
      `}
      >
        <div
          className={`
        ${pixelPerfect ? "w-[1440px] h-[1482px] flex" : ""}
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
