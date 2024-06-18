import { Breadcrumbs, Header, Lecturers } from "@/components";
import { RecentNews } from "@/lib";

const page = () => {
  return (
    <div className="p-6 md:p-0">
       <Header heading="Recent News and Events"/>
       <Breadcrumbs
        array={[
             { title: "News", href: `/recent-news` },
        ]}
      />
          <div className="md:w-4/5 lg:w-[90%] gap-20 mx-auto pb-10 grid lg:grid-cols-3 items-stretch">
        {RecentNews.map(({ title, pictures, date, description }, index) => {
          return (
            <div key={index} className="mb-14 md:mb-10 h-full">
              {/* <h4 className="my-4 text-2xl font-semibold text-blue-950">
                {title}
              </h4> */}
              <Lecturers
                name={title}
                image={pictures[0]}
                href={`/recent-news/${title.replaceAll(" ", "-")}`}
                date={date}
                other={`${description[0]}`}
                cardBodyStyle="shadow p-4 bg-slate-100"
                readMore
                readMoreLink={`/recent-news/${title.replaceAll(" ", "-")}`}
                cardContainerStyle="h-full"
                cardImgContainerStyle="h-[40%] filter-none"
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
