
interface ScheduleEvent {
  time: string;
  title: string;
  location: string;
  description: string;
  type: string;
}

interface ScheduleDataType {
  [key: string]: ScheduleEvent[];
}

export const scheduleData: ScheduleDataType = {
  day1: [
    { 
      time: "08:00 - 09:30", 
      title: "Registration & Opening Ceremony", 
      location: "Main Auditorium",
      description: "Delegate registration followed by the formal opening ceremony with keynote speakers and introduction to the conference.",
      type: "ceremony"
    },
    { 
      time: "09:45 - 12:30", 
      title: "Committee Session I", 
      location: "Committee Rooms",
      description: "First formal debate session in respective committees. Introduction of topics and agenda setting.",
      type: "session"
    },
    { 
      time: "12:30 - 13:30", 
      title: "Lunch Break", 
      location: "Dining Hall",
      description: "Networking lunch for all delegates and advisors.",
      type: "break"
    },
    { 
      time: "13:45 - 16:30", 
      title: "Committee Session II", 
      location: "Committee Rooms",
      description: "Continuation of debate, working paper development, and moderated caucuses.",
      type: "session"
    },
    { 
      time: "16:45 - 17:30", 
      title: "Advisor Meeting", 
      location: "Conference Room A",
      description: "Meeting for faculty advisors with the Secretariat team to discuss day one proceedings.",
      type: "meeting"
    }
  ],
  day2: [
    { 
      time: "08:30 - 09:00", 
      title: "Delegate Briefing", 
      location: "Main Auditorium",
      description: "Quick briefing for all delegates about the day's agenda and expectations.",
      type: "meeting"
    },
    { 
      time: "09:15 - 12:00", 
      title: "Committee Session III", 
      location: "Committee Rooms",
      description: "Working paper finalization, resolution drafting, and formal debates.",
      type: "session"
    },
    { 
      time: "12:00 - 13:00", 
      title: "Lunch Break", 
      location: "Dining Hall",
      description: "Lunch for all participants.",
      type: "break"
    },
    { 
      time: "13:15 - 16:00", 
      title: "Committee Session IV", 
      location: "Committee Rooms",
      description: "Resolution presentations, voting procedures, and committee conclusions.",
      type: "session"
    },
    { 
      time: "16:30 - 18:00", 
      title: "Closing Ceremony & Awards", 
      location: "Main Auditorium",
      description: "Official closing ceremony with presentation of awards and certificates to delegates.",
      type: "ceremony"
    }
  ]
};
