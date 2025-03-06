
interface AnnouncementLink {
  title: string;
  url: string;
}

export interface Announcement {
  title: string;
  date: string;
  content: string;
  eventDate?: string;
  links?: AnnouncementLink[];
}

export const announcementsData: Announcement[] = [
  {
    title: "Delegate Applications Now Open",
    date: "May 1, 2023",
    content: "We are excited to announce that delegate applications for the JBCN Parel Model United Nations Conference are now open! Students from grades 6-8 are invited to apply. Be sure to complete your application by the deadline to secure your spot.",
    eventDate: "Application Deadline: June 15, 2023",
    links: [
      {
        title: "Apply as a Delegate",
        url: "#"
      },
      {
        title: "Conference Information Package",
        url: "#"
      }
    ]
  },
  {
    title: "Conference Schedule Released",
    date: "May 10, 2023",
    content: "The preliminary schedule for the conference has been released. Please check the schedule page for details about committee sessions, workshops, and special events. Note that this schedule may be subject to minor changes as we approach the conference date.",
    links: [
      {
        title: "View Conference Schedule",
        url: "/schedule"
      }
    ]
  },
  {
    title: "Position Paper Requirements Announced",
    date: "May 15, 2023",
    content: "All delegates are required to submit a position paper prior to the conference. Position papers should be 1-2 pages in length and outline your country's stance on your committee's topics. Please refer to the delegate preparation guidelines for formatting and submission details.",
    eventDate: "Submission Deadline: July 1, 2023",
    links: [
      {
        title: "Position Paper Guidelines",
        url: "/delegate-preparation?tab=position"
      }
    ]
  },
  {
    title: "Committee Allocations Released",
    date: "June 5, 2023",
    content: "Committee and country allocations have been sent to all registered delegates. If you have registered but have not received your allocation, please contact the secretariat immediately. Study guides will be available in your delegate portal.",
    links: [
      {
        title: "Contact Secretariat",
        url: "/contact"
      }
    ]
  },
  {
    title: "Special Guest Speaker Announcement",
    date: "June 20, 2023",
    content: "We are honored to announce that Dr. Rachna Singh, former UN advisor and expert in international relations, will be delivering the keynote address at our opening ceremony. Don't miss this opportunity to hear insights from an experienced diplomat.",
    eventDate: "Keynote Address: July 15, 2023, 10:00 AM"
  }
];
