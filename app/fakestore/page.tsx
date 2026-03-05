import { getAllProducts } from "@/lib/fakestoreApi";
import Image from "next/image";
import Link from "next/link";

interface AllProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default async function Store() {
  const allProducts: AllProducts[] = await getAllProducts();
  // console.log(allProducts);

  return (
    <main className="">
      <section className="bg-[#f5f5f7] py-28">
        <div className="mx-[6.25dvw] mb-7">
          <h1 className="text-2xl font-semibold">Fake Store</h1>
        </div>

        <div className="mx-[6.25dvw]">
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
            {allProducts.map((data, index) => (
              <li className="rounded-3xl overflow-hidden bg-white hover:scale-101 transition duration-400 shadow-md hover:shadow-lg" key={index}>
                <Link href={`/fakestore/${data.id}`} prefetch={false} className="flex flex-col h-full p-5">
                  <figure className="w-full aspect-square relative">
                    <Image src={data.image} alt="image" fill sizes="200px" className="p-5 object-contain" />
                  </figure>
                  <div className="h-full flex flex-col">
                    <h3 className="font-semibold line-clamp-2 mt-2.5 leading-tight">{data.title}</h3>
                    <div className="mt-auto">
                      <span className="inline-block text-sm mt-5">${data.price}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
