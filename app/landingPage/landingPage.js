import isLogin from "@/lib/isLogin";
import LoginPage from "../login/page";
import CustomSideBar from "../home/component/common/customSideBar";
const LandingPage = ({children}) => {
  const login = isLogin();
  return (
    <div className="w-full h-full">
      {!login ? (
        <div className="flex">
          <CustomSideBar />
          {children}
          {/* < /> */}
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};
export default LandingPage;
