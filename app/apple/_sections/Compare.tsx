import Image from "next/image";
import Link from "next/link";
import { SliderButton } from "../_components/SliderButton";

interface Data {
  id: number;
  categoryId: number;
  title: string;
  chip: string[];
  image: string;
  colors: string[];
  description: string;
  startPrice: number;
  monthlyPrice: number;
}

interface Props {
  data: Data[];
}

export default function Compare({ data }: Props) {
  return (
    <section className="relative pb-28">
      <header className="">
        <div className="pt-10 pb-8 w-[87.5dvw] mx-auto ">
          <h1 className="text-[40px] font-bold">Mac</h1>
        </div>
      </header>

      <div className="">
        <div className="relative w-[87.5dvw] mx-auto mb-10 bg-[#e8e8ed] rounded-full p-1">
          <ul className="flex overflow-auto scrollbar-hide rounded-full">
            <li className="">
              <button type="button" className="bg-black rounded-full text-white px-4 text-nowrap h-9 text-sm">
                All Products
              </button>
            </li>
            <li className="">
              <button type="button" className="px-4 text-nowrap h-9 text-sm">
                Laptops
              </button>
            </li>
            <li className="">
              <button type="button" className="px-4 text-nowrap h-9 text-sm">
                Desktops
              </button>
            </li>
            <li className="">
              <button type="button" className="px-4 text-nowrap h-9 text-sm">
                Displays
              </button>
            </li>
          </ul>
          <div className="">
            <button
              type="button"
              className="size-9 absolute top-1/2 -translate-y-1/2 right-0 flex justify-center items-center cursor-pointer bg-[#e8e8ed] rounded-r-full shadow-[-16px_0_10px_-10px_rgba(232,232,237,1)]"
            >
              <svg width="7px" height="12px" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(-41.5, -32)">
                  <g transform="translate(22, 16)">
                    <path
                      fill="currentcolor"
                      d="M20.5798786,28 C20.3124688,28 20.045059,27.8976471 19.8406514,27.6929412 C19.4283363,27.2814118 19.4262362,26.6115295 19.8343512,26.1957648 L23.9673032,21.9887063 L19.8084502,17.8084714 C19.3982352,17.3962361 19.3968351,16.7256479 19.8063502,16.311295 C20.2151652,15.8969421 20.8815897,15.8962362 21.2911048,16.3091774 L26.191285,21.234824 C26.6015001,21.6470593 26.6029002,22.314824 26.1954852,22.7298827 L21.3254061,27.6865883 C21.1202985,27.8955294 20.8500886,28 20.5798786,28"
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="pb-24">
        <ul className="flex gap-x-5 overflow-x-auto scrollbar-hide snap-x px-[6.25dvw] scroll-pl-[6.25dvw]">
          {data.map((item) => (
            <li className="pr-7 snap-start" key={item.id}>
              <div className="">
                {/* Head */}
                <div className="flex flex-col">
                  <div className="order-3">
                    <h3 className="flex flex-col">
                      <span className="text-xl font-semibold ">{item.title}</span>
                      <span className="text-sm font-medium">{item.chip}</span>
                    </h3>
                  </div>
                  <Link href={`/${item.id}`} className=" pb-9">
                    <figure className="relative w-[232] h-[157] rounded-2xl overflow-hidden">
                      <Image alt="" src={item.image} fill sizes="232px" className="object-cover" loading="eager" />
                    </figure>
                  </Link>
                  <div className="order-2 h-9.5">
                    <ul className="flex">
                      {item.colors.map((color, index) => (
                        <li className="mx-1" key={index}>
                          <div className="size-3 rounded-full  inset-shadow-2xs inset-shadow-black/50" style={{ backgroundColor: color }}></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-10">
                  <div className="h-[78]">
                    <p className="text-sm my-3">{item.description}</p>
                  </div>
                  <p className="text-sm font-semibold">
                    From ${item.startPrice} or ${item.monthlyPrice}/mo. for 12 mo.**
                  </p>
                </div>

                {/* Button */}
                <div className="h-fit space-x-5">
                  <Link href={""} className="inline-block px-4 py-2 rounded-full text-white bg-[#0071e3]">
                    <span className="text-sm">Learn more</span>
                  </Link>
                  <Link href={""} className="group">
                    <span className="group-hover:underline text-sm text-[#0071e3]">Buy </span>
                    <span className="text-sm text-[#0071e3]">&gt;</span>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <SliderButton classname="bottom-0 -translate-y-full" />
    </section>
  );
}
