import { BeyondPremium, Destinations, Hero } from "features/home";

export function HomeWrapper() {
  return (
    <>
      <div className="bg-white-smoke">
        <Hero />
        <BeyondPremium />
        <Destinations />
      </div>
    </>
  );
}
