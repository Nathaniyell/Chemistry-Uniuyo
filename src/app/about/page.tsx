import profInam from "../../../public/images/teachingstaff/prof-inam.jpg";
import labStaff from "../../../public/images/staffLab.jpg";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Image
        src={labStaff}
        alt="lab staff"
        className="md:h-[25rem] object-cover"
      />
    </>
  );
};

export default page;
