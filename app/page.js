import LandHead from "./(components)/LandHead";
import TBoxes from "./(components)/TBoxes";
import InvestPanel from "./(components)/InvestPanel";
import LearnMorePanel from "./(components)/LearnMorePanel";
import StatsPanel from "./(components)/StatsPanel";
import NewsPanel from "./(components)/NewsPanel";
import EmailCard from "./(components)/EmailCard";
import Foot from "./(components)/Foot";

export default function Home() {
  return (
    <div className="h-screen bg-custom-background bg-cover bg-center">
      <LandHead />
      <div className="pt-70">
        <TBoxes />
        <InvestPanel />
        <LearnMorePanel />
        <StatsPanel />
        <NewsPanel />
        <div className="mt-20">
          <div className="flex justify-center items-center relative top-14">
            <EmailCard></EmailCard>
          </div>

          <Foot />
        </div>
      </div>
    </div>
  );
}
