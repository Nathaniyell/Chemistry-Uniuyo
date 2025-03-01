import { Lecturers } from "@/components";
import { recentNews } from "@/lib";
import { truncateWords } from "@/utils/truncateWords";

const page = () => {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="py-12 md:py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 mb-8">
              News and Events
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Stay updated with the latest happenings, achievements, and events from the Department of Chemistry, University of Uyo.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-20 md:gap-x-14 md:gap-y-10 lg:gap-y-4 lg:gap-x-20">
          {recentNews.map(({ title, pictures, date, description }, index) => {
            return (
              <div key={index}>
                <Lecturers
                  name={truncateWords(title, 10)}
                  image={pictures[0]}
                  href={`/recent-news/${title.replaceAll(" ", "-")}`}
                  date={date}
                  dateStyle="text-primary"
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
      </section>
    </main>
  );
};

export default page;
