import PropTypes from "prop-types";
import LeftPanelItems from "./LeftPanelItems";

const LeftPanel = ({ pixelPerfect }) => {
  return (
    <>
      <nav
        className={`${
          pixelPerfect ? "w-[224px]" : "w-2/12"
        } h-full bg-[#1E2640] text-white px-2.5 py-4`}
      >
        {/*
        Header Starts
        */}
        <div className={`${pixelPerfect ? "h-[42px]" : "h-10"} w-48 flex`}>
          <div
            className={`${
              pixelPerfect ? "w-[39px] h-[39px]" : "w-10 h-10"
            } rounded`}
          >
            <img src="/images/profile_pic.png" alt="Profile Pic" />
          </div>
          <div className={`w-3 bg-transparent h-full`} />
          <div className={`${pixelPerfect ? "w-[108px]" : "w-20"}`}>
            <p className="font-medium text-base">Nishyan</p>
            <p className="font-normal text-sm opacity-80 underline">
              Visit Store
            </p>
          </div>
          <div className="h-full w-3 bg-transparent" />
          <div className="h-full w-fit flex items-center">
            <div className="w-5 h-5">
              <img
                src="/images/navbar-bold-chevron-down.png"
                alt="navbar-bold-chevron-down"
              />
            </div>
          </div>
        </div>
        <div className="h-6 w-full bg-transparent" />
        {/*
        Header Ends
        */}

        {/*
        List Starts
        */}
        <div className="w-full h-[1314px]">
          {LeftPanelItems.map((item) => {
            return (
              <>
                <div
                  key={item.name}
                  className={`${
                    pixelPerfect ? "w-[208px]" : "w-full"
                  } rounded flex py-2 px-4 h-9 ${
                    item.name === "Payments"
                      ? "bg-[#FFFFFF1A]"
                      : "bg-transparent"
                  }`}
                >
                  <div className="w-5 h-5 opacity-80">
                    <img src={`/images/${item.icon}.png`} alt={item.icon} />
                  </div>
                  <div className="h-full w-3" />
                  <div className="h-5 opacity-80 w-fit font-medium text-sm">
                    {item.name}
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="h-4 w-full" />
        {/*
        List Ends
        */}

        {/*
        Footer Starts
        */}
        <div
          className={`${
            pixelPerfect ? "h-[54px]" : "h-12"
          } w-full py-1.5 px-3 rounded flex bg-[#353C53]`}
        >
          <div className="flex items-center h-full">
            <div className={`w-6 p-1.5 h-6 rounded bg-[#FFFFFF1A]`}>
              <img src="/images/navbar-creds.png" />
            </div>
          </div>
          <div className="h-full w-3" />
          <div>
            <p
              className={`${pixelPerfect ? "text-sm" : "text-xs"} font-normal`}
            >
              Available Credits
            </p>
            <p
              className={`${
                pixelPerfect ? "text-base" : "text-sm"
              } font-medium`}
            >
              222.10
            </p>
          </div>
        </div>
        {/*
        Footer Ends
        */}
      </nav>
    </>
  );
};

LeftPanel.propTypes = {
  pixelPerfect: PropTypes.bool.isRequired,
};

export default LeftPanel;
