
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Button } from "../ui/button";
import { Shuffle, Zap } from "lucide-react";
import GalleryGrid from "./GalleryGrid";
import { GalleryImage } from "./types";
import { toast } from "../ui/use-toast";

interface GalleryTabsProps {
  items: GalleryImage[];
  categories: string[];
  onSpotlight: (item: GalleryImage) => void;
}

const GalleryTabs = ({
  items,
  categories,
  onSpotlight
}: GalleryTabsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const filteredItems = selectedCategory === "all" ? items : items.filter(item => item.category === selectedCategory);
  
  const handleShuffle = () => {
    toast({
      title: "Gallery Shuffled!",
      description: "Images have been randomly rearranged for variety."
    });
  };
  
  const handleSpotlight = () => {
    // Pick a random item from the filtered list
    const randomIndex = Math.floor(Math.random() * filteredItems.length);
    const randomItem = filteredItems[randomIndex];
    onSpotlight(randomItem);
    toast({
      title: "Random Spotlight!",
      description: `Now viewing: ${randomItem.title}`
    });
  };
  
  return <Tabs defaultValue="all" className="mb-8 w-full">
      <div className="flex flex-col space-y-6">
        {/* Tab list for categories - Add this back */}
        <div className="mx-auto">
          <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
            <TabsTrigger value="all">All</TabsTrigger>
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Action buttons - Centered */}
        <div className="flex justify-center gap-3">
          <Button onClick={handleShuffle} size="sm" className="bg-mun-purple hover:bg-mun-purple-light">
            <Shuffle className="mr-2 h-4 w-4" />
            Shuffle Gallery
          </Button>
          <Button onClick={handleSpotlight} size="sm" variant="outline" className="border-mun-purple text-mun-purple hover:text-white hover:bg-mun-purple">
            <Zap className="mr-2 h-4 w-4" />
            Random Spotlight
          </Button>
        </div>

        <TabsContent value="all" className="mt-0">
          <GalleryGrid images={items} onImageClick={() => {}} />
        </TabsContent>

        {categories.map(category => <TabsContent key={category} value={category} className="mt-0">
            <GalleryGrid images={items.filter(item => item.category === category)} onImageClick={() => {}} />
          </TabsContent>)}
      </div>
    </Tabs>;
};

export default GalleryTabs;
