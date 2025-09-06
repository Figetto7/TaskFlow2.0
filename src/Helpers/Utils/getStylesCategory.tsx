import type { ReactElement } from "react";
import { FaSchool } from "react-icons/fa6";
import { MdWork, MdTask } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";


export default function getStylesCategory(tags: string): { tagColor: string, tagImage?: ReactElement } {
  switch (tags) {
    case "school":
      return { tagColor: "var(--school-color)", tagImage: <FaSchool /> };
    case "work":
      return { tagColor: "var(--work-color)", tagImage: <MdWork/> };
    case "personal":
      return { tagColor: "var(--personal-color)", tagImage: <IoPersonSharp /> };
    case "others":
      return { tagColor: "var(--others-color)", tagImage: <MdTask /> };
    default:
      return { tagColor: "var(--text-color)" };
  }
}