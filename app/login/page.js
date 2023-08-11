"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import badmintonImage from "../../public/Badminton.svg";
import editLogo from "../../public/Vector.svg";
import getSetGoLogo from "../../public/getSetGo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const fillOtp = Array(6).fill("");

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState("+91 ");
  const [verifyOtpPage, setVerifyOtpPage] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });
  // const [enteredOtp, setEnteredOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [errorMessage, setErrorMessage] = useState({
    mobileNumber: false,
    otpError: false,
  });

  const router = useRouter();

  useEffect(() => {
    const otp = { ...enteredOtp };
    const newOtp = otp[0] + otp[1] + otp[2] + otp[3] + otp[4] + otp[5];
    console.log(newOtp, "<===otp");
    if (newOtp != "123456" && newOtp.length > 0 && newOtp.length < 6) {
      setErrorMessage({ ...errorMessage, otpError: true });
    } else {
      setErrorMessage({ ...errorMessage, otpError: false });
    }
  }, [enteredOtp]);
  const displayTimer = () => {
    setTimer(timer - 1);
  };

  // const intervalValue = setInterval(displayTimer, 1000);

  if (timer === 0) {
    clearInterval(intervalValue);
  }

  const getEnteredOtp = (e, index) => {
    setEnteredOtp({ ...enteredOtp, [e.target.name]: e.target.value });
  };
  const verifyOtp = () => {
    const otp = { ...enteredOtp };
    const newOtp = otp[0] + otp[1] + otp[2] + otp[3] + otp[4] + otp[5];
    if (!errorMessage.otpError && newOtp === "123456") {
      router.push("/dashboard");
    } else {
      setErrorMessage({ ...errorMessage, otpError: true });
    }
  };
  const getMobileNumber = (e) => {
    setMobileNumber(e.target.value);
    const phoneNumber = mobileNumber;
    const phoneArr = phoneNumber.split(" ");

    if (phoneArr[1].length === 9) {
      setErrorMessage({ ...errorMessage, mobileNumber: false });
    } else {
      setErrorMessage({ ...errorMessage, mobileNumber: true });
    }
  };
  const verifyMobileNumber = () => {
    const phoneNumber = mobileNumber;
    const phoneArr = phoneNumber.split(" ");
    if(phoneArr[1].length === 0)
    {
      setErrorMessage({ ...errorMessage, mobileNumber: true });
    }
    if (!errorMessage.mobileNumber && phoneArr[1].length != 0) {
      setVerifyOtpPage(true);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex h-full">
        <div className="pt-8 bg-gradient-to-t from-[#EE2C35] to-[#F5873C] 	w-6/12  flex flex-col items-center 	">
          <div>
            <h2 className=" text-white scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Welcome back, Admin!
            </h2>
            <h6 className="text-white">
              Manage your academy efficiently with Get Set Go
            </h6>
          </div>
          <Image src={badmintonImage} alt="tenis image" />
        </div>
        <div className="w-6/12 h-full flex  justify-center items-center ">
          {/* <div>
          <Image src={getSetGoLogo} />
          </div> */}
          {!verifyOtpPage ? (
            <div className=" rounded-lg  h-64 w-96 bg-[#F6F6F6] flex flex-col justify-center">
              <div className="pl-4 flex flex-col gap-2">
                <div>
                  <h5 className="text-[#000000]">Mobile number</h5>
                </div>
                <div>
                  <Input
                    pattern="[0-9]{10}"
                    required
                    value={mobileNumber}
                    onChange={getMobileNumber}
                    className="w-11/12 text-LoginInputTextColor"
                  />
                  {errorMessage.mobileNumber && (
                    <small className="text-red-600">
                      {" "}
                      phone number should not be less than 10{" "}
                    </small>
                  )}
                </div>
                <div className="flex justify-center mt-6">
                  <Button
                    className="w-40 bg-gradient-to-r from-[#EE2C35] to-[#F5873C] hover:bg-[#F36739]"
                    onClick={verifyMobileNumber}
                  >
                    Generate OTP
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className=" rounded-lg  h-64 w-96 bg-[#F6F6F6] flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex justify-center gap-4">
                  <p className="text-OffBlackTextColor pl-3">
                    Enter the OTP sent to + 91 8888999901
                  </p>
                  <Image src={editLogo} alt="edit logo" />
                </div>
                <div className="w-4/5 flex  gap-3.5">
                  {/* {fillOtp.map((item, index) => (
                    <Input
                      key={index}
                      value={enteredOtp}
                      onChange={getEnteredOtp}
                      maxLength="1"
                      className="w-9 "
                    />
                  ))} */}
                  <Input
                    value={enteredOtp[0]}
                    onChange={getEnteredOtp}
                    maxLength="1"
                    className="w-9 "
                    name="0"
                  />
                  <Input
                    value={enteredOtp[1]}
                    onChange={getEnteredOtp}
                    maxLength="1"
                    className="w-9 "
                    name="1"
                  />
                  <Input
                    value={enteredOtp[2]}
                    onChange={getEnteredOtp}
                    maxLength="1"
                    className="w-9 "
                    name="2"
                  />
                  <Input
                    value={enteredOtp[3]}
                    onChange={getEnteredOtp}
                    maxLength="1"
                    className="w-9 "
                    name="3"
                  />
                  <Input
                    value={enteredOtp[4]}
                    onChange={getEnteredOtp}
                    maxLength="1"
                    className="w-9 "
                    name="4"
                  />
                  <Input
                    value={enteredOtp[5]}
                    onChange={getEnteredOtp}
                    maxLength="1"
                    className="w-9 "
                    name="5"
                  />
                </div>
                {errorMessage.otpError ? (
                  <div>
                    <small className="text-[#F44F57]">
                      please enter the otp as 123456
                    </small>
                  </div>
                ) : (
                  <></>
                )}
                <div className="flex ">
                  <div>
                    <small>Didn't receive OTP? </small>
                  </div>
                  <div>
                    <small className="underline underline-offset-1 text-[#F26138] ">
                      RESEND OTP
                    </small>
                  </div>
                </div>
                <div>
                  <small className="ext-cyan-800">{`resend again in ${timer}`}</small>
                </div>
              </div>
              <div>
                <Button
                  className="bg-gradient-to-r from-[#EE2C35] to-[#F5873C]"
                  onClick={verifyOtp}
                >
                  Verify & Continue
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
