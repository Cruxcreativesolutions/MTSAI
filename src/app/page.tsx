import {
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
import { AccordionItemData } from "@/types/Home";

export default function Page() {
  const accordionData: AccordionItemData[] = [
    {
      id: "traffic-gridlock",
      title: "Traffic Gridlock",
      content:
        "India’s traffic congestion crisis costs over ₹3 lakh crore yearly, with 95% of drivers losing 1.5 hours daily. Monsoons, festivals, and potholes worsen delays, adding 5,000 tons of CO₂ emissions daily and hitting economic productivity.",
    },
    {
      id: "public-resistance",
      title: "Public Resistance to Tolls",
      content:
        "A 70% compliance gap highlights widespread public resistance to tolling, driven by weak incentives and perceived unfairness. This lack of engagement costs cities valuable revenue and hinders effective traffic management efforts.",
    },
    {
      id: "one-person-car",
      title: "One Person, One Car",
      content:
        "Outdated tolling systems fail to address the dominance of single-occupant vehicles, contributing to congestion and revenue loss. This inefficient model limits the potential for sustainable urban mobility and environmental benefits.",
    },
    {
      id: "technology-gaps",
      title: "Technology Gaps",
      content:
        "Legacy toll infrastructure and the absence of advanced technology leave cities ill-equipped to adapt to dynamic traffic patterns, resulting in missed opportunities for revenue generation and smarter traffic solutions.",
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
      <TrafficSolutions
        features={[
          {
            icon: (
              <svg
                width="54"
                height="55"
                viewBox="0 0 54 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.80243 20.4211V13.6889C6.80243 9.97087 9.81651 6.95679 13.5346 6.95679H24.7548"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M47.1965 27.1528V40.6171C47.1965 44.3352 44.1824 47.3493 40.4643 47.3493H38.2203"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="40.4645"
                  cy="13.6886"
                  r="8.97619"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43.4551 12.1931L39.717 15.9331L37.471 13.6891"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.4884 37.9246V45.1056C31.4884 46.3449 30.4837 47.3496 29.2443 47.3496H27.0227C25.7834 47.3496 24.7787 46.3449 24.7787 45.1056V43.6223H11.2695V45.1056C11.2695 46.3449 10.2648 47.3496 9.02547 47.3496H6.80386C5.56451 47.3496 4.55981 46.3449 4.55981 45.1056V37.9246C4.55981 35.4459 6.5692 33.4365 9.04791 33.4365H27.0003C29.479 33.4365 31.4884 35.4459 31.4884 37.9246Z"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5357 38.3732H10.1696"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.8774 38.3732H22.5114"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.1335 33.2954L31.4884 31.6191"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.92589 33.2954L4.55981 31.6191"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5663 24.9092C11.0087 24.9131 9.65721 25.9852 9.29896 27.5011L7.87624 33.5824L9.29896 27.5011C9.65721 25.9852 11.0087 24.9131 12.5663 24.9092H23.4813C25.039 24.9131 26.3904 25.9852 26.7487 27.5011L28.1714 33.5824"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            title: "Smarter Tolls",
          },
          {
            icon: (
              <svg
                width="54"
                height="55"
                viewBox="0 0 54 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 24.9031H22.6372C24.3652 24.9031 26.0933 24.2439 27.4095 22.9254C30.0465 20.2884 30.0465 16.0156 27.4095 13.3786C24.7725 10.7416 20.4998 10.7416 17.8628 13.3786"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.75 33.9031H26.2462C27.6862 33.9031 29.1262 34.4521 30.2242 35.5501C32.4202 37.7461 32.4202 41.3078 30.2242 43.5061C28.0282 45.7043 24.4665 45.7021 22.2682 43.5061"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33.75 29.4034H41.9783C43.3283 29.4034 44.676 28.8882 45.7065 27.8599C47.7653 25.8012 47.7653 22.4622 45.7065 20.4034C43.6478 18.3447 40.3088 18.3447 38.25 20.4034"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42.75 45.1531V40.6531"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40.5 42.9031H45"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M36 11.4031V6.90308"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33.75 9.15308H38.25"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            title: "More Riders",
          },
          {
            icon: (
              <svg
                width="57"
                height="57"
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.174 21.157V16.4895H35.5065"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.8374 21.8245L26.8386 18.8233L33.1724 23.4908L40.1737 16.4895"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33.1726 31.6585L40.1739 31.6587"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33.1726 38.6602L40.1739 38.6604"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.50134 31.8921V47.7616C7.504 49.8233 11.6808 51.4956 16.8363 51.4956C21.9919 51.4956 26.1687 49.8233 26.1713 47.7616V31.8921"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.1687 31.8917C26.1687 33.9534 21.9893 35.6257 16.8337 35.6257C11.6781 35.6257 7.50134 33.9534 7.50134 31.8917C7.50134 29.8273 11.6834 28.1577 16.8363 28.1577C21.9893 28.1577 26.1687 29.83 26.1713 31.8917"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.50293 39.8267C7.50293 41.8884 11.6797 43.5607 16.8353 43.5607C21.9908 43.5607 26.1703 41.8884 26.1703 39.8267"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.1686 21.1568V11.8218C12.1686 9.24401 14.2583 7.1543 16.8361 7.1543H44.8411C47.4189 7.1543 49.5086 9.24401 49.5086 11.8218V42.1605C49.5086 44.7383 47.4189 46.828 44.8411 46.828H33.1723"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            title: "Less Traffic",
          },
          {
            icon: (
              <svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.625 21.0281H7.25"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.625 34.5281H7.25"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5 27.7781H5"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.4368 41.2778C18.0341 47.5358 26.9126 49.6906 34.7559 46.6947C42.5992 43.6988 47.7802 36.1736 47.7802 27.7776C47.7801 19.3816 42.599 11.8565 34.7557 8.86069C26.9124 5.86486 18.0339 8.01977 12.4366 14.2778"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.482 18.9707C25.861 18.2026 26.6432 17.7163 27.4998 17.7163C28.3563 17.7163 29.1385 18.2026 29.5175 18.9707L30.6623 21.2914C30.9899 21.9556 31.6235 22.416 32.3564 22.5226L34.9172 22.8948C35.7645 23.018 36.4684 23.6115 36.7331 24.4258C36.9978 25.24 36.7774 26.134 36.1645 26.7319L34.3107 28.54C33.7808 29.0569 33.5391 29.8014 33.6642 30.531L34.1016 33.0809C34.2463 33.9249 33.8994 34.7779 33.2066 35.2813C32.5139 35.7847 31.5954 35.8512 30.8374 35.4529L28.5464 34.2488C27.8911 33.9044 27.1083 33.9044 26.453 34.2488L24.162 35.4529C23.404 35.8512 22.4855 35.7847 21.7928 35.2813C21.1 34.7779 20.7531 33.9249 20.8978 33.0809L21.3352 30.531C21.4603 29.8014 21.2186 29.0569 20.6886 28.54L18.835 26.7319C18.2221 26.134 18.0017 25.24 18.2664 24.4257C18.5311 23.6115 19.2351 23.018 20.0824 22.8948L22.6432 22.5226C23.3761 22.416 24.0096 21.9556 24.3373 21.2914L25.482 18.9707Z"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            title: "Voter Trust",
          },
          {
            icon: (
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.21582 42.7363C7.21582 45.1756 9.19323 47.153 11.6325 47.153"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.2158 11.8201V42.7367"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.4658 47.153H11.6325"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M46.9656 11.8197C46.9656 9.38049 44.9881 7.40308 42.5489 7.40308"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M46.9658 18.4451V11.8201"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6325 7.40299H42.5492"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.21582 11.8197C7.21582 9.38049 9.19323 7.40308 11.6325 7.40308"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.3616 38.4568V38.4568C17.5322 38.4568 16.0491 36.9737 16.0491 35.1443V35.1443C16.0491 33.3148 17.5322 31.8318 19.3616 31.8318V31.8318C21.1911 31.8318 22.6741 33.3148 22.6741 35.1443V35.1443C22.6741 36.9737 21.1911 38.4568 19.3616 38.4568V38.4568Z"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.0491 16.3732H33.7158"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.0491 24.1025H27.0908"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.4033 46.0492V45.1526C30.4106 42.6017 32.4767 40.5356 35.0276 40.5283H42.3416C44.8925 40.5356 46.9585 42.6017 46.9658 45.1526V46.0492C46.9658 46.659 46.4715 47.1533 45.8617 47.1533H31.5075C30.8977 47.1533 30.4033 46.659 30.4033 46.0492Z"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.2679 30.5731C34.2777 28.1362 36.2594 26.1676 38.6964 26.1741C41.1333 26.1806 43.1045 28.1597 43.1013 30.5966C43.098 33.0336 41.1216 35.0074 38.6846 35.0074C37.5102 35.0074 36.3841 34.5397 35.5553 33.7076C34.7265 32.8755 34.2633 31.7475 34.2679 30.5731V30.5731Z"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            title: "Fast Setup",
          },
          {
            icon: (
              <svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8271 27.7783L25.2496 33.2233L36.1171 22.3333"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.1596 6.29079C26.7121 4.96329 29.2546 4.96329 30.8296 6.29079L34.3846 9.35079C35.0596 9.93579 36.3196 10.4083 37.2196 10.4083H41.0446C43.4296 10.4083 45.3871 12.3658 45.3871 14.7508V18.5758C45.3871 19.4533 45.8596 20.7358 46.4446 21.4108L49.5046 24.9658C50.8321 26.5183 50.8321 29.0608 49.5046 30.6358L46.4446 34.1908C45.8596 34.8658 45.3871 36.1258 45.3871 37.0258V40.8508C45.3871 43.2358 43.4296 45.1933 41.0446 45.1933H37.2196C36.3421 45.1933 35.0596 45.6658 34.3846 46.2508L30.8296 49.3108C29.2771 50.6383 26.7346 50.6383 25.1596 49.3108L21.6046 46.2508C20.9296 45.6658 19.6696 45.1933 18.7696 45.1933H14.8771C12.4921 45.1933 10.5346 43.2358 10.5346 40.8508V37.0033C10.5346 36.1258 10.0621 34.8658 9.49965 34.1908L6.46215 30.6133C5.15715 29.0608 5.15715 26.5408 6.46215 24.9883L9.49965 21.4108C10.0621 20.7358 10.5346 19.4758 10.5346 18.5983V14.7283C10.5346 12.3433 12.4921 10.3858 14.8771 10.3858H18.7696C19.6471 10.3858 20.9296 9.91329 21.6046 9.32829L25.1596 6.29079Z"
                  stroke="#53AA00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            title: "App-Ready",
          },
        ]}
      />
      <KeyDifferentiators
        data={[
          {
            icon: (
              <svg
                width="81"
                height="81"
                viewBox="0 0 81 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40.5713" cy="40.1431" r="40" fill="#D9D9D9" />
                <g clipPath="url(#clip0_727_10422)">
                  <path
                    d="M64.2967 22.367H60.8527V20.8363C60.8527 19.9945 60.1639 19.3057 59.322 19.3057H48.6074C47.7655 19.3057 47.0767 19.9945 47.0767 20.8363V22.367H34.066V20.8363C34.066 19.9945 33.3772 19.3057 32.5353 19.3057H21.8206C20.9788 19.3057 20.29 19.9945 20.29 20.8363V22.367H16.846C16.5781 22.367 16.3485 22.4818 16.1954 22.7114C16.0423 22.941 16.0423 23.1706 16.1189 23.4385L17.6113 27.1121V51.8324C17.6113 52.2533 17.9557 52.5977 18.3766 52.5977H28.8617L24.9585 67.3304C24.8437 67.7514 25.1116 68.1723 25.4942 68.2488C25.5708 68.2488 25.609 68.2871 25.6856 68.2871C26.03 68.2871 26.3361 68.0575 26.4126 67.7131L30.5454 52.0237C30.5454 52.0237 30.5454 52.0237 30.5454 51.9855C30.5454 51.9472 30.5454 51.9472 30.5454 51.9089C30.5454 51.8707 30.5454 51.8707 30.5454 51.8324C30.5454 51.8324 30.5454 51.8324 30.5454 51.7941V45.0592H37.5483C37.9692 45.0592 38.3136 44.7148 38.3136 44.2939C38.3136 43.8729 37.9692 43.5285 37.5483 43.5285H30.622V42.6484C30.622 38.86 27.5224 35.7604 23.734 35.7604H22.2033V27.7243H29.0913V34.2297C29.0913 35.7221 30.2776 36.9084 31.77 36.9084H49.3727C50.8651 36.9084 52.0514 35.7221 52.0514 34.2297V27.7243H58.9394V35.7604H57.4087C53.6203 35.7604 50.5207 38.86 50.5207 42.6484V43.5285H43.5179C43.0969 43.5285 42.7525 43.8729 42.7525 44.2939C42.7525 44.7148 43.0969 45.0592 43.5179 45.0592H50.5207V51.8324C50.5207 51.8324 50.5207 51.8324 50.5207 51.8707C50.5207 51.9089 50.5207 51.9089 50.5207 51.9472C50.5207 51.9855 50.5207 51.9855 50.5207 52.0237C50.5207 52.0237 50.5207 52.0237 50.5207 52.062L54.6535 67.7514C54.73 68.0958 55.0362 68.3254 55.3806 68.3254C55.4571 68.3254 55.4954 68.3254 55.5719 68.2871C55.9928 68.1723 56.2224 67.7514 56.1076 67.3687L52.281 52.5977H62.7661C63.187 52.5977 63.5314 52.2533 63.5314 51.8324V27.1121L65.0238 23.4385C65.1003 23.2089 65.1003 22.941 64.9473 22.7114C64.7942 22.4818 64.5646 22.367 64.2967 22.367ZM48.6074 20.8363H59.322V22.367H48.6074V20.8363ZM21.8206 20.8363H32.5353V22.367H21.8206V20.8363ZM29.0913 51.0671H19.142V49.5364H29.0913V51.0671ZM19.142 48.0057V27.7243H20.6726V36.5257V48.0057H19.142ZM29.0913 48.0057H22.2033V43.4137H29.0913V48.0057ZM23.734 37.291C26.4126 37.291 28.6704 39.2809 29.0148 41.883H22.2033V37.291H23.734ZM50.5207 34.2297C50.5207 34.8802 50.0232 35.3777 49.3727 35.3777H31.77C31.1195 35.3777 30.622 34.8802 30.622 34.2297V27.7243H50.5207V34.2297ZM57.4087 37.291H58.9394V41.883H52.1279C52.4723 39.2809 54.73 37.291 57.4087 37.291ZM52.0514 43.4137H58.9394V48.0057H52.0514V43.4137ZM62.0007 51.0671H52.0514V49.5364H59.7047H62.0007V51.0671ZM62.0007 48.0057H60.4701V27.7243H62.0007V48.0057ZM62.2303 26.1937H18.9124L17.994 23.8977H63.1487L62.2303 26.1937Z"
                    fill="#0052CC"
                  />
                  <path
                    d="M40.5713 51.0669C40.1504 51.0669 39.806 51.4113 39.806 51.8322V52.5976C39.806 53.0185 40.1504 53.3629 40.5713 53.3629C40.9922 53.3629 41.3366 53.0185 41.3366 52.5976V51.8322C41.3366 51.4113 40.9922 51.0669 40.5713 51.0669Z"
                    fill="#0052CC"
                  />
                  <path
                    d="M40.5713 55.3528C40.1504 55.3528 39.806 55.6972 39.806 56.1181V57.8784C39.806 58.2993 40.1504 58.6437 40.5713 58.6437C40.9922 58.6437 41.3366 58.2993 41.3366 57.8784V56.1181C41.3366 55.6972 40.9922 55.3528 40.5713 55.3528Z"
                    fill="#0052CC"
                  />
                  <path
                    d="M40.5713 60.6719C40.1504 60.6719 39.806 61.0163 39.806 61.4372V63.1975C39.806 63.6184 40.1504 63.9628 40.5713 63.9628C40.9922 63.9628 41.3366 63.6184 41.3366 63.1975V61.4372C41.3366 61.0163 40.9922 60.6719 40.5713 60.6719Z"
                    fill="#0052CC"
                  />
                  <path
                    d="M40.5713 65.991C40.1504 65.991 39.806 66.3354 39.806 66.7563V67.5216C39.806 67.9426 40.1504 68.287 40.5713 68.287C40.9922 68.287 41.3366 67.9426 41.3366 67.5216V66.7563C41.3366 66.3354 40.9922 65.991 40.5713 65.991Z"
                    fill="#0052CC"
                  />
                  <path
                    d="M34.4486 33.8469C35.7114 33.8469 36.7446 32.8137 36.7446 31.5509C36.7446 30.2881 35.7114 29.2549 34.4486 29.2549C33.1858 29.2549 32.1526 30.2881 32.1526 31.5509C32.1526 32.8137 33.1858 33.8469 34.4486 33.8469ZM34.4486 30.7856C34.8695 30.7856 35.2139 31.13 35.2139 31.5509C35.2139 31.9718 34.8695 32.3162 34.4486 32.3162C34.0277 32.3162 33.6833 31.9718 33.6833 31.5509C33.6833 31.13 34.0277 30.7856 34.4486 30.7856Z"
                    fill="#0052CC"
                  />
                  <path
                    d="M40.5713 33.8469C41.8341 33.8469 42.8673 32.8137 42.8673 31.5509C42.8673 30.2881 41.8341 29.2549 40.5713 29.2549C39.3085 29.2549 38.2753 30.2881 38.2753 31.5509C38.2753 32.8137 39.3085 33.8469 40.5713 33.8469ZM40.5713 30.7856C40.9922 30.7856 41.3366 31.13 41.3366 31.5509C41.3366 31.9718 40.9922 32.3162 40.5713 32.3162C40.1504 32.3162 39.806 31.9718 39.806 31.5509C39.806 31.13 40.1504 30.7856 40.5713 30.7856Z"
                    fill="#0052CC"
                  />
                  <path
                    d="M46.694 33.8469C47.9568 33.8469 48.99 32.8137 48.99 31.5509C48.99 30.2881 47.9568 29.2549 46.694 29.2549C45.4312 29.2549 44.398 30.2881 44.398 31.5509C44.398 32.8137 45.4312 33.8469 46.694 33.8469ZM46.694 30.7856C47.1149 30.7856 47.4593 31.13 47.4593 31.5509C47.4593 31.9718 47.1149 32.3162 46.694 32.3162C46.273 32.3162 45.9286 31.9718 45.9286 31.5509C45.9286 31.13 46.273 30.7856 46.694 30.7856Z"
                    fill="#0052CC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_727_10422">
                    <rect
                      width="48.9814"
                      height="61.2268"
                      fill="white"
                      transform="translate(16.0806 19.3057)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ),
            title: "Dynamic Toll Adjustments",
            subTitle:
              "Each city can vary tolls based on the number of occupants, time of day, year, special events, vehicle type and other factors.",
          },
          {
            icon: (
              <svg
                width="81"
                height="82"
                viewBox="0 0 81 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40.8569" cy="40.1431" r="40" fill="#D9D9D9" />
                <g clipPath="url(#clip0_727_3437)">
                  <path
                    d="M52.0119 37.5685L50.8838 37.5513C50.642 36.6073 50.2794 35.7209 49.8132 34.9035L50.6132 34.115C50.901 33.8329 51.0622 33.4588 51.0622 33.0559C51.0622 32.6529 50.9126 32.2788 50.6305 31.991L49.0937 30.4254C48.5123 29.8383 47.5626 29.8325 46.9697 30.4139L46.1581 31.2024C45.3408 30.7132 44.4601 30.339 43.5277 30.0858L43.5392 28.9634C43.5392 28.5605 43.3895 28.1863 43.1075 27.8985C42.8254 27.6107 42.4513 27.4496 42.0484 27.4496L39.8553 27.4323H39.8438C39.0265 27.4323 38.353 28.0942 38.3415 28.9231L38.33 30.057C37.3976 30.293 36.5111 30.6499 35.6765 31.1276L34.888 30.3275C34.6059 30.0397 34.226 29.8843 33.8231 29.8786C33.4259 29.8786 33.0518 30.034 32.7755 30.3103L31.2099 31.8471C30.6228 32.4227 30.6113 33.3782 31.1926 33.9711L31.9869 34.7769C31.4977 35.5885 31.1236 36.4749 30.8645 37.4131H29.7364C29.7364 37.4131 29.7306 37.4074 29.7249 37.4074C28.9075 37.4074 28.2341 38.0693 28.2225 38.8982L28.2053 41.0854C28.2053 41.4826 28.3549 41.8625 28.6312 42.1503C28.9133 42.4381 29.2932 42.5992 29.6961 42.5992L30.8242 42.6108C31.0545 43.5317 31.4114 44.4239 31.8891 45.2643L31.089 46.0528C30.8012 46.3349 30.6458 46.709 30.6401 47.1062C30.6401 47.5091 30.7897 47.889 31.0717 48.1768L32.6086 49.7366C33.1899 50.3237 34.1397 50.3353 34.7325 49.7539L35.5384 48.9653C36.3557 49.4546 37.2421 49.8287 38.1689 50.082L38.1573 51.2159C38.1573 52.039 38.825 52.7182 39.6481 52.724L41.8354 52.7413H41.8469C42.2441 52.7413 42.624 52.5858 42.906 52.3038C43.1938 52.0218 43.3492 51.6419 43.3492 51.2505L43.3665 50.1165C44.299 49.8805 45.1854 49.5237 46.0142 49.0459L46.8028 49.846C47.3841 50.4331 48.3339 50.4446 48.9267 49.8633L50.4866 48.3264C50.7744 48.0444 50.9356 47.6702 50.9356 47.2673C50.9356 46.8644 50.7859 46.4903 50.5039 46.2082L49.7153 45.3966C50.2046 44.5678 50.5787 43.6871 50.832 42.7662H51.9544C51.9544 42.7662 51.9601 42.7719 51.9659 42.7719C52.7832 42.7719 53.4567 42.1042 53.4682 41.2811L53.4912 39.0824C53.4912 38.2593 52.8235 37.58 52.0004 37.5743L52.0119 37.5685ZM51.9832 41.2696H50.8607C50.1643 41.2754 49.5772 41.7013 49.3987 42.3748C49.1915 43.1576 48.8692 43.9116 48.449 44.6196C48.0921 45.2067 48.1842 45.9607 48.6677 46.4442L49.4505 47.2558L47.8849 48.7927L47.0963 47.9868C46.6071 47.4976 45.8761 47.3997 45.2775 47.7451C44.5752 48.1538 43.8154 48.4588 43.0211 48.6603C42.3477 48.8272 41.893 49.4086 41.8814 50.105L41.8642 51.2389L39.6654 51.2159L39.6769 50.0935C39.6884 49.4086 39.2279 48.8042 38.566 48.6257C37.7774 48.4128 37.0234 48.0962 36.3212 47.676C36.0794 47.5321 35.8147 47.463 35.5499 47.463C35.1642 47.463 34.7843 47.6127 34.4965 47.8947L33.6907 48.6833L32.1539 47.1119L32.9482 46.3291C33.4432 45.8456 33.5468 45.0973 33.2015 44.5045C32.7928 43.7907 32.482 43.0309 32.2863 42.2424C32.1193 41.5804 31.5265 41.1142 30.8415 41.1085L29.7133 41.0912L29.7364 38.8924H30.8645C30.8645 38.8924 30.8703 38.8982 30.876 38.8982C31.5552 38.8982 32.1481 38.4434 32.3265 37.7873C32.5395 36.9929 32.8619 36.2389 33.282 35.5367C33.6274 34.9438 33.5353 34.1955 33.0576 33.7178L32.269 32.9062L33.8404 31.3694L34.6289 32.1637C35.1067 32.6529 35.8607 32.7566 36.4536 32.4112C37.1558 32.0025 37.9156 31.6975 38.7099 31.496C39.3776 31.3291 39.8438 30.7305 39.8438 30.0513L39.8611 28.9173L42.0599 28.9403L42.0484 30.0743C42.0484 30.7535 42.5031 31.3521 43.1593 31.5305C43.9536 31.7435 44.7076 32.0601 45.4041 32.4803C45.997 32.8314 46.7337 32.745 47.2287 32.2615L48.0346 31.473L49.5657 33.0444L48.7656 33.8329C48.2763 34.3164 48.1727 35.0474 48.5181 35.6576C48.921 36.3483 49.2318 37.1081 49.4333 37.9081C49.5944 38.5758 50.1873 39.0478 50.878 39.0536L52.0062 39.0651L51.9774 41.2639L51.9832 41.2696ZM44.9782 33.9653C43.3435 32.8659 41.3807 32.4688 39.4467 32.8429C37.5127 33.2228 35.8434 34.3279 34.7441 35.9626C32.4704 39.3356 33.3626 43.9289 36.7356 46.2025C37.9962 47.0486 39.4237 47.4573 40.8396 47.4573C43.2111 47.4573 45.548 46.3176 46.9697 44.2052C49.2376 40.8322 48.3454 36.2389 44.9782 33.9653ZM45.7322 43.3648C43.9191 46.0528 40.2583 46.7666 37.576 44.9592C34.888 43.1461 34.1742 39.4853 35.9873 36.7972C36.8622 35.4964 38.1976 34.61 39.7345 34.3107C40.1144 34.2358 40.4943 34.2013 40.8742 34.2013C42.0311 34.2013 43.165 34.5467 44.1435 35.2086C46.8316 37.0217 47.5396 40.6825 45.7322 43.3705V43.3648ZM64.4736 31.3866H66.5515C67.4034 31.3866 68.0941 30.6959 68.0941 29.844V27.7719C68.0941 26.92 67.4034 26.2293 66.5515 26.2293H64.4736C63.6217 26.2293 62.931 26.92 62.931 27.7719V28.0597H56.7203V26.3617C56.7203 25.1817 55.7591 24.2205 54.5791 24.2205H52.835V18.004H53.1228C53.9747 18.004 54.6654 17.3133 54.6654 16.4614V14.3893C54.6654 13.5374 53.9747 12.8467 53.1228 12.8467H51.0507C50.1988 12.8467 49.5081 13.5374 49.5081 14.3893V16.4614C49.5081 17.3133 50.1988 18.004 51.0507 18.004H51.3385V24.2205H41.6052V18.004H41.893C42.7448 18.004 43.4356 17.3133 43.4356 16.4614V14.3893C43.4356 13.5374 42.7448 12.8467 41.893 12.8467H39.8208C38.9689 12.8467 38.2725 13.5374 38.2725 14.3893V16.4614C38.2725 17.3133 38.9689 18.004 39.8208 18.004H40.1086V24.2205H30.3753V18.004H30.6631C31.515 18.004 32.2057 17.3133 32.2057 16.4614V14.3893C32.2057 13.5374 31.515 12.8467 30.6631 12.8467H28.5852C27.7333 12.8467 27.0426 13.5374 27.0426 14.3893V16.4614C27.0426 17.3133 27.7333 18.004 28.5852 18.004H28.8787V24.2205H27.1347C25.9547 24.2205 24.9935 25.1817 24.9935 26.3617V28.0597H18.777V27.5704C18.777 26.8279 18.1784 26.2235 17.4359 26.2235H14.9666C14.224 26.2235 13.6254 26.8279 13.6254 27.5704V30.0397C13.6254 30.7823 14.224 31.3866 14.9666 31.3866H17.4416C18.1841 31.3866 18.7828 30.7823 18.7828 30.0397V29.5505H24.9992V39.2838H18.7828V38.7946C18.7828 38.052 18.1841 37.4534 17.4416 37.4534H14.9666C14.224 37.4534 13.6254 38.0578 13.6254 38.7946V41.2639C13.6254 42.0064 14.224 42.6108 14.9666 42.6108H17.4416C18.1841 42.6108 18.7828 42.0064 18.7828 41.2639V40.7746H24.9992V50.5079H18.7828V50.0187C18.7828 49.2762 18.1841 48.6718 17.4416 48.6718H14.9666C14.224 48.6718 13.6254 49.2762 13.6254 50.0187V52.488C13.6254 53.2305 14.224 53.8349 14.9666 53.8349H17.4416C18.1841 53.8349 18.7828 53.2305 18.7828 52.488V51.9987H24.9992V53.7831C24.9992 54.9631 25.9605 55.9243 27.1404 55.9243H28.8787V62.1407H28.5909C27.739 62.1407 27.0483 62.8315 27.0483 63.6833V65.7555C27.0483 66.6074 27.739 67.2981 28.5909 67.2981H30.6688C31.5207 67.2981 32.2114 66.6074 32.2114 65.7555V63.6833C32.2114 62.8315 31.5207 62.1407 30.6688 62.1407H30.3753V55.9243H40.1144V62.1407H39.8266C38.9747 62.1407 38.2782 62.8315 38.2782 63.6833V65.7555C38.2782 66.6074 38.9747 67.2981 39.8266 67.2981H41.8987C42.7506 67.2981 43.4413 66.6074 43.4413 65.7555V63.6833C43.4413 62.8315 42.7506 62.1407 41.8987 62.1407H41.6109V55.9243H51.3442V62.1407H51.0564C50.2046 62.1407 49.5139 62.8315 49.5139 63.6833V65.7555C49.5139 66.6074 50.2046 67.2981 51.0564 67.2981H53.1286C53.9805 67.2981 54.6712 66.6074 54.6712 65.7555V63.6833C54.6712 62.8315 53.9805 62.1407 53.1286 62.1407H52.8408V55.9243H54.5849C55.7648 55.9243 56.7261 54.9631 56.7261 53.7831V51.9987H62.9368V52.2865C62.9368 53.1384 63.6275 53.8291 64.4794 53.8291H66.5573C67.4091 53.8291 68.0999 53.1384 68.0999 52.2865V50.2144C68.0999 49.3625 67.4091 48.6718 66.5573 48.6718H64.4794C63.6275 48.6718 62.9368 49.3625 62.9368 50.2144V50.5022H56.7261V40.7689H62.9368V41.0566C62.9368 41.9085 63.6275 42.5992 64.4794 42.5992H66.5573C67.4091 42.5992 68.0999 41.9085 68.0999 41.0566V38.9845C68.0999 38.1326 67.4091 37.4419 66.5573 37.4419H64.4794C63.6275 37.4419 62.9368 38.1326 62.9368 38.9845V39.2723H56.7261V29.539H62.9368V29.8268C62.9368 30.6786 63.6275 31.3694 64.4794 31.3694L64.4736 31.3866ZM51.0046 16.4614V14.3893C51.0046 14.3893 51.0277 14.3432 51.0507 14.3432H53.1228C53.1228 14.3432 53.1689 14.3663 53.1689 14.3893V16.4614C53.1689 16.4614 53.1459 16.5075 53.1228 16.5075H51.0507C51.0507 16.5075 51.0046 16.4844 51.0046 16.4614ZM39.769 16.4614V14.3893C39.769 14.3893 39.7978 14.3432 39.8208 14.3432H41.893C41.893 14.3432 41.939 14.3663 41.939 14.3893V16.4614C41.939 16.4614 41.916 16.5075 41.893 16.5075H39.8208C39.8208 16.5075 39.769 16.4844 39.769 16.4614ZM28.5391 16.4614V14.3893C28.5391 14.3893 28.5621 14.3432 28.5852 14.3432H30.6631C30.6631 14.3432 30.7091 14.3663 30.7091 14.3893V16.4614C30.7091 16.4614 30.6861 16.5075 30.6631 16.5075H28.5852C28.5852 16.5075 28.5391 16.4844 28.5391 16.4614ZM17.2862 29.8958H15.122V27.7258H17.2862V29.8958ZM17.2862 41.1257H15.122V38.9557H17.2862V41.1257ZM17.2862 52.3556H15.122V50.1856H17.2862V52.3556ZM30.7149 63.7006V65.7728C30.7149 65.7728 30.6919 65.8188 30.6688 65.8188H28.5909C28.5909 65.8188 28.5449 65.7958 28.5449 65.7728V63.7006C28.5449 63.7006 28.5679 63.6546 28.5909 63.6546H30.6688C30.6688 63.6546 30.7149 63.6776 30.7149 63.7006ZM41.9448 63.7006V65.7728C41.9448 65.7728 41.9217 65.8188 41.8987 65.8188H39.8266C39.792 65.8188 39.7748 65.7958 39.7748 65.7728V63.7006C39.7748 63.7006 39.7978 63.6546 39.8266 63.6546H41.8987C41.8987 63.6546 41.9448 63.6776 41.9448 63.7006ZM53.1746 63.7006V65.7728C53.1746 65.7728 53.1516 65.8188 53.1286 65.8188H51.0564C51.0564 65.8188 51.0104 65.7958 51.0104 65.7728V63.7006C51.0104 63.7006 51.0334 63.6546 51.0564 63.6546H53.1286C53.1286 63.6546 53.1746 63.6776 53.1746 63.7006ZM64.4275 50.2317C64.4275 50.2317 64.4506 50.1856 64.4736 50.1856H66.5515C66.5515 50.1856 66.5975 50.2086 66.5975 50.2317V52.3038C66.5975 52.3038 66.5745 52.3498 66.5515 52.3498H64.4736C64.4736 52.3498 64.4275 52.3268 64.4275 52.3038V50.2317ZM64.4275 39.0018C64.4275 39.0018 64.4506 38.9557 64.4736 38.9557H66.5515C66.5515 38.9557 66.5975 38.9787 66.5975 39.0018V41.0739C66.5975 41.0739 66.5745 41.12 66.5515 41.12H64.4736C64.4736 41.12 64.4275 41.0969 64.4275 41.0739V39.0018ZM55.2238 53.8004C55.2238 54.1572 54.936 54.445 54.5791 54.445H27.1404C26.7836 54.445 26.4958 54.1572 26.4958 53.8004V26.3674C26.4958 26.0106 26.7836 25.7228 27.1404 25.7228H54.5791C54.936 25.7228 55.2238 26.0106 55.2238 26.3674V53.8061V53.8004ZM64.4275 27.7719C64.4275 27.7719 64.4506 27.7258 64.4736 27.7258H66.5515C66.5515 27.7258 66.5975 27.7489 66.5975 27.7719V29.844C66.5975 29.844 66.5745 29.8901 66.5515 29.8901H64.4736C64.4736 29.8901 64.4275 29.8671 64.4275 29.844V27.7719ZM41.5016 35.7899C41.1274 35.4446 40.5115 35.4791 40.1949 35.813L36.5226 39.4968C36.2579 39.7673 36.1773 40.1702 36.3039 40.4695C36.4305 40.8437 36.7874 41.0912 37.1903 41.0912H38.4221V43.9979C38.4221 44.516 38.8423 44.9362 39.3603 44.9362H42.3707C42.883 44.9362 43.3032 44.516 43.3032 43.9979V41.0912H44.5349C44.9148 41.0912 45.2544 40.8667 45.4041 40.5098C45.548 40.1587 45.4674 39.7616 45.2026 39.491L41.5303 35.813C41.5303 35.813 41.5131 35.7957 41.5073 35.7899H41.5016ZM42.7391 39.5946C42.221 39.5946 41.8009 40.0148 41.8009 40.5329V43.4396H39.9129V40.5329C39.9129 40.0148 39.4927 39.5946 38.9747 39.5946H38.5315L40.8626 37.2577L43.1938 39.5946H42.7448H42.7391Z"
                    fill="#0052CC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_727_3437">
                    <rect
                      width="54.6816"
                      height="68.3521"
                      fill="white"
                      transform="translate(13.5161 12.7432)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ),
            title: "Advanced Technology",
            subTitle:
              "Utilizes AI, Snapdragon X, and Thinkmate servers workstations for superfast client service.",
          },
          {
            icon: (
              <svg
                width="81"
                height="89"
                viewBox="0 0 81 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40.3214" cy="40.1431" r="40" fill="#D9D9D9" />
                <path
                  d="M37.3212 52.1921C30.6546 52.1921 25.1994 46.7373 25.1994 40.0704C25.1994 33.4034 30.6542 27.9486 37.3212 27.9486C37.9273 27.9486 38.3313 27.5446 38.3313 26.9385V15.8266C38.3313 15.2205 37.9273 14.8164 37.3212 14.8164H32.2705C31.7654 14.8164 31.2603 15.2205 31.2603 15.8266C31.1593 18.2509 29.139 19.7662 27.1187 19.7662C26.1086 19.7662 25.1994 19.3621 24.3913 18.655C23.9873 18.2509 23.3812 18.3519 22.9771 18.655L15.8049 25.8272C15.6029 26.0292 15.5019 26.3322 15.5019 26.5343C15.5019 26.8373 15.6029 27.0394 15.8049 27.2414C16.5121 28.0495 16.9161 28.9586 16.9161 29.9689C16.9161 31.8882 15.5019 34.0094 12.9765 34.1104C12.4714 34.1104 11.9664 34.6155 11.9664 35.1206V45.222C11.9664 45.7271 12.3704 46.2322 12.9765 46.2322C14.5927 46.3332 15.9059 47.2423 16.613 48.7575C17.2191 50.2727 16.9161 51.889 15.8049 53.1012C15.6029 53.3032 15.5019 53.5052 15.5019 53.8083C15.5019 54.1114 15.6029 54.3134 15.8049 54.5154L22.9771 61.6876C23.3812 62.0917 23.9873 62.0917 24.3913 61.6876C25.1994 60.9805 26.1085 60.5764 27.1187 60.5764C29.0381 60.5764 31.1593 61.9906 31.2603 64.516C31.2603 65.0211 31.7654 65.5262 32.2705 65.5262H37.3212C37.9273 65.5262 38.3313 65.1221 38.3313 64.516V53.2024C38.3313 52.5963 37.9273 52.1921 37.3212 52.1921ZM33.1796 63.3041C32.5735 60.2736 29.8462 58.4554 27.2197 58.4554C26.0076 58.4554 24.8964 58.8594 23.8863 59.4655L18.0274 53.6067C19.1386 51.8894 19.3406 49.8691 18.5325 47.9498C17.7244 46.0305 16.1082 44.7174 14.0879 44.3133V36.0304C17.1183 35.4243 18.9366 32.697 18.9366 30.0705C18.9366 28.8584 18.5325 27.7472 17.9264 26.7371L23.7853 20.8782C24.7954 21.5854 25.9065 21.8884 27.1187 21.8884C29.7451 21.8884 32.4725 20.0701 33.0786 17.0397H36.3111V26.2322C28.9372 26.7373 23.1795 32.8988 23.1795 40.2734C23.1795 47.6479 28.9373 53.8096 36.3111 54.3146V63.3047L33.1796 63.3041ZM38.3314 49.162C38.3314 49.7681 37.9273 50.1722 37.3213 50.1722C31.7654 50.1722 27.2198 45.6265 27.2198 40.0707C27.2198 34.5149 31.7654 29.9692 37.3213 29.9692C37.9273 29.9692 38.3314 30.3733 38.3314 30.9794C38.3314 31.5855 37.9273 31.9895 37.3213 31.9895C32.8766 31.9895 29.2401 35.6261 29.2401 40.0707C29.2401 44.5153 32.8766 48.1519 37.3213 48.1519C37.9273 48.1519 38.3314 48.5559 38.3314 49.162ZM46.4126 32.9997C48.3319 32.9997 49.8471 31.6865 50.3522 29.9692H54.6958C55.0999 31.6865 56.7161 32.9997 58.6354 32.9997C60.8577 32.9997 62.676 31.1814 62.676 28.9591C62.676 26.7368 60.8577 24.9185 58.6354 24.9185C56.7161 24.9185 55.2009 26.2317 54.6958 27.9489H50.3522C49.9481 26.5347 48.8369 25.4236 47.4228 25.0196V20.878C47.4228 20.2719 47.8268 19.8678 48.4329 19.8678H54.5948C54.9988 21.5851 56.6151 22.8983 58.5344 22.8983C60.7567 22.8983 62.575 21.08 62.575 18.8577C62.575 16.6354 60.7567 14.8171 58.5344 14.8171C56.6151 14.8171 55.0999 16.1303 54.5948 17.8476H48.4329C46.7157 17.8476 45.4025 19.1607 45.4025 20.878V25.0196C43.6853 25.4236 42.372 27.0398 42.372 28.9592C42.372 29.4642 42.4731 29.8683 42.5741 30.2723L38.7355 34.1109C38.3315 34.1109 37.8264 34.0099 37.3213 34.0099C33.9879 34.0099 31.2604 36.7373 31.2604 40.0707C31.2604 43.4042 33.9879 46.1316 37.3213 46.1316C37.8264 46.1316 38.3315 46.0306 38.7355 45.9296L42.5741 49.7681C42.4731 50.2732 42.372 50.6772 42.372 51.1823C42.372 53.1016 43.6852 54.6168 45.4025 55.1219V59.2635C45.4025 60.9807 46.7156 62.2939 48.4329 62.2939H54.5948C54.9988 64.0112 56.6151 65.3244 58.5344 65.3244C60.7567 65.3244 62.575 63.5061 62.575 61.2838C62.575 59.0615 60.7567 57.2432 58.5344 57.2432C56.6151 57.2432 55.0999 58.5564 54.5948 60.2736H48.4329C47.8268 60.2736 47.4228 59.8696 47.4228 59.2635V55.1219C48.837 54.7179 49.9481 53.6067 50.3522 52.1925H54.6958C55.0999 53.9098 56.7161 55.223 58.6354 55.223C60.8577 55.223 62.676 53.4047 62.676 51.1824C62.676 48.9601 60.8577 47.1418 58.6354 47.1418C56.7161 47.1418 55.2009 48.455 54.6958 50.1722H50.3522C49.9481 48.455 48.3319 47.1418 46.4126 47.1418C45.4024 47.1418 44.4933 47.5459 43.7862 48.152L40.7557 45.1215C42.0689 44.2124 43.0791 42.7982 43.2811 41.0809H54.5947C54.9988 42.7982 56.615 44.1114 58.5343 44.1114C60.7566 44.1114 62.5749 42.2931 62.5749 40.0708C62.5749 37.8485 60.7566 36.0302 58.5343 36.0302C56.615 36.0302 55.0998 37.3434 54.5947 39.0606H43.2811C42.978 37.4444 42.0689 35.9292 40.7557 35.0201L43.7862 31.9896C44.4933 32.5957 45.4024 32.9997 46.4126 32.9997ZM58.5343 16.8373C59.6455 16.8373 60.5546 17.7464 60.5546 18.8576C60.5546 19.9688 59.6455 20.8779 58.5343 20.8779C57.4231 20.8779 56.514 19.9688 56.514 18.8576C56.514 17.7464 57.4231 16.8373 58.5343 16.8373ZM58.5343 59.2635C59.6455 59.2635 60.5546 60.1726 60.5546 61.2838C60.5546 62.395 59.6455 63.3041 58.5343 63.3041C57.4231 63.3041 56.514 62.395 56.514 61.2838C56.514 60.1726 57.4231 59.2635 58.5343 59.2635ZM58.5343 49.162C59.6455 49.162 60.5546 50.0711 60.5546 51.1823C60.5546 52.2935 59.6455 53.2026 58.5343 53.2026C57.4231 53.2026 56.514 52.2935 56.514 51.1823C56.514 50.0711 57.4231 49.162 58.5343 49.162ZM46.4126 49.162C47.5238 49.162 48.4329 50.0711 48.4329 51.1823C48.4329 52.2935 47.5238 53.2026 46.4126 53.2026C45.3014 53.2026 44.3923 52.2935 44.3923 51.1823C44.3923 50.0711 45.3014 49.162 46.4126 49.162ZM58.5343 38.0501C59.6455 38.0501 60.5546 38.9592 60.5546 40.0704C60.5546 41.1816 59.6455 42.0907 58.5343 42.0907C57.4231 42.0907 56.514 41.1816 56.514 40.0704C56.514 38.9592 57.4231 38.0501 58.5343 38.0501ZM37.3216 44.111C35.0993 44.111 33.281 42.2927 33.281 40.0704C33.281 37.8481 35.0993 36.0298 37.3216 36.0298C39.5439 36.0298 41.3622 37.8481 41.3622 40.0704C41.3622 42.2927 39.5439 44.111 37.3216 44.111ZM58.5343 26.9388C59.6455 26.9388 60.5546 27.8479 60.5546 28.9591C60.5546 30.0703 59.6455 30.9794 58.5343 30.9794C57.4231 30.9794 56.514 30.0703 56.514 28.9591C56.514 27.8479 57.4231 26.9388 58.5343 26.9388ZM46.4126 26.9388C47.5238 26.9388 48.4329 27.8479 48.4329 28.9591C48.4329 30.0703 47.5238 30.9794 46.4126 30.9794C45.3014 30.9794 44.3923 30.0703 44.3923 28.9591C44.3923 27.8479 45.3014 26.9388 46.4126 26.9388ZM38.3314 40.0704C38.3314 40.6765 37.9273 41.0805 37.3213 41.0805C36.7152 41.0805 36.3111 40.6765 36.3111 40.0704C36.3111 39.4643 36.7152 39.0602 37.3213 39.0602C37.9273 39.0602 38.3314 39.4643 38.3314 40.0704Z"
                  fill="#0052CC"
                />
              </svg>
            ),
            title: "Flexible Hardware & Software Integration",
            subTitle:
              "Compatible with various hardware options like cameras and license plate recognition systems.",
          },
          {
            icon: (
              <svg
                width="81"
                height="81"
                viewBox="0 0 81 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40.5713" cy="40.1431" r="40" fill="#D9D9D9" />
                <g clipPath="url(#clip0_727_10422)">
                  <path
                    d="M64.2967 22.367H60.8527V20.8363C60.8527 19.9945 60.1639 19.3057 59.322 19.3057H48.6074C47.7655 19.3057 47.0767 19.9945 47.0767 20.8363V22.367H34.066V20.8363C34.066 19.9945 33.3772 19.3057 32.5353 19.3057H21.8206C20.9788 19.3057 20.29 19.9945 20.29 20.8363V22.367H16.846C16.5781 22.367 16.3485 22.4818 16.1954 22.7114C16.0423 22.941 16.0423 23.1706 16.1189 23.4385L17.6113 27.1121V51.8324C17.6113 52.2533 17.9557 52.5977 18.3766 52.5977H28.8617L24.9585 67.3304C24.8437 67.7514 25.1116 68.1723 25.4942 68.2488C25.5708 68.2488 25.609 68.2871 25.6856 68.2871C26.03 68.2871 26.3361 68.0575 26.4126 67.7131L30.5454 52.0237C30.5454 52.0237 30.5454 52.0237 30.5454 51.9855C30.5454 51.9472 30.5454 51.9472 30.5454 51.9089C30.5454 51.8707 30.5454 51.8707 30.5454 51.8324C30.5454 51.8324 30.5454 51.8324 30.5454 51.7941V45.0592H37.5483C37.9692 45.0592 38.3136 44.7148 38.3136 44.2939C38.3136 43.8729 37.9692 43.5285 37.5483 43.5285H30.622V42.6484C30.622 38.86 27.5224 35.7604 23.734 35.7604H22.2033V27.7243H29.0913V34.2297C29.0913 35.7221 30.2776 36.9084 31.77 36.9084H49.3727C50.8651 36.9084 52.0514 35.7221 52.0514 34.2297V27.7243H58.9394V35.7604H57.4087C53.6203 35.7604 50.5207 38.86 50.5207 42.6484V43.5285H43.5179C43.0969 43.5285 42.7525 43.8729 42.7525 44.2939C42.7525 44.7148 43.0969 45.0592 43.5179 45.0592H50.5207V51.8324C50.5207 51.8324 50.5207 51.8324 50.5207 51.8707C50.5207 51.9089 50.5207 51.9089 50.5207 51.9472C50.5207 51.9855 50.5207 51.9855 50.5207 52.0237C50.5207 52.0237 50.5207 52.0237 50.5207 52.062L54.6535 67.7514C54.73 68.0958 55.0362 68.3254 55.3806 68.3254C55.4571 68.3254 55.4954 68.3254 55.5719 68.2871C55.9928 68.1723 56.2224 67.7514 56.1076 67.3687L52.281 52.5977H62.7661C63.187 52.5977 63.5314 52.2533 63.5314 51.8324V27.1121L65.0238 23.4385C65.1003 23.2089 65.1003 22.941 64.9473 22.7114C64.7942 22.4818 64.5646 22.367 64.2967 22.367ZM48.6074 20.8363H59.322V22.367H48.6074V20.8363ZM21.8206 20.8363H32.5353V22.367H21.8206V20.8363ZM29.0913 51.0671H19.142V49.5364H29.0913V51.0671ZM19.142 48.0057V27.7243H20.6726V36.5257V48.0057H19.142ZM29.0913 48.0057H22.2033V43.4137H29.0913V48.0057ZM23.734 37.291C26.4126 37.291 28.6704 39.2809 29.0148 41.883H22.2033V37.291H23.734ZM50.5207 34.2297C50.5207 34.8802 50.0232 35.3777 49.3727 35.3777H31.77C31.1195 35.3777 30.622 34.8802 30.622 34.2297V27.7243H50.5207V34.2297ZM57.4087 37.291H58.9394V41.883H52.1279C52.4723 39.2809 54.73 37.291 57.4087 37.291ZM52.0514 43.4137H58.9394V48.0057H52.0514V43.4137ZM62.0007 51.0671H52.0514V49.5364H59.7047H62.0007V51.0671ZM62.0007 48.0057H60.4701V27.7243H62.0007V48.0057ZM62.2303 26.1937H18.9124L17.994 23.8977H63.1487L62.2303 26.1937Z"
                    fill="#0052CC"
                  />
                  <path
                    d="M40.5713 51.0669C40.1504 51.0669 39.806 51.4113 39.806 51.8322V52.5976C39.806 53.0185 40.1504 53.3629 40.5713 53.3629C40.9922 53.3629 41.3366 53.0185 41.3366 52.5976V51.8322C41.3366 51.4113 40.9922 51.0669 40.5713 51.0669Z"
                    fill="#0052CC"
                  />
                  <path
                    d="M40.5713 55.3528C40.1504 55.3528 39.806 55.6972 39.806 56.1181V57.8784C39.806 58.2993 40.1504 58.6437 40.5713 58.6437C40.9922 58.6437 41.3366 58.2993 41.3366 57.8784V56.1181C41.3366 55.6972 40.9922 55.3528 40.5713 55.3528Z"
                    fill="#0052CC"
                  />
                  <path
                    d="M40.5713 60.6719C40.1504 60.6719 39.806 61.0163 39.806 61.4372V63.1975C39.806 63.6184 40.1504 63.9628 40.5713 63.9628C40.9922 63.9628 41.3366 63.6184 41.3366 63.1975V61.4372C41.3366 61.0163 40.9922 60.6719 40.5713 60.6719Z"
                    fill="#0052CC"
                  />
                  <path
                    d="M40.5713 65.991C40.1504 65.991 39.806 66.3354 39.806 66.7563V67.5216C39.806 67.9426 40.1504 68.287 40.5713 68.287C40.9922 68.287 41.3366 67.9426 41.3366 67.5216V66.7563C41.3366 66.3354 40.9922 65.991 40.5713 65.991Z"
                    fill="#0052CC"
                  />
                  <path
                    d="M34.4486 33.8469C35.7114 33.8469 36.7446 32.8137 36.7446 31.5509C36.7446 30.2881 35.7114 29.2549 34.4486 29.2549C33.1858 29.2549 32.1526 30.2881 32.1526 31.5509C32.1526 32.8137 33.1858 33.8469 34.4486 33.8469ZM34.4486 30.7856C34.8695 30.7856 35.2139 31.13 35.2139 31.5509C35.2139 31.9718 34.8695 32.3162 34.4486 32.3162C34.0277 32.3162 33.6833 31.9718 33.6833 31.5509C33.6833 31.13 34.0277 30.7856 34.4486 30.7856Z"
                    fill="#0052CC"
                  />
                  <path
                    d="M40.5713 33.8469C41.8341 33.8469 42.8673 32.8137 42.8673 31.5509C42.8673 30.2881 41.8341 29.2549 40.5713 29.2549C39.3085 29.2549 38.2753 30.2881 38.2753 31.5509C38.2753 32.8137 39.3085 33.8469 40.5713 33.8469ZM40.5713 30.7856C40.9922 30.7856 41.3366 31.13 41.3366 31.5509C41.3366 31.9718 40.9922 32.3162 40.5713 32.3162C40.1504 32.3162 39.806 31.9718 39.806 31.5509C39.806 31.13 40.1504 30.7856 40.5713 30.7856Z"
                    fill="#0052CC"
                  />
                  <path
                    d="M46.694 33.8469C47.9568 33.8469 48.99 32.8137 48.99 31.5509C48.99 30.2881 47.9568 29.2549 46.694 29.2549C45.4312 29.2549 44.398 30.2881 44.398 31.5509C44.398 32.8137 45.4312 33.8469 46.694 33.8469ZM46.694 30.7856C47.1149 30.7856 47.4593 31.13 47.4593 31.5509C47.4593 31.9718 47.1149 32.3162 46.694 32.3162C46.273 32.3162 45.9286 31.9718 45.9286 31.5509C45.9286 31.13 46.273 30.7856 46.694 30.7856Z"
                    fill="#0052CC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_727_10422">
                    <rect
                      width="48.9814"
                      height="61.2268"
                      fill="white"
                      transform="translate(16.0806 19.3057)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ),
            title: "City Control",
            subTitle:
              "Cities retain full control over their data and system components, avoiding dependency on a single supplier.",
          },
          {
            icon: (
              <svg
                width="81"
                height="82"
                viewBox="0 0 81 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40.8569" cy="40.1431" r="40" fill="#D9D9D9" />
                <g clipPath="url(#clip0_727_3437)">
                  <path
                    d="M52.0119 37.5685L50.8838 37.5513C50.642 36.6073 50.2794 35.7209 49.8132 34.9035L50.6132 34.115C50.901 33.8329 51.0622 33.4588 51.0622 33.0559C51.0622 32.6529 50.9126 32.2788 50.6305 31.991L49.0937 30.4254C48.5123 29.8383 47.5626 29.8325 46.9697 30.4139L46.1581 31.2024C45.3408 30.7132 44.4601 30.339 43.5277 30.0858L43.5392 28.9634C43.5392 28.5605 43.3895 28.1863 43.1075 27.8985C42.8254 27.6107 42.4513 27.4496 42.0484 27.4496L39.8553 27.4323H39.8438C39.0265 27.4323 38.353 28.0942 38.3415 28.9231L38.33 30.057C37.3976 30.293 36.5111 30.6499 35.6765 31.1276L34.888 30.3275C34.6059 30.0397 34.226 29.8843 33.8231 29.8786C33.4259 29.8786 33.0518 30.034 32.7755 30.3103L31.2099 31.8471C30.6228 32.4227 30.6113 33.3782 31.1926 33.9711L31.9869 34.7769C31.4977 35.5885 31.1236 36.4749 30.8645 37.4131H29.7364C29.7364 37.4131 29.7306 37.4074 29.7249 37.4074C28.9075 37.4074 28.2341 38.0693 28.2225 38.8982L28.2053 41.0854C28.2053 41.4826 28.3549 41.8625 28.6312 42.1503C28.9133 42.4381 29.2932 42.5992 29.6961 42.5992L30.8242 42.6108C31.0545 43.5317 31.4114 44.4239 31.8891 45.2643L31.089 46.0528C30.8012 46.3349 30.6458 46.709 30.6401 47.1062C30.6401 47.5091 30.7897 47.889 31.0717 48.1768L32.6086 49.7366C33.1899 50.3237 34.1397 50.3353 34.7325 49.7539L35.5384 48.9653C36.3557 49.4546 37.2421 49.8287 38.1689 50.082L38.1573 51.2159C38.1573 52.039 38.825 52.7182 39.6481 52.724L41.8354 52.7413H41.8469C42.2441 52.7413 42.624 52.5858 42.906 52.3038C43.1938 52.0218 43.3492 51.6419 43.3492 51.2505L43.3665 50.1165C44.299 49.8805 45.1854 49.5237 46.0142 49.0459L46.8028 49.846C47.3841 50.4331 48.3339 50.4446 48.9267 49.8633L50.4866 48.3264C50.7744 48.0444 50.9356 47.6702 50.9356 47.2673C50.9356 46.8644 50.7859 46.4903 50.5039 46.2082L49.7153 45.3966C50.2046 44.5678 50.5787 43.6871 50.832 42.7662H51.9544C51.9544 42.7662 51.9601 42.7719 51.9659 42.7719C52.7832 42.7719 53.4567 42.1042 53.4682 41.2811L53.4912 39.0824C53.4912 38.2593 52.8235 37.58 52.0004 37.5743L52.0119 37.5685ZM51.9832 41.2696H50.8607C50.1643 41.2754 49.5772 41.7013 49.3987 42.3748C49.1915 43.1576 48.8692 43.9116 48.449 44.6196C48.0921 45.2067 48.1842 45.9607 48.6677 46.4442L49.4505 47.2558L47.8849 48.7927L47.0963 47.9868C46.6071 47.4976 45.8761 47.3997 45.2775 47.7451C44.5752 48.1538 43.8154 48.4588 43.0211 48.6603C42.3477 48.8272 41.893 49.4086 41.8814 50.105L41.8642 51.2389L39.6654 51.2159L39.6769 50.0935C39.6884 49.4086 39.2279 48.8042 38.566 48.6257C37.7774 48.4128 37.0234 48.0962 36.3212 47.676C36.0794 47.5321 35.8147 47.463 35.5499 47.463C35.1642 47.463 34.7843 47.6127 34.4965 47.8947L33.6907 48.6833L32.1539 47.1119L32.9482 46.3291C33.4432 45.8456 33.5468 45.0973 33.2015 44.5045C32.7928 43.7907 32.482 43.0309 32.2863 42.2424C32.1193 41.5804 31.5265 41.1142 30.8415 41.1085L29.7133 41.0912L29.7364 38.8924H30.8645C30.8645 38.8924 30.8703 38.8982 30.876 38.8982C31.5552 38.8982 32.1481 38.4434 32.3265 37.7873C32.5395 36.9929 32.8619 36.2389 33.282 35.5367C33.6274 34.9438 33.5353 34.1955 33.0576 33.7178L32.269 32.9062L33.8404 31.3694L34.6289 32.1637C35.1067 32.6529 35.8607 32.7566 36.4536 32.4112C37.1558 32.0025 37.9156 31.6975 38.7099 31.496C39.3776 31.3291 39.8438 30.7305 39.8438 30.0513L39.8611 28.9173L42.0599 28.9403L42.0484 30.0743C42.0484 30.7535 42.5031 31.3521 43.1593 31.5305C43.9536 31.7435 44.7076 32.0601 45.4041 32.4803C45.997 32.8314 46.7337 32.745 47.2287 32.2615L48.0346 31.473L49.5657 33.0444L48.7656 33.8329C48.2763 34.3164 48.1727 35.0474 48.5181 35.6576C48.921 36.3483 49.2318 37.1081 49.4333 37.9081C49.5944 38.5758 50.1873 39.0478 50.878 39.0536L52.0062 39.0651L51.9774 41.2639L51.9832 41.2696ZM44.9782 33.9653C43.3435 32.8659 41.3807 32.4688 39.4467 32.8429C37.5127 33.2228 35.8434 34.3279 34.7441 35.9626C32.4704 39.3356 33.3626 43.9289 36.7356 46.2025C37.9962 47.0486 39.4237 47.4573 40.8396 47.4573C43.2111 47.4573 45.548 46.3176 46.9697 44.2052C49.2376 40.8322 48.3454 36.2389 44.9782 33.9653ZM45.7322 43.3648C43.9191 46.0528 40.2583 46.7666 37.576 44.9592C34.888 43.1461 34.1742 39.4853 35.9873 36.7972C36.8622 35.4964 38.1976 34.61 39.7345 34.3107C40.1144 34.2358 40.4943 34.2013 40.8742 34.2013C42.0311 34.2013 43.165 34.5467 44.1435 35.2086C46.8316 37.0217 47.5396 40.6825 45.7322 43.3705V43.3648ZM64.4736 31.3866H66.5515C67.4034 31.3866 68.0941 30.6959 68.0941 29.844V27.7719C68.0941 26.92 67.4034 26.2293 66.5515 26.2293H64.4736C63.6217 26.2293 62.931 26.92 62.931 27.7719V28.0597H56.7203V26.3617C56.7203 25.1817 55.7591 24.2205 54.5791 24.2205H52.835V18.004H53.1228C53.9747 18.004 54.6654 17.3133 54.6654 16.4614V14.3893C54.6654 13.5374 53.9747 12.8467 53.1228 12.8467H51.0507C50.1988 12.8467 49.5081 13.5374 49.5081 14.3893V16.4614C49.5081 17.3133 50.1988 18.004 51.0507 18.004H51.3385V24.2205H41.6052V18.004H41.893C42.7448 18.004 43.4356 17.3133 43.4356 16.4614V14.3893C43.4356 13.5374 42.7448 12.8467 41.893 12.8467H39.8208C38.9689 12.8467 38.2725 13.5374 38.2725 14.3893V16.4614C38.2725 17.3133 38.9689 18.004 39.8208 18.004H40.1086V24.2205H30.3753V18.004H30.6631C31.515 18.004 32.2057 17.3133 32.2057 16.4614V14.3893C32.2057 13.5374 31.515 12.8467 30.6631 12.8467H28.5852C27.7333 12.8467 27.0426 13.5374 27.0426 14.3893V16.4614C27.0426 17.3133 27.7333 18.004 28.5852 18.004H28.8787V24.2205H27.1347C25.9547 24.2205 24.9935 25.1817 24.9935 26.3617V28.0597H18.777V27.5704C18.777 26.8279 18.1784 26.2235 17.4359 26.2235H14.9666C14.224 26.2235 13.6254 26.8279 13.6254 27.5704V30.0397C13.6254 30.7823 14.224 31.3866 14.9666 31.3866H17.4416C18.1841 31.3866 18.7828 30.7823 18.7828 30.0397V29.5505H24.9992V39.2838H18.7828V38.7946C18.7828 38.052 18.1841 37.4534 17.4416 37.4534H14.9666C14.224 37.4534 13.6254 38.0578 13.6254 38.7946V41.2639C13.6254 42.0064 14.224 42.6108 14.9666 42.6108H17.4416C18.1841 42.6108 18.7828 42.0064 18.7828 41.2639V40.7746H24.9992V50.5079H18.7828V50.0187C18.7828 49.2762 18.1841 48.6718 17.4416 48.6718H14.9666C14.224 48.6718 13.6254 49.2762 13.6254 50.0187V52.488C13.6254 53.2305 14.224 53.8349 14.9666 53.8349H17.4416C18.1841 53.8349 18.7828 53.2305 18.7828 52.488V51.9987H24.9992V53.7831C24.9992 54.9631 25.9605 55.9243 27.1404 55.9243H28.8787V62.1407H28.5909C27.739 62.1407 27.0483 62.8315 27.0483 63.6833V65.7555C27.0483 66.6074 27.739 67.2981 28.5909 67.2981H30.6688C31.5207 67.2981 32.2114 66.6074 32.2114 65.7555V63.6833C32.2114 62.8315 31.5207 62.1407 30.6688 62.1407H30.3753V55.9243H40.1144V62.1407H39.8266C38.9747 62.1407 38.2782 62.8315 38.2782 63.6833V65.7555C38.2782 66.6074 38.9747 67.2981 39.8266 67.2981H41.8987C42.7506 67.2981 43.4413 66.6074 43.4413 65.7555V63.6833C43.4413 62.8315 42.7506 62.1407 41.8987 62.1407H41.6109V55.9243H51.3442V62.1407H51.0564C50.2046 62.1407 49.5139 62.8315 49.5139 63.6833V65.7555C49.5139 66.6074 50.2046 67.2981 51.0564 67.2981H53.1286C53.9805 67.2981 54.6712 66.6074 54.6712 65.7555V63.6833C54.6712 62.8315 53.9805 62.1407 53.1286 62.1407H52.8408V55.9243H54.5849C55.7648 55.9243 56.7261 54.9631 56.7261 53.7831V51.9987H62.9368V52.2865C62.9368 53.1384 63.6275 53.8291 64.4794 53.8291H66.5573C67.4091 53.8291 68.0999 53.1384 68.0999 52.2865V50.2144C68.0999 49.3625 67.4091 48.6718 66.5573 48.6718H64.4794C63.6275 48.6718 62.9368 49.3625 62.9368 50.2144V50.5022H56.7261V40.7689H62.9368V41.0566C62.9368 41.9085 63.6275 42.5992 64.4794 42.5992H66.5573C67.4091 42.5992 68.0999 41.9085 68.0999 41.0566V38.9845C68.0999 38.1326 67.4091 37.4419 66.5573 37.4419H64.4794C63.6275 37.4419 62.9368 38.1326 62.9368 38.9845V39.2723H56.7261V29.539H62.9368V29.8268C62.9368 30.6786 63.6275 31.3694 64.4794 31.3694L64.4736 31.3866ZM51.0046 16.4614V14.3893C51.0046 14.3893 51.0277 14.3432 51.0507 14.3432H53.1228C53.1228 14.3432 53.1689 14.3663 53.1689 14.3893V16.4614C53.1689 16.4614 53.1459 16.5075 53.1228 16.5075H51.0507C51.0507 16.5075 51.0046 16.4844 51.0046 16.4614ZM39.769 16.4614V14.3893C39.769 14.3893 39.7978 14.3432 39.8208 14.3432H41.893C41.893 14.3432 41.939 14.3663 41.939 14.3893V16.4614C41.939 16.4614 41.916 16.5075 41.893 16.5075H39.8208C39.8208 16.5075 39.769 16.4844 39.769 16.4614ZM28.5391 16.4614V14.3893C28.5391 14.3893 28.5621 14.3432 28.5852 14.3432H30.6631C30.6631 14.3432 30.7091 14.3663 30.7091 14.3893V16.4614C30.7091 16.4614 30.6861 16.5075 30.6631 16.5075H28.5852C28.5852 16.5075 28.5391 16.4844 28.5391 16.4614ZM17.2862 29.8958H15.122V27.7258H17.2862V29.8958ZM17.2862 41.1257H15.122V38.9557H17.2862V41.1257ZM17.2862 52.3556H15.122V50.1856H17.2862V52.3556ZM30.7149 63.7006V65.7728C30.7149 65.7728 30.6919 65.8188 30.6688 65.8188H28.5909C28.5909 65.8188 28.5449 65.7958 28.5449 65.7728V63.7006C28.5449 63.7006 28.5679 63.6546 28.5909 63.6546H30.6688C30.6688 63.6546 30.7149 63.6776 30.7149 63.7006ZM41.9448 63.7006V65.7728C41.9448 65.7728 41.9217 65.8188 41.8987 65.8188H39.8266C39.792 65.8188 39.7748 65.7958 39.7748 65.7728V63.7006C39.7748 63.7006 39.7978 63.6546 39.8266 63.6546H41.8987C41.8987 63.6546 41.9448 63.6776 41.9448 63.7006ZM53.1746 63.7006V65.7728C53.1746 65.7728 53.1516 65.8188 53.1286 65.8188H51.0564C51.0564 65.8188 51.0104 65.7958 51.0104 65.7728V63.7006C51.0104 63.7006 51.0334 63.6546 51.0564 63.6546H53.1286C53.1286 63.6546 53.1746 63.6776 53.1746 63.7006ZM64.4275 50.2317C64.4275 50.2317 64.4506 50.1856 64.4736 50.1856H66.5515C66.5515 50.1856 66.5975 50.2086 66.5975 50.2317V52.3038C66.5975 52.3038 66.5745 52.3498 66.5515 52.3498H64.4736C64.4736 52.3498 64.4275 52.3268 64.4275 52.3038V50.2317ZM64.4275 39.0018C64.4275 39.0018 64.4506 38.9557 64.4736 38.9557H66.5515C66.5515 38.9557 66.5975 38.9787 66.5975 39.0018V41.0739C66.5975 41.0739 66.5745 41.12 66.5515 41.12H64.4736C64.4736 41.12 64.4275 41.0969 64.4275 41.0739V39.0018ZM55.2238 53.8004C55.2238 54.1572 54.936 54.445 54.5791 54.445H27.1404C26.7836 54.445 26.4958 54.1572 26.4958 53.8004V26.3674C26.4958 26.0106 26.7836 25.7228 27.1404 25.7228H54.5791C54.936 25.7228 55.2238 26.0106 55.2238 26.3674V53.8061V53.8004ZM64.4275 27.7719C64.4275 27.7719 64.4506 27.7258 64.4736 27.7258H66.5515C66.5515 27.7258 66.5975 27.7489 66.5975 27.7719V29.844C66.5975 29.844 66.5745 29.8901 66.5515 29.8901H64.4736C64.4736 29.8901 64.4275 29.8671 64.4275 29.844V27.7719ZM41.5016 35.7899C41.1274 35.4446 40.5115 35.4791 40.1949 35.813L36.5226 39.4968C36.2579 39.7673 36.1773 40.1702 36.3039 40.4695C36.4305 40.8437 36.7874 41.0912 37.1903 41.0912H38.4221V43.9979C38.4221 44.516 38.8423 44.9362 39.3603 44.9362H42.3707C42.883 44.9362 43.3032 44.516 43.3032 43.9979V41.0912H44.5349C44.9148 41.0912 45.2544 40.8667 45.4041 40.5098C45.548 40.1587 45.4674 39.7616 45.2026 39.491L41.5303 35.813C41.5303 35.813 41.5131 35.7957 41.5073 35.7899H41.5016ZM42.7391 39.5946C42.221 39.5946 41.8009 40.0148 41.8009 40.5329V43.4396H39.9129V40.5329C39.9129 40.0148 39.4927 39.5946 38.9747 39.5946H38.5315L40.8626 37.2577L43.1938 39.5946H42.7448H42.7391Z"
                    fill="#0052CC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_727_3437">
                    <rect
                      width="54.6816"
                      height="68.3521"
                      fill="white"
                      transform="translate(13.5161 12.7432)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ),
            title: "Security and Redundancy",
            subTitle:
              "Military security with backup, redundancy and capability to operate in disaster situations.",
          },
          {
            icon: (
              <svg
                width="81"
                height="89"
                viewBox="0 0 81 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40.3214" cy="40.1431" r="40" fill="#D9D9D9" />
                <path
                  d="M37.3212 52.1921C30.6546 52.1921 25.1994 46.7373 25.1994 40.0704C25.1994 33.4034 30.6542 27.9486 37.3212 27.9486C37.9273 27.9486 38.3313 27.5446 38.3313 26.9385V15.8266C38.3313 15.2205 37.9273 14.8164 37.3212 14.8164H32.2705C31.7654 14.8164 31.2603 15.2205 31.2603 15.8266C31.1593 18.2509 29.139 19.7662 27.1187 19.7662C26.1086 19.7662 25.1994 19.3621 24.3913 18.655C23.9873 18.2509 23.3812 18.3519 22.9771 18.655L15.8049 25.8272C15.6029 26.0292 15.5019 26.3322 15.5019 26.5343C15.5019 26.8373 15.6029 27.0394 15.8049 27.2414C16.5121 28.0495 16.9161 28.9586 16.9161 29.9689C16.9161 31.8882 15.5019 34.0094 12.9765 34.1104C12.4714 34.1104 11.9664 34.6155 11.9664 35.1206V45.222C11.9664 45.7271 12.3704 46.2322 12.9765 46.2322C14.5927 46.3332 15.9059 47.2423 16.613 48.7575C17.2191 50.2727 16.9161 51.889 15.8049 53.1012C15.6029 53.3032 15.5019 53.5052 15.5019 53.8083C15.5019 54.1114 15.6029 54.3134 15.8049 54.5154L22.9771 61.6876C23.3812 62.0917 23.9873 62.0917 24.3913 61.6876C25.1994 60.9805 26.1085 60.5764 27.1187 60.5764C29.0381 60.5764 31.1593 61.9906 31.2603 64.516C31.2603 65.0211 31.7654 65.5262 32.2705 65.5262H37.3212C37.9273 65.5262 38.3313 65.1221 38.3313 64.516V53.2024C38.3313 52.5963 37.9273 52.1921 37.3212 52.1921ZM33.1796 63.3041C32.5735 60.2736 29.8462 58.4554 27.2197 58.4554C26.0076 58.4554 24.8964 58.8594 23.8863 59.4655L18.0274 53.6067C19.1386 51.8894 19.3406 49.8691 18.5325 47.9498C17.7244 46.0305 16.1082 44.7174 14.0879 44.3133V36.0304C17.1183 35.4243 18.9366 32.697 18.9366 30.0705C18.9366 28.8584 18.5325 27.7472 17.9264 26.7371L23.7853 20.8782C24.7954 21.5854 25.9065 21.8884 27.1187 21.8884C29.7451 21.8884 32.4725 20.0701 33.0786 17.0397H36.3111V26.2322C28.9372 26.7373 23.1795 32.8988 23.1795 40.2734C23.1795 47.6479 28.9373 53.8096 36.3111 54.3146V63.3047L33.1796 63.3041ZM38.3314 49.162C38.3314 49.7681 37.9273 50.1722 37.3213 50.1722C31.7654 50.1722 27.2198 45.6265 27.2198 40.0707C27.2198 34.5149 31.7654 29.9692 37.3213 29.9692C37.9273 29.9692 38.3314 30.3733 38.3314 30.9794C38.3314 31.5855 37.9273 31.9895 37.3213 31.9895C32.8766 31.9895 29.2401 35.6261 29.2401 40.0707C29.2401 44.5153 32.8766 48.1519 37.3213 48.1519C37.9273 48.1519 38.3314 48.5559 38.3314 49.162ZM46.4126 32.9997C48.3319 32.9997 49.8471 31.6865 50.3522 29.9692H54.6958C55.0999 31.6865 56.7161 32.9997 58.6354 32.9997C60.8577 32.9997 62.676 31.1814 62.676 28.9591C62.676 26.7368 60.8577 24.9185 58.6354 24.9185C56.7161 24.9185 55.2009 26.2317 54.6958 27.9489H50.3522C49.9481 26.5347 48.8369 25.4236 47.4228 25.0196V20.878C47.4228 20.2719 47.8268 19.8678 48.4329 19.8678H54.5948C54.9988 21.5851 56.6151 22.8983 58.5344 22.8983C60.7567 22.8983 62.575 21.08 62.575 18.8577C62.575 16.6354 60.7567 14.8171 58.5344 14.8171C56.6151 14.8171 55.0999 16.1303 54.5948 17.8476H48.4329C46.7157 17.8476 45.4025 19.1607 45.4025 20.878V25.0196C43.6853 25.4236 42.372 27.0398 42.372 28.9592C42.372 29.4642 42.4731 29.8683 42.5741 30.2723L38.7355 34.1109C38.3315 34.1109 37.8264 34.0099 37.3213 34.0099C33.9879 34.0099 31.2604 36.7373 31.2604 40.0707C31.2604 43.4042 33.9879 46.1316 37.3213 46.1316C37.8264 46.1316 38.3315 46.0306 38.7355 45.9296L42.5741 49.7681C42.4731 50.2732 42.372 50.6772 42.372 51.1823C42.372 53.1016 43.6852 54.6168 45.4025 55.1219V59.2635C45.4025 60.9807 46.7156 62.2939 48.4329 62.2939H54.5948C54.9988 64.0112 56.6151 65.3244 58.5344 65.3244C60.7567 65.3244 62.575 63.5061 62.575 61.2838C62.575 59.0615 60.7567 57.2432 58.5344 57.2432C56.6151 57.2432 55.0999 58.5564 54.5948 60.2736H48.4329C47.8268 60.2736 47.4228 59.8696 47.4228 59.2635V55.1219C48.837 54.7179 49.9481 53.6067 50.3522 52.1925H54.6958C55.0999 53.9098 56.7161 55.223 58.6354 55.223C60.8577 55.223 62.676 53.4047 62.676 51.1824C62.676 48.9601 60.8577 47.1418 58.6354 47.1418C56.7161 47.1418 55.2009 48.455 54.6958 50.1722H50.3522C49.9481 48.455 48.3319 47.1418 46.4126 47.1418C45.4024 47.1418 44.4933 47.5459 43.7862 48.152L40.7557 45.1215C42.0689 44.2124 43.0791 42.7982 43.2811 41.0809H54.5947C54.9988 42.7982 56.615 44.1114 58.5343 44.1114C60.7566 44.1114 62.5749 42.2931 62.5749 40.0708C62.5749 37.8485 60.7566 36.0302 58.5343 36.0302C56.615 36.0302 55.0998 37.3434 54.5947 39.0606H43.2811C42.978 37.4444 42.0689 35.9292 40.7557 35.0201L43.7862 31.9896C44.4933 32.5957 45.4024 32.9997 46.4126 32.9997ZM58.5343 16.8373C59.6455 16.8373 60.5546 17.7464 60.5546 18.8576C60.5546 19.9688 59.6455 20.8779 58.5343 20.8779C57.4231 20.8779 56.514 19.9688 56.514 18.8576C56.514 17.7464 57.4231 16.8373 58.5343 16.8373ZM58.5343 59.2635C59.6455 59.2635 60.5546 60.1726 60.5546 61.2838C60.5546 62.395 59.6455 63.3041 58.5343 63.3041C57.4231 63.3041 56.514 62.395 56.514 61.2838C56.514 60.1726 57.4231 59.2635 58.5343 59.2635ZM58.5343 49.162C59.6455 49.162 60.5546 50.0711 60.5546 51.1823C60.5546 52.2935 59.6455 53.2026 58.5343 53.2026C57.4231 53.2026 56.514 52.2935 56.514 51.1823C56.514 50.0711 57.4231 49.162 58.5343 49.162ZM46.4126 49.162C47.5238 49.162 48.4329 50.0711 48.4329 51.1823C48.4329 52.2935 47.5238 53.2026 46.4126 53.2026C45.3014 53.2026 44.3923 52.2935 44.3923 51.1823C44.3923 50.0711 45.3014 49.162 46.4126 49.162ZM58.5343 38.0501C59.6455 38.0501 60.5546 38.9592 60.5546 40.0704C60.5546 41.1816 59.6455 42.0907 58.5343 42.0907C57.4231 42.0907 56.514 41.1816 56.514 40.0704C56.514 38.9592 57.4231 38.0501 58.5343 38.0501ZM37.3216 44.111C35.0993 44.111 33.281 42.2927 33.281 40.0704C33.281 37.8481 35.0993 36.0298 37.3216 36.0298C39.5439 36.0298 41.3622 37.8481 41.3622 40.0704C41.3622 42.2927 39.5439 44.111 37.3216 44.111ZM58.5343 26.9388C59.6455 26.9388 60.5546 27.8479 60.5546 28.9591C60.5546 30.0703 59.6455 30.9794 58.5343 30.9794C57.4231 30.9794 56.514 30.0703 56.514 28.9591C56.514 27.8479 57.4231 26.9388 58.5343 26.9388ZM46.4126 26.9388C47.5238 26.9388 48.4329 27.8479 48.4329 28.9591C48.4329 30.0703 47.5238 30.9794 46.4126 30.9794C45.3014 30.9794 44.3923 30.0703 44.3923 28.9591C44.3923 27.8479 45.3014 26.9388 46.4126 26.9388ZM38.3314 40.0704C38.3314 40.6765 37.9273 41.0805 37.3213 41.0805C36.7152 41.0805 36.3111 40.6765 36.3111 40.0704C36.3111 39.4643 36.7152 39.0602 37.3213 39.0602C37.9273 39.0602 38.3314 39.4643 38.3314 40.0704Z"
                  fill="#0052CC"
                />
              </svg>
            ),
            title: "Cost and Experience Sharing",
            subTitle:
              "Benefits from the experience and cost-sharing across hundreds of cities.",
          },
          {
            icon: (
              <svg
                width="81"
                height="89"
                viewBox="0 0 81 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40.3214" cy="40.1431" r="40" fill="#D9D9D9" />
                <path
                  d="M37.3212 52.1921C30.6546 52.1921 25.1994 46.7373 25.1994 40.0704C25.1994 33.4034 30.6542 27.9486 37.3212 27.9486C37.9273 27.9486 38.3313 27.5446 38.3313 26.9385V15.8266C38.3313 15.2205 37.9273 14.8164 37.3212 14.8164H32.2705C31.7654 14.8164 31.2603 15.2205 31.2603 15.8266C31.1593 18.2509 29.139 19.7662 27.1187 19.7662C26.1086 19.7662 25.1994 19.3621 24.3913 18.655C23.9873 18.2509 23.3812 18.3519 22.9771 18.655L15.8049 25.8272C15.6029 26.0292 15.5019 26.3322 15.5019 26.5343C15.5019 26.8373 15.6029 27.0394 15.8049 27.2414C16.5121 28.0495 16.9161 28.9586 16.9161 29.9689C16.9161 31.8882 15.5019 34.0094 12.9765 34.1104C12.4714 34.1104 11.9664 34.6155 11.9664 35.1206V45.222C11.9664 45.7271 12.3704 46.2322 12.9765 46.2322C14.5927 46.3332 15.9059 47.2423 16.613 48.7575C17.2191 50.2727 16.9161 51.889 15.8049 53.1012C15.6029 53.3032 15.5019 53.5052 15.5019 53.8083C15.5019 54.1114 15.6029 54.3134 15.8049 54.5154L22.9771 61.6876C23.3812 62.0917 23.9873 62.0917 24.3913 61.6876C25.1994 60.9805 26.1085 60.5764 27.1187 60.5764C29.0381 60.5764 31.1593 61.9906 31.2603 64.516C31.2603 65.0211 31.7654 65.5262 32.2705 65.5262H37.3212C37.9273 65.5262 38.3313 65.1221 38.3313 64.516V53.2024C38.3313 52.5963 37.9273 52.1921 37.3212 52.1921ZM33.1796 63.3041C32.5735 60.2736 29.8462 58.4554 27.2197 58.4554C26.0076 58.4554 24.8964 58.8594 23.8863 59.4655L18.0274 53.6067C19.1386 51.8894 19.3406 49.8691 18.5325 47.9498C17.7244 46.0305 16.1082 44.7174 14.0879 44.3133V36.0304C17.1183 35.4243 18.9366 32.697 18.9366 30.0705C18.9366 28.8584 18.5325 27.7472 17.9264 26.7371L23.7853 20.8782C24.7954 21.5854 25.9065 21.8884 27.1187 21.8884C29.7451 21.8884 32.4725 20.0701 33.0786 17.0397H36.3111V26.2322C28.9372 26.7373 23.1795 32.8988 23.1795 40.2734C23.1795 47.6479 28.9373 53.8096 36.3111 54.3146V63.3047L33.1796 63.3041ZM38.3314 49.162C38.3314 49.7681 37.9273 50.1722 37.3213 50.1722C31.7654 50.1722 27.2198 45.6265 27.2198 40.0707C27.2198 34.5149 31.7654 29.9692 37.3213 29.9692C37.9273 29.9692 38.3314 30.3733 38.3314 30.9794C38.3314 31.5855 37.9273 31.9895 37.3213 31.9895C32.8766 31.9895 29.2401 35.6261 29.2401 40.0707C29.2401 44.5153 32.8766 48.1519 37.3213 48.1519C37.9273 48.1519 38.3314 48.5559 38.3314 49.162ZM46.4126 32.9997C48.3319 32.9997 49.8471 31.6865 50.3522 29.9692H54.6958C55.0999 31.6865 56.7161 32.9997 58.6354 32.9997C60.8577 32.9997 62.676 31.1814 62.676 28.9591C62.676 26.7368 60.8577 24.9185 58.6354 24.9185C56.7161 24.9185 55.2009 26.2317 54.6958 27.9489H50.3522C49.9481 26.5347 48.8369 25.4236 47.4228 25.0196V20.878C47.4228 20.2719 47.8268 19.8678 48.4329 19.8678H54.5948C54.9988 21.5851 56.6151 22.8983 58.5344 22.8983C60.7567 22.8983 62.575 21.08 62.575 18.8577C62.575 16.6354 60.7567 14.8171 58.5344 14.8171C56.6151 14.8171 55.0999 16.1303 54.5948 17.8476H48.4329C46.7157 17.8476 45.4025 19.1607 45.4025 20.878V25.0196C43.6853 25.4236 42.372 27.0398 42.372 28.9592C42.372 29.4642 42.4731 29.8683 42.5741 30.2723L38.7355 34.1109C38.3315 34.1109 37.8264 34.0099 37.3213 34.0099C33.9879 34.0099 31.2604 36.7373 31.2604 40.0707C31.2604 43.4042 33.9879 46.1316 37.3213 46.1316C37.8264 46.1316 38.3315 46.0306 38.7355 45.9296L42.5741 49.7681C42.4731 50.2732 42.372 50.6772 42.372 51.1823C42.372 53.1016 43.6852 54.6168 45.4025 55.1219V59.2635C45.4025 60.9807 46.7156 62.2939 48.4329 62.2939H54.5948C54.9988 64.0112 56.6151 65.3244 58.5344 65.3244C60.7567 65.3244 62.575 63.5061 62.575 61.2838C62.575 59.0615 60.7567 57.2432 58.5344 57.2432C56.6151 57.2432 55.0999 58.5564 54.5948 60.2736H48.4329C47.8268 60.2736 47.4228 59.8696 47.4228 59.2635V55.1219C48.837 54.7179 49.9481 53.6067 50.3522 52.1925H54.6958C55.0999 53.9098 56.7161 55.223 58.6354 55.223C60.8577 55.223 62.676 53.4047 62.676 51.1824C62.676 48.9601 60.8577 47.1418 58.6354 47.1418C56.7161 47.1418 55.2009 48.455 54.6958 50.1722H50.3522C49.9481 48.455 48.3319 47.1418 46.4126 47.1418C45.4024 47.1418 44.4933 47.5459 43.7862 48.152L40.7557 45.1215C42.0689 44.2124 43.0791 42.7982 43.2811 41.0809H54.5947C54.9988 42.7982 56.615 44.1114 58.5343 44.1114C60.7566 44.1114 62.5749 42.2931 62.5749 40.0708C62.5749 37.8485 60.7566 36.0302 58.5343 36.0302C56.615 36.0302 55.0998 37.3434 54.5947 39.0606H43.2811C42.978 37.4444 42.0689 35.9292 40.7557 35.0201L43.7862 31.9896C44.4933 32.5957 45.4024 32.9997 46.4126 32.9997ZM58.5343 16.8373C59.6455 16.8373 60.5546 17.7464 60.5546 18.8576C60.5546 19.9688 59.6455 20.8779 58.5343 20.8779C57.4231 20.8779 56.514 19.9688 56.514 18.8576C56.514 17.7464 57.4231 16.8373 58.5343 16.8373ZM58.5343 59.2635C59.6455 59.2635 60.5546 60.1726 60.5546 61.2838C60.5546 62.395 59.6455 63.3041 58.5343 63.3041C57.4231 63.3041 56.514 62.395 56.514 61.2838C56.514 60.1726 57.4231 59.2635 58.5343 59.2635ZM58.5343 49.162C59.6455 49.162 60.5546 50.0711 60.5546 51.1823C60.5546 52.2935 59.6455 53.2026 58.5343 53.2026C57.4231 53.2026 56.514 52.2935 56.514 51.1823C56.514 50.0711 57.4231 49.162 58.5343 49.162ZM46.4126 49.162C47.5238 49.162 48.4329 50.0711 48.4329 51.1823C48.4329 52.2935 47.5238 53.2026 46.4126 53.2026C45.3014 53.2026 44.3923 52.2935 44.3923 51.1823C44.3923 50.0711 45.3014 49.162 46.4126 49.162ZM58.5343 38.0501C59.6455 38.0501 60.5546 38.9592 60.5546 40.0704C60.5546 41.1816 59.6455 42.0907 58.5343 42.0907C57.4231 42.0907 56.514 41.1816 56.514 40.0704C56.514 38.9592 57.4231 38.0501 58.5343 38.0501ZM37.3216 44.111C35.0993 44.111 33.281 42.2927 33.281 40.0704C33.281 37.8481 35.0993 36.0298 37.3216 36.0298C39.5439 36.0298 41.3622 37.8481 41.3622 40.0704C41.3622 42.2927 39.5439 44.111 37.3216 44.111ZM58.5343 26.9388C59.6455 26.9388 60.5546 27.8479 60.5546 28.9591C60.5546 30.0703 59.6455 30.9794 58.5343 30.9794C57.4231 30.9794 56.514 30.0703 56.514 28.9591C56.514 27.8479 57.4231 26.9388 58.5343 26.9388ZM46.4126 26.9388C47.5238 26.9388 48.4329 27.8479 48.4329 28.9591C48.4329 30.0703 47.5238 30.9794 46.4126 30.9794C45.3014 30.9794 44.3923 30.0703 44.3923 28.9591C44.3923 27.8479 45.3014 26.9388 46.4126 26.9388ZM38.3314 40.0704C38.3314 40.6765 37.9273 41.0805 37.3213 41.0805C36.7152 41.0805 36.3111 40.6765 36.3111 40.0704C36.3111 39.4643 36.7152 39.0602 37.3213 39.0602C37.9273 39.0602 38.3314 39.4643 38.3314 40.0704Z"
                  fill="#0052CC"
                />
              </svg>
            ),
            title: "AI-Powered Solutions",
            subTitle:
              "Leveraging AI for practical and scalable congestion solutions.",
          },
          {
            icon: (
              <svg
                width="81"
                height="89"
                viewBox="0 0 81 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40.3214" cy="40.1431" r="40" fill="#D9D9D9" />
                <path
                  d="M37.3212 52.1921C30.6546 52.1921 25.1994 46.7373 25.1994 40.0704C25.1994 33.4034 30.6542 27.9486 37.3212 27.9486C37.9273 27.9486 38.3313 27.5446 38.3313 26.9385V15.8266C38.3313 15.2205 37.9273 14.8164 37.3212 14.8164H32.2705C31.7654 14.8164 31.2603 15.2205 31.2603 15.8266C31.1593 18.2509 29.139 19.7662 27.1187 19.7662C26.1086 19.7662 25.1994 19.3621 24.3913 18.655C23.9873 18.2509 23.3812 18.3519 22.9771 18.655L15.8049 25.8272C15.6029 26.0292 15.5019 26.3322 15.5019 26.5343C15.5019 26.8373 15.6029 27.0394 15.8049 27.2414C16.5121 28.0495 16.9161 28.9586 16.9161 29.9689C16.9161 31.8882 15.5019 34.0094 12.9765 34.1104C12.4714 34.1104 11.9664 34.6155 11.9664 35.1206V45.222C11.9664 45.7271 12.3704 46.2322 12.9765 46.2322C14.5927 46.3332 15.9059 47.2423 16.613 48.7575C17.2191 50.2727 16.9161 51.889 15.8049 53.1012C15.6029 53.3032 15.5019 53.5052 15.5019 53.8083C15.5019 54.1114 15.6029 54.3134 15.8049 54.5154L22.9771 61.6876C23.3812 62.0917 23.9873 62.0917 24.3913 61.6876C25.1994 60.9805 26.1085 60.5764 27.1187 60.5764C29.0381 60.5764 31.1593 61.9906 31.2603 64.516C31.2603 65.0211 31.7654 65.5262 32.2705 65.5262H37.3212C37.9273 65.5262 38.3313 65.1221 38.3313 64.516V53.2024C38.3313 52.5963 37.9273 52.1921 37.3212 52.1921ZM33.1796 63.3041C32.5735 60.2736 29.8462 58.4554 27.2197 58.4554C26.0076 58.4554 24.8964 58.8594 23.8863 59.4655L18.0274 53.6067C19.1386 51.8894 19.3406 49.8691 18.5325 47.9498C17.7244 46.0305 16.1082 44.7174 14.0879 44.3133V36.0304C17.1183 35.4243 18.9366 32.697 18.9366 30.0705C18.9366 28.8584 18.5325 27.7472 17.9264 26.7371L23.7853 20.8782C24.7954 21.5854 25.9065 21.8884 27.1187 21.8884C29.7451 21.8884 32.4725 20.0701 33.0786 17.0397H36.3111V26.2322C28.9372 26.7373 23.1795 32.8988 23.1795 40.2734C23.1795 47.6479 28.9373 53.8096 36.3111 54.3146V63.3047L33.1796 63.3041ZM38.3314 49.162C38.3314 49.7681 37.9273 50.1722 37.3213 50.1722C31.7654 50.1722 27.2198 45.6265 27.2198 40.0707C27.2198 34.5149 31.7654 29.9692 37.3213 29.9692C37.9273 29.9692 38.3314 30.3733 38.3314 30.9794C38.3314 31.5855 37.9273 31.9895 37.3213 31.9895C32.8766 31.9895 29.2401 35.6261 29.2401 40.0707C29.2401 44.5153 32.8766 48.1519 37.3213 48.1519C37.9273 48.1519 38.3314 48.5559 38.3314 49.162ZM46.4126 32.9997C48.3319 32.9997 49.8471 31.6865 50.3522 29.9692H54.6958C55.0999 31.6865 56.7161 32.9997 58.6354 32.9997C60.8577 32.9997 62.676 31.1814 62.676 28.9591C62.676 26.7368 60.8577 24.9185 58.6354 24.9185C56.7161 24.9185 55.2009 26.2317 54.6958 27.9489H50.3522C49.9481 26.5347 48.8369 25.4236 47.4228 25.0196V20.878C47.4228 20.2719 47.8268 19.8678 48.4329 19.8678H54.5948C54.9988 21.5851 56.6151 22.8983 58.5344 22.8983C60.7567 22.8983 62.575 21.08 62.575 18.8577C62.575 16.6354 60.7567 14.8171 58.5344 14.8171C56.6151 14.8171 55.0999 16.1303 54.5948 17.8476H48.4329C46.7157 17.8476 45.4025 19.1607 45.4025 20.878V25.0196C43.6853 25.4236 42.372 27.0398 42.372 28.9592C42.372 29.4642 42.4731 29.8683 42.5741 30.2723L38.7355 34.1109C38.3315 34.1109 37.8264 34.0099 37.3213 34.0099C33.9879 34.0099 31.2604 36.7373 31.2604 40.0707C31.2604 43.4042 33.9879 46.1316 37.3213 46.1316C37.8264 46.1316 38.3315 46.0306 38.7355 45.9296L42.5741 49.7681C42.4731 50.2732 42.372 50.6772 42.372 51.1823C42.372 53.1016 43.6852 54.6168 45.4025 55.1219V59.2635C45.4025 60.9807 46.7156 62.2939 48.4329 62.2939H54.5948C54.9988 64.0112 56.6151 65.3244 58.5344 65.3244C60.7567 65.3244 62.575 63.5061 62.575 61.2838C62.575 59.0615 60.7567 57.2432 58.5344 57.2432C56.6151 57.2432 55.0999 58.5564 54.5948 60.2736H48.4329C47.8268 60.2736 47.4228 59.8696 47.4228 59.2635V55.1219C48.837 54.7179 49.9481 53.6067 50.3522 52.1925H54.6958C55.0999 53.9098 56.7161 55.223 58.6354 55.223C60.8577 55.223 62.676 53.4047 62.676 51.1824C62.676 48.9601 60.8577 47.1418 58.6354 47.1418C56.7161 47.1418 55.2009 48.455 54.6958 50.1722H50.3522C49.9481 48.455 48.3319 47.1418 46.4126 47.1418C45.4024 47.1418 44.4933 47.5459 43.7862 48.152L40.7557 45.1215C42.0689 44.2124 43.0791 42.7982 43.2811 41.0809H54.5947C54.9988 42.7982 56.615 44.1114 58.5343 44.1114C60.7566 44.1114 62.5749 42.2931 62.5749 40.0708C62.5749 37.8485 60.7566 36.0302 58.5343 36.0302C56.615 36.0302 55.0998 37.3434 54.5947 39.0606H43.2811C42.978 37.4444 42.0689 35.9292 40.7557 35.0201L43.7862 31.9896C44.4933 32.5957 45.4024 32.9997 46.4126 32.9997ZM58.5343 16.8373C59.6455 16.8373 60.5546 17.7464 60.5546 18.8576C60.5546 19.9688 59.6455 20.8779 58.5343 20.8779C57.4231 20.8779 56.514 19.9688 56.514 18.8576C56.514 17.7464 57.4231 16.8373 58.5343 16.8373ZM58.5343 59.2635C59.6455 59.2635 60.5546 60.1726 60.5546 61.2838C60.5546 62.395 59.6455 63.3041 58.5343 63.3041C57.4231 63.3041 56.514 62.395 56.514 61.2838C56.514 60.1726 57.4231 59.2635 58.5343 59.2635ZM58.5343 49.162C59.6455 49.162 60.5546 50.0711 60.5546 51.1823C60.5546 52.2935 59.6455 53.2026 58.5343 53.2026C57.4231 53.2026 56.514 52.2935 56.514 51.1823C56.514 50.0711 57.4231 49.162 58.5343 49.162ZM46.4126 49.162C47.5238 49.162 48.4329 50.0711 48.4329 51.1823C48.4329 52.2935 47.5238 53.2026 46.4126 53.2026C45.3014 53.2026 44.3923 52.2935 44.3923 51.1823C44.3923 50.0711 45.3014 49.162 46.4126 49.162ZM58.5343 38.0501C59.6455 38.0501 60.5546 38.9592 60.5546 40.0704C60.5546 41.1816 59.6455 42.0907 58.5343 42.0907C57.4231 42.0907 56.514 41.1816 56.514 40.0704C56.514 38.9592 57.4231 38.0501 58.5343 38.0501ZM37.3216 44.111C35.0993 44.111 33.281 42.2927 33.281 40.0704C33.281 37.8481 35.0993 36.0298 37.3216 36.0298C39.5439 36.0298 41.3622 37.8481 41.3622 40.0704C41.3622 42.2927 39.5439 44.111 37.3216 44.111ZM58.5343 26.9388C59.6455 26.9388 60.5546 27.8479 60.5546 28.9591C60.5546 30.0703 59.6455 30.9794 58.5343 30.9794C57.4231 30.9794 56.514 30.0703 56.514 28.9591C56.514 27.8479 57.4231 26.9388 58.5343 26.9388ZM46.4126 26.9388C47.5238 26.9388 48.4329 27.8479 48.4329 28.9591C48.4329 30.0703 47.5238 30.9794 46.4126 30.9794C45.3014 30.9794 44.3923 30.0703 44.3923 28.9591C44.3923 27.8479 45.3014 26.9388 46.4126 26.9388ZM38.3314 40.0704C38.3314 40.6765 37.9273 41.0805 37.3213 41.0805C36.7152 41.0805 36.3111 40.6765 36.3111 40.0704C36.3111 39.4643 36.7152 39.0602 37.3213 39.0602C37.9273 39.0602 38.3314 39.4643 38.3314 40.0704Z"
                  fill="#0052CC"
                />
              </svg>
            ),
            title: "Comprehensive Enrollment",
            subTitle:
              "Easy enrollment of cars, drivers, passengers, parking lots, and other road users.",
          },
          {
            icon: (
              <svg
                width="81"
                height="89"
                viewBox="0 0 81 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40.3214" cy="40.1431" r="40" fill="#D9D9D9" />
                <path
                  d="M37.3212 52.1921C30.6546 52.1921 25.1994 46.7373 25.1994 40.0704C25.1994 33.4034 30.6542 27.9486 37.3212 27.9486C37.9273 27.9486 38.3313 27.5446 38.3313 26.9385V15.8266C38.3313 15.2205 37.9273 14.8164 37.3212 14.8164H32.2705C31.7654 14.8164 31.2603 15.2205 31.2603 15.8266C31.1593 18.2509 29.139 19.7662 27.1187 19.7662C26.1086 19.7662 25.1994 19.3621 24.3913 18.655C23.9873 18.2509 23.3812 18.3519 22.9771 18.655L15.8049 25.8272C15.6029 26.0292 15.5019 26.3322 15.5019 26.5343C15.5019 26.8373 15.6029 27.0394 15.8049 27.2414C16.5121 28.0495 16.9161 28.9586 16.9161 29.9689C16.9161 31.8882 15.5019 34.0094 12.9765 34.1104C12.4714 34.1104 11.9664 34.6155 11.9664 35.1206V45.222C11.9664 45.7271 12.3704 46.2322 12.9765 46.2322C14.5927 46.3332 15.9059 47.2423 16.613 48.7575C17.2191 50.2727 16.9161 51.889 15.8049 53.1012C15.6029 53.3032 15.5019 53.5052 15.5019 53.8083C15.5019 54.1114 15.6029 54.3134 15.8049 54.5154L22.9771 61.6876C23.3812 62.0917 23.9873 62.0917 24.3913 61.6876C25.1994 60.9805 26.1085 60.5764 27.1187 60.5764C29.0381 60.5764 31.1593 61.9906 31.2603 64.516C31.2603 65.0211 31.7654 65.5262 32.2705 65.5262H37.3212C37.9273 65.5262 38.3313 65.1221 38.3313 64.516V53.2024C38.3313 52.5963 37.9273 52.1921 37.3212 52.1921ZM33.1796 63.3041C32.5735 60.2736 29.8462 58.4554 27.2197 58.4554C26.0076 58.4554 24.8964 58.8594 23.8863 59.4655L18.0274 53.6067C19.1386 51.8894 19.3406 49.8691 18.5325 47.9498C17.7244 46.0305 16.1082 44.7174 14.0879 44.3133V36.0304C17.1183 35.4243 18.9366 32.697 18.9366 30.0705C18.9366 28.8584 18.5325 27.7472 17.9264 26.7371L23.7853 20.8782C24.7954 21.5854 25.9065 21.8884 27.1187 21.8884C29.7451 21.8884 32.4725 20.0701 33.0786 17.0397H36.3111V26.2322C28.9372 26.7373 23.1795 32.8988 23.1795 40.2734C23.1795 47.6479 28.9373 53.8096 36.3111 54.3146V63.3047L33.1796 63.3041ZM38.3314 49.162C38.3314 49.7681 37.9273 50.1722 37.3213 50.1722C31.7654 50.1722 27.2198 45.6265 27.2198 40.0707C27.2198 34.5149 31.7654 29.9692 37.3213 29.9692C37.9273 29.9692 38.3314 30.3733 38.3314 30.9794C38.3314 31.5855 37.9273 31.9895 37.3213 31.9895C32.8766 31.9895 29.2401 35.6261 29.2401 40.0707C29.2401 44.5153 32.8766 48.1519 37.3213 48.1519C37.9273 48.1519 38.3314 48.5559 38.3314 49.162ZM46.4126 32.9997C48.3319 32.9997 49.8471 31.6865 50.3522 29.9692H54.6958C55.0999 31.6865 56.7161 32.9997 58.6354 32.9997C60.8577 32.9997 62.676 31.1814 62.676 28.9591C62.676 26.7368 60.8577 24.9185 58.6354 24.9185C56.7161 24.9185 55.2009 26.2317 54.6958 27.9489H50.3522C49.9481 26.5347 48.8369 25.4236 47.4228 25.0196V20.878C47.4228 20.2719 47.8268 19.8678 48.4329 19.8678H54.5948C54.9988 21.5851 56.6151 22.8983 58.5344 22.8983C60.7567 22.8983 62.575 21.08 62.575 18.8577C62.575 16.6354 60.7567 14.8171 58.5344 14.8171C56.6151 14.8171 55.0999 16.1303 54.5948 17.8476H48.4329C46.7157 17.8476 45.4025 19.1607 45.4025 20.878V25.0196C43.6853 25.4236 42.372 27.0398 42.372 28.9592C42.372 29.4642 42.4731 29.8683 42.5741 30.2723L38.7355 34.1109C38.3315 34.1109 37.8264 34.0099 37.3213 34.0099C33.9879 34.0099 31.2604 36.7373 31.2604 40.0707C31.2604 43.4042 33.9879 46.1316 37.3213 46.1316C37.8264 46.1316 38.3315 46.0306 38.7355 45.9296L42.5741 49.7681C42.4731 50.2732 42.372 50.6772 42.372 51.1823C42.372 53.1016 43.6852 54.6168 45.4025 55.1219V59.2635C45.4025 60.9807 46.7156 62.2939 48.4329 62.2939H54.5948C54.9988 64.0112 56.6151 65.3244 58.5344 65.3244C60.7567 65.3244 62.575 63.5061 62.575 61.2838C62.575 59.0615 60.7567 57.2432 58.5344 57.2432C56.6151 57.2432 55.0999 58.5564 54.5948 60.2736H48.4329C47.8268 60.2736 47.4228 59.8696 47.4228 59.2635V55.1219C48.837 54.7179 49.9481 53.6067 50.3522 52.1925H54.6958C55.0999 53.9098 56.7161 55.223 58.6354 55.223C60.8577 55.223 62.676 53.4047 62.676 51.1824C62.676 48.9601 60.8577 47.1418 58.6354 47.1418C56.7161 47.1418 55.2009 48.455 54.6958 50.1722H50.3522C49.9481 48.455 48.3319 47.1418 46.4126 47.1418C45.4024 47.1418 44.4933 47.5459 43.7862 48.152L40.7557 45.1215C42.0689 44.2124 43.0791 42.7982 43.2811 41.0809H54.5947C54.9988 42.7982 56.615 44.1114 58.5343 44.1114C60.7566 44.1114 62.5749 42.2931 62.5749 40.0708C62.5749 37.8485 60.7566 36.0302 58.5343 36.0302C56.615 36.0302 55.0998 37.3434 54.5947 39.0606H43.2811C42.978 37.4444 42.0689 35.9292 40.7557 35.0201L43.7862 31.9896C44.4933 32.5957 45.4024 32.9997 46.4126 32.9997ZM58.5343 16.8373C59.6455 16.8373 60.5546 17.7464 60.5546 18.8576C60.5546 19.9688 59.6455 20.8779 58.5343 20.8779C57.4231 20.8779 56.514 19.9688 56.514 18.8576C56.514 17.7464 57.4231 16.8373 58.5343 16.8373ZM58.5343 59.2635C59.6455 59.2635 60.5546 60.1726 60.5546 61.2838C60.5546 62.395 59.6455 63.3041 58.5343 63.3041C57.4231 63.3041 56.514 62.395 56.514 61.2838C56.514 60.1726 57.4231 59.2635 58.5343 59.2635ZM58.5343 49.162C59.6455 49.162 60.5546 50.0711 60.5546 51.1823C60.5546 52.2935 59.6455 53.2026 58.5343 53.2026C57.4231 53.2026 56.514 52.2935 56.514 51.1823C56.514 50.0711 57.4231 49.162 58.5343 49.162ZM46.4126 49.162C47.5238 49.162 48.4329 50.0711 48.4329 51.1823C48.4329 52.2935 47.5238 53.2026 46.4126 53.2026C45.3014 53.2026 44.3923 52.2935 44.3923 51.1823C44.3923 50.0711 45.3014 49.162 46.4126 49.162ZM58.5343 38.0501C59.6455 38.0501 60.5546 38.9592 60.5546 40.0704C60.5546 41.1816 59.6455 42.0907 58.5343 42.0907C57.4231 42.0907 56.514 41.1816 56.514 40.0704C56.514 38.9592 57.4231 38.0501 58.5343 38.0501ZM37.3216 44.111C35.0993 44.111 33.281 42.2927 33.281 40.0704C33.281 37.8481 35.0993 36.0298 37.3216 36.0298C39.5439 36.0298 41.3622 37.8481 41.3622 40.0704C41.3622 42.2927 39.5439 44.111 37.3216 44.111ZM58.5343 26.9388C59.6455 26.9388 60.5546 27.8479 60.5546 28.9591C60.5546 30.0703 59.6455 30.9794 58.5343 30.9794C57.4231 30.9794 56.514 30.0703 56.514 28.9591C56.514 27.8479 57.4231 26.9388 58.5343 26.9388ZM46.4126 26.9388C47.5238 26.9388 48.4329 27.8479 48.4329 28.9591C48.4329 30.0703 47.5238 30.9794 46.4126 30.9794C45.3014 30.9794 44.3923 30.0703 44.3923 28.9591C44.3923 27.8479 45.3014 26.9388 46.4126 26.9388ZM38.3314 40.0704C38.3314 40.6765 37.9273 41.0805 37.3213 41.0805C36.7152 41.0805 36.3111 40.6765 36.3111 40.0704C36.3111 39.4643 36.7152 39.0602 37.3213 39.0602C37.9273 39.0602 38.3314 39.4643 38.3314 40.0704Z"
                  fill="#0052CC"
                />
              </svg>
            ),
            title: "Financial Management",
            subTitle:
              "Manage prepayment accounts, charge cards, issue credits, and rewards.",
          },
          {
            icon: (
              <svg
                width="81"
                height="89"
                viewBox="0 0 81 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40.3214" cy="40.1431" r="40" fill="#D9D9D9" />
                <path
                  d="M37.3212 52.1921C30.6546 52.1921 25.1994 46.7373 25.1994 40.0704C25.1994 33.4034 30.6542 27.9486 37.3212 27.9486C37.9273 27.9486 38.3313 27.5446 38.3313 26.9385V15.8266C38.3313 15.2205 37.9273 14.8164 37.3212 14.8164H32.2705C31.7654 14.8164 31.2603 15.2205 31.2603 15.8266C31.1593 18.2509 29.139 19.7662 27.1187 19.7662C26.1086 19.7662 25.1994 19.3621 24.3913 18.655C23.9873 18.2509 23.3812 18.3519 22.9771 18.655L15.8049 25.8272C15.6029 26.0292 15.5019 26.3322 15.5019 26.5343C15.5019 26.8373 15.6029 27.0394 15.8049 27.2414C16.5121 28.0495 16.9161 28.9586 16.9161 29.9689C16.9161 31.8882 15.5019 34.0094 12.9765 34.1104C12.4714 34.1104 11.9664 34.6155 11.9664 35.1206V45.222C11.9664 45.7271 12.3704 46.2322 12.9765 46.2322C14.5927 46.3332 15.9059 47.2423 16.613 48.7575C17.2191 50.2727 16.9161 51.889 15.8049 53.1012C15.6029 53.3032 15.5019 53.5052 15.5019 53.8083C15.5019 54.1114 15.6029 54.3134 15.8049 54.5154L22.9771 61.6876C23.3812 62.0917 23.9873 62.0917 24.3913 61.6876C25.1994 60.9805 26.1085 60.5764 27.1187 60.5764C29.0381 60.5764 31.1593 61.9906 31.2603 64.516C31.2603 65.0211 31.7654 65.5262 32.2705 65.5262H37.3212C37.9273 65.5262 38.3313 65.1221 38.3313 64.516V53.2024C38.3313 52.5963 37.9273 52.1921 37.3212 52.1921ZM33.1796 63.3041C32.5735 60.2736 29.8462 58.4554 27.2197 58.4554C26.0076 58.4554 24.8964 58.8594 23.8863 59.4655L18.0274 53.6067C19.1386 51.8894 19.3406 49.8691 18.5325 47.9498C17.7244 46.0305 16.1082 44.7174 14.0879 44.3133V36.0304C17.1183 35.4243 18.9366 32.697 18.9366 30.0705C18.9366 28.8584 18.5325 27.7472 17.9264 26.7371L23.7853 20.8782C24.7954 21.5854 25.9065 21.8884 27.1187 21.8884C29.7451 21.8884 32.4725 20.0701 33.0786 17.0397H36.3111V26.2322C28.9372 26.7373 23.1795 32.8988 23.1795 40.2734C23.1795 47.6479 28.9373 53.8096 36.3111 54.3146V63.3047L33.1796 63.3041ZM38.3314 49.162C38.3314 49.7681 37.9273 50.1722 37.3213 50.1722C31.7654 50.1722 27.2198 45.6265 27.2198 40.0707C27.2198 34.5149 31.7654 29.9692 37.3213 29.9692C37.9273 29.9692 38.3314 30.3733 38.3314 30.9794C38.3314 31.5855 37.9273 31.9895 37.3213 31.9895C32.8766 31.9895 29.2401 35.6261 29.2401 40.0707C29.2401 44.5153 32.8766 48.1519 37.3213 48.1519C37.9273 48.1519 38.3314 48.5559 38.3314 49.162ZM46.4126 32.9997C48.3319 32.9997 49.8471 31.6865 50.3522 29.9692H54.6958C55.0999 31.6865 56.7161 32.9997 58.6354 32.9997C60.8577 32.9997 62.676 31.1814 62.676 28.9591C62.676 26.7368 60.8577 24.9185 58.6354 24.9185C56.7161 24.9185 55.2009 26.2317 54.6958 27.9489H50.3522C49.9481 26.5347 48.8369 25.4236 47.4228 25.0196V20.878C47.4228 20.2719 47.8268 19.8678 48.4329 19.8678H54.5948C54.9988 21.5851 56.6151 22.8983 58.5344 22.8983C60.7567 22.8983 62.575 21.08 62.575 18.8577C62.575 16.6354 60.7567 14.8171 58.5344 14.8171C56.6151 14.8171 55.0999 16.1303 54.5948 17.8476H48.4329C46.7157 17.8476 45.4025 19.1607 45.4025 20.878V25.0196C43.6853 25.4236 42.372 27.0398 42.372 28.9592C42.372 29.4642 42.4731 29.8683 42.5741 30.2723L38.7355 34.1109C38.3315 34.1109 37.8264 34.0099 37.3213 34.0099C33.9879 34.0099 31.2604 36.7373 31.2604 40.0707C31.2604 43.4042 33.9879 46.1316 37.3213 46.1316C37.8264 46.1316 38.3315 46.0306 38.7355 45.9296L42.5741 49.7681C42.4731 50.2732 42.372 50.6772 42.372 51.1823C42.372 53.1016 43.6852 54.6168 45.4025 55.1219V59.2635C45.4025 60.9807 46.7156 62.2939 48.4329 62.2939H54.5948C54.9988 64.0112 56.6151 65.3244 58.5344 65.3244C60.7567 65.3244 62.575 63.5061 62.575 61.2838C62.575 59.0615 60.7567 57.2432 58.5344 57.2432C56.6151 57.2432 55.0999 58.5564 54.5948 60.2736H48.4329C47.8268 60.2736 47.4228 59.8696 47.4228 59.2635V55.1219C48.837 54.7179 49.9481 53.6067 50.3522 52.1925H54.6958C55.0999 53.9098 56.7161 55.223 58.6354 55.223C60.8577 55.223 62.676 53.4047 62.676 51.1824C62.676 48.9601 60.8577 47.1418 58.6354 47.1418C56.7161 47.1418 55.2009 48.455 54.6958 50.1722H50.3522C49.9481 48.455 48.3319 47.1418 46.4126 47.1418C45.4024 47.1418 44.4933 47.5459 43.7862 48.152L40.7557 45.1215C42.0689 44.2124 43.0791 42.7982 43.2811 41.0809H54.5947C54.9988 42.7982 56.615 44.1114 58.5343 44.1114C60.7566 44.1114 62.5749 42.2931 62.5749 40.0708C62.5749 37.8485 60.7566 36.0302 58.5343 36.0302C56.615 36.0302 55.0998 37.3434 54.5947 39.0606H43.2811C42.978 37.4444 42.0689 35.9292 40.7557 35.0201L43.7862 31.9896C44.4933 32.5957 45.4024 32.9997 46.4126 32.9997ZM58.5343 16.8373C59.6455 16.8373 60.5546 17.7464 60.5546 18.8576C60.5546 19.9688 59.6455 20.8779 58.5343 20.8779C57.4231 20.8779 56.514 19.9688 56.514 18.8576C56.514 17.7464 57.4231 16.8373 58.5343 16.8373ZM58.5343 59.2635C59.6455 59.2635 60.5546 60.1726 60.5546 61.2838C60.5546 62.395 59.6455 63.3041 58.5343 63.3041C57.4231 63.3041 56.514 62.395 56.514 61.2838C56.514 60.1726 57.4231 59.2635 58.5343 59.2635ZM58.5343 49.162C59.6455 49.162 60.5546 50.0711 60.5546 51.1823C60.5546 52.2935 59.6455 53.2026 58.5343 53.2026C57.4231 53.2026 56.514 52.2935 56.514 51.1823C56.514 50.0711 57.4231 49.162 58.5343 49.162ZM46.4126 49.162C47.5238 49.162 48.4329 50.0711 48.4329 51.1823C48.4329 52.2935 47.5238 53.2026 46.4126 53.2026C45.3014 53.2026 44.3923 52.2935 44.3923 51.1823C44.3923 50.0711 45.3014 49.162 46.4126 49.162ZM58.5343 38.0501C59.6455 38.0501 60.5546 38.9592 60.5546 40.0704C60.5546 41.1816 59.6455 42.0907 58.5343 42.0907C57.4231 42.0907 56.514 41.1816 56.514 40.0704C56.514 38.9592 57.4231 38.0501 58.5343 38.0501ZM37.3216 44.111C35.0993 44.111 33.281 42.2927 33.281 40.0704C33.281 37.8481 35.0993 36.0298 37.3216 36.0298C39.5439 36.0298 41.3622 37.8481 41.3622 40.0704C41.3622 42.2927 39.5439 44.111 37.3216 44.111ZM58.5343 26.9388C59.6455 26.9388 60.5546 27.8479 60.5546 28.9591C60.5546 30.0703 59.6455 30.9794 58.5343 30.9794C57.4231 30.9794 56.514 30.0703 56.514 28.9591C56.514 27.8479 57.4231 26.9388 58.5343 26.9388ZM46.4126 26.9388C47.5238 26.9388 48.4329 27.8479 48.4329 28.9591C48.4329 30.0703 47.5238 30.9794 46.4126 30.9794C45.3014 30.9794 44.3923 30.0703 44.3923 28.9591C44.3923 27.8479 45.3014 26.9388 46.4126 26.9388ZM38.3314 40.0704C38.3314 40.6765 37.9273 41.0805 37.3213 41.0805C36.7152 41.0805 36.3111 40.6765 36.3111 40.0704C36.3111 39.4643 36.7152 39.0602 37.3213 39.0602C37.9273 39.0602 38.3314 39.4643 38.3314 40.0704Z"
                  fill="#0052CC"
                />
              </svg>
            ),
            title: "Ridesharing Capabilities",
            subTitle:
              "Authorize ridesharing, manage payments, and integrate VAT collection.",
          },
          {
            icon: (
              <svg
                width="81"
                height="89"
                viewBox="0 0 81 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40.3214" cy="40.1431" r="40" fill="#D9D9D9" />
                <path
                  d="M37.3212 52.1921C30.6546 52.1921 25.1994 46.7373 25.1994 40.0704C25.1994 33.4034 30.6542 27.9486 37.3212 27.9486C37.9273 27.9486 38.3313 27.5446 38.3313 26.9385V15.8266C38.3313 15.2205 37.9273 14.8164 37.3212 14.8164H32.2705C31.7654 14.8164 31.2603 15.2205 31.2603 15.8266C31.1593 18.2509 29.139 19.7662 27.1187 19.7662C26.1086 19.7662 25.1994 19.3621 24.3913 18.655C23.9873 18.2509 23.3812 18.3519 22.9771 18.655L15.8049 25.8272C15.6029 26.0292 15.5019 26.3322 15.5019 26.5343C15.5019 26.8373 15.6029 27.0394 15.8049 27.2414C16.5121 28.0495 16.9161 28.9586 16.9161 29.9689C16.9161 31.8882 15.5019 34.0094 12.9765 34.1104C12.4714 34.1104 11.9664 34.6155 11.9664 35.1206V45.222C11.9664 45.7271 12.3704 46.2322 12.9765 46.2322C14.5927 46.3332 15.9059 47.2423 16.613 48.7575C17.2191 50.2727 16.9161 51.889 15.8049 53.1012C15.6029 53.3032 15.5019 53.5052 15.5019 53.8083C15.5019 54.1114 15.6029 54.3134 15.8049 54.5154L22.9771 61.6876C23.3812 62.0917 23.9873 62.0917 24.3913 61.6876C25.1994 60.9805 26.1085 60.5764 27.1187 60.5764C29.0381 60.5764 31.1593 61.9906 31.2603 64.516C31.2603 65.0211 31.7654 65.5262 32.2705 65.5262H37.3212C37.9273 65.5262 38.3313 65.1221 38.3313 64.516V53.2024C38.3313 52.5963 37.9273 52.1921 37.3212 52.1921ZM33.1796 63.3041C32.5735 60.2736 29.8462 58.4554 27.2197 58.4554C26.0076 58.4554 24.8964 58.8594 23.8863 59.4655L18.0274 53.6067C19.1386 51.8894 19.3406 49.8691 18.5325 47.9498C17.7244 46.0305 16.1082 44.7174 14.0879 44.3133V36.0304C17.1183 35.4243 18.9366 32.697 18.9366 30.0705C18.9366 28.8584 18.5325 27.7472 17.9264 26.7371L23.7853 20.8782C24.7954 21.5854 25.9065 21.8884 27.1187 21.8884C29.7451 21.8884 32.4725 20.0701 33.0786 17.0397H36.3111V26.2322C28.9372 26.7373 23.1795 32.8988 23.1795 40.2734C23.1795 47.6479 28.9373 53.8096 36.3111 54.3146V63.3047L33.1796 63.3041ZM38.3314 49.162C38.3314 49.7681 37.9273 50.1722 37.3213 50.1722C31.7654 50.1722 27.2198 45.6265 27.2198 40.0707C27.2198 34.5149 31.7654 29.9692 37.3213 29.9692C37.9273 29.9692 38.3314 30.3733 38.3314 30.9794C38.3314 31.5855 37.9273 31.9895 37.3213 31.9895C32.8766 31.9895 29.2401 35.6261 29.2401 40.0707C29.2401 44.5153 32.8766 48.1519 37.3213 48.1519C37.9273 48.1519 38.3314 48.5559 38.3314 49.162ZM46.4126 32.9997C48.3319 32.9997 49.8471 31.6865 50.3522 29.9692H54.6958C55.0999 31.6865 56.7161 32.9997 58.6354 32.9997C60.8577 32.9997 62.676 31.1814 62.676 28.9591C62.676 26.7368 60.8577 24.9185 58.6354 24.9185C56.7161 24.9185 55.2009 26.2317 54.6958 27.9489H50.3522C49.9481 26.5347 48.8369 25.4236 47.4228 25.0196V20.878C47.4228 20.2719 47.8268 19.8678 48.4329 19.8678H54.5948C54.9988 21.5851 56.6151 22.8983 58.5344 22.8983C60.7567 22.8983 62.575 21.08 62.575 18.8577C62.575 16.6354 60.7567 14.8171 58.5344 14.8171C56.6151 14.8171 55.0999 16.1303 54.5948 17.8476H48.4329C46.7157 17.8476 45.4025 19.1607 45.4025 20.878V25.0196C43.6853 25.4236 42.372 27.0398 42.372 28.9592C42.372 29.4642 42.4731 29.8683 42.5741 30.2723L38.7355 34.1109C38.3315 34.1109 37.8264 34.0099 37.3213 34.0099C33.9879 34.0099 31.2604 36.7373 31.2604 40.0707C31.2604 43.4042 33.9879 46.1316 37.3213 46.1316C37.8264 46.1316 38.3315 46.0306 38.7355 45.9296L42.5741 49.7681C42.4731 50.2732 42.372 50.6772 42.372 51.1823C42.372 53.1016 43.6852 54.6168 45.4025 55.1219V59.2635C45.4025 60.9807 46.7156 62.2939 48.4329 62.2939H54.5948C54.9988 64.0112 56.6151 65.3244 58.5344 65.3244C60.7567 65.3244 62.575 63.5061 62.575 61.2838C62.575 59.0615 60.7567 57.2432 58.5344 57.2432C56.6151 57.2432 55.0999 58.5564 54.5948 60.2736H48.4329C47.8268 60.2736 47.4228 59.8696 47.4228 59.2635V55.1219C48.837 54.7179 49.9481 53.6067 50.3522 52.1925H54.6958C55.0999 53.9098 56.7161 55.223 58.6354 55.223C60.8577 55.223 62.676 53.4047 62.676 51.1824C62.676 48.9601 60.8577 47.1418 58.6354 47.1418C56.7161 47.1418 55.2009 48.455 54.6958 50.1722H50.3522C49.9481 48.455 48.3319 47.1418 46.4126 47.1418C45.4024 47.1418 44.4933 47.5459 43.7862 48.152L40.7557 45.1215C42.0689 44.2124 43.0791 42.7982 43.2811 41.0809H54.5947C54.9988 42.7982 56.615 44.1114 58.5343 44.1114C60.7566 44.1114 62.5749 42.2931 62.5749 40.0708C62.5749 37.8485 60.7566 36.0302 58.5343 36.0302C56.615 36.0302 55.0998 37.3434 54.5947 39.0606H43.2811C42.978 37.4444 42.0689 35.9292 40.7557 35.0201L43.7862 31.9896C44.4933 32.5957 45.4024 32.9997 46.4126 32.9997ZM58.5343 16.8373C59.6455 16.8373 60.5546 17.7464 60.5546 18.8576C60.5546 19.9688 59.6455 20.8779 58.5343 20.8779C57.4231 20.8779 56.514 19.9688 56.514 18.8576C56.514 17.7464 57.4231 16.8373 58.5343 16.8373ZM58.5343 59.2635C59.6455 59.2635 60.5546 60.1726 60.5546 61.2838C60.5546 62.395 59.6455 63.3041 58.5343 63.3041C57.4231 63.3041 56.514 62.395 56.514 61.2838C56.514 60.1726 57.4231 59.2635 58.5343 59.2635ZM58.5343 49.162C59.6455 49.162 60.5546 50.0711 60.5546 51.1823C60.5546 52.2935 59.6455 53.2026 58.5343 53.2026C57.4231 53.2026 56.514 52.2935 56.514 51.1823C56.514 50.0711 57.4231 49.162 58.5343 49.162ZM46.4126 49.162C47.5238 49.162 48.4329 50.0711 48.4329 51.1823C48.4329 52.2935 47.5238 53.2026 46.4126 53.2026C45.3014 53.2026 44.3923 52.2935 44.3923 51.1823C44.3923 50.0711 45.3014 49.162 46.4126 49.162ZM58.5343 38.0501C59.6455 38.0501 60.5546 38.9592 60.5546 40.0704C60.5546 41.1816 59.6455 42.0907 58.5343 42.0907C57.4231 42.0907 56.514 41.1816 56.514 40.0704C56.514 38.9592 57.4231 38.0501 58.5343 38.0501ZM37.3216 44.111C35.0993 44.111 33.281 42.2927 33.281 40.0704C33.281 37.8481 35.0993 36.0298 37.3216 36.0298C39.5439 36.0298 41.3622 37.8481 41.3622 40.0704C41.3622 42.2927 39.5439 44.111 37.3216 44.111ZM58.5343 26.9388C59.6455 26.9388 60.5546 27.8479 60.5546 28.9591C60.5546 30.0703 59.6455 30.9794 58.5343 30.9794C57.4231 30.9794 56.514 30.0703 56.514 28.9591C56.514 27.8479 57.4231 26.9388 58.5343 26.9388ZM46.4126 26.9388C47.5238 26.9388 48.4329 27.8479 48.4329 28.9591C48.4329 30.0703 47.5238 30.9794 46.4126 30.9794C45.3014 30.9794 44.3923 30.0703 44.3923 28.9591C44.3923 27.8479 45.3014 26.9388 46.4126 26.9388ZM38.3314 40.0704C38.3314 40.6765 37.9273 41.0805 37.3213 41.0805C36.7152 41.0805 36.3111 40.6765 36.3111 40.0704C36.3111 39.4643 36.7152 39.0602 37.3213 39.0602C37.9273 39.0602 38.3314 39.4643 38.3314 40.0704Z"
                  fill="#0052CC"
                />
              </svg>
            ),
            title: "Social Media Integration",
            subTitle:
              "Allows users to select rideshare companions via Facebook, Instagram, LinkedIn and Airbnb",
          },
        ]}
      />
      <Talk />
      <TechnicalUniversity />
      <WorldsBest />
      <LatestNews />
      <FAQ accordionItems={faq} defaultOpenItem="1" />
    </>
  );
}
