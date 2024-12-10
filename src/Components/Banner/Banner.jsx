import { FaRegHeart } from "react-icons/fa";
import { LuMonitorDot } from "react-icons/lu";
const Banner = () => {
  return (
    <div>
      <div className="bg-[url('/banner.jpg')] bg-no-repeat bg-cover bg-center  h-[calc(100vh-70px)]">
        <div className="md:translate-y-[280px] translate-y-[180px]  md:ml-[200px]">
          <div className="space-y-4 md:text-left text-center">
            <h2 className="md:text-[50px] text-[20px] font-urbanist font-semibold text-black">
              Knowledge At{" "}
              <span className="text-[#ec2b3b]">Your Fingertips</span>
            </h2>
            <p className="font-urbanist md:w-[700px] text-[15px] md:leading-[30px] font-semibold text-gray-500">
              Enim nec consectetur condimentum fermentum. dolor sit amet
              consectetur adipiscing elit pellentesque habitant. consectetur
              purus ut fauscibus pulvinar elementum integer.
            </p>
            <div className="flex md:justify-start justify-center items-center">
              <div className="space-y-4">
                <span className="flex items-center gap-2 font-semibold text-[17px] text-gray-700">
                  {" "}
                  <FaRegHeart className="text-[#ec2b3b] text-3xl" /> Super easy
                  to use{" "}
                </span>
                <span className="flex items-center gap-2 font-semibold text-[17px] text-gray-700">
                  <LuMonitorDot className="text-[#ec2b3b] text-3xl" />
                  SEO - optimized
                </span>
              </div>
            </div>
            <div>
              <div className="space-x-6">
                <button className="bg-[#ec2b3b] px-6 py-3 rounded-[5px] text-white font-urbanist font-semibold text-[15px]">
                  Free Ai Assessment{" "}
                </button>
                <button className="border border-gray-500 text-[15px] bg-transparent px-6 py-[11px] rounded-[5px] font-semibold font-urbanist">
                  Free Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
