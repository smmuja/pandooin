import {
  Articles,
  BeyondPremium,
  Destinations,
  Hero,
  LuxuryFootages,
  VisitOurWebsite,
} from "features/home";

export function HomeWrapper() {
  return (
    <>
      <div className="bg-white-smoke">
        <Hero />
        <BeyondPremium />
        <Destinations />
        <LuxuryFootages />
        <VisitOurWebsite />
        <Articles />
      </div>
    </>
  );
}
