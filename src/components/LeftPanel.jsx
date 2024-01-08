import LeftPanelItems from "./LeftPanelItems";

const LeftPanel = () => {
  return (
    <>
      <div className="w-[224px] h-full bg-[#1E2640] text-white px-[10px] py-[16px]">
        {/*
        Header Starts
        */}
        <div className="flex h-[42px] w-[192px]">
          <div className="w-[39px] h-[39px] rounded-[4px]">
            <img src="/images/profile_pic.png" alt="Profile Pic" />
          </div>
          <div className="h-full w-[12px] bg-transparent" />
          <div className="w-[108px]">
            <p className="font-medium text-base">Nishyan</p>
            <p className="font-normal text-sm opacity-80 underline">
              Visit Store
            </p>
          </div>
          <div className="h-full w-[12px] bg-transparent" />
          <div className="h-full w-fit flex items-center">
            <div className="w-[20px] h-[20px]">
              <img
                src="/images/navbar-bold-chevron-down.png"
                alt="navbar-bold-chevron-down"
              />
            </div>
          </div>
        </div>
        <div className="h-[24px] w-full bg-transparent" />
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
                  className={`h-[36px] w-[208px] rounded-[4px] px-[16px] py-[8px] flex ${
                    item.name === "Payments"
                      ? "bg-[#FFFFFF1A]"
                      : "bg-transparent"
                  }`}
                >
                  <div className="w-[20px] h-[20px] opacity-80">
                    <img src={`/images/${item.icon}.png`} alt={item.icon} />
                  </div>
                  <div className="h-full w-[12px]" />
                  <div className="h-[20px] opacity-80 w-fit font-medium text-sm">
                    {item.name}
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="h-[16px] w-full" />
        {/*
        List Ends
        */}

        {/*
        Footer Starts
        */}
        <div className="rounded-[4px] py-[6px] px-[12px] h-[54px] w-full bg-[#353C53] flex">
          <div className="flex items-center h-full">
            <div className="w-[24px] h-[24px] p-[6px] rounded-[4px] bg-[#FFFFFF1A]">
              <img src="/images/navbar-creds.png" />
            </div>
          </div>
          <div className="h-full w-[12px]" />
          <div>
            <p className="font-normal text-sm">Available Credits</p>
            <p className="font-medium text-base">222.10</p>
          </div>
        </div>
        {/*
        Footer Ends
        */}
      </div>
    </>
  );
};

export default LeftPanel;
