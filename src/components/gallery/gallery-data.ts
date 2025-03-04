
import { GalleryImage } from "./types";

// Gallery image data
export const galleryImages: GalleryImage[] = [
  {
    id: "img1",
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "Technology - Laptop",
    category: "technology",
    title: "Digital Innovation"
  },
  {
    id: "img2",
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    alt: "Technology - MacBook Pro",
    category: "technology",
    title: "Modern Workspace"
  },
  {
    id: "img3",
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    alt: "Code on Monitor",
    category: "code",
    title: "Programming Excellence"
  },
  {
    id: "img4",
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    alt: "Matrix Code",
    category: "code",
    title: "Digital Matrix"
  },
  {
    id: "img5",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    alt: "Developer Workspace",
    category: "workspace",
    title: "Productive Environment"
  },
  {
    id: "img6",
    src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    alt: "Clean Workspace",
    category: "workspace",
    title: "Minimalist Setup"
  },
  {
    id: "img7",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    alt: "Team Collaboration",
    category: "events",
    title: "Collaborative Session"
  },
  {
    id: "img8",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    alt: "Conference Room",
    category: "events",
    title: "Strategic Planning"
  },
  {
    id: "img9",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    alt: "MUN Session",
    category: "events",
    title: "Diplomatic Discussions"
  },
  // Adding more MUN event images
  {
    id: "img10",
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    alt: "MUN Conference Panel",
    category: "events",
    title: "Panel Discussion"
  },
  {
    id: "img11",
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    alt: "MUN Delegates",
    category: "events",
    title: "Delegate Assembly"
  },
  {
    id: "img12",
    src: "https://images.unsplash.com/photo-1560439513-74b037a25d84",
    alt: "Committee Session",
    category: "events",
    title: "Committee Debate"
  },
  {
    id: "img13",
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    alt: "Preparation Room",
    category: "events",
    title: "Delegate Preparation"
  },
  {
    id: "img14",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    alt: "Working Group",
    category: "events",
    title: "Working Group Session"
  }
];

// Get unique categories for filtering
export const getCategories = (): string[] => {
  return ["all", ...new Set(galleryImages.map(img => img.category))];
};

// Filter images based on active tab
export const filterImages = (activeTab: string): GalleryImage[] => {
  return activeTab === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);
};
