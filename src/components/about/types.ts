
export interface SecretariatMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  easterEgg: any | null;
}

export interface DepartmentHead {
  name: string;
  role: string;
  image: string;
  bio: string;
  easterEgg: {
    type: string;
    content: string | string[];
  };
}
