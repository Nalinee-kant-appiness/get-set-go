import isLogin from "@/lib/isLogin";
import LoginPage from "../login/page";
import CustomSideBar from "../component/common/customSideBar";
const LandingPage = ({ children }) => {
  const login = isLogin();
  return (
    <div className="w-full h-screen flex">
      <CustomSideBar />
      <div className="w-full h-full  flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};
export default LandingPage;
