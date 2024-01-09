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
         * Content Box 1 Starts
         */}
        <div className="flex items-center w-[1152px] h-[36px] mx-auto mt-[32px] justify-between">
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
        <div className="flex w-[fit] h-[118px] mx-auto justify-center">
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
      </div>
    </>
  );
};

export default Dashboard;
