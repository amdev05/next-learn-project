import Image from "next/image";
import Link from "next/link";

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
    <section className="py-28 bg-[#f5f5f7]">
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
        <ul className="px-[6.25dvw] overflow-auto scrollbar-hide snap-x scroll-pl-[6.25dvw] flex gap-x-6">
          {data.map((card, index) => (
            <li className="relative snap-start " key={index}>
              <div className="relative w-65 bg-white overflow-hidden rounded-2xl p-6 pb-18 hover:scale-105 z-10 transition duration-300">
                <div className="relative ">
                  <Image src={card.icon} alt="icon" width={56} height={56} className="object-contain " />

                  <div className="space-y-3 mt-3">
                    <p className="text-xl font-medium">{card.title}</p>
                    <p className="text-sm ">{card.description}</p>
                  </div>
                </div>
                <button type="button" className="absolute top-0 left-0 right-0 bottom-0 cursor-pointer ">
                  <div className="absolute bottom-5 right-5 size-9 bg-black fill-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M16 8.5h-4.5V4a1.5 1.5 0 0 0-3 0v4.5H4a1.5 1.5 0 0 0 0 3h4.5V16a1.5 1.5 0 0 0 3 0v-4.5H16a1.5 1.5 0 0 0 0-3z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
