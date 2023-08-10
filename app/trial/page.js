import CustomHeader from "../component/common/CustomHeader";
import LandingPage from "../landingPage/landingPage";

const TrialClassesPage = () => {
  return (
    <div className="w-full h-full">
      <LandingPage>
        <div className=" w-full h-full">
          <CustomHeader heading="Hello, Admin!" />
          <div className="w-full flex justify-center items-center">
            <h1>welcome to the TrialClasses page</h1>
          </div>
        </div>
      </LandingPage>
    </div>
  );
};
export default TrialClassesPage;
