import { RecentNews } from "@/lib";
import Lecturers from "../Lecturers";
import { RouteLinkBtn } from "@/components";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

const News = () => {
  const router = useRouter();
  const truncateWords = (str:string, numWords: number) => {
    const words = str.split(" ");
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + "...";
    }
    return str;
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-14">
        {RecentNews.map((news, index) => (
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
        className="mx-auto mt-4 text-white flex items-center"
      >
        See all news
        <MdOutlineKeyboardDoubleArrowRight className="ml-1 animate-pulse text-lg text-secondary" />
      </RouteLinkBtn>
    </>
  );
};

export default News;
