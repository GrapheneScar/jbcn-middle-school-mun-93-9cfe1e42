
import { motion } from 'framer-motion';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { committeeHeadsData } from './committee-heads-data';

const CommitteeHeadsTable = () => {
  return (
    <motion.div
      className="w-full max-w-4xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="overflow-hidden bg-black/20 border-mun-purple/20">
        <Table>
          <TableHeader className="bg-mun-purple/30">
            <TableRow>
              <TableHead className="w-1/3 font-bold text-white">Role</TableHead>
              <TableHead className="w-2/3 font-bold text-white">Name(s)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {committeeHeadsData.map((head, index) => (
              <TableRow 
                key={index} 
                className={`border-b border-mun-purple/20 hover:bg-mun-purple/10 transition-colors ${index % 2 === 0 ? 'bg-black/10' : ''}`}
              >
                <TableCell className="font-semibold text-white">{head.role}</TableCell>
                <TableCell className="text-white/90">{head.names}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </motion.div>
  );
};

export default CommitteeHeadsTable;
