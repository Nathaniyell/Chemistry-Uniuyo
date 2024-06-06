"use client"
import { RecentNews } from "@/lib"
import Lecturers from "../Lecturers"
import { Button } from "../HTMLTags"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";


const News = () => {
  const router = useRouter()

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 place-items-center">
        {RecentNews.map((news, index) => (
          <div className="" key={index}>
            <Lecturers
              name={news.title}
              image={news.pictures[0]}
              href={`/recent-news/${news.title.split(' ').slice(0,4).join("-")}`}
              date={news.date}
              cardBodyStyle="!bg-sky-200 place-items-stretch shadow-md p-4"
              cardTitleStyle="hover:text-secondary"
              readMore
              readMoreLink="/news"
            />
          </div>
        ))}
      </div>
      <Button
        variant="primary"
        className="mx-auto place-self-center text-white !text-xl"
        onClick={() => router.push("/recent-news")}
      >

        See all news
        <MdOutlineKeyboardDoubleArrowRight className="ml-1 animate-pulse text-lg lg:mt-1 text-secondary" />


      </Button>
    </>
  )
}

export default News