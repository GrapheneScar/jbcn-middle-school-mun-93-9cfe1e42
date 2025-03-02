
import { Committee } from './types';

export const committeesData: Committee[] = [
  {
    name: "United Nations General Assembly",
    abbr: "UNGA",
    description: "The main deliberative body of the UN where all member states have equal representation.",
    topics: ["Climate Action and Sustainable Development", "Digital Rights and Cybersecurity"],
    logo: "/committees/unga-logo.png",
    chairs: [
      {
        name: "Aanya Sharma",
        title: "Chairperson",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Aanya is a senior student with extensive experience in Model UN conferences. She has chaired multiple UNGA committees and specializes in sustainable development policy."
      },
      {
        name: "Miguel Rodriguez",
        title: "Vice-Chair",
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Miguel has participated in international Model UN conferences for three years. He focuses on digital rights and technology policy."
      }
    ],
    background: "The United Nations General Assembly (UNGA) is one of the six principal organs of the United Nations, serving as the main deliberative, policymaking, and representative organ of the UN. All 193 Member States of the United Nations are represented in the General Assembly, making it the only UN body with universal representation."
  },
  {
    name: "United Nations Security Council",
    abbr: "UNSC",
    description: "Responsible for maintaining international peace and security, the UNSC has the power to make binding decisions.",
    topics: ["Addressing Global Terrorism", "Conflicts in the Middle East"],
    logo: "/committees/unsc-logo.png",
    chairs: [
      {
        name: "James Wilson",
        title: "Chairperson",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "James has been involved in Model UN for five years and specializes in security studies and conflict resolution."
      },
      {
        name: "Leila Patel",
        title: "Vice-Chair",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Leila brings expertise in international law and diplomatic relations to the UNSC simulation."
      }
    ],
    background: "The United Nations Security Council (UNSC) has primary responsibility for the maintenance of international peace and security. It has 15 Members, and each Member has one vote. Under the Charter of the United Nations, all Member States are obligated to comply with Council decisions."
  },
  {
    name: "Economic and Social Council",
    abbr: "ECOSOC",
    description: "Coordinates the economic and social work of the United Nations and its specialized agencies.",
    topics: ["Economic Inequality and Poverty Reduction", "Access to Healthcare and Education"],
    logo: "/committees/ecosoc-logo.png",
    chairs: [
      {
        name: "David Chen",
        title: "Chairperson",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "David is a graduate student researching sustainable economic development and global inequality."
      },
      {
        name: "Sophia Garcia",
        title: "Vice-Chair",
        photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Sophia has specialized in healthcare policy and education systems in developing nations."
      }
    ],
    background: "The Economic and Social Council (ECOSOC) is the principal body for coordination, policy review, policy dialogue and recommendations on economic, social and environmental issues, as well as implementation of internationally agreed development goals."
  },
  {
    name: "Human Rights Council",
    abbr: "HRC",
    description: "Promotes and protects human rights around the world, addressing violations and making recommendations.",
    topics: ["Children's Rights in Conflict Zones", "Freedom of Expression in the Digital Age"],
    logo: "/committees/hrc-logo.png",
    chairs: [
      {
        name: "Amina Kowalski",
        title: "Chairperson",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Amina has worked with human rights organizations and brings practical experience to the HRC simulation."
      },
      {
        name: "Rafael Nkosi",
        title: "Vice-Chair",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Rafael specializes in digital rights and freedom of expression in modern governance."
      }
    ],
    background: "The Human Rights Council is an inter-governmental body within the United Nations system responsible for strengthening the promotion and protection of human rights around the globe and for addressing situations of human rights violations and making recommendations on them."
  }
];
