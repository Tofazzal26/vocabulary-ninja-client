const OurTeachers = () => {
  return (
    <div className="font-urbanist my-[60px]">
      <div className="text-center">
        <h2 className="text-[24px] text-[#f24080]">Team</h2>
        <h2 className="text-[60px] font-bold text-[#301a52]">Our Teachers</h2>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center gap-8 mt-10">
        <div>
          <img src="/teacher1.jpg" alt="" className="w-[270px] h-[320px]" />
          <div className="w-[270px] text-center h-[120px] bg-[#ededec] mt-8">
            <h2 className="text-[25px] font-bold text-[#301a52] pt-6">
              David Roberts
            </h2>
            <h2 className="text-base font-semibold">English Teacher</h2>
          </div>
        </div>
        <div>
          <img src="/teacher2.jpg" alt="" className="w-[270px] h-[320px]" />
          <div className="w-[270px] text-center h-[120px] bg-[#ededec] mt-8">
            <h2 className="text-[25px] font-bold text-[#301a52] pt-6">
              Linda Green
            </h2>
            <h2 className="text-base font-semibold">Japanese Teacher</h2>
          </div>
        </div>

        <div>
          <img src="/teacher3.jpg" alt="" className="w-[270px] h-[320px]" />
          <div className="w-[270px] text-center h-[120px] bg-[#ededec] mt-8">
            <h2 className="text-[25px] font-bold text-[#301a52] pt-6">
              Amanda Grooves
            </h2>
            <h2 className="text-base font-semibold">Korean Teacher</h2>
          </div>
        </div>

        <div>
          <img src="/teacher4.jpg" alt="" className="w-[270px] h-[320px]" />
          <div className="w-[270px] text-center h-[120px] bg-[#ededec] mt-8">
            <h2 className="text-[25px] font-bold text-[#301a52] pt-6">
              Viki Robins
            </h2>
            <h2 className="text-base font-semibold">Japanese Teacher</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeachers;
