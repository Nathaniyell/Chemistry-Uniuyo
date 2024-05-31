"use client"

import Image from 'next/image';

import logo from "../../public/images/logo.jpg";

export default function loading() {
    return (
        <div className='min-h-[60vh] w-full flex flex-col items-center justify-center gap-2 sm:gap-3'>
            <Image src={logo} alt="logo" className='h-16 w-16 rounded-full opacity-50 animate-spin' priority />
            <span className='font-semibold text-lg md:text-xl animate-pulse font-mono'>loading page...</span>
        </div>
    )
}