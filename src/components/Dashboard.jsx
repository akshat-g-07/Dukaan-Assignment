const Dashboard = () => {
  return (
    <>
      <div className="bg-[#FAFAFA]">
        {/**
         * Header Starts
         */}
        <div className="flex items-center w-[1216px] h-[64px] border-b-[1px] px-[32px] border-[#D9D9D9] py-[12px] bg-white">
          <div className="w-[360px] h-[22px] flex items-center">
            <p className="text-[#1A181E]">Payments</p>
            <div className="w-[16px] h-full" />
            <div className="w-[14px] h-[14px]">
              <img
                src="/images/dashboard-outlined-help.png"
                alt="dashboard-outlined-help"
              />
            </div>
            <div className="w-[6px] h-full" />
            <p className="text-[#4D4D4D] w-[74px] h-[16px] font-normal text-xs">
              How it works
            </p>
          </div>
          <div className="w-[16px] h-full" />
          <div className="bg-[#F2F2F2] w-[400px] h-[40px] rounded-[6px] px-[16px] py-[9px] flex items-center">
            <div className="w-[16px] h-[16px]">
              <img
                src="/images/dashboard-icons-search.png"
                alt="dashboard-icons-search"
              />
            </div>
            <div className="w-[6px] h-full" />
            <p className="text-[#808080] w-[213px] h-[22px] font-normal text-sm">
              Search features, tutorials, etc.
            </p>
          </div>
          <div className="w-[16px] h-full" />
          <div className="w-[360px] h-[40px] flex flex-row-reverse items-center">
            <div
              className="w-[40px] h-[40px] flex items-center justify-center"
              style={{
                backgroundImage: "url('images/dashboard-icons-ellipse-2.png')",
              }}
            >
              <img
                src="/images/dashboard-icons-menu.png"
                alt="dashboard-icons-menu"
              />
            </div>
            <div className="w-[12px] h-full" />
            <div
              className="w-[40px] h-[40px] flex items-center justify-center"
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
        </div>
        {/**
         * Header Ends
         */}

        {/**
         * Body Starts
         */}
        <div className="w-[1152px] mx-auto">
          {/**
           * Content Box 1 Starts
           */}
          <div className="flex items-center w-[1152px] h-[36px] mt-[32px] justify-between">
            <div className="font-medium text-xl w-[91px] h-[28px] text-[#1A181E]">
              Overview
            </div>
            <div className="border-[1px] border-[#D9D9D9] h-[36px] rounded-[4px] w-[137px] flex bg-[#FFFFFF]">
              <div className="text-[#4D4D4D] font-normal w-[86px] h-[24px] ml-[14px] my-[6px] text-base">
                Last Month
              </div>
              <div className="w-[16px] h-[16px] my-[10px] ml-[7px]">
                <img src="images/icons-arrow.png" alt="icons-arrow" />
              </div>
            </div>
          </div>
          <div className="w-full h-[24px]" />
          {/**
           * Content Box 1 Ends
           */}

          {/**
           * Content Box 2 Starts
           */}
          <div className="flex w-[fit] h-[118px] justify-center">
            <div
              className="bg-[#FFF] w-[566px] h-[118px] p-[20px] rounded-[8px]"
              style={{
                boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
              }}
            >
              <p className="font-normal text-base text-[#4D4D4D] h-[24px]">
                Online orders
              </p>
              <p className="w-full h-[16px]" />
              <p className="font-medium text-[32px] leading-[38px] text-[#1A181E] h-[38px]">
                231
              </p>
            </div>
            <div className="w-[20px] h-full" />
            <div
              className="bg-[#FFF] w-[566px] h-[118px] p-[20px] rounded-[8px]"
              style={{
                boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
              }}
            >
              <p className="font-normal text-base text-[#4D4D4D] h-[24px]">
                Amount received
              </p>
              <p className="w-full h-[16px]" />
              <p className="font-medium text-[32px] leading-[38px] text-[#1A181E] h-[38px]">
                ₹23,92,312.19
              </p>
            </div>
          </div>
          <div className="w-full h-[32px]" />
          {/**
           * Content Box 2 Ends
           */}

          <p className="text-[20px] leading-[28px] h-[28px] text-[#1A181E] font-medium">
            Transactions | This Month
          </p>
          <p className="w-full h-[20px]" />

          {/**
           * List Starts
           */}
          <div
            className="w-[1152px] h-[1096px] bg-[#FFF] px-[12px] pb-[24px] pt-[12px] rounded-[8px]"
            style={{
              boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
            }}
          >
            <div className="w-[1128px] h-[40px] flex justify-between">
              <div className="w-[248px] items-center h-[40px] py-[10px] px-[16px] rounded-[4px] border-[1px] border-[#D9D9D9] bg-[#FFF] flex">
                <div className="w-[14px] h-[14px]">
                  <img
                    src="/images/input-input-search-field-bold-search.png"
                    alt="input-input-search-field-bold-search"
                  />
                </div>
                <div className="w-[8px] h-full" />
                <div className="w-[194px] h-[20px] font-normal text-sm text-[#999]">
                  Search by order ID...
                </div>
              </div>
              <div className="w-[127px] h-[36px] flex items-center justify-end">
                <div className="w-[79px] h-[36px] py-[6px] px-[12px] border-[1px] rounded-[4px] border-[#D9D9D9] flex items-center">
                  <div className="leading-[24px] text-[16px] font-[400] text-[#4D4D4D]">
                    Sort
                  </div>
                  <div className="w-[6px] h-full" />
                  <div className="w-[16px] h-[16px]">
                    <img
                      src="/images/button-outlined-sort.png"
                      alt="button-outlined-sort"
                    />
                  </div>
                </div>
                <div className="w-[12px] h-full" />
                <div className="w-[36px] rounded-[4px] border-[1px] flex justify-center items-center border-[#D9D9D9] h-[36px]">
                  <img src="/images/icons-download.png" alt="icons-download" />
                </div>
              </div>
            </div>
            <div className="h-[12px] w-full" />
            <div className="w-[1128px] h-[40px] rounded-[4px] px-[12px] py-[10px] flex items-center bg-[#F2F2F2]">
              <div className="w-[246px] h-[20px] flex items-start justify-center flex-col text-[14px] font-medium leading-[20px] text-[#4D4D4D]">
                Order ID
              </div>
              <div className="w-[40px] h-full" />
              <div className="w-[246px] h-[20px] flex items-start justify-center flex-col text-[14px] font-medium leading-[20px] text-[#4D4D4D]">
                <div className="flex items-center">
                  Order date
                  <div className="w-[4px] h-full" />
                  <div className="w-[8px] h-[8px]">
                    <img src="/images/triangle-icon.png" alt="triangle-icon" />
                  </div>
                </div>
              </div>
              <div className="w-[40px] h-full" />
              <div className="w-[246px] h-[20px] flex items-end justify-center flex-col text-[14px] font-medium leading-[20px] text-[#4D4D4D]">
                Order amount
              </div>
              <div className="w-[40px] h-full" />
              <div className="w-[246px] h-[20px] flex items-end justify-center flex-col text-[14px] font-medium leading-[20px] text-[#4D4D4D]">
                <div className="flex items-center">
                  Transaction fees
                  <div className="w-[4px] h-full" />
                  <div className="w-[14px] h-[14px]">
                    <img src="/images/outlined-info.png" alt="outlined-info" />
                  </div>
                </div>
              </div>
            </div>
            {[...new Array(19)].map((_, index) => {
              return (
                <div
                  key={index}
                  className="w-[1128px] h-[48px] px-[12px] py-[14px] items-center bg-[#FFF] border-b-[1px] border-[#E6E6E6] flex"
                >
                  <div className="w-[246px] h-[20px] flex items-start justify-center flex-col text-[14px] font-medium leading-[20px] text-[#146EB4]">
                    #281209
                  </div>
                  <div className="w-[40px] h-full" />
                  <div className="w-[246px] h-[20px] flex items-start justify-center flex-col text-[14px] font-medium leading-[20px] text-[#1A181E]">
                    7 July, 2023
                  </div>
                  <div className="w-[40px] h-full" />
                  <div className="w-[246px] h-[20px] flex items-end justify-center flex-col text-[14px] font-medium leading-[20px] text-[#1A181E]">
                    ₹1,278.23
                  </div>
                  <div className="w-[40px] h-full" />
                  <div className="w-[246px] h-[20px] flex items-end justify-center flex-col text-[14px] font-medium leading-[20px] text-[#1A181E]">
                    ₹22
                  </div>
                </div>
              );
            })}
          </div>
          {/**
           * List Ends
           */}
        </div>
        {/**
         * Body Ends
         */}
      </div>
    </>
  );
};

export default Dashboard;
