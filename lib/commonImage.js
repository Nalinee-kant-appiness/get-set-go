import dashboardImage from "../public/dashboard.svg";
import OfficeImage from '../public/centerImage.svg'
import levelImage from '../public/level.svg'
import coachesImage from '../public/coaches.svg'
import TrialClassesImage from '../public/trialClasses.svg'
import AcademyClassesImage from '../public/AcademyClasses.svg'
import Bulletins from '../public/Bulletins.svg'
import Concerns from '../public/Concerns.svg'

export const sideBarContent = [
  {
    id: 1,
    img: dashboardImage,
    name: "Dashboard",
    message: "dashboard image",
    link:'/dashboard'
  },
  {
      id: 2,
      img: OfficeImage,
      name: "Center",
      message: "office image",
      link:'/center'
    },
    {
        id: 3,
        img: levelImage,
        name: "Batches & levels",
        message: "Batches & levels image",
        link:'/baches'
      },
      {
        id: 4,
        img: coachesImage,
        name: "Coaches",
        message: "coaches image",
        link:'/coaches'
      },
      {
        id: 5,
        img: TrialClassesImage,
        name: "Trial classes",
        message: "Trial classes image",
        link:'/trial'
      },
      {
        id: 6,
        img: AcademyClassesImage,
        name: "Academy home page",
        message: "Academy home page image",
        link:'/academyhome'
      },
      {
        id: 7,
        img: Bulletins,
        name: "Bulletins",
        message: "Bulletins image",
        link:'/bulletins'
      },
      {
        id: 8,
        img: Concerns,
        name: "Concerns",
        message: "Concerns image",
        link:'/concerns'
      },
];
