const DashboardPagination = () => {
  return (
    <article className="w-[610px] h-[32px] flex items-center mx-auto">
      <div className="w-[100px] rounded-[4px] border-[1px] py-[6px] pl-[6px] pr-[12px] border-[#D9D9D9] flex items-center justify-center bg-[#FFFFFF] h-[32px]">
        <div className="w-[18px] h-[18px] rotate-180">
          <img
            src="/images/outlined-chevron-right.png"
            alt="outlined-chevron-right"
          />
        </div>
        <div className="w-[6px] h-full" />
        <div className="text-[#4D4D4D] text-sm font-medium">Previous</div>
      </div>
      <div className="w-[24px] h-full" />
      <div className="w-[388px] h-[28px] flex">
        <div className="w-[28px] h-[28px] rounded-[4px] text-center py-[2px] text-sm font-normal self-stretch text-[#4D4D4D]">
          1
        </div>
        <div className="w-[8px] h-full" />
        <div className="w-[28px] h-[28px] rounded-[4px] text-center py-[2px] text-sm font-normal self-stretch text-[#4D4D4D]">
          ...
        </div>
        <div className="w-[8px] h-full" />
        <div className="w-[28px] h-[28px] rounded-[4px] text-center flex justify-center text-[14px] leading-[20px] font-medium items-center bg-[#146EB4] text-[#FFFFFF]">
          10
        </div>
        <div className="w-[8px] h-full" />
        <div className="w-[28px] h-[28px] rounded-[4px] text-center py-[2px] text-sm font-normal self-stretch text-[#4D4D4D]">
          11
        </div>
        <div className="w-[8px] h-full" />
        <div className="w-[28px] h-[28px] rounded-[4px] text-center py-[2px] text-sm font-normal self-stretch text-[#4D4D4D]">
          12
        </div>
        <div className="w-[8px] h-full" />
        <div className="w-[28px] h-[28px] rounded-[4px] text-center py-[2px] text-sm font-normal self-stretch text-[#4D4D4D]">
          13
        </div>
        <div className="w-[8px] h-full" />
        <div className="w-[28px] h-[28px] rounded-[4px] text-center py-[2px] text-sm font-normal self-stretch text-[#4D4D4D]">
          14
        </div>
        <div className="w-[8px] h-full" />
        <div className="w-[28px] h-[28px] rounded-[4px] text-center py-[2px] text-sm font-normal self-stretch text-[#4D4D4D]">
          15
        </div>
        <div className="w-[8px] h-full" />
        <div className="w-[28px] h-[28px] rounded-[4px] text-center py-[2px] text-sm font-normal self-stretch text-[#4D4D4D]">
          16
        </div>
        <div className="w-[8px] h-full" />
        <div className="w-[28px] h-[28px] rounded-[4px] text-center py-[2px] text-sm font-normal self-stretch text-[#4D4D4D]">
          17
        </div>
        <div className="w-[8px] h-full" />
        <div className="w-[28px] h-[28px] rounded-[4px] text-center py-[2px] text-sm font-normal self-stretch text-[#4D4D4D]">
          18
        </div>
      </div>
      <div className="w-[24px] h-full" />
      <div className="w-[74px] rounded-[4px] border-[1px] py-[6px] pr-[6px] pl-[12px] border-[#D9D9D9] flex items-center justify-center bg-[#FFFFFF] h-[32px]">
        <div className="text-[#4D4D4D] text-sm font-medium">Next</div>
        <div className="w-[6px] h-full" />
        <div className="w-[18px] h-[18px]">
          <img
            src="/images/outlined-chevron-right.png"
            alt="outlined-chevron-right"
          />
        </div>
      </div>
    </article>
  );
};

export default DashboardPagination;
