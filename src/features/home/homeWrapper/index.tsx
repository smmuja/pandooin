import { Hero } from "features/home";
import { BeyondPremium } from "../beyondPremium";

export function HomeWrapper() {
  return (
    <>
      <div className="bg-white-smoke">
        <Hero />
        <BeyondPremium />
      </div>
    </>
  );
}
