
// Type definitions for committee structure
export interface DepartmentChair {
  name: string;
  title: string;
  photo: string;
  department: string;
  bio: string; // Adding the bio property
  easterEgg?: string;
}

export interface Department {
  name: string;
  description: string;
  chairs: DepartmentChair[];
}

export interface CommitteeChair {
  id?: string; // Added id as optional property
  name: string;
  title: string;
  photo: string;
  bio: string;
  department?: string;
  easterEgg?: string;
}

export interface Committee {
  name: string;
  abbr: string;
  description: string;
  shortDescription?: string;
  topics: string[];
  logo?: string;
  logoDark?: string;
  logoLight?: string;
  logoBW?: string;
  countryMatrixLight?: string;
  countryMatrixDark?: string;
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

// Update the Chair interface to include all the properties being used
export interface Chair {
  id?: string;
  name: string;
  role?: string;
  image: string;
  bio?: string;
  title?: string;        // Added for ChairCard
  department?: string;   // Added for CommitteeTabs
  school?: string;       // Added for ChairCard
  experience?: string;   // Added for ChairCard
  linkedin?: string;     // Added for ChairCard
  cv?: string;           // Added for ChairCard
  photo?: string;        // For backward compatibility
  easterEgg?: string;    // For easter egg functionality
}
