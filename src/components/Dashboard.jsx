import PropTypes from "prop-types";
import DashboardHeader from "./Dashboard-Header";
import DashboardList from "./Dashboard-List";
import DashboardPagination from "./Dashboard-Pagination";

const Dashboard = ({ pixelPerfect }) => {
  return (
    <>
      <main className={`${pixelPerfect ? "bg-[#FAFAFA]" : ""}`}>
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
        <section className={`${pixelPerfect ? "w-[1152px] mx-auto" : ""}`}>
          {/**
           * Content Box 1 Starts
           */}
          <article
            className={`${
              pixelPerfect
                ? "flex items-center w-[1152px] h-[36px] mt-[32px] justify-between"
                : ""
            }`}
          >
            <div
              className={`${
                pixelPerfect
                  ? "font-medium text-xl w-[91px] h-[28px] text-[#1A181E]"
                  : ""
              }`}
            >
              Overview
            </div>
            <div
              className={`${
                pixelPerfect
                  ? "border-[1px] border-[#D9D9D9] h-[36px] rounded-[4px] w-[137px] flex bg-[#FFFFFF]"
                  : ""
              }`}
            >
              <div
                className={`${
                  pixelPerfect
                    ? "text-[#4D4D4D] font-normal w-[86px] h-[24px] ml-[14px] my-[6px] text-base"
                    : ""
                }`}
              >
                Last Month
              </div>
              <div
                className={`${
                  pixelPerfect ? "w-[16px] h-[16px] my-[10px] ml-[7px]" : ""
                }`}
              >
                <img src="images/icons-arrow.png" alt="icons-arrow" />
              </div>
            </div>
          </article>
          <div className={`${pixelPerfect ? "w-full h-[24px]" : ""}`} />
          {/**
           * Content Box 1 Ends
           */}

          {/**
           * Content Box 2 Starts
           */}
          <article
            className={`${
              pixelPerfect ? "flex w-[fit] h-[118px] justify-center" : ""
            }`}
          >
            <div
              className={`${
                pixelPerfect
                  ? "bg-[#FFF] w-[566px] h-[118px] p-[20px] rounded-[8px]"
                  : ""
              }`}
              style={{
                boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
              }}
            >
              <p
                className={`${
                  pixelPerfect
                    ? "font-normal text-base text-[#4D4D4D] h-[24px]"
                    : ""
                }`}
              >
                Online orders
              </p>
              <p className={`${pixelPerfect ? "w-full h-[16px]" : ""}`} />
              <p
                className={`${
                  pixelPerfect
                    ? "font-medium text-[32px] leading-[38px] text-[#1A181E] h-[38px]"
                    : ""
                }`}
              >
                231
              </p>
            </div>
            <div className={`${pixelPerfect ? "w-[20px] h-full" : ""}`} />
            <div
              className={`${
                pixelPerfect
                  ? "bg-[#FFF] w-[566px] h-[118px] p-[20px] rounded-[8px]"
                  : ""
              }`}
              style={{
                boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
              }}
            >
              <p
                className={`${
                  pixelPerfect
                    ? "font-normal text-base text-[#4D4D4D] h-[24px]"
                    : ""
                }`}
              >
                Amount received
              </p>
              <p className={`${pixelPerfect ? "w-full h-[16px]" : ""}`} />
              <p
                className={`${
                  pixelPerfect
                    ? "font-medium text-[32px] leading-[38px] text-[#1A181E] h-[38px]"
                    : ""
                }`}
              >
                ₹23,92,312.19
              </p>
            </div>
          </article>
          <div className={`${pixelPerfect ? "w-full h-[32px]" : ""}`} />
          {/**
           * Content Box 2 Ends
           */}

          <p
            className={`${
              pixelPerfect
                ? "text-[20px] leading-[28px] h-[28px] text-[#1A181E] font-medium"
                : ""
            }`}
          >
            Transactions | This Month
          </p>
          <p className={`${pixelPerfect ? "w-full h-[20px]" : ""}`} />

          {/**
           * List Starts
           */}
          <article
            className={`${
              pixelPerfect
                ? "w-[1152px] h-[1096px] bg-[#FFF] px-[12px] pb-[24px] pt-[12px] rounded-[8px]"
                : ""
            }`}
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
