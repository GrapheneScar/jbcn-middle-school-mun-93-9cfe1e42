
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { committeesData } from './committees-data';
import CommitteeDetailHeader from './CommitteeDetailHeader';
import CommitteeOverview from './CommitteeOverview';
import CommitteeAgenda from './CommitteeAgenda';
import CommitteeChairs from './CommitteeChairs';
import CommitteeResources from './CommitteeResources';

const CommitteeDetail = () => {
  const { abbr } = useParams<{ abbr: string; }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

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

  // Get committee email based on the committee abbreviation
  const getCommitteeEmail = () => {
    switch(committee.abbr.toLowerCase()) {
      case 'disec':
        return 'disec.jbcnmun2025@gmail.com';
      case 'kws':
        return 'kws.jbcnmsmun25@gmail.com';
      case 'copuos':
        return 'copuos.jbcnmsm25@gmail.com';
      case 'rfa':
        return 'rfa.jbcnmsmun25@gmail.com';
      case 'coi':
        return 'coi.jbcnmsmun25@gmail.com';
      default:
        return '';
    }
  };

  const committeeEmail = getCommitteeEmail();

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <CommitteeDetailHeader committee={committee} />

        {/* Tab Buttons */}
        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="inline-flex bg-black/20 rounded-full p-1">
            <button
              className={`px-6 py-2 rounded-full text-sm md:text-base ${
                activeTab === 'overview' ? 'bg-mun-purple text-white' : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm md:text-base ${
                activeTab === 'agenda' ? 'bg-mun-purple text-white' : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveTab('agenda')}
            >
              Agenda
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm md:text-base ${
                activeTab === 'chairs' ? 'bg-mun-purple text-white' : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveTab('chairs')}
            >
              Directors
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm md:text-base ${
                activeTab === 'resources' ? 'bg-mun-purple text-white' : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveTab('resources')}
            >
              Resources
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8 space-y-12">
          {activeTab === 'overview' && (
            <CommitteeOverview 
              description={committee.description} 
              background={committee.background} 
            />
          )}
          
          {activeTab === 'agenda' && (
            <CommitteeAgenda topics={committee.topics} />
          )}
          
          {activeTab === 'chairs' && (
            <CommitteeChairs chairs={committee.chairs} />
          )}
          
          {activeTab === 'resources' && (
            <CommitteeResources 
              studyGuideUrl={committee.studyGuideUrl} 
              countryMatrixUrl={committee.countryMatrixUrl}
              committeeName={committee.name}
              committeeEmail={committeeEmail}
              committeeAbbr={committee.abbr}
            />
          )}
        </div>

        {/* Show Committee Resources at the bottom of Overview and Agenda tabs */}
        {(activeTab === 'overview' || activeTab === 'agenda') && (
          <CommitteeResources 
            studyGuideUrl={committee.studyGuideUrl} 
            countryMatrixUrl={committee.countryMatrixUrl}
            committeeName={committee.name}
            committeeEmail={committeeEmail}
            committeeAbbr={committee.abbr}
          />
        )}
      </div>
    </div>
  );
};

export default CommitteeDetail;
