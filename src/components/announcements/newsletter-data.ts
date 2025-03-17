
export interface Newsletter {
  title: string;
  issue: string;
  date: string;
  description: string;
  pdfUrl: string;
  coverImage?: string;
}

export const newsletterData: Newsletter[] = [
  {
    title: "Conference Announcement",
    issue: "Spring 2022",
    date: "March 2022",
    description: "Our inaugural newsletter covers everything you need to know about the 2022 MUN conference, including committee previews, preparation tips, and a welcome message from our Secretary-General.",
    pdfUrl: "#",
    coverImage: "/newsletter/issue1.jpg"
  },
  {
    title: "Post-Conference Report",
    issue: "Summer 2022",
    date: "June 2022",
    description: "A comprehensive review of the Spring 2022 conference with highlights from each committee, award winners, and special moments captured during the event.",
    pdfUrl: "#",
    coverImage: "/newsletter/issue2.jpg"
  },
  {
    title: "Pre-Conference Guide",
    issue: "Spring 2023",
    date: "February 2023",
    description: "Essential information for delegates participating in the 2023 conference, including updated rules of procedure, position paper guidelines, and committee backgrounds.",
    pdfUrl: "#",
    coverImage: "/newsletter/issue3.jpg"
  },
  {
    title: "Conference Summary",
    issue: "Summer 2023",
    date: "July 2023",
    description: "Recap of the 2023 conference achievements, featuring interviews with outstanding delegates, committee resolutions, and memorable debates.",
    pdfUrl: "#",
    coverImage: "/newsletter/issue4.jpg"
  },
  {
    title: "Conference Preparation",
    issue: "Winter 2024",
    date: "January 2024",
    description: "Get ready for the 2024 Middle School MUN with this comprehensive guide featuring committee introductions, country assignments, and essential diplomatic skills.",
    pdfUrl: "#",
    coverImage: "/newsletter/issue5.jpg"
  },
  {
    title: "Mid-Year Update",
    issue: "Spring 2024",
    date: "April 2024",
    description: "The latest updates on the upcoming conference, featuring special guest speakers, new committee topics, and important schedule changes for all delegates.",
    pdfUrl: "#",
    coverImage: "/newsletter/issue6.jpg"
  }
];
