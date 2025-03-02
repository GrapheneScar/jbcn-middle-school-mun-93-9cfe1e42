
import { Committee } from './types';
import CommitteeCard from './CommitteeCard';

interface CommitteeListProps {
  committees: Committee[];
}

const CommitteeList = ({ committees }: CommitteeListProps) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid gap-8">
          {committees.map((committee, index) => (
            <CommitteeCard 
              key={committee.name} 
              committee={committee} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeList;
