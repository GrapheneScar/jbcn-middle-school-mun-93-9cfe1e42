
// Type definitions for committee structure
export interface DepartmentChair {
  name: string;
  title: string;
  photo: string;
  department: string;
  easterEgg?: string;
}

export interface Department {
  name: string;
  description: string;
  chairs: DepartmentChair[];
}

export interface CommitteeChair {
  name: string;
  title: string;
  photo: string;
  bio: string;
}

export interface Committee {
  name: string;
  abbr: string;
  description: string;
  shortDescription?: string;
  topics: string[];
  logo?: string;
  chairs: CommitteeChair[];
  background?: string;
  style?: string;
  studyGuideUrl?: string;
  countryMatrixUrl?: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  thumbnail: string;
  fullImage: string;
  date: string;
  category: string;
}

export interface NewsletterIssue {
  id: number;
  title: string;
  coverImage: string;
  description: string;
  date: string;
  pdfUrl: string;
}
