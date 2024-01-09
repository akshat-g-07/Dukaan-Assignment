import PropTypes from "prop-types";

const DashboardList = ({ pixelPerfect }) => {
  return (
    <>
      <div
        className={`${
          pixelPerfect ? "w-[1128px]" : "w-full"
        } h-10 flex justify-between`}
      >
        <div
          className={`${
            pixelPerfect ? "w-[248px] border-[1px]" : "w-3/12 border"
          } items-center h-10 rounded py-2.5 px-4 border-[#D9D9D9] bg-[#FFF] flex`}
        >
          <div className="w-3.5 h-3.5">
            <img
              src="/images/input-input-search-field-bold-search.png"
              alt="input-input-search-field-bold-search"
            />
          </div>
          <div className="w-2 h-full" />
          <div
            className={`${
              pixelPerfect ? "w-[194px]" : "w-fit"
            } font-normal h-5 text-sm text-[#999]`}
          >
            Search by order ID...
          </div>
        </div>
        <div
          className={`${
            pixelPerfect ? "w-[127px]" : "w-32"
          } flex items-center justify-end h-9`}
        >
          <div
            className={`${
              pixelPerfect ? "w-[79px] border-[1px]" : "border w-20"
            } h-9 py-1.5 px-3 rounded border-[#D9D9D9] flex items-center`}
          >
            <div className="text-base font-normal text-[#4D4D4D]">Sort</div>
            <div className="w-1.5 h-full" />
            <div className="w-4 h-4">
              <img
                src="/images/button-outlined-sort.png"
                alt="button-outlined-sort"
              />
            </div>
          </div>
          <div className="w-3 h-full" />
          <div
            className={`${
              pixelPerfect ? "border-[1px]" : "border"
            } w-9 rounded flex justify-center items-center border-[#D9D9D9] h-9`}
          >
            <img src="/images/icons-download.png" alt="icons-download" />
          </div>
        </div>
      </div>
      <div className="h-3 w-full" />
      <div
        className={`${
          pixelPerfect ? "w-[1128px]" : "w-full"
        } h-10 rounded px-3 py-2.5 flex items-center bg-[#F2F2F2]`}
      >
        <div
          className={`${
            pixelPerfect ? "w-[246px]" : "w-3/12"
          } h-5 flex items-start justify-center flex-col text-sm font-medium text-[#4D4D4D]`}
        >
          Order ID
        </div>
        <div className="w-10 h-full" />
        <div
          className={`${
            pixelPerfect ? "w-[246px]" : "w-3/12"
          } h-5 flex items-start justify-center flex-col text-sm font-medium text-[#4D4D4D]`}
        >
          <div className="flex items-center">
            Order date
            <div className="w-1 h-full" />
            <div className="w-2 h-2">
              <img src="/images/triangle-icon.png" alt="triangle-icon" />
            </div>
          </div>
        </div>
        <div className="w-10 h-full" />
        <div
          className={`${
            pixelPerfect ? "w-[246px]" : "w-3/12"
          } h-5 flex items-end justify-center flex-col text-sm font-medium text-[#4D4D4D]`}
        >
          Order amount
        </div>
        <div className="w-10 h-full" />
        <div
          className={`${
            pixelPerfect ? "w-[246px]" : "w-3/12"
          } h-5 flex items-end justify-center flex-col text-sm font-medium text-[#4D4D4D]`}
        >
          <div className="flex items-center">
            Transaction fees
            <div className="w-1 h-full" />
            <div className="w-3.5 h-3.5">
              <img src="/images/outlined-info.png" alt="outlined-info" />
            </div>
          </div>
        </div>
      </div>
      {[...new Array(19)].map((_, index) => {
        return (
          <div
            key={index}
            className={`${
              pixelPerfect ? "w-[1128px] border-b-[1px]" : "w-full border-b"
            } h-[48px] px-3 py-3.5 items-center bg-[#FFF] border-[#E6E6E6] flex`}
          >
            <div
              className={`${
                pixelPerfect ? "w-[246px]" : "w-3/12"
              } h-5 flex items-start justify-center flex-col text-sm font-medium text-[#146EB4]`}
            >
              #281209
            </div>
            <div className="w-10 h-full" />
            <div
              className={`${
                pixelPerfect ? "w-[246px]" : "w-3/12"
              } h-5 flex items-start justify-center flex-col text-sm font-medium text-[#1A181E]`}
            >
              7 July, 2023
            </div>
            <div className="w-10 h-full" />
            <div
              className={`${
                pixelPerfect ? "w-[246px]" : "w-3/12"
              } h-5 flex items-end justify-center flex-col text-sm font-medium text-[#1A181E]`}
            >
              ₹1,278.23
            </div>
            <div className="w-10 h-full" />
            <div
              className={`${
                pixelPerfect ? "w-[246px]" : "w-3/12"
              } h-5 flex items-end justify-center flex-col text-sm font-medium text-[#1A181E]`}
            >
              ₹22
            </div>
          </div>
        );
      })}
      <div className="h-6 w-full" />
    </>
  );
};

DashboardList.propTypes = {
  pixelPerfect: PropTypes.bool.isRequired,
};

export default DashboardList;
