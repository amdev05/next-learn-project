import Image from "next/image";
import Link from "next/link";
import { SliderButton } from "../_components/SliderButton";
import { PlusButton } from "../_components/PlusButton";

interface Data {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface Props {
  data: Data[];
}

export default function WhyApple({ data }: Props) {
  return (
    <section className="relative py-28 bg-[#f5f5f7]">
      {/* Header */}
      <header className="">
        <div className="mx-[6.25dvw] mb-7 space-y-5">
          <h2 className="">
            <span className="text-3xl font-semibold">
              Why Apple is the best
              <br />
              place to buy Mac.
            </span>
          </h2>

          <Link href={""}>
            <span className="text-sm text-[#0066cc]">Shop Mac &gt;</span>
          </Link>
        </div>
      </header>

      {/* Card */}
      <div className="">
        <ul className="px-[6.25dvw] -my-4 overflow-auto scrollbar-hide snap-x scroll-pl-[6.25dvw] flex gap-x-6">
          {data.map((card, index) => (
            <li className="relative my-4 snap-start " key={index}>
              <div className="relative w-65 bg-white overflow-hidden rounded-2xl p-6 pb-18 hover:scale-103 z-10 transition duration-500">
                <div className="relative">
                  <Image src={card.icon} alt="icon" width={56} height={56} className="object-contain max-h-14" />

                  <div className="space-y-3 mt-3">
                    <p className="text-xl font-semibold">{card.title}</p>
                    <p className="text-sm ">{card.description}</p>
                  </div>
                </div>

                <PlusButton />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Slider button */}
      <SliderButton />
    </section>
  );
}
