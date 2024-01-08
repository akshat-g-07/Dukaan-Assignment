import PropTypes from "prop-types";
import LeftPanel from "./LeftPanel";

const Solution = ({ pixelPerfect }) => {
  return (
    <>
      <div className="p-24 w-fit h-fit">
        <div className="w-[1440px] h-[1482px]">
          <LeftPanel />
        </div>
      </div>
    </>
  );
};

Solution.propTypes = {
  pixelPerfect: PropTypes.bool.isRequired,
};

export default Solution;
