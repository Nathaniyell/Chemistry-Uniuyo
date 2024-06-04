import { RecentNews } from "@/lib"
import Lecturers from "../Lecturers"
import { Button } from "../HTMLTags"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


const News = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 place-items-center">
        {RecentNews.map((news, index) => (
          <div className="" key={index}>
            <Lecturers
              name={news.title}
              image={news.pictures[0]}
              href={news.title.split(" ").slice(0, 4).join("-")}
              date={news.date}
              cardStyle="!bg-sky-200 h-[12rem] shadow-md p-4"
            />
          </div>
        ))}
      </div>
      <Button
        variant="primary"
        className="mx-auto place-self-center text-white !text-xl"
      >
        See all news
        <MdOutlineKeyboardDoubleArrowRight className="ml-1 animate-pulse text-lg" />
      </Button>
    </>
  )
}

export default News