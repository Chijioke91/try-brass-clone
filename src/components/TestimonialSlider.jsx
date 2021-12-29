import { useState } from 'react';
import Hustler from '../assets/hustler.png';
import Odu from '../assets/odu.png';
import Nifries from '../assets/nifries.png';
import Simi from '../assets/simi.png';
import Olakunbi from '../assets/olakunbi.png';
import Feranmi from '../assets/feranmi.png';

const images = [
  {
    id: 0,
    name: 'Simi Adejumo, Hustler Capital',
    quote: `"We have to move really fast with our portfolio companies and Brass has helped us validate a lot of ideas and turned them to businesses with the ease of creating sub-accounts."`,
    logo: Hustler,
    image: Simi,
  },
  {
    id: 1,
    name: 'Olakunbi Adedipe, Odu Fashion',
    quote: `"The ease of opening an account completely won me over. The app is very easy to navigate and it’s obvious they have the best interests of SMEs at heart. I’m proud to call them my bank.”`,
    logo: Odu,
    image: Olakunbi,
  },
  {
    id: 2,
    name: 'Feranmi Ajetunmobi, Ni-Fries',
    quote: `"Brass, with the sub-accounts feature, makes it easy to segment our cash and in turn optimise it for targeted goals.”`,
    logo: Nifries,
    image: Feranmi,
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-screen relative">
      <div className="text-white overflow-x-hidden">
        <div className="w-full flex items-center justify-center space-x-4 left-0 bottom-36 lg:bottom-44 md:-left-[12rem] lg:-left-[24rem] absolute z-10">
          {images.map((img) => (
            <div
              key={img.id}
              className={`rounded-full cursor-pointer h-3 w-3 ${
                img.id === index ? 'bg-gray-300' : 'bg-gray-700'
              }`}
              onClick={() => setIndex(img.id)}
            />
          ))}
        </div>
        <div
          className={`w-[300vw] h-full flex items-center justify-center transition-all ease-in-out duration-[1500ms] pb-24`}
          style={{ transform: `translateX(${-100 * index}vw)` }}
        >
          {images.map((img) => (
            <div
              key={img.id}
              className="w-[100vw] h-full relative md:flex md:flex-row-reverse"
            >
              <img
                src={img.image}
                alt="person"
                className="object-cover h-96 md:w-1/2 lg:h-[748px]"
              />
              <div className="text-white bg-black px-4 pt-14 lg:pt-8 pb-28 flex flex-col items-center justify-center space-y-6 lg:space-y-32 md:w-1/2 md:h-96 lg:h-[748px]">
                <h2 className="text-lg lg:text-[28px] leading-[41px] text-center h-32 lg:w-[468px]">
                  {img.quote}
                </h2>
                <div className="space-y-6 lg:space-y-16 lg:pt-6 text-center">
                  <h4 className="tracking-tight text-sm text-gray-500">
                    {img.name}
                  </h4>
                  <div className="w-screen flex items-center justify-center">
                    <img src={img.logo} alt="logo" className={`w-28 h-8`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
