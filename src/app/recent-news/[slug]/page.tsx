"use client"
import { useRouter } from 'next/navigation';

import { RecentNews } from '@/lib';
import { Button } from '@/components';


const normalizeString = (str: string) => {
  return str.toLowerCase().trim();
};

const Page = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const newsTitleFormatted = normalizeString(params.slug);
  const filteredNews = RecentNews.filter(news => normalizeString(news.title) === newsTitleFormatted.replaceAll("-", " "))[0];

  console.log(filteredNews)

  if (!filteredNews) {
    return (
      <div className="min-h-screen flex flex-col gap-8 items-center justify-center text-red-600 text-xl">
        <h1>Sorry this news does not exist</h1>
        <Button
          variant="primary"
          arrow
          className='text-white !text-xl'
          onClick={() => {
            router.back();
          }}
        >
          Go back
        </Button>
      </div>
    );
  }

  const { title, pictures, date, description } = filteredNews;
  return (
    <div>{title}</div>
  )
}

export default Page