import PropTypes from "prop-types";
import DashboardHeader from "./Dashboard-Header";
import DashboardList from "./Dashboard-List";
import DashboardPagination from "./Dashboard-Pagination";

const Dashboard = ({ pixelPerfect }) => {
  return (
    <>
      <main
        className={`${pixelPerfect ? "w-[1216px]" : "w-10/12"} bg-[#FAFAFA]`}
      >
        {/**
         * Header Starts
         */}
        <DashboardHeader pixelPerfect={pixelPerfect} />
        {/**
         * Header Ends
         */}

        {/**
         * Body Starts
         */}
        <section
          className={`${pixelPerfect ? "w-[1152px]" : "w-11/12"} mx-auto`}
        >
          {/**
           * Content Box 1 Starts
           */}
          <article
            className={`${
              pixelPerfect ? "w-[1152px]" : "w-full"
            } h-9 mt-8 justify-between flex items-center`}
          >
            <div
              className={`${
                pixelPerfect ? "w-[91px]" : "w-auto"
              } font-medium text-xl h-7 text-[#1A181E]`}
            >
              Overview
            </div>
            <div
              className={`${
                pixelPerfect ? "border-[1px] w-[137px]" : "w-32 border"
              } flex items-center bg-[#FFFFFF] rounded border-[#D9D9D9] h-9`}
            >
              <div
                className={`${
                  pixelPerfect ? "w-[86px]" : "w-20"
                }text-[#4D4D4D] font-normal text-base ml-3.5 my-1.5 h-6`}
              >
                Last Month
              </div>
              <div
                className={`${
                  pixelPerfect ? "ml-[7px]" : "ml-1.5"
                } w-4 h-4 my-2.5`}
              >
                <img src="images/icons-arrow.png" alt="icons-arrow" />
              </div>
            </div>
          </article>
          <div className="h-6 w-full" />
          {/**
           * Content Box 1 Ends
           */}

          {/**
           * Content Box 2 Starts
           */}
          <article
            className={`${
              pixelPerfect
                ? "h-[118px] w-fit justify-center"
                : "h-28 w-full justify-between"
            } flex`}
          >
            <div
              className={`${
                pixelPerfect ? "w-[566px] h-[118px]" : "w-5/12 h-28"
              } bg-[#FFF] p-5 rounded-lg`}
              style={{
                boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
              }}
            >
              <p className={`font-normal h-6 text-base text-[#4D4D4D]`}>
                Online orders
              </p>
              <p className="h-4 w-full" />
              <p
                className={`${
                  pixelPerfect
                    ? "text-[32px] leading-[38px] h-[38px]"
                    : "text-3xl h-fit"
                } text-[#1A181E] font-medium`}
              >
                231
              </p>
            </div>
            <div className="w-5 h-full" />
            <div
              className={`${
                pixelPerfect ? "w-[566px] h-[118px]" : "w-5/12 h-28"
              } bg-[#FFF] p-5 rounded-lg`}
              style={{
                boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
              }}
            >
              <p className={`font-normal h-6 text-base text-[#4D4D4D]`}>
                Amount received
              </p>
              <p className="h-4 w-full" />
              <p
                className={`${
                  pixelPerfect
                    ? "text-[32px] leading-[38px] h-[38px]"
                    : "text-3xl h-fit"
                } text-[#1A181E] font-medium`}
              >
                ₹23,92,312.19
              </p>
            </div>
          </article>
          <div className="h-8 w-full" />
          {/**
           * Content Box 2 Ends
           */}

          <p className={`text-xl h-7 text-[#1A181E] font-medium`}>
            Transactions | This Month
          </p>
          <p className="w-full h-5" />

          {/**
           * List Starts
           */}
          <article
            className={`${
              pixelPerfect ? "w-[1152px] h-[1096px]" : "w-full h-fit"
            } bg-[#FFF] px-3 pb-6 pt-3 rounded-lg`}
            style={{
              boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
            }}
          >
            <DashboardList pixelPerfect={pixelPerfect} />
            {/**
             * Pagination Starts
             */}
            <DashboardPagination pixelPerfect={pixelPerfect} />
            {/**
             * Pagination Ends
             */}
          </article>
          {/**
           * List Ends
           */}
        </section>
        {/**
         * Body Ends
         */}
      </main>
    </>
  );
};

Dashboard.propTypes = {
  pixelPerfect: PropTypes.bool.isRequired,
};

export default Dashboard;
