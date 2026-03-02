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
      <div className="mx-[6.25dvw] mb-7">
        <h2 className="">
          <span className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-tight">Mac Essentials.</span>
        </h2>
      </div>

      {/* Content */}
      <div className="">
        <ul className="flex gap-x-5 overflow-x-auto scrollbar-hide px-[6.25dvw] snap-x scroll-pl-[6.25dvw] -my-4">
          {data.map((card, index) => (
            <li className="lg:flex-1 snap-start my-4 hover:scale-103 transition duration-400" key={index}>
              <Link href={""} className="block w-65 lg:w-full bg-white rounded-3xl overflow-hidden">
                <div className="px-5 pt-10 flex flex-col items-center">
                  <h3 className="text-xl lg:text-3xl font-semibold text-center">{card.title}</h3>
                  <p className="mt-2 text-sm lg:text-base text-center">{card.description}</p>
                  <span className="mt-2 text-sm lg:text-base text-center text-[#0077aa]">Learn more &gt;</span>
                </div>

                <figure className="relative w-full h-[327px] lg:h-[400px]">
                  <Image src={card.image} alt="image" fill sizes="650px" className="object-cover" />
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
