import { recentNews } from "@/lib";
import Lecturers from "../Lecturers";
import { RouteLinkBtn } from "@/components";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { truncateWords } from "@/utils/truncateWords";

const News = () => {

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-14">
        {recentNews.slice(0, 6).map((news, index) => (
          <div className="" key={index}>
            <Lecturers
              name={truncateWords(news.title, 10)}
              image={news.pictures[0]}
              href={`/recent-news/${news.title.replaceAll(" ", "-")}`}
              date={news.date}
              cardBodyStyle="bg-sky-200 shadow-md p-4 flex flex-col justify-between"
              cardTitleStyle="hover:text-secondary"
              readMore
              cardImgContainerStyle="flex-grow"
              readMoreLink={`/recent-news/${news.title.replaceAll(" ", "-")}`}
            />
          </div>
        ))}
      </div>
      <RouteLinkBtn
        href="/recent-news"
        variant="primary"
        className="mx-auto mt-8 text-white flex items-center lg:w-1/3"
      >
        See all news
        <MdOutlineKeyboardDoubleArrowRight className="ml-1 animate-pulse text-lg text-secondary" />
      </RouteLinkBtn>
    </>
  );
};

export default News;
