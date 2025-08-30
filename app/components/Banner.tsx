"use client";
import ScrollButton from "./ScrollButton";

export default function Banner() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Background layer (replace with an <Image/> later if you want a hero image) */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700" />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Welcome to GovAsk — an application where government officials can easily
          query and ask questions from datasets
        </h1>

        <p className="mt-4 text-lg md:text-2xl text-white/90">
          Your one-stop solution for government data inquiries.
        </p>

        <ScrollButton scrollAmount={600} />
      </div>
    </section>
  );
}
