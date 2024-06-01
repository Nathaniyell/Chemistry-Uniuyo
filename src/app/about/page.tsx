import profInam from "../../../public/images/teachingstaff/prof-inam.jpg";
import labStaff from "../../../public/images/staffLab.jpg";
import groupStaff from "../../../public/images/chemistry_lab/group-staff.jpg"
import Image from "next/image";
import { HomepageSlider } from "@/components";

const page = () => {
  const aboutImagesArray = [groupStaff, labStaff]
  return (
    <>
    <HomepageSlider
    title="About Us"
    bgImage={aboutImagesArray}
    />
    
    </>
  );
};

export default page;
