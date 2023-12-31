"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import badmintonImage from "../../public/badminton.png";
import editLogo from "../../public/Vector.svg";
import getSetGoLogo from "../../public/getSetGoLogo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const fillOtp = Array(5).fill("");
const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState("+91 ");
  const [verifyOtpPage, setVerifyOtpPage] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState('');
  const [timer, setTimer] = useState(60);

  const displayTimer = () => {
    setTimer(timer - 1);
  };

  const intervalValue = setInterval(displayTimer, 1000);

  if (timer === 0) {
    clearInterval(intervalValue);
  }

  const getEnteredOtp=(e)=>{
    const value=enteredOtp
   const newValue= value.concat(e.target.value)
   setEnteredOtp(newValue)

  }

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
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-11/12 text-LoginInputTextColor"
                  />
                </div>
                <div className="flex justify-center mt-6">
                  <Button
                    className="w-40 bg-gradient-to-r from-[#EE2C35] to-[#F5873C] hover:bg-[#F36739]"
                    onClick={() => setVerifyOtpPage(true)}
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
                <div className="w-4/5 flex  gap-6">
                  {fillOtp.map((item,index) => (
                    <Input
                    key={index}
                      value={enteredOtp}
                      onChange={getEnteredOtp}
                      maxLength="1"
                      className="w-9 "
                    />
                  ))}
                </div>
                <div className="flex ">
                  <div>
                    <small>Didn't receive OTP? </small>
                  </div>
                  <div>
                    <small className="underline underline-offset-1 text-[#F26138]">
                      RESEND OTP
                    </small>
                  </div>
                </div>
                  <div>
                    <small className="ext-cyan-800" >{`resend again in ${timer}`}</small>
                  </div>
              </div>
              <div>
                <Button className="bg-gradient-to-r from-[#EE2C35] to-[#F5873C]" onClick={(e)=>console.log(enteredOtp)}>
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
