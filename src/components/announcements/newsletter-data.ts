
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
    title: "Pre-Conference Special",
    issue: "Issue 1",
    date: "June 2023",
    description: "Our inaugural newsletter covers everything you need to know about the upcoming conference, including committee previews, preparation tips, and interviews with the secretariat team.",
    pdfUrl: "#",
    coverImage: "/newsletter/issue1.jpg"
  },
  {
    title: "Conference Highlights",
    issue: "Issue 2",
    date: "July 2023",
    description: "Recap of the opening day, session highlights, and featured interviews with committee chairs discussing the most pressing issues being debated.",
    pdfUrl: "#",
    coverImage: "/newsletter/issue2.jpg"
  },
  {
    title: "Resolution Special",
    issue: "Issue 3",
    date: "August 2023",
    description: "Coverage of key resolutions passed during the conference, award winners, and reflections from delegates on their MUN experience.",
    pdfUrl: "#",
    coverImage: "/newsletter/issue3.jpg"
  },
  {
    title: "Post-Conference Review",
    issue: "Issue 4",
    date: "September 2023",
    description: "Complete review of the conference outcomes, photo gallery, and announcements about future MUN events and opportunities.",
    pdfUrl: "#",
    coverImage: "/newsletter/issue4.jpg"
  }
];
