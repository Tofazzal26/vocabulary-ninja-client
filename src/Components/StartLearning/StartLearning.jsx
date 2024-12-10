const StartLearning = () => {
  return (
    <div className="bg-[#ededec] font-urbanist-">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col items-center justify-evenly py-8">
          <div>
            <h2 className="text-[24px] text-[#f24080]">Start Now!</h2>
            <h2 className="text-[65px] w-[400px] leading-[65px] mt-4 font-bold text-[#301a52]">
              Learn a New Language!
            </h2>
            <p className="font-semibold text-gray-500 w-[400px] mt-10 text-base">
              We are a language centre that offer a personalised approach to
              language learning with small class sizes of no more than 10
              students in group lessons.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex md:flex-row flex-col gap-8 mt-4 md:mt-0">
              <div className="bg-white md:w-[300px]">
                <div className="flex items-center gap-5 py-8 px-8">
                  <div>
                    <h2 className="w-[65px] h-[65px] bg-[#ec2b3b] rounded-full flex justify-center items-center text-white font-extrabold text-2xl">
                      1
                    </h2>
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl">
                      An Easy Study Approach
                    </h2>
                  </div>
                </div>
              </div>
              <div className="bg-white md:w-[300px]">
                <div className="flex items-center gap-5 py-8 px-8">
                  <div>
                    <h2 className="w-[65px] h-[65px] bg-[#ec2b3b] rounded-full flex justify-center items-center text-white font-extrabold text-2xl">
                      2
                    </h2>
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl">
                      Free Teaching Materials
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-8">
              <div className="bg-white md:w-[300px]">
                <div className="flex  items-center gap-5 py-8 px-8">
                  <div>
                    <h2 className="w-[65px] h-[65px] bg-[#ec2b3b] rounded-full flex justify-center items-center text-white font-extrabold text-2xl">
                      3
                    </h2>
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl">
                      A Free Mobile Application
                    </h2>
                  </div>
                </div>
              </div>
              <div className="bg-white md:w-[300px]">
                <div className="flex items-center gap-5 py-8 px-8">
                  <div>
                    <h2 className="w-[65px] h-[65px] bg-[#ec2b3b] rounded-full flex justify-center items-center text-white font-extrabold text-2xl">
                      4
                    </h2>
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl">
                      An Accredited School
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
