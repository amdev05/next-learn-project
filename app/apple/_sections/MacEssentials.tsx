import Image from "next/image";
import { SliderButton } from "../_components/SliderButton";
import Link from "next/link";

interface Data {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Props {
  data: Data[];
}

export default function MacEssentials({ data }: Props) {
  return (
    <section className="relative py-28 bg-[#f5f5f7]">
      {/* Heading */}
      <div className="w-[87.5dvw] mx-auto mb-7">
        <h2 className="">
          <span className="text-3xl font-semibold">Mac Essentials.</span>
        </h2>
      </div>

      {/* Content */}
      <div className="">
        <ul className="flex gap-x-5 overflow-auto scrollbar-hide px-[6.25dvw] snap-x scroll-pl-[6.25dvw] -my-2">
          {data.map((card, index) => (
            <li className="snap-start my-2 hover:scale-103 transition duration-400" key={index}>
              <Link href={""} className="block w-65 bg-white rounded-3xl overflow-hidden">
                <div className="px-5 pt-10 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-center">{card.title}</h3>
                  <p className="mt-2 text-sm text-center">{card.description}</p>
                  <span className="mt-2 text-sm text-center text-[#0077aa]">Learn more &gt;</span>
                </div>

                <figure className="relative w-65 h-[327]">
                  <Image src={card.image} alt="image" fill sizes="260px" className="object-cover" />
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Slider Button */}
      <SliderButton />
    </section>
  );
}
