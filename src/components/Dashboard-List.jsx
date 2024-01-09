const DashboardList = () => {
  return (
    <>
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
      <div className="h-[24px] w-full" />
    </>
  );
};

export default DashboardList;
