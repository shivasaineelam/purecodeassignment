import React, { useState } from "react";
import { LuGlobe } from "react-icons/lu";
import germanyImg from "../../assets/images/flags/germany.jpg";
import italyImg from "../../assets/images/flags/italy.jpg";
import russiaImg from "../../assets/images/flags/russia.jpg";
import spainImg from "../../assets/images/flags/spain.jpg";

const languages = [
  {
    name: "German",
    image: germanyImg,
  },
  {
    name: "Italian",
    image: italyImg,
  },
  {
    name: "Spanish",
    image: spainImg,
  },
  {
    name: "Russian",
    image: russiaImg,
  },
];

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block right-5">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center h-10 w-10 bg-default-100 rounded-full text-default-700 hover:text-primary focus:outline-none"
      >
        <LuGlobe size={24} />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 py-2 w-56 bg-white border border-default-200 rounded-md shadow-lg right-7">
          {languages.map((language) => (
            <button
              key={language.name}
              className="block w-full px-4 py-2 text-sm text-default-700 hover:bg-default-100"
            >
              <img
                alt="language-flag"
                src={language.image}
                className="inline-block h-4 w-6 mr-2"
              />
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
