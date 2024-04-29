"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

export default function NotFound() {

    const router = useRouter()

    return (
        <main className="min-h-[70vh] w-full flex items-center justify-center text-blue-950">
        
            <div className="max-w-[500px] w-[97%] hover:shadow-md flex flex-col items-center justify-center gap-5 p-4 rounded-md">
            
                <h1 className="font-bold text-3xl md:text-4xl">Ooops! Page Not Found</h1>
                
                <p className="md:text-lg text-center">Seems the page you&apos;re looking for does not exist or has been moved to a new route.</p>

                <button className="bg-blue-900 text-slate-200 hover:bg-opacity-20 hover:text-blue-900 rounded-md p-3 transition-all duration-300" onClick={() => router.push("/")}>go back home</button>
                
            </div>
            
        </main>
    )

}