import { RecentNews } from "@/lib"
import Lecturers from "../Lecturers"

const News = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {RecentNews.map((news, index) => (
        <div className="" key={index}>
          <Lecturers
            name={news.title}
            image={news.pictures[0]}
            href={news.title.split(" ").slice(0, 4).join("-")}
            date={news.date}
            cardStyle="bg-sky-200 h-[9rem]"
          />
        </div>
      ))}
    </div>
  )
}

export default News