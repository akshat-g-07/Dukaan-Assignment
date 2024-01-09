import PropTypes from "prop-types";

const DashboardHeader = ({ pixelPerfect }) => {
  return (
    <section
      className={`${
        pixelPerfect ? "border-b-[1px]" : "border-b-2"
      } px-8 py-3 h-16 w-full flex border-[#D9D9D9] bg-white items-center`}
    >
      <div
        className={`${
          pixelPerfect ? "w-[360px] h-[22px]" : "h-5 w-4/12"
        } flex items-center`}
      >
        <p className="text-[#1A181E]">Payments</p>
        <div className="w-4 h-full" />
        <div className="w-3.5 h-3.5">
          <img
            src="/images/dashboard-outlined-help.png"
            alt="dashboard-outlined-help"
          />
        </div>
        <div className="w-1.5 h-full" />
        <p
          className={`${
            pixelPerfect ? "w-[74px]" : "w-20"
          } text-[#4D4D4D] font-normal h-4 text-xs`}
        >
          How it works
        </p>
      </div>
      <div className={`${pixelPerfect ? "w-4" : "w-1"} h-full`} />
      <div
        className={`${
          pixelPerfect ? "w-[400px] h-[40px] py-[9px]" : "w-4/12 h-full py-2"
        } bg-[#F2F2F2] flex items-center rounded-md px-4`}
      >
        <div className="w-4 h-4">
          <img
            src="/images/dashboard-icons-search.png"
            alt="dashboard-icons-search"
          />
        </div>
        <div className="w-1.5 h-full" />
        <p
          className={`${
            pixelPerfect ? "w-[213px] h-[22px]" : "w-full h-full"
          } text-[#808080] font-normal text-sm`}
        >
          Search features, tutorials, etc.
        </p>
      </div>
      <div className={`${pixelPerfect ? "w-4" : "w-1.5"} h-full`} />
      <div
        className={`${
          pixelPerfect ? "w-[360px] h-[40px]" : "w-4/12 h-full"
        } flex flex-row-reverse items-center`}
      >
        <div
          className={`${
            pixelPerfect ? "h-[40px]" : "h-10"
          } flex w-10 items-center justify-center`}
          style={{
            backgroundImage: "url('images/dashboard-icons-ellipse-2.png')",
          }}
        >
          <img
            src="/images/dashboard-icons-menu.png"
            alt="dashboard-icons-menu"
          />
        </div>
        <div className={`${pixelPerfect ? "w-[12px]" : "w-2"} h-full`} />
        <div
          className={`${
            pixelPerfect ? "h-[40px]" : "h-10"
          } flex w-10 items-center justify-center`}
          style={{
            backgroundImage: "url('images/dashboard-icons-ellipse-2.png')",
          }}
        >
          <img
            src="/images/dashboard-icons-group.png"
            alt="dashboard-icons-group"
          />
        </div>
      </div>
    </section>
  );
};

DashboardHeader.propTypes = {
  pixelPerfect: PropTypes.bool.isRequired,
};

export default DashboardHeader;
