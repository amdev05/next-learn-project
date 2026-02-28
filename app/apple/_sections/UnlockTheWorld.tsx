"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Data {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Props {
  data: Data[];
}

export default function UnlockTheWorld({ data }: Props) {
  const [isOpen, setIsOpen] = useState(0);

  const handleClick = (index: number) => {
    if (index == 2) {
      return setIsOpen(0);
    }
    if (isOpen == index) {
      return setIsOpen(index + 1);
    }
    setIsOpen(index);
  };

  return (
    <section className="py-28">
      {/* Heading */}
      <div className="w-[87.5dvw] mx-auto mb-7 space-y-4">
        <h2 className="">
          <span className="text-3xl font-semibold">Unlock the World </span>
          <span className="text-3xl font-semibold text-nowrap">of Apple</span>
        </h2>

        <Link href={""} className="">
          <span className="text-[#0066cc] hover:underline text-xs">Learn how apple better devices work better together &gt;</span>
        </Link>
      </div>

      {/* Content */}
      <div className="w-[87.5dvw] mx-auto bg-[#f5f5f7] rounded-3xl">
        <ul className="p-6">
          {data.map((card, index) => (
            <li className="border-b border-[#dedede] last:border-none" key={index}>
              <div className={``}>
                <button type="button" className="w-full flex justify-between items-center py-5 cursor-pointer" onClick={() => handleClick(index)}>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <div className="w-5 h-2.5">
                    <svg viewBox="0 0 17 8.85">
                      <polyline data-accordion-icon-shape="true" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" fillRule="evenodd" points="15 7.72 8.5 1.13 2 7.72">
                        <animate
                          attributeName="points"
                          values="15 1.13 8.5 7.72 2 1.13; 15.85 4.42 8.5 4.42 1.15 4.42; 15 7.72 8.5 1.13 2 7.72"
                          dur="320ms"
                          begin="indefinite"
                          fill="freeze"
                          keyTimes="0;0.5;1"
                          calcMode="spline"
                          keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"
                        ></animate>
                        <animate
                          attributeName="points"
                          values="15 7.72 8.5 1.13 2 7.72; 15.85 4.42 8.5 4.42 1.15 4.42; 15 1.13 8.5 7.72 2 1.13"
                          dur="320ms"
                          begin="indefinite"
                          fill="freeze"
                          keyTimes="0;0.5;1"
                          calcMode="spline"
                          keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"
                        ></animate>
                      </polyline>
                    </svg>
                  </div>
                </button>

                <div className={` overflow-hidden transition-all duration-300 ease-in-out ${isOpen == index ? "max-h-150" : "max-h-0"}`}>
                  <p className="text-sm pb-6">{card.description}</p>

                  <figure className="relative pb-10">
                    <Image src={card.image} alt="image" width={600} height={260} sizes="300px" className="object-contain" />
                  </figure>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
