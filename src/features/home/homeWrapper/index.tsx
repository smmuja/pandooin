import {
  BeyondPremium,
  Destinations,
  Hero,
  LuxuryFootages,
} from "features/home";
import { Luxurious_Script } from "next/font/google";

export function HomeWrapper() {
  return (
    <>
      <div className="bg-white-smoke">
        <Hero />
        <BeyondPremium />
        <Destinations />
        <LuxuryFootages />
      </div>
    </>
  );
}
