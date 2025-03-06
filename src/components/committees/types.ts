
export interface Chair {
  name: string;
  title: string;
  photo: string;
  bio: string;
}

export interface Committee {
  name: string;
  abbr: string;
  description: string;
  topics: string[];
  logo?: string;
  chairs: Chair[];
  background?: string;
  style?: string;
  studyGuideUrl?: string;
}
