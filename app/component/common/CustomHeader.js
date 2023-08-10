import Image from "next/image";
import starLogo from "../../../public/star.svg";
import BellLogo from "../../../public/Bell.svg";
import { Input } from "@/components/ui/input";
import searchIcon from "../../../public/searchIcon.svg";
import { Button } from "@/components/ui/button";
import CustomBlueButton from "./CustomBlueButton";
import CustomDateRangeButton from "./CustomDateRangeButton";
const CustomHeader = ({ heading }) => {
  return (
    <>
      <div className=" bg-sideBarColor w-full h-16 flex items-center">
        <div className="flex items-center justify-between w-11/12">
          <div className="flex items-center pl-8">
            <Image src={starLogo} alt="star logo" />
            <small>The Badminton Professionals</small>
          </div>
          <div>
            <Image src={BellLogo} alt="Bell logo" />
          </div>
        </div>
      </div>
      <div className=" p-5">
        <h2 className="text-[#1D1D1F] scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {heading}
        </h2>
      
      <div className="flex w-full justify-between">
        {/* <div className="flex gap-14"> */}
          <Input
            className="border w-2/4	"
            type="searchBar"
            placeholder="Search for students..."
          />
          <CustomBlueButton />
        {/* </div> */}

        <CustomDateRangeButton />
        </div>
      </div>
    </>
  );
};
export default CustomHeader;
