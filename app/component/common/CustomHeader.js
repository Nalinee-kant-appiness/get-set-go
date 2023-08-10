import Image from "next/image";
import starLogo from "../../../public/star.svg";
import BellLogo from "../../../public/Bell.svg";
const CustomHeader = ({heading}) => {
  return (
    <div className=" bg-sideBarColor w-full h-16 flex items-center ">
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
  );
};
export default CustomHeader;
