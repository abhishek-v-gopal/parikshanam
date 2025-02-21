import Image from "next/image";
import Underline from "@/app/assets/icons/underline.svg";

const Browse_Header = ({ bg, heading }) => {
  const words = heading.split(" ");
  const lastWord = words.pop();
  const remainingWords = words.join(" ");

  return (
    <div className="relative h-80 lg:h-96 bg-black overflow-hidden">
      <Image
        src={bg}
        alt="Profile banner"
        className="object-cover opacity-20"
        fill
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/70" />
      <div className="relative h-full flex items-center justify-center">
        <h2 className="custom-h2 text-white">
          {remainingWords} 
          <span className="relative">
            {'  ' + lastWord}
            <Underline className="absolute left-2 w-full  text-brand h-3" />
          </span>
        </h2>
      </div>

    </div>
  );
};

export default Browse_Header;
