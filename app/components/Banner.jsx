"use client"
import Image from 'next/image';
import ScrollButton from './ScrollButton';


export default function Banner()
   {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* Background image */}
      
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Welcome to GovMate, this is a application where government officials can easily query and ask questions from a dataset</h1>

        <p className="mt-4 text-lg md:text-2xl text-white/90">Your one-stop solution for government data inquiries.</p>

        <ScrollButton scrollAmount={600}/>
      </div>
    </div>
  );
}
