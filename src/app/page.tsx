import {
  AccordionItemData,
  Cities,
  FAQ,
  HeroSection,
  KeyDifferentiators,
  LatestNews,
  ProblemSolving,
  Talk,
  TechnicalUniversity,
  TrafficSolutions,
  WorldsBest,
} from "@/components/home/Home";

export default function Page() {
  const accordionData: AccordionItemData[] = [
    {
      id: "traffic-gridlock",
      title: "Traffic Gridlock",
      content:
        "Indian cities like Delhi, Mumbai, Bengaluru, and Kolkata collectively lose up to $22 billion annually (as of 2024-2025 estimates from TomTom/INRIX reports) due to traffic congestion—factoring in time delays, fuel waste, productivity loss, and emissions (₹1.83 lakh crore at ~₹83/$1). With an AI-based congestion pricing model (like Stockholm/Singapore, reducing jams 20-30%), they could save ₹36,600-54,900 crore/year through better flow, incentives, and revenue reinvestment.",
    },
    {
      id: "public-resistance",
      title: "Public Resistance to Tolls",
      content: "Content for public resistance to tolls section.",
    },
    {
      id: "one-person-car",
      title: "One Person, One Car",
      content: "Content for one person, one car section.",
    },
    {
      id: "technology-gaps",
      title: "Technology Gaps",
      content: "Content for technology gaps section.",
    },
  ];

  const faq: AccordionItemData[] = [
    {
      id: "1",
      title:
        "How can MT.AI ensure a positive voter acceptance for your city in light of the June 2024 decision by the Governor of New York State to cancel congestion pricing in New York City?",
      content:
        "By targeted, ongoing marketing and PR strategies, MT.AI  builds public trust and engagement with specific groups of road users like taxi drivers, commuters, public transit users, unions, politicians and civil servants and other special interest groups. Benefits from congestion pricing will become obvious to voters within 6 to 12 months after implementation., Initial voter resistance is turned into long term voter support as all citizens experience the multi-faceted health and monetary benefits of reduced congestion. MT AI’s dynamic tolling system adjusts in real-time to traffic conditions allowing voters to minimize their cost of using public roads while creating a multi million revenue source for your city.",
    },
    {
      id: "2",
      title:
        "How does MT AI ensure the privacy and security of citizens’ data, given the sensitivity of tracking vehicle and personal information?",
      content:
        "It is your city not MT.AI who controls the data.   MT.AI delivers to you a system that  prioritizes data privacy and security by employing robust encryption and anonymization techniques to protect user information. Our system complies with global data protection regulations, such as GDPR and CCPA, ensuring that data is handled responsibly. We provide secure data storage and access controls to prevent unauthorized access and continuously monitor for potential threats. Additionally, we work closely with you and your team to help you to set clear data governance policies that protect your citizens’ privacy while allowing your city to benefit from valuable traffic insights",
    },
    {
      id: "3",
      title:
        "How do you get public trust and acceptance of your traffic management systems?",
      content:
        "By targeted, ongoing marketing and PR strategies, we build public trust and participation with specific groups of road users like taxi drivers, commuters, public transit users, unions, politicians and civil servants. We focus on honesty and  transparency, clearly communicating the benefits every person and every family receives from reduced congestion, improved air quality, and financial savings. Our gamification features, such as rewards, public recognition and personal incentives for eco-friendly behavior, encourage voter participation and support. MT AI psychologists and political analysts are constantly developing clinically proven methods to not only gain voter acceptance but build  long term support, transforming initial skepticism into positive engagement within 6 to 12 months. By involving all key local stakeholders in the planning process and addressing their concerns, we ensure a collaborative approach that fosters acceptance and buy-in from all stakeholders.",
    },
    {
      id: "4",
      title: "Can MT AI be tailored to our city's unique traffic challenges?",
      content:
        "MT AI’s system architecture is modular therefore it is readily customizable to each city’s unique traffic patterns and infrastructure. We conduct thorough assessments and simulations to tailor our solutions to your local conditions.  We draw on the many lessons learned from the successful implementation of congestion pricing in Stockholm, Singapore and London.   We provide ongoing support and maintenance as well as ongoing marketing and public relations support to ensure that citizens continue to appreciate the multi faceted benefits they are receiving.",
    },
    {
      id: "5",
      title:
        "How does MT AI address political hurdles and stakeholder resistance?",
      content:
        "MT AI addresses political and social challenges by forming study groups to analyze and tackle potential issues. We apply lessons learned from the successful implementation in Stockholm, Singapore, London and the politically aborted implementation in New York  to develop custom strategies that soften resistance. By targeted, ongoing marketing and PR strategies, we build public trust and engagement with specific influence groups including taxi drivers, commuters, public transit users, unions, politicians and civil servants.Our comprehensive marketing and PR programs engage each group specifically, ensuring they understand how the system directly  benefits them. By fostering honest, open communication and collaboration with local politicians and interest groups, we build strong partnerships that help overcome opposition and ensure successful implementation and ongoing support. Additionally, MT AI has developed methods to assist local politicians in resisting special interest groups and to continually publicize the widespread public benefit being gained.",
    },
    {
      id: "6",
      title: "What environmental benefits does MT AI provide?",
      content:
        "Environmental benefits are evidenced by significant reductions in CO2 emissions and improved air quality and quality of life for residents of Stockholm, Singapore and London.  So far these three are the only cities in the world where congestion pricing has been implemented. MT.AI’s advanced AI algorithms optimize traffic flow, reduce idling times and carbon emissions. MT.AI’s system includes tools to measure and report emissions data, providing cities with clear proof of environmental improvements. By incentivizing rideshare, taxi services and public transit  MT AI contributes to cleaner, healthier urban environments.",
    },
    {
      id: "7",
      title:
        "How does MT AI ensure the long-term effectiveness of its systems?",
      content:
        "MT AI provides significant revenues to finance public transit upgrades and maintenance.  Increasing cashflow to cities while keeping traffic moving is made possible by MT.AI’s  scalable and modular system architecture that allows for easy updates and expansions. We monitor traffic flow with a view of maximizing cash flow to your city.  We provide regular software updates and maintenance services to keep the system running smoothly. Lessons learned are shared with all our clients.  We have webinars and other training programs for city staff.",
    },
    {
      id: "8",
      title:
        "How does MT AI integrate with our current transportation systems and what is the timeline for full implementation?",
      content:
        "We can also provide a complete integrated system of all hardware and software or MT AI can seamlessly integrate with transportation infrastructure from  Kapsch TrafficCom AG, Conduent Inc., Efkon GmbH, Magnetic Autocontrol GmbH, Trmi System Integration, Thales Group, Siemens, Q-Free ASA, Mitsubishi Heavy Industries, Perceptics, LLC, TransCore, Cubic Corp, RTX Corp, Toshiba Corporation, and many others.   The timeline for full implementation varies based on your city’s specific needs and infrastructure but typically ranges from six to eighteen months.",
    },
    {
      id: "9",
      title:
        "What happens if something occurs during a shared ride? How is your city protected from liability and how does MT AI ensure passenger safety and security?",
      content:
        "MT AI provides comprehensive insurance coverage for passengers, similar and in addition to the policies offered by Uber and other taxi services.  Each passenger is able to review the rating of the driver and to review their profiles.",
    },
    {
      id: "10",
      title: "How does my city finance the implementation of MT.AI?",
      content:
        "Payback of the full cost of a MT.AI system, including all hardware and software is between one and two years.  We can arrange the financing where 50% of the revenues from toll collections will pay off the system.  All preliminary feasibility costs will be credit to the purchase price of the system.",
    },
    {
      id: "11",
      title:
        "What are the approximate parameters of the operating cost of a full fledged MT.AI Congestion Pricing System?",
      content:
        "Operating costs depend upon policies set by your city.  It depends upon the amount of the tolls set, and the size of the exempt groups.  Assuming that a full roll out and limited concession 10%.",
    },
    {
      id: "12",
      title:
        "What are the key policies for a successful MT.AI Congestion Pricing System implementation?",
      content:
        "A significant amount (like $1 Billion dollars per year) of the toll revenue dedicated to improving public transit infrastructure. Actually eliminating congestion.  Constant public relations program directed towards specific groups of road users like taxi drivers, commuters, public transit users, unions, politicians and civil servants.  Resisting political pressures to divert funds",
    },
  ];

  return (
    <>
      <HeroSection />
      <Cities
        data={[
          {
            icon: (
              <svg
                width="49"
                height="65"
                viewBox="0 0 49 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3134 25.845C23.6054 25.845 26.585 24.5615 28.7431 22.488C30.9012 20.4125 32.2337 17.5469 32.2337 14.3809C32.2337 11.2149 30.9012 8.34933 28.7431 6.2738C26.585 4.20027 23.6054 2.91674 20.3134 2.91674C17.0214 2.91674 14.0418 4.20027 11.8858 6.2738C9.72974 8.34933 8.39514 11.2149 8.39514 14.3809C8.39514 17.5469 9.72974 20.4125 11.8858 22.488C14.0439 24.5615 17.0235 25.845 20.3134 25.845ZM39.1219 43.4721L40.1565 46.5545C40.2124 46.7197 40.3138 46.855 40.4462 46.9486C40.5827 47.0421 40.7503 47.0958 40.9345 47.0958L44.3031 47.0898C45.1762 47.0898 45.9853 47.3485 46.6453 47.8082C47.3075 48.2699 47.8185 48.9306 48.0875 49.7285C48.3565 50.5245 48.3482 51.3464 48.0937 52.0946C47.8392 52.8448 47.3426 53.5154 46.6391 54.0049L43.9099 55.9034C43.7589 56.0088 43.6554 56.1441 43.6058 56.2914C43.5561 56.4387 43.5561 56.6078 43.614 56.7789L44.661 59.8594C44.93 60.6514 44.9217 61.4713 44.6714 62.2195C44.4169 62.9737 43.9223 63.6463 43.2188 64.1378C42.5195 64.6273 41.7042 64.8721 40.8807 64.8701C40.0634 64.8701 39.2481 64.6214 38.5446 64.1299L35.8237 62.2215C35.6789 62.12 35.5113 62.0702 35.3416 62.0702C35.1719 62.0702 35.0043 62.122 34.8595 62.2215L32.1386 64.1299C31.4351 64.6234 30.6219 64.8701 29.8025 64.8701C28.9831 64.8701 28.1658 64.6273 27.4664 64.1378C26.7629 63.6463 26.2684 62.9737 26.0139 62.2195C25.7615 61.4713 25.7532 60.6514 26.0222 59.8594L27.0692 56.7789C27.1271 56.6098 27.1271 56.4387 27.0774 56.2914C27.0278 56.1441 26.9243 56.0068 26.7733 55.9034L24.0441 54.0049C23.3385 53.5154 22.844 52.8448 22.5874 52.0946C22.335 51.3464 22.3267 50.5245 22.5957 49.7285C22.8647 48.9306 23.3737 48.2699 24.0379 47.8082C24.6979 47.3485 25.507 47.0898 26.3781 47.0898L29.7466 47.0958C29.9308 47.0958 30.0984 47.0421 30.2329 46.9486C30.3653 46.857 30.4688 46.7197 30.5246 46.5545L31.5592 43.4721C31.8261 42.6761 32.3351 42.0154 32.9993 41.5518C33.6677 41.0841 34.4767 40.8195 35.3395 40.8195C36.2024 40.8195 37.0114 41.0841 37.6797 41.5518C38.3439 42.0154 38.8529 42.6761 39.1199 43.4721H39.1219ZM37.148 47.4839L36.1134 44.4014C36.0555 44.2323 35.9541 44.095 35.8237 44.0034C35.6996 43.9159 35.532 43.8661 35.3395 43.8661C35.1471 43.8661 34.9795 43.9159 34.8554 44.0034C34.725 44.095 34.6236 44.2303 34.5677 44.4014L33.5332 47.4839C33.2642 48.2858 32.7552 48.9485 32.091 49.4121C31.4309 49.8718 30.6219 50.1325 29.7466 50.1305L26.3781 50.1245C26.196 50.1245 26.0284 50.1763 25.8939 50.2718C25.7635 50.3633 25.6601 50.5006 25.6021 50.6678C25.5442 50.8369 25.5442 51.0041 25.5939 51.1533C25.6435 51.3006 25.747 51.4359 25.898 51.5394L28.6272 53.4378C29.3328 53.9273 29.8294 54.5979 30.0839 55.3502C30.3384 56.1004 30.3467 56.9242 30.0756 57.7182L29.0286 60.7987C28.9707 60.9718 28.9686 61.1409 29.0204 61.2902C29.068 61.4335 29.1714 61.5668 29.3225 61.6723C29.4756 61.7797 29.6432 61.8334 29.8025 61.8334C29.9618 61.8334 30.1315 61.7817 30.2825 61.6762L33.0035 59.7679C33.7132 59.2704 34.5284 59.0196 35.3416 59.0196C36.1548 59.0196 36.97 59.2684 37.6797 59.7679L40.4007 61.6762C40.5496 61.7817 40.7172 61.8334 40.8786 61.8334C41.04 61.8334 41.2056 61.7797 41.3587 61.6723C41.5097 61.5668 41.6111 61.4335 41.6608 61.2902C41.7104 61.1409 41.7104 60.9698 41.6525 60.7987L40.6055 57.7182C40.3344 56.9222 40.3427 56.1004 40.5972 55.3502C40.8517 54.5979 41.3483 53.9273 42.0539 53.4378L44.7831 51.5394C44.9342 51.4339 45.0376 51.2986 45.0873 51.1533C45.1369 51.0061 45.1369 50.8369 45.079 50.6678C45.0231 50.4986 44.9197 50.3633 44.7872 50.2718C44.6527 50.1783 44.4851 50.1245 44.301 50.1245L40.9324 50.1305C40.0592 50.1305 39.2481 49.8718 38.5881 49.4121C37.926 48.9485 37.4149 48.2858 37.1459 47.4839H37.148ZM29.7694 25.6898C31.164 26.4142 32.4613 27.2957 33.6387 28.3086C35.5651 29.9662 37.1604 31.9781 38.3088 34.2327C38.6915 34.9849 38.3667 35.8943 37.5845 36.2625C36.8024 36.6306 35.8568 36.3182 35.474 35.566C34.5057 33.6656 33.1607 31.9701 31.5344 30.5692C30.0839 29.3215 28.4017 28.3086 26.556 27.5962C24.6545 28.43 22.5398 28.8937 20.3134 28.8937C18.087 28.8937 15.9744 28.43 14.0708 27.5962C11.0209 28.7763 8.40548 30.7881 6.53498 33.3333C4.59619 35.9719 3.45402 39.1897 3.45402 42.6522V52.1782C3.45402 53.6706 4.08718 55.0238 5.10934 56.0068C6.13149 56.9879 7.53851 57.5988 9.09037 57.5988H17.0069C17.8822 57.5988 18.5898 58.2814 18.5898 59.1231C18.5898 59.9649 17.8801 60.6454 17.0069 60.6454H9.09037C6.66533 60.6454 4.46376 59.6942 2.86845 58.162C1.27314 56.6297 0.286163 54.5104 0.286163 52.1782V42.6522C0.286163 38.543 1.64352 34.7222 3.94855 31.5841C5.7425 29.1424 8.1096 27.1146 10.8574 25.6878C10.4353 25.3595 10.0298 25.0093 9.64697 24.6411C6.91777 22.0164 5.22728 18.3867 5.22728 14.3809C5.22728 10.3751 6.91777 6.74542 9.64697 4.12067C12.3782 1.49392 16.1503 -0.129883 20.3155 -0.129883C24.4807 -0.129883 28.2548 1.49392 30.984 4.12067C33.7132 6.74542 35.4037 10.3751 35.4037 14.3809C35.4037 18.3867 33.7132 22.0164 30.984 24.6411C30.5991 25.0113 30.1956 25.3595 29.7715 25.6878H29.7694V25.6898Z"
                  fill="white"
                />
              </svg>
            ),
            title: "City Leaders",
            desc: "Our system reduces peak-hour congestion by up to 25%, generates over $100 million annually in toll revenues, and maintains public support through continuous voter engagement.",
          },
          {
            icon: (
              <svg
                width="43"
                height="68"
                viewBox="0 0 43 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.62071 47.5041H18.6201C19.3956 47.5041 20.0251 46.8655 20.0251 46.0788V36.949C20.0251 36.1623 19.3956 35.5237 18.6201 35.5237H9.62071C8.84525 35.5237 8.21576 36.1623 8.21576 36.949V46.0788C8.21576 46.8655 8.84525 47.5041 9.62071 47.5041ZM31.9314 65.1494V64.0279C31.9314 62.6404 31.3708 61.3775 30.4692 60.4621C29.5619 59.5425 28.317 58.9737 26.9503 58.9737H16.0333C14.6657 58.9737 13.4208 59.5425 12.5185 60.4571C11.612 61.3775 11.0514 62.6404 11.0514 64.0279V65.1494H8.55C6.96591 65.1494 5.52863 64.4948 4.49026 63.4406C3.44609 62.3821 2.80085 60.9232 2.80085 59.3162V8.683C2.80085 7.07766 3.44692 5.61787 4.48695 4.5611C5.52863 3.50601 6.96757 2.85058 8.55 2.85058H34.4311C36.0119 2.85058 37.4492 3.50685 38.4942 4.56446C39.5358 5.61787 40.1811 7.07681 40.1811 8.683V59.3162C40.1811 60.9198 39.5342 62.3779 38.4917 63.4355C37.4533 64.4948 36.0152 65.1494 34.4311 65.1494H31.9314ZM13.8612 65.1494V64.0279C13.8612 63.4204 14.1051 62.8676 14.4965 62.4688C14.8897 62.0717 15.4345 61.8243 16.0333 61.8243H26.9503C27.5482 61.8243 28.0931 62.0717 28.4862 62.4688C28.8777 62.8676 29.1215 63.4204 29.1215 64.0279V65.1494H13.8612ZM13.9168 5.09453C13.1414 5.09453 12.5119 5.73314 12.5119 6.51982C12.5119 7.30651 13.1414 7.94511 13.9168 7.94511H29.0643C29.8398 7.94511 30.4692 7.30651 30.4692 6.51982C30.4692 5.73314 29.8398 5.09453 29.0643 5.09453H13.9168ZM42.991 8.683C42.991 6.30022 42.0273 4.12863 40.4747 2.55273C38.9263 0.976837 36.7857 0 34.4311 0H8.55C6.19875 0 4.05982 0.977676 2.50891 2.54937C0.954687 4.12779 -0.0090332 6.2977 -0.0090332 8.683V59.3162C-0.0090332 61.6989 0.953858 63.8688 2.50477 65.4447L2.51223 65.4523C4.0648 67.0248 6.2029 68 8.55 68H34.4311C36.7807 68 38.9213 67.0223 40.4747 65.4473C42.0281 63.8764 42.991 61.7048 42.991 59.3162V8.683ZM33.4342 27.9118C34.2097 27.9118 34.8392 27.2732 34.8392 26.4865C34.8392 25.6998 34.2097 25.0612 33.4342 25.0612H30.3399V21.9212C30.3399 21.1345 29.7104 20.4959 28.9349 20.4959C28.1595 20.4959 27.53 21.1345 27.53 21.9212V25.0612H24.4348C23.6593 25.0612 23.0299 25.6998 23.0299 26.4865C23.0299 27.2732 23.6593 27.9118 24.4348 27.9118H27.53V31.051C27.53 31.8377 28.1595 32.4763 28.9349 32.4763C29.7104 32.4763 30.3399 31.8377 30.3399 31.051V27.9118H33.4342ZM23.0299 36.8741V46.0039C23.0299 46.7906 23.6593 47.4292 24.4348 47.4292H33.4342C34.2097 47.4292 34.8392 46.7906 34.8392 46.0039V36.8741C34.8392 36.0875 34.2097 35.4488 33.4342 35.4488H24.4348C23.6593 35.4488 23.0299 36.0875 23.0299 36.8741ZM25.8397 44.5786V38.2994H32.0293V44.5786H25.8397ZM8.14278 21.9212V31.051C8.14278 31.8377 8.77227 32.4763 9.54772 32.4763H18.5471C19.3226 32.4763 19.9521 31.8377 19.9521 31.051V21.9212C19.9521 21.1345 19.3226 20.4959 18.5471 20.4959H9.54772C8.77227 20.4959 8.14278 21.1345 8.14278 21.9212ZM10.9527 29.6257V23.3465H17.1422V29.6257H10.9527ZM17.2152 44.6535H11.0256V38.3743H17.2152V44.6535Z"
                  fill="white"
                />
              </svg>
            ),
            title: "Super Apps",
            desc: "Partner platforms see a 12–18% increase in daily active users, higher average earnings per trip, and improved user retention driven by purpose-based engagement.",
          },
          {
            icon: (
              <svg
                width="70"
                height="64"
                viewBox="0 0 70 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5512 41.8654C11.9845 41.8654 9.90749 43.9167 9.91539 46.4342C9.91539 48.9595 12.0003 51.003 14.5591 50.9952C17.1179 50.9952 19.1949 48.9517 19.1949 46.4264C19.1949 43.9011 17.11 41.8576 14.5512 41.8576V41.8654ZM14.5512 48.5399C13.3666 48.5399 12.4031 47.5919 12.4031 46.4264C12.4031 45.2609 13.3666 44.3129 14.5512 44.3129C15.7358 44.3129 16.6993 45.2609 16.6993 46.4264C16.6993 47.5919 15.7358 48.5321 14.5512 48.5399ZM55.4284 36.1232C51.1164 36.1232 47.0413 38.0658 44.372 41.3914L36.7193 37.0401V28.5629C44.4746 27.8869 50.2082 21.1503 49.5132 13.52C48.8182 5.88977 41.9711 0.256446 34.2158 0.932445C26.4605 1.60844 20.727 8.34512 21.422 15.9754C22.0301 22.6654 27.4161 27.9724 34.2158 28.5629V37.0401L25.8998 41.7721C21.2877 35.626 12.4821 34.3284 6.24308 38.8661C-0.00380528 43.4038 -1.32268 52.0675 3.28943 58.2059C7.90154 64.352 16.7072 65.6496 22.9462 61.1119C28.4191 57.1336 30.2118 49.8686 27.195 43.87L35.4636 39.1691L42.9978 43.4505C39.3255 50.2027 41.9158 58.6099 48.7787 62.223C55.6416 65.8361 64.1866 63.2875 67.859 56.5353C71.5313 49.7831 68.9409 41.3758 62.078 37.7627C60.0326 36.6827 57.7502 36.1232 55.4284 36.1232ZM6.36154 58.0816C8.54123 55.9603 11.487 54.7715 14.5512 54.7793H14.5749C17.6312 54.7793 20.569 55.9681 22.7408 58.0816C18.2156 62.5261 10.8868 62.5261 6.36154 58.0816ZM24.3124 56.1546C21.6905 53.6914 18.2077 52.3161 14.5828 52.3161H14.5512C10.9184 52.3161 7.4198 53.6837 4.78995 56.1546C1.32297 50.8476 2.88666 43.7846 8.28062 40.3813C13.6746 36.9702 20.8534 38.5087 24.3124 43.8156C26.7685 47.5764 26.7685 52.4016 24.3124 56.1546ZM35.4636 26.1697C32.3915 26.1697 29.4458 24.9731 27.274 22.8364C29.4537 20.7151 32.3994 19.5263 35.4636 19.5341H35.4873C38.5436 19.5341 41.4815 20.7229 43.6533 22.8364C41.4815 24.9731 38.5357 26.1775 35.4636 26.1697ZM35.4636 3.34118C41.8685 3.34118 47.065 8.43836 47.065 14.7399C47.065 16.9311 46.4253 19.0756 45.2249 20.9172C42.6029 18.454 39.1202 17.0787 35.4952 17.0787H35.4636C31.8308 17.0787 28.3322 18.4463 25.7024 20.9172C22.2433 15.6179 23.7991 8.56269 29.1852 5.15161C31.0569 3.97056 33.2365 3.34118 35.4636 3.34118ZM55.4284 38.5786C61.8332 38.5786 67.0297 43.6758 67.0297 49.9773C67.0297 52.1685 66.39 54.3131 65.1896 56.1546C62.5677 53.6914 59.0849 52.3161 55.46 52.3161H55.4284C51.7956 52.3161 48.297 53.6837 45.6671 56.1546C42.2081 50.8554 43.7639 43.8001 49.1499 40.389C51.0216 39.208 53.2013 38.5786 55.4284 38.5786ZM47.2387 58.0816C49.4184 55.9603 52.3642 54.7715 55.4284 54.7793H55.4521C58.5084 54.7793 61.4462 55.9681 63.618 58.0816C59.0928 62.5261 51.764 62.5261 47.2387 58.0816ZM55.4284 51.003C57.995 51.003 60.0721 48.9517 60.0642 46.4342C60.0642 43.9089 57.9793 41.8654 55.4205 41.8731C52.8617 41.8731 50.7847 43.9167 50.7847 46.4419C50.7847 48.9672 52.8696 51.0108 55.4284 51.0108V51.003ZM55.4284 44.3207C56.613 44.3207 57.5765 45.2687 57.5765 46.4264C57.5765 47.5841 56.613 48.5399 55.4363 48.5399C54.2517 48.5399 53.2882 47.5919 53.2882 46.4342C53.2882 45.2687 54.2517 44.3285 55.4284 44.3207ZM35.4636 15.7578C38.0303 15.7578 40.1073 13.7143 40.1073 11.189C40.1073 8.6637 38.0303 6.62016 35.4636 6.62016C32.897 6.62016 30.8199 8.6637 30.8199 11.189C30.8199 13.7065 32.897 15.75 35.4636 15.7578ZM35.4636 9.08328C36.6482 9.08328 37.6117 10.0235 37.6117 11.1968C37.6117 12.3623 36.6561 13.3102 35.4636 13.3102C34.279 13.3102 33.3155 12.37 33.3155 11.1968C33.3155 10.0312 34.279 9.08328 35.4636 9.08328Z"
                  fill="white"
                />
              </svg>
            ),
            title: "Investors & Partners",
            desc: "MTSAI offers long-term infrastructure contracts with cities, recurring revenue streams, and strong adoption metrics making it a scalable, de-risked investment in global urban mobility.",
          },
        ]}
      />
      <ProblemSolving
        mainTitle="The Problem"
        subtitle="We're Solving"
        description="Traditional tolling systems generate backlash, technical headaches, and limited revenue. Miracle Traffic Solutions AI solves all three problems with a voter-friendly, plug-and-play congestion pricing platform."
        accordionItems={accordionData}
        defaultOpenItem="traffic-gridlock"
        buttonText="Book a Demo"
      />
      <TrafficSolutions />
      <KeyDifferentiators />
      <Talk />
      <TechnicalUniversity />
      <WorldsBest />
      <LatestNews />
      <FAQ accordionItems={faq} defaultOpenItem="1" />
    </>
  );
}
