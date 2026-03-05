import { getProductById } from "@/lib/fakestoreApi";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default async function Product(props: PageProps<"/store/[id]">) {
  const { id } = await props.params;

  const product: Product = await getProductById(id);

  return (
    <main className="">
      <div className="py-16 flex flex-col lg:flex-row mx-[6.25dvw] gap-y-5 gap-x-5">
        <figure className="relative aspect-square w-full lg:flex-1 lg:w-auto">
          <Image src={product.image} alt="image" fill sizes="400px" className="object-contain p-5" loading="eager" />
        </figure>

        <div className="lg:mx-5 lg:flex-1">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="">{product.category}</p>
          <p className="mt-2.5 text-xl font-medium">${product.price}</p>
          <p className="mt-5">{product.description}</p>
        </div>
      </div>
    </main>
  );
}
