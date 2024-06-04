import graduation from "../../../public/images/Graduation/class018.jpg"
import sendforth from "../../../public/images/Sendforth/sendforth_profs.jpg"
import RecentNews from "../../lib/RecentNews"
import Lecturers from "../Lecturers"

const News = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {RecentNews.map((news, index) => (
        <div className="h-full" key={index}>
          <Lecturers
            name={news.title}
            image={news.pictures[0]}
            href={news.title.split(" ").slice(0, 4).join("-")}
            date={news.date}
            cardStyle="bg-sky-200"
          />
        </div>
      ))}
    </div>
  )
}

export default News