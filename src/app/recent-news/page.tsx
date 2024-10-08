import { Breadcrumbs, Header, Lecturers } from "@/components";
import { recentNews } from "@/lib";
import { truncateWords } from "@/utils/truncateWords"; 

const page = () => {
  return (
    <div className="w-full">
      <Header heading="News and Events" />
      <Breadcrumbs array={[{ title: "News", href: `/recent-news` }]} />
      <div className="md:w-[90%] mx-auto px-4 md:px-0 pb-10 mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-20 md:gap-x-14 md:gap-y-10 lg:gap-y-4 lg:gap-x-20 ">
        {recentNews.map(({ title, pictures, date, description }, index) => {
          return (
            <div key={index} className="">
              {/* <h4 className="my-4 text-2xl font-semibold text-blue-950">
                {title}
              </h4> */}
              <Lecturers
                name={truncateWords(title, 10)}
                image={pictures[0]}
                href={`/recent-news/${title.replaceAll(" ", "-")}`}
                date={date}
                dateStyle="text-primary"
                // cardBodyStyle="shadow p-4 bg-slate-100"
                readMore
                readMoreLink={`/recent-news/${title.replaceAll(" ", "-")}`}
                                cardContainerStyle="md:pb-4"
                                cardBodyStyle="p-4 border shadow h-full"
                cardImgContainerStyle="filter-none"
                cardTitleStyle="text-2xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
