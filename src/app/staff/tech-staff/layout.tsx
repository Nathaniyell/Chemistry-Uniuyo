import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Non Teaching staff',


    description: "Meet our dedicated non-teaching staff who support the daily operations and enhance the learning environment of our department. From laboratory, administration to maintenance, our team is committed to ensuring a smooth and productive experience for staff and student of the department of chemistry university of uyo",
    keywords: [
        "Non-teaching staff",
        "University of Uyo",
        "Department of Chemistry",
        "Support staff",
        "Administrative staff",
        "Laboratory staff",
    ]
};

export default function Page({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <body>



                {children}

            </body>

        </>
    );
}
