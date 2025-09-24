import React from 'react'
import { ImpactSection, IndiaStory, ProblemSolvingSec, TrafficComparisonSection, WhoWeAre } from '../../components/about/About'
import BackgroundImage from "../../assets/about/AboutBackgroundImage.png"
import BottomImage from "../../assets/about/aboutUsHero.webp"
import ProblemSolvingImage from "../../assets/about/problemSolvingImage.png"
const Page = () => {
   const indiaStory = [
    {
      title: "Why India First",
      description:
        "India’s unbeatable digital infrastructure—FASTag tolls and seamless UPI payments—paves the way for instant nationwide rollout.",
    },
    {
      title: "Global Roots, Local Edge",
      description:
        "Inspired by successes in cities like London and Stockholm, we’ve customized our solution for India’s unique traffic challenges.",
    },
    {
      title: "Exclusive Access",
      description:
        "As Miracle Traffic AI India Pvt. Ltd., we hold India’s sole license, positioning us to deploy the next-gen network first.",
    },
    {
      title: "Smart Cities Synergy",
      description:
        "Aligns with India’s Smart Cities Mission for policy adoption and collaborative rollout.",
    },
  ];
const impact = [
  {
    title: "Traffic Wins",
    description: `
      Up to <span class="text-[#53AA00] text-2xl font-bold">22%</span> reduction in pilot zones via dynamic tolls and predictive AI for traffic lights.
    `,
  },
  {
    title: "Economic Boost",
    description: `
      Unlocks <span class="text-[#53AA00] text-2xl font-bold">₹1.8 </span> lakh crore in annual productivity across cities.
    `,
  },
  {
    title: "Commuter Savings",
    description: `
      Unlocks <span class="text-[#53AA00] text-2xl font-bold">60–90 </span> minutes weekly, 
      <span class="text-[#53AA00] text-2xl font-bold">15–20%</span> lower fuel costs through rewards and efficiencies.
    `,
  },
  {
    title: "Green Gains",
    description: `
      Supports <span class="text-[#53AA00] text-2xl font-bold">Net Zero 2070</span> with lower emissions and ESG-aligned tech.
    `,
  },
  {
    title: "Future-Proof",
    description: `
      Committed to majority <span class="text-[#53AA00] text-2xl font-bold">Indian ownership</span> for national alignment, enabling a public listing.
    `,
  },
];

  return (
   <>
    <WhoWeAre title="Who We Are" 
   description="Headquartered in Gurugram, Miracle Traffic Solutions AI (MTSAI), we are rethinking urban mobility from the ground up. Traffic congestion drains billions from Indian cities annually in lost time, wasted fuel, and soaring emissions. With AI-powered, citizen-friendly solutions, we’re transforming congestion into opportunity: smarter journeys for commuters, new revenue streams for cities, and cleaner air for future generations. We believe this isn't inevitable—it's solvable."
   stats={[
    {
      value:"2024",
      label:"Year founded"

    },
    {
      value:"50+",
      label:"Team members"

    }
   ]} 
  backgroundImage={BackgroundImage}
    bottomImage={BottomImage}
    />
    <ProblemSolvingSec title="The Problem We Solved"
    description="Our AI-powered platform merges predictive traffic tech, dynamic tolling, and secure ridesharing incentives to slash jams and boost city revenues. Unlike punitive congestion pricing that sparks resistance, MTSAI rewards gridlock-busting behaviours—like carpooling, off-peak travel, and eco-choices—with instant toll discounts, earnable points for perks, and enhanced security. Once implemented, our app alerts users to congestion pricing zones, enables seamless payments, and integrates with tolls (more riders = lower fees) and traffic lights for smoother flows. The result? Faster, greener commutes that save time and money"
    description2="We're not just coding solutions; we're forging trust. Drawing from global case studies (proven in cities like London and Stockholm) and a Budapest University pilot tested in one European city, we've tailored our system for India's realities. "
    imageSrc={ProblemSolvingImage}
    description3={"Success demands partnership: buy-in from citizens and government authorities to turn pilots into nationwide wins. MTSAI collaborates with authorities for congestion cuts and revenue gains, while empowering commuters with safer, affordable shared rides via our app."}
/>
    <TrafficComparisonSection/>
    <IndiaStory title="Our India Story" items={indiaStory} />
    <ImpactSection impact={impact}/>
   </>
  )
}

export default Page
