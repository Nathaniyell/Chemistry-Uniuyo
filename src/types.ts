export type SectionProps = {
  filterButtonArray?: string[];
  isPaginated?: boolean;
  filterby: string;
  search: string;
  currentPage: number;
  isMainPage?: boolean;
  cardsArray: CardsArrayType[];
};

export type CardsArrayType = {
  title: string;
  unit?: string;
  author: string;
  published_at: string;
  desc: string;
  href?: string;
  supervisor: string;
  type: "phd" | "msc" | "bsc";
};

export type SemesterType = {
  semester: "first" | "second" | "third";
  type?: string;
  semesterCourseArray: SemesterCourseArrayType[];
};

type SemesterCourseArrayType = {
  code: string;
  title: string;
  prerequisite: string;
  semester: string;
  credit_hrs: number;
  desc: string;
};

export type CourseByLevelProps = {
  currentCourseByLevel: {
    courses: string;
  };
  setCurrentCourseByLevel: React.Dispatch<
    React.SetStateAction<{
      courses: string;
    }>
  >;
  level: string;
  firstSemesterArray: {
    code: string;
    title: string;
    prerequisite: string;
    semester: string;
    credit_hrs: number;
    desc: string;
  }[];
  secondSemesterArray: {
    code: string;
    title: string;
    prerequisite: string;
    semester: string;
    credit_hrs: number;
    desc: string;
  }[];
  thirdSemesterArray?: {
    code: string;
    title: string;
    prerequisite: string;
    semester: string;
    credit_hrs: number;
    desc: string;
  }[];
};
