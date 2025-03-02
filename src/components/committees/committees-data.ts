
import { Committee } from './types';

export const committeesData: Committee[] = [
  {
    name: "United Nations General Assembly",
    abbr: "UNGA",
    description: "The main deliberative body of the UN where all member states have equal representation.",
    topics: ["Climate Action and Sustainable Development", "Digital Rights and Cybersecurity"]
  },
  {
    name: "United Nations Security Council",
    abbr: "UNSC",
    description: "Responsible for maintaining international peace and security, the UNSC has the power to make binding decisions.",
    topics: ["Addressing Global Terrorism", "Conflicts in the Middle East"]
  },
  {
    name: "Economic and Social Council",
    abbr: "ECOSOC",
    description: "Coordinates the economic and social work of the United Nations and its specialized agencies.",
    topics: ["Economic Inequality and Poverty Reduction", "Access to Healthcare and Education"]
  },
  {
    name: "Human Rights Council",
    abbr: "HRC",
    description: "Promotes and protects human rights around the world, addressing violations and making recommendations.",
    topics: ["Children's Rights in Conflict Zones", "Freedom of Expression in the Digital Age"]
  }
];
