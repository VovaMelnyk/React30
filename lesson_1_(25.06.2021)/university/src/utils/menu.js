import { HiBookOpen, HiAcademicCap } from "react-icons/hi";

export const menuConfig = [
  {
    name: "Университет",
    icon: <HiBookOpen />,
    path: "/",
  },

  {
    name: "Факультеты",
    icon: <HiAcademicCap />,
    path: "/departments",
  },
  {
    name: "Кафедры",
    icon: <HiAcademicCap />,
    path: "/block",
  },
];
