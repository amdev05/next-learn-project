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
      <div className="w-[87.5dvw] mb-7 mx-auto">
        <h2 className="">
          <span className="text-2xl font-semibold">Help me choose</span>
        </h2>
      </div>

      {/* Content */}
      <div className="w-[87.5dvw] mx-auto rounded-3xl  bg-[#f5f5f7] hover:scale-103 transition duration-400">
        <Link href={""} className="flex flex-col">
          <div className="order-2 flex flex-col items-center px-6 pb-12">
            <h3 className="text-center font-semibold text-xl">{data.title}</h3>
            <div className="inline-block px-4 py-2 rounded-full bg-[#0071e3] mt-7">
              <span className="text-white">Get started</span>
            </div>
          </div>
          <figure className="relative mb-18 px-8 pt-12">
            <Image src={data.image} alt="image" width={640} height={472} sizes="640px" className="object-contain" />
          </figure>
        </Link>
      </div>
    </section>
  );
}
