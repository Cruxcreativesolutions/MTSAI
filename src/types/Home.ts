import { StaticImageData } from "next/image";

export interface CardData {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface CitiesProps {
  data: CardData[];
}

export interface AccordionItemData {
  id: string;
  title: string;
  content: string;
}

export interface ProblemSolvingProps {
  mainTitle: string;
  subtitle: string;
  description: string;
  accordionItems: AccordionItemData[];
  defaultOpenItem?: string;
  buttonText: string;
  colors?: {
    mainTitle?: string;
    subtitle?: string;
    text?: string;
    border?: string;
    accent?: string;
    button?: string;
    buttonText?: string;
    buttonHover?: string;
    buttonHoverText?: string;
    overlay?: string;
  };
}

export interface TechnologyCardProps {
  image: string | StaticImageData;
  imageAlt: string;
  category: string;
  title: string;
  author: {
    name: string;
    avatar: string;
    initials: string;
  };
  date: string;
}
