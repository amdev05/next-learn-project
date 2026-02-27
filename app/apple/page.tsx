import { NAVPRODUCTDATA, PRODUCTSDATA, WHYAPPLEDATA } from "@/contents/apple/index";

import ProductNav from "./_sections/ProductNav";
import Promote from "./_sections/Promote";
import Compare from "./_sections/Compare";
import WhyApple from "./_sections/WhyApple";

export default function Page() {
  return (
    <main className="">
      <ProductNav data={NAVPRODUCTDATA} />

      <Promote />

      <Compare data={PRODUCTSDATA} />

      <WhyApple data={WHYAPPLEDATA} />
    </main>
  );
}
