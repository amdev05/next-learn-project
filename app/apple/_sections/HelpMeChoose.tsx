import Image from "next/image";
import Link from "next/link";

interface Data {
  id: number;
  title: string;
  image: string;
}

interface Props {
  data: Data;
}

export default function HelpMeChoose({ data }: Props) {
  return (
    <section className="relative py-28">
      {/* Heading */}
      <div className="mx-[6.25dvw] mb-7">
        <h2 className="">
          <span className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-tight">Help me choose</span>
        </h2>
      </div>

      {/* Content */}
      <div className="w-[87.5dvw] mx-auto rounded-3xl  bg-[#f5f5f7] hover:scale-103 transition duration-400">
        <Link href={""} className="flex flex-col lg:flex-row items-center">
          <div className="lg:flex-2 order-2 lg:order-1 flex flex-col items-center px-6 lg:px-0 lg:pl-16 pb-12 lg:pb-0">
            <h3 className="text-center font-semibold text-xl lg:text-3xl">{data.title}</h3>
            <div className="inline-block px-4 py-2 rounded-full bg-[#0071e3] mt-7">
              <span className="text-white">Get started</span>
            </div>
          </div>
          <figure className="order-1 lg:order-2 relative mb-18 px-8 lg:px-16 pt-12 mx-auto">
            <Image src={data.image} alt="image" width={640} height={472} sizes="640px" className="object-contain" />
          </figure>
        </Link>
      </div>
    </section>
  );
}
