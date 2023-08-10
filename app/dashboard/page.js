import CustomHeader from "../component/common/CustomHeader";
import LandingPage from "../landingPage/landingPage";
import Image from "next/image";
import { studentData } from "@/lib/dashboardCommonData";
const DashboardPage = () => {
  return (
    <div className="w-full h-full">
      <LandingPage>
        <div className=" w-full h-full">
          <CustomHeader heading="Hello, Admin!" />
          <div className="flex flex-wrap gap-4 p-5">
              {studentData.map((item) => (
            <div className=" border rounded-2xl border-[#448DF0] w-56 h-32">
                <div className="p-2 flex flex-col gap-2">
                  <div>
                    <small className="font-medium">{item.name}</small>
                  </div>
                  <div className="flex justify-between w-11/12">
                    <small className={`${item.perColor==='green'?'text-[#69AB83]':'text-[#F44F57]'}`}>{item.per}</small>
                    <Image src={item.img} alt="community image" height={27} />
                  </div>
                  <div>
                    <small className="text-[#808080] ">{item.vs}</small>
                  </div>
                </div>
            </div>
              ))}
          </div>
        <hr/>
        </div>
      </LandingPage>
    </div>
  );
};
export default DashboardPage;
