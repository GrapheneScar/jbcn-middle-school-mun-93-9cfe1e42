
import { useParams, useNavigate } from 'react-router-dom';
import { committeesData } from './committees-data';
import CommitteeHeader from './CommitteeHeader';
import CommitteeTabs from './CommitteeTabs';
import CommitteeResources from './CommitteeResources';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';

const CommitteeDetail = () => {
  const { abbr } = useParams<{ abbr: string; }>();
  const navigate = useNavigate();

  // Find the committee by its abbreviation (case insensitive)
  const committee = committeesData.find(c => c.abbr.toLowerCase() === abbr?.toLowerCase());
  
  if (!committee) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Committee not found</h2>
        <Button onClick={() => navigate('/committees')}>
          <ArrowLeft className="mr-2" /> Back to Committees
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Committee Header Section */}
        <CommitteeHeader committee={committee} />
        
        {/* Committee Tabs Section */}
        <CommitteeTabs committee={committee} />
        
        {/* Committee Resources Section */}
        <CommitteeResources />
      </div>
    </div>
  );
};

export default CommitteeDetail;
