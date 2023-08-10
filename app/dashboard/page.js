import CustomHeader from "../component/common/CustomHeader";
import LandingPage from "../landingPage/landingPage";

const DashboardPage = () => {
  return (
    <div className="w-full h-full">
      <LandingPage>
        <div className=" w-full h-full" >
        <CustomHeader/>
          <h1>welcome to the dashboard page</h1>
        </div>
      </LandingPage>
    </div>
  );
};
export default DashboardPage;
