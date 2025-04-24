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
      time: "07:30 AM - 08:00 AM", 
      title: "Registrations", 
      location: "Ground Floor (Near reception)",
      description: "All delegates check-in and collect their delegate IDs.",
      type: "ceremony"
    },
    { 
      time: "08:00 AM - 09:30 AM", 
      title: "Opening Ceremony", 
      location: "Theatre Cafe (1st floor)",
      description: "Opening of the conference with keynote addresses and a welcome by the Secretariat.",
      type: "ceremony"
    },
    { 
      time: "09:30 AM - 10:00 AM", 
      title: "Break", 
      location: "Respective Committee Room Floors",
      description: "Short refreshment break before committee sessions begin.",
      type: "break"
    },
    { 
      time: "10:00 AM - 12:30 PM", 
      title: "Committee Session I", 
      location: "Committee Rooms",
      description: "Formal debate begins in committees. Agenda introduction and opening speeches.",
      type: "session"
    },
    { 
      time: "12:30 PM - 01:30 PM", 
      title: "Lunch Break", 
      location: "Respective Committee Room Floors",
      description: "Delegates and faculty enjoy lunch and informal networking.",
      type: "break"
    },
    { 
      time: "01:30 PM - 03:00 PM", 
      title: "Committee Session II", 
      location: "Committee Rooms",
      description: "Continuing debate and crisis development.",
      type: "session"
    },
    { 
      time: "03:00 PM - 03:30 PM", 
      title: "Break", 
      location: "Respective Committee Room Floors",
      description: "Time to recharge with refreshments before the next session.",
      type: "break"
    },
    { 
      time: "03:30 PM - 05:00 PM", 
      title: "Committee Session III", 
      location: "Committee Rooms",
      description: "Moderated caucuses and crisis discussions continue.",
      type: "session"
    }
  ],
  day2: [
    { 
      time: "08:00 AM - 09:30 AM", 
      title: "Committee Session IV", 
      location: "Committee Rooms",
      description: "Morning session resumes debate and prepares resolutions.",
      type: "session"
    },
    { 
      time: "09:30 AM - 10:00 AM", 
      title: "Break", 
      location: "Respective Committee Room Floors",
      description: "Refreshments and informal discussion among delegates.",
      type: "break"
    },
    { 
      time: "10:00 AM - 12:30 PM", 
      title: "Committee Session V", 
      location: "Committee Rooms",
      description: "Speeches, Openfloors, roundrobins and time to work on the Resolutions",
      type: "session"
    },
    { 
      time: "12:30 PM - 01:30 PM", 
      title: "Lunch Break", 
      location: "Dining Hall",
      description: "Lunch and final networking before conclusion of committees.",
      type: "break"
    },
    { 
      time: "01:30 PM - 04:00 PM", 
      title: "Committee Session VI + MOE", 
      location: "Committee Rooms",
      description: "Finalizing and voting on resolutions. Motion of entertainment and committee wrap-up with final votes.",
      type: "session"
    },
    { 
      time: "04:00 PM - 05:00 PM", 
      title: "Closing Ceremony", 
      location: "Theatre Cafe",
      description: "End of the conference with delegate recognition and awards.",
      type: "ceremony"
    }
  ]
};
