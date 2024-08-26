import cecilia1 from "@/public/images/chemistry_lab/cecilia1.jpg";
import sendforth1 from "../../public/images/Sendforth/sendforth_profs.jpg";
import classO18 from "../../public/images/Graduation/class018.jpg";
import scsnTradefair from "@/public/images/scsn-tradefair/scsn00.jpg";

import student1 from "../../public/images/CHMs1.webp";
import student2 from "../../public/images/CHMs2.webp";
import student3 from "../../public/images/CHMs3.webp";
import student4 from "../../public/images/CHMs4.webp";
import student5 from "../../public/images/CHMs5.webp";
import student6 from "../../public/images/staff-student.jpg";
import sug1 from "@/public/images/SUG/SUG1.jpg";
import acs1 from "@/public/images/acs/acs1.jpg";

import staff2 from "../../public/images/sshaibu.jpg";
import staff5 from "@/public/images/teachingstaff/iniu.jpg";
import emmanuelEssien from "../../public/images/teachingstaff/EmmanEssien.jpg";
import helenEtuk from "../../public/images/teachingstaff/HelenEtuk.jpg";
import { StaticImageData } from "next/image";
import phd from "@/public/images/phd_student.jpg";
import phd2 from "@/public/images/phd22.jpg";
import safety from "@/public/images/safety/saftey1.jpg";
import birthday from "@/public/images/prof_inams_birthday/birthday2.jpg"
import birthdayProf from "@/public/images/prof_inams_birthday/Prof_birthday.jpg"
import defense from "@/public/images/019-defense/defense.jpg"
import sugAward from "@/public/images/019-defense/sug-award.jpg"
import sugAward2 from "@/public/images/019-defense/sug-award2.jpg"

export const chemistryUnits = [
  "organic",
  "inorganic",
  "physical",
  "analytical",
  "industrial",
  "environmental",
  "polymer",
];

interface HomeDataItem {
  image: StaticImageData;
  title: string;
  description?: string;
  greeting?: string;
  btnLink: string;
}

const homeData: HomeDataItem[] = [
  {
    image: cecilia1,
    title: "welcome to the Department of chemistry",
    description:
      "The Department of Chemistry is a vibrant hub of scientific inquiry and discovery at our university. Our world-class Lecturers and Professors, state-of-the-art facilities, and dynamic curriculum create an environment that fosters intellectual growth, hands-on learning, and interdisciplinary collaboration.",
    greeting: "",
    btnLink: "/about",
  },
  {
    image: defense,
    title: "Chemistry Students Complete Undergraduate Project Defense",
    btnLink: "/about",
  },
  {
    title:
      "Students Community Recognizes Professor Edu Inam with Prestigious Awards for Her Outstanding Contributions",
    description: "",

    image: sugAward,
    btnLink: "/recent-news",
  },
  {
    title:
      "Department of Chemistry, University of Uyo, Honored as Best Department of the Year",
    description: "",

    image: sugAward2,
    btnLink: "/recent-news",
  },
  {
    title:
      "Celebrating Decades of Dedication: The Department of Chemistry Bids Farewell to her Renowned Professors",
    description: "",

    image: sendforth1,
    btnLink: "/recent-news",
  },
  {
    title:
      "Students` Chemical Society of Nigeria (Uniuyo Chapter) Organizes Tradefair",
    description: "",

    image: scsnTradefair,
    btnLink: "/recent-news",
  },
  {
    title: "Department of Chemistry Graduates Record Number of Students",
    description: "",

    image: classO18,
    btnLink: "/recent-news",
  },
  {
    title:
      "Chemistry student elected as first Students' Union President from Faculty of Science",
    description: "",

    image: sug1,
    btnLink: "/recent-news",
  },
  {
    title: "Miss Blessing Umoh Wins ACS Nigeria Volunteer of the Year Award",
    description: "",

    image: acs1,
    btnLink: "/recent-news",
  },
  {
    title:
      "Breaking News: Inorganic Chemistry PhD Candidate Patricia Aniekan Ekpo Undergoes Oral Examination",
    description: "",

    image: phd,
    btnLink: "/recent-news",
  },
  {
    title:
      "Breaking News: Physical Chemistry PhD Candidate Mboso Isaac Obodom Undergoes Oral Examination",
    description: "",

    image: phd2,
    btnLink: "/recent-news",
  },
  {
    title:
      "The Department of Chemistry organizes Fire and Safety Training for Staff and Technologists",
    description: "",

    image: safety,
    btnLink: "/recent-news",
  },
  {
    title:
    "Students Chemical Society of Nigeria Felicitates with Professor Edu Inam on her birthday",
    description: "",

    image: birthdayProf,
    btnLink: "/recent-news",
  },
];

export interface StudentsDataItem {
  image: StaticImageData;
  id: string;
}

export const studentsData: StudentsDataItem[] = [
  { image: student6, id: "st1" },
  { image: student1, id: "st2" },
  { image: student2, id: "st3" },
  { image: student3, id: "st4" },
  { image: student4, id: "st5" },
  { image: student5, id: "st6" },
];
interface HomeStaffDataItem {
  image: StaticImageData;
  title: string;
  name: string;
  desc: string;
}

export const homeStaffData: HomeStaffDataItem[] = [
  {
    image: emmanuelEssien,
    title: "Dr.",
    name: "emmanuel essien",
    desc: "Organic Chemistry",
  },
  {
    image: helenEtuk,
    title: "Dr.",
    name: "helen etuk",
    desc: "Inorganic Chemistry",
  },

  {
    image: staff2,
    title: "Dr.",
    name: "solomon shaibu",
    desc: "Nanochemistry",
  },

  //     {
  //         image: staff4,
  //     name:"Dr. Ekerette Jackson",
  //         desc:"Physical",
  // },
  {
    image: staff5,
    title: "Dr.",
    name: "ini umoren",
    desc: "Analytical Chemistry",
  },
];

export default homeData;

interface CourseItem {
  code: string;
  title: string;
  credit_hrs: number;
  prerequisite: string;
  semester: string;
  desc: string;
}

const level100courses: CourseItem[] = [
  {
    code: "GST111",
    title: "Communication in English",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
  {
    code: "COS111",
    title: "Introduction to Computing Sciences",
    credit_hrs:3,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
  {
    code: "MTH111",
    title: "General Mathematics I",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
  {
    code: "BIO111",
    title: "General Biology I",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
  {
    code: "BIO117",
    title: "General Biology Practical I",
    credit_hrs: 1,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
  {
    code: "CHM111",
    title: "General Chemistry I",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
  {
    code: "CHM117",
    title: "General Chemistry Practical I",
    credit_hrs: 1,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
  {
    code: "PHY111",
    title: "General Physics I",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
  {
    code: "PHY117",
    title: "General Physics Practical I",
    credit_hrs: 1,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
];

const level100coursesSecond: CourseItem[] = [
  {
    code: "GST121",
    title: "Nigerian Peoples and Culture ",
    credit_hrs: 2,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "MTH121",
    title: "General Mathematics II",
    credit_hrs: 2,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "BIO121",
    title: "General Biology II",
    credit_hrs: 2,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "BIO128",
    title: "General Biology Practical II",
    credit_hrs: 1,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "CHM121",
    title: "General Chemistry II",
    credit_hrs: 2,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "CHM128",
    title: "General Chemistry Practical",
    credit_hrs: 1,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "PHY121",
    title: "General Physics II",
    credit_hrs: 3,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "PHY122",
    title: "General Physics Practical II",
    credit_hrs: 1,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "UNIUYO CHM123",
    title: "Green Chemistry and Toxicology",
    credit_hrs: 2,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
];

const level200courses: CourseItem[] = [
  {
    code: "gst211",
    title: "Entrepreneurial Studies I",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm211",
    title: "Inorganic Chemistry II",
    credit_hrs: 2,
    prerequisite: "chm111, chm121",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm212",
    title: "Physical Chemistry II",
    credit_hrs: 2,
    prerequisite: "chm111",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm213",
    title: "Organic Chemistry II",
    credit_hrs: 2,
    prerequisite: "chm121",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm214",
    title: "Physical Chemistry II Laboratory",
    credit_hrs: 1,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm216",
    title: "Inorganic Chemistry II Lab",
    credit_hrs: 1,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm117",
    title: "Organic Chemistry II Lab",
    credit_hrs: 1,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm218",
    title: "Polymer Chemistry I",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "mth211",
    title: "Mathematical Methods I",
    credit_hrs: 3,
    prerequisite: "mth111, mth121",
    semester: "first",
    desc: "string",
  },
  {
    code: "phy211",
    title: "Elementary Modern Physics",
    credit_hrs: 3,
    prerequisite: "phy111, phy121",
    semester: "first",
    desc: "string",
  },
  {
    code: "phy214",
    title: "Experimental/Lab. Physics I",
    credit_hrs: 1,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
];

const level200coursesSecond: CourseItem[] = [
  {
    code: "gst221",
    title: "Entrepreneurial Studies II",
    credit_hrs: 2,
    prerequisite: "",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm221",
    title: "Analytical Chemistry I",
    credit_hrs: 2,
    prerequisite: "chm111, chm121",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm223",
    title: "Analytical Chemistry I Lab",
    credit_hrs: 1,
    prerequisite: "chm121",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm224",
    title: "Inorganic Raw Materials/Resource Inventory",
    credit_hrs: 1,
    prerequisite: "mth211, chm121",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm227",
    title: "Biomolecules and The Chemistry of Life",
    credit_hrs: 3,
    prerequisite: "chm121",
    semester: "second",
    desc: "string",
  },
  {
    code: "mth224",
    title: "Linear Algebra",
    credit_hrs: 3,
    prerequisite: "mth111, mth121",
    semester: "second",
    desc: "string",
  },
  {
    code: "phy222",
    title: "Electric Circuits and Electronics",
    credit_hrs: 3,
    prerequisite: "phy121",
    semester: "second",
    desc: "string",
  },
  {
    code: "sta122",
    title: "Statistics for Physical and Applied Sciences",
    credit_hrs: 3,
    prerequisite: "",
    semester: "second",
    desc: "string",
  },
];

const level300courses: CourseItem[] = [
  {
    code: "chm311",
    title: "Inorganic Chemistry III",
    credit_hrs: 3,
    prerequisite: "chm211",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm313",
    title: "Bonding, Atomic/Molecular Structure and Symmetry",
    credit_hrs: 3,
    prerequisite: "chm211, chm212, mth224",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm314",
    title: "PetroChemistry",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm316",
    title: "Organic Chemistry III",
    credit_hrs: 3,
    prerequisite: "chm213",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm317",
    title: "Environmental Chemistry",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm318",
    title: "Applied Spectroscopy",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm319",
    title: "Physical Chemistry III",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm330",
    title: "Applied Surface and Colloid Chemistry",
    credit_hrs: 1,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "flf110*",
    title: "Introduction to French I",
    credit_hrs: 3,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "mgt316*",
    title: "principles of management",
    credit_hrs: 3,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
];

const level300coursesSecond: CourseItem[] = [
  {
    code: "chm321",
    title: "Students' Industral Work Experience Scheme (S.I.W.E.S)",
    credit_hrs: 6,
    prerequisite: "",
    semester: "second",
    desc: "string",
  },
];

const level400courses: CourseItem[] = [
  {
    code: "chm410",
    title: "Carbohydrates and Natural Products Chemistry I",
    credit_hrs: 2,
    prerequisite: "chm222",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm412",
    title: "Reaction Kinetics",
    credit_hrs: 2,
    prerequisite: "chm312",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm413",
    title: "Analytical Chemistry II",
    credit_hrs: 2,
    prerequisite: "chm221",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm414",
    title: "ElectroChemistry",
    credit_hrs: 2,
    prerequisite: "chm212, chm312",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm415",
    title: "Instrumental Methods of Analysis",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm416",
    title: "Heterocyclic Chemistry",
    credit_hrs: 2,
    prerequisite: "chm316",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm417",
    title: "Research Methods",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm432",
    title: "Chemistry of Lanthanides and Actinides",
    credit_hrs: 1,
    prerequisite: "chm311, chm312",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm433",
    title: "Polymer Chemistry and Technology",
    credit_hrs: 3,
    prerequisite: "chm215",
    semester: "first",
    desc: "string",
  },

  {
    code: "chm434*",
    title: "Industrial Chemical Technology",
    credit_hrs: 3,
    prerequisite: "chm224",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm434*",
    title: "Industrial Chemical Processess",
    credit_hrs: 3,
    prerequisite: "chm311",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm431*",
    title: "Photochemistry and Petricyclic Reactions",
    credit_hrs: 1,
    prerequisite: "chm316",
    semester: "first",
    desc: "string",
  },
  {
    code: "bch415*",
    title: "Pharmacological Biochemistry",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
];

const level400coursesSecond: CourseItem[] = [
  {
    code: "chm420",
    title: "Research Project",
    credit_hrs: 6,
    prerequisite: "",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm421",
    title: "Seminar",
    credit_hrs: 2,
    prerequisite: "",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm422",
    title: "Organic Synthesis",
    credit_hrs: 2,
    prerequisite: "chm316",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm423",
    title: "Cordination Chemistry",
    credit_hrs: 2,
    prerequisite: "chm311",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm424",
    title: "Natural Products Chemistry II",
    credit_hrs: 2,
    prerequisite: "chm316, chm 410",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm425",
    title: "Statistical Thermodynamics",
    credit_hrs: 2,
    prerequisite: "chm312",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm426",
    title: "Organomettalic Chemistry",
    credit_hrs: 2,
    prerequisite: "chm311",
    semester: "second",
    desc: "string",
  },

  {
    code: "chm427*",
    title: "Wood and Paper Chemistry",
    credit_hrs: 2,
    prerequisite: "",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm429*",
    title: "Nuclear and Radiochemistry",
    credit_hrs: 2,
    prerequisite: "chm311",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm440*",
    title: "Colour Chemistry and Technology",
    credit_hrs: 3,
    prerequisite: "",
    semester: "second",
    desc: "string",
  },
  {
    code: "bch422*",
    title: "Industrial Biochemistry",
    credit_hrs: 3,
    prerequisite: "",
    semester: "second",
    desc: "string",
  },
];

export {
  level100courses,
  level200courses,
  level300courses,
  level400courses,
  level100coursesSecond,
  level200coursesSecond,
  level300coursesSecond,
  level400coursesSecond,
};
