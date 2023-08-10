"use client";
import Image from "next/image";
import getSetGoImage from "../../../public/getSetGo.svg";
import { sideBarContent } from "@/lib/commonImage";
import LogoutImage from "../../../public/Logout.svg";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const CustomSideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  // useEffect(()=>{
  //   router.push('/dashboard')
  // },[])
  return (
    <div className="bg-sideBarColor min-w-max	 w-56  h-screen">
      <div className="mb-9 pl-6">
        <Image src={getSetGoImage} alt="get set go image" />
      </div>
      <div className=" flex flex-col gap-6">
        {sideBarContent?.map((item) => (
          <div
            key={item.id}
            className={`rounded items-center flex pl-3 gap-2 hover:bg-sideBarHoverColor w-full h-6 cursor-pointer 
            ${
              pathname.includes(item.link) &&
              "bg-sideBarHoverColor w-full h-6 cursor-pointer"
            }`}
            onClick={() => router.push(`${item.link}`)}
          >
            <Image src={item.img} alt={item.message} />
            <small className="min-w-max">{item.name}</small>
          </div>
        ))}
      </div>
      <div className=" pt-20   " >
        <div onClick={()=>router.push('/')} className=" rounded pl-3 flex gap-2 items-center hover:bg-sideBarHoverColor w-full h-6 cursor-pointer">
          <Image src={LogoutImage} alt="logout image" />
          <small>Logout</small>
        </div>
      </div>
    </div>
  );
};

export default CustomSideBar;
