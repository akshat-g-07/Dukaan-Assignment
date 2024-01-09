const DashboardHeader = () => {
  return (
    <section className="flex items-center w-[1216px] h-[64px] border-b-[1px] px-[32px] border-[#D9D9D9] py-[12px] bg-white">
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
    </section>
  );
};

export default DashboardHeader;
