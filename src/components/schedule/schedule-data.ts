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
      time: "07:30 - 08:00", 
      title: "Registrations", 
      location: "Entrance of School",
      description: "All delegates check-in and collect conference materials.",
      type: "ceremony"
    },
    { 
      time: "08:00 - 09:30", 
      title: "Opening Ceremony", 
      location: "Cafeteria (1st floor)",
      description: "Opening of the conference with keynote addresses and a welcome by the Secretariat.",
      type: "ceremony"
    },
    { 
      time: "09:30 - 10:00", 
      title: "Break", 
      location: "Committe Room's Floor",
      description: "Short refreshment break before committee sessions begin.",
      type: "break"
    },
    { 
      time: "10:00 - 12:30", 
      title: "Committee Session I", 
      location: "Committee Rooms",
      description: "Formal debate begins in committees. Agenda introduction and opening speeches.",
      type: "session"
    },
    { 
      time: "12:30 - 13:30", 
      title: "Lunch Break", 
      location: "Committe Room's Floor",
      description: "Delegates and faculty enjoy lunch and informal networking.",
      type: "break"
    },
    { 
      time: "13:30 - 15:00", 
      title: "Committee Session II", 
      location: "Committee Rooms",
      description: "Continuing debate and crisis development.",
      type: "session"
    },
    { 
      time: "15:00 - 15:30", 
      title: "Break", 
      location: "Committe Room's Floor",
      description: "Time to recharge with refreshments before the next session.",
      type: "break"
    },
    { 
      time: "15:30 - 17:00", 
      title: "Committee Session III", 
      location: "Committee Rooms",
      description: "Moderated caucuses and crisis discussions continue.",
      type: "session"
    }
  ],
  day2: [
    { 
      time: "08:00 - 09:30", 
      title: "Committee Session IV", 
      location: "Committee Rooms",
      description: "Morning session resumes debate and prepares resolutions.",
      type: "session"
    },
    { 
      time: "09:30 - 10:00", 
      title: "Break", 
      location: "Committe Room's Floor",
      description: "Refreshments and informal discussion among delegates.",
      type: "break"
    },
    { 
      time: "10:00 - 12:30", 
      title: "Committee Session V", 
      location: "Committee Rooms",
      description: "Speeches, Openfloors, roundrobins and time to work on the Resolutions",
      type: "session"
    },
    { 
      time: "12:30 - 13:30", 
      title: "Lunch Break", 
      location: "Dining Hall",
      description: "Lunch and final networking before conclusion of committees.",
      type: "break"
    },
    { 
      time: "13:30 - 16:00", 
      title: "Committee Session VI + MOE", 
      location: "Committee Rooms",
      description: "Finalizing and voting on resolutions. Motion of entertainment and committee wrap-up with final votes.",
      type: "session"
    },
    { 
      time: "16:00 - 17:00", 
      title: "Closing Ceremony", 
      location: "Main Auditorium",
      description: "End of the conference with delegate recognition and awards.",
      type: "ceremony"
    }
  ]
};
