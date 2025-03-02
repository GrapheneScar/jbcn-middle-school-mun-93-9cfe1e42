
export interface Committee {
  name: string;
  abbr: string;
  description: string;
  topics: string[];
  logo?: string;
  chairs: Chair[];
  background?: string;
}

export interface Chair {
  name: string;
  title: string;
  photo: string;
  bio: string;
}

export interface DepartmentChair {
  name: string;
  title: string;
  photo: string;
  department: string;
}

export interface Department {
  name: string;
  chairs: DepartmentChair[];
  description?: string;
}
