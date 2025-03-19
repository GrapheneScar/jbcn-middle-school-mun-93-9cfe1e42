
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CommitteeAgenda from './CommitteeAgenda';
import CommitteeOverview from './CommitteeOverview';
import CommitteeChairs from './CommitteeChairs';
import { Committee } from './types';

interface CommitteeTabsProps {
  committee: Committee;
}

const CommitteeTabs = ({ committee }: CommitteeTabsProps) => {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8 rounded-full bg-black/30 border border-mun-purple/30 p-1 max-w-md mx-auto py-0">
        <TabsTrigger value="overview" className="rounded-full text-sm px-4 py-2">Overview</TabsTrigger>
        <TabsTrigger value="agenda" className="rounded-full text-sm px-4 py-2">Agenda</TabsTrigger>
        <TabsTrigger value="chairs" className="rounded-full text-sm px-4 py-2">Chairs</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="space-y-6">
        <CommitteeOverview description={committee.description} background={committee.background} />
      </TabsContent>
      
      <TabsContent value="agenda" className="space-y-6">
        <CommitteeAgenda topics={committee.topics} />
      </TabsContent>
      
      <TabsContent value="chairs" className="space-y-6">
        <CommitteeChairs chairs={committee.chairs} />
      </TabsContent>
    </Tabs>
  );
};

export default CommitteeTabs;
