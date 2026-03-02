import Image from "next/image";
import { PlusButton } from "../_components/PlusButton";
import { SliderButton } from "../_components/SliderButton";

interface Data {
  id: number;
  title: string;
  description: string[];
  image: string;
}

interface Props {
  data: Data[];
}

export default function GoodToKnow({ data }: Props) {
  return (
    <section className="relative py-28">
      {/* Heading */}
      <div className="mx-[6.25dvw] mb-8">
        <h2 className="">
          <span className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-tight">Get to Know Mac</span>
        </h2>
      </div>

      {/* CARD */}
      <div className="">
        <ul className="flex gap-x-6 overflow-auto scrollbar-hide px-[6.25dvw] snap-x scroll-pl-[6.25dvw] -my-2">
          {data.map((card, index) => (
            <li className="snap-start my-2" key={index}>
              <div className="relative w-65 h-120 rounded-2xl overflow-hidden hover:scale-103 transition duration-400">
                <div className="relative w-full h-full">
                  <Image src={card.image} alt="image" fill sizes={"480px"} className="object-cover" />

                  <div className="absolute top-0 p-5 text-white">
                    <h3 className="font-medium text-sm">{card.title}</h3>
                    <p className="font-semibold text-xl mt-1">{card.description.join("<br/>")}</p>
                  </div>
                </div>

                <PlusButton variant="light" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Slider Button */}
      <SliderButton />
    </section>
  );
}
