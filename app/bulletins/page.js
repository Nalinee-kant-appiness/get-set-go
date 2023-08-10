import CustomHeader from "../component/common/CustomHeader";
import LandingPage from "../landingPage/landingPage";

const BulletinsPage = () => {
  return (
    <div className="w-full h-full">
      <LandingPage>
        <div className=" w-full h-full">
          <CustomHeader heading="Hello, Admin!" />
          <div className="w-full flex justify-center items-center">
            <h1>welcome to the Bulletins page</h1>
          </div>
        </div>
      </LandingPage>
    </div>
  );
};
export default BulletinsPage;
