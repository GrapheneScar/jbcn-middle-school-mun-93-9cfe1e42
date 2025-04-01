
import { committeesData } from '../committees/committees-data';

// Generate committee links for the dropdown
export const committeeLinks = [
  // First item is the main committees page
  { name: 'All Committees', path: '/committees' },
  
  // Generate links for each committee
  ...committeesData.map(committee => ({
    name: committee.abbr,
    path: `/committees/${committee.abbr.toLowerCase()}`
  }))
];
