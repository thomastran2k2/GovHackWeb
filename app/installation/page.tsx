import Image from "next/image";
import NavBar from "./../components/NavBar";
import Banner from "./../components/Banner";
import FeatureBox from "./../components/Instruction";

export default function Home() {
  return (
    <>
    <NavBar />
    <Banner />
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <FeatureBox
        imageSrc="/GovAskLogo.png"
        title="Step 1"
        description="Upload your dataset to the app"
      />
      <FeatureBox
        imageSrc="/GovAskLogo.png"
        title="Feature 2"
        description="Description for feature 2"
      />
      <FeatureBox
        imageSrc="/GovAskLogo.png"
        title="Feature 3"
        description="Description for feature 3"
      />
    </div>
    </>
  );
}