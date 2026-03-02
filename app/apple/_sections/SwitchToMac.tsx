import Image from "next/image";
import Link from "next/link";
import { SliderButton } from "../_components/SliderButton";

interface Data {
  id: number;
  title: string[];
  description: string;
  image: string;
}

interface Props {
  data: Data[];
}

export default function SwitchToMac({ data }: Props) {
  return (
    <section className="relative py-28 bg-[#f5f5f7]">
      {/* Heading */}
      <div className="mx-[6.25dvw] mb-7">
        <h2 className="">
          <span className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-tight">Switch to Mac.</span>
        </h2>
      </div>

      {/* Content */}
      <div className="">
        <ul className="flex gap-x-5 overflow-auto scrollbar-hide px-[6.25dvw] snap-x scroll-pl-[6.25dvw] -my-4">
          {data.map((card, index) => (
            <li className=" snap-start my-4 hover:scale-103 transition duration-400" key={index}>
              <Link href={""} className="block w-65 lg:w-full bg-white rounded-3xl overflow-hidden">
                <div className="px-6 lg:mx-20 pt-10 flex flex-col justify-center">
                  <h3 className="text-xl lg:text-[32px] font-semibold text-center leading-tight">
                    {card.title.map((tl, index) => (
                      <span key={index}>
                        {tl}
                        <br />
                      </span>
                    ))}
                  </h3>
                  <p className="text-sm lg:text-base text-center mt-2.5">{card.description}</p>

                  <span className="text-[#007eb4] text-center text-sm mt-2.5 hover:underline">Learn more &gt;</span>
                </div>

                <figure className="relative pb-5 ">
                  <Image src={card.image} alt="image" width={640} height={646} className="object-cover" />
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Slider button */}
      <SliderButton />
    </section>
  );
}
