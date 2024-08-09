import { Metadata, ResolvingMetadata } from 'next';
import staffData from "@/lib/lecturersData";

// Define the types for the parameters
interface Props {
    params: {
        slug: string;
    };
}

// Function to fetch staff data based on the slug
const fetchStaffData = (slug: string) => {
    const staffFullName = slug.replaceAll("-", " ");
    return staffData.find((staff) => staff.fullName.toLowerCase() === staffFullName.toLowerCase());
};

export async function generateMetadata(
    { params, }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = params;

    // Fetch the specific staff member's data
    const staffMember = fetchStaffData(slug);


    // Handle case where staff member is not found
    if (!staffMember) {
        return {
            title: 'Staff Member Not Found - Department of Chemistry, University of Uyo',
            description: 'The requested staff member does not exist in our records.',
            keywords: ['Staff not found', 'University of Uyo', 'Department of Chemistry'],

        };
    }

    const { fullName, title: staffTitle, researchAreas, experience } = staffMember;

    return {
        title: `${staffTitle} ${fullName.toUpperCase()} - ${experience[0].title}`,
        description: `Discover the profile of ${staffTitle} ${fullName}, a valued member of our teaching staff in the Department of Chemistry at the University of Uyo. Explore their research areas: ${researchAreas.join(", ")}.`,
        keywords: [
            fullName,
            staffTitle,
            "Teaching staff",
            "University of Uyo",
            "Department of Chemistry",
            ...researchAreas,
        ],

    };
}

export default function Page({ children }: { children: React.ReactNode }) {
    return (
        <>

            {children}

        </>

    );
}
