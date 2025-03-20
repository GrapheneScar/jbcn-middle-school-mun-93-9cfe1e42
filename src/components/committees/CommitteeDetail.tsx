
import { useParams, useNavigate } from 'react-router-dom';
import { committeesData } from './committees-data';
import CommitteeDetailHeader from './CommitteeDetailHeader';
import CommitteeTabs from './CommitteeTabs';
import CommitteeResources from './CommitteeResources';

const CommitteeDetail = () => {
  const { abbr } = useParams<{ abbr: string; }>();
  const navigate = useNavigate();

  // Find the committee by its abbreviation (case insensitive)
  const committee = committeesData.find(c => c.abbr.toLowerCase() === abbr?.toLowerCase());
  
  if (!committee) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Committee not found</h2>
        <button 
          className="px-4 py-2 bg-mun-purple rounded-md"
          onClick={() => navigate('/committees')}
        >
          Back to Committees
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <CommitteeDetailHeader committee={committee} />

        {/* Tabs Section */}
        <CommitteeTabs committee={committee} />

        {/* Committee Resources Section */}
        <CommitteeResources 
          studyGuideUrl={committee.studyGuideUrl} 
          countryMatrixUrl={committee.countryMatrixUrl} 
        />
      </div>
    </div>
  );
};

export default CommitteeDetail;
