import Image from 'next/image';

interface FeatureBoxProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function FeatureBox({ imageSrc = "/GovAskLogo.png", title, description }: FeatureBoxProps) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-700 rounded-3xl p-6 md:p-10 text-white shadow-lg gap-6">
      
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-1/2 rounded-2xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-md md:text-lg">{description}</p>
      </div>

    </div>
  );
}
