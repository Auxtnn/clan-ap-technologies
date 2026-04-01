import PricingCTA from "../../components/Pricing/PricingCTA";
import HeroPricing from "../../components/Pricing/HeroPricing";
import PricingService from "../../components/Pricing/PricingService";

export default function PricingPage() {
  return (
    <div className=" bg-white">
      <HeroPricing />

      <PricingService />

      <PricingCTA />
    </div>
  );
}
