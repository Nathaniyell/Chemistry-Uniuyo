import { Lecturers } from "@/components"
import { RecentNews } from "@/lib"



const page = () => {

    return (
        <div className="bg-slate-200 p-6 md:p-0">
            <h1 className="text-4xl font-extrabold text-center py-10 uppercase">Recent News and Events</h1>
            <div className="md:w-4/5 lg:w-3/4 mx-auto pb-10">
                {RecentNews.map((news, index) => {
                    const { title, pictures, date, description } = news

                    return (

                        <div key={index} className="mb-14 md:mb-10">
                            <h4 className="mb-4 text-2xl md:text-3xl font-semibold text-primary">{title}</h4>
                            <Lecturers
                            name = ""
                                image={pictures[0]}
                                href={`/recent-news/${news.title.replaceAll(" ", "-")}`}
                                date={date}
                                other={`${description[0]} \n\n ${description[1]}`}
                                cardBodyStyle="shadow p-6 "
                                readMore
                                readMoreLink={`/recent-news/${news.title.replaceAll(" ", "-")}`}
                                cardContainerStyle="h-full"
                                cardImgContainerStyle="h-[40%] filter-none"
                                cardTitleStyle="text-2xl md:text-3xl"
                            />

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default page