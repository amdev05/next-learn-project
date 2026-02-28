import { NAVPRODUCTDATA, PRODUCTSDATA, WHYAPPLEDATA, GTKDATA, HMCDATA, STMDATA, MEDATA, UTWDATA } from "@/contents/apple/index";

import ProductNav from "./_sections/ProductNav";
import Promote from "./_sections/Promote";
import Compare from "./_sections/Compare";
import WhyApple from "./_sections/WhyApple";
import GoodToKnow from "./_sections/GoodToKnow";
import HelpMeChoose from "./_sections/HelpMeChoose";
import SwitchToMac from "./_sections/SwitchToMac";
import MacEssentials from "./_sections/MacEssentials";
import UnlockTheWorld from "./_sections/UnlockTheWorld";

export default function Page() {
  return (
    <main className="">
      <ProductNav data={NAVPRODUCTDATA} />

      <Promote />

      <Compare data={PRODUCTSDATA} />

      <WhyApple data={WHYAPPLEDATA} />

      <GoodToKnow data={GTKDATA} />

      <HelpMeChoose data={HMCDATA[0]} />

      <SwitchToMac data={STMDATA} />

      <MacEssentials data={MEDATA} />

      <UnlockTheWorld data={UTWDATA} />
    </main>
  );
}
