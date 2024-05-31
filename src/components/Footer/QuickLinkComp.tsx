import Link from 'next/link';
import React from 'react';

type QuickLinksProps = {
    heading: string;
    linksArray: any[];
}

export default function QuickLinkComp({ heading, linksArray }: QuickLinksProps) {
    return (
        <div className='flex flex-col justify-center item-center gap-2 min-w-[200px] p-2 hover:bg-rgbaBackground transition-all rounded-md'>
            <h1 className="text-xl sm:text-3xl font-bold mb-2">{heading}</h1>
            {linksArray.map(({ title, href }) => <Link key={title} className='text-[0.99rem] hover:underline' href={href ? href : title}>{title}</Link>)}
        </div>
    )
}