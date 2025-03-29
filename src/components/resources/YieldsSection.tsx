
import { motion } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

const yieldsData = [{
  type: "Yield to the Chair",
  description: "When you quote \"The delegate of would like to yield to the chair\", this means that the chair will get to choose what to do with the speaker's remaining time (it is usually dissolved)."
}, {
  type: "Yield to Questions",
  description: "When you quote \"The delegate would like to yield to questions\", this states that other delegates are allowed to question you on your speech."
}, {
  type: "Yield to Comments",
  description: "When you quote, \"The delegate would like to yield to comments\", this particularly states that you, as a delegate, are allowing other delegates in the committee to comment on your speeches. Note: When you comment on a delegate's speech, make sure the comments are made in a very formal tone. Also, constructively criticising a delegate is okay validated by the Executive Board; you mustn't make any comments which attack the delegate's personal integrity or strike their persona."
}];

const YieldsSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-12 p-6 bg-black/30 rounded-xl border border-mun-purple/20"
    >
      <h3 className="text-2xl font-bold text-white mb-4">Yields</h3>
      <p className="text-white/80 mb-6">
        Yields are something used once a delegate has left over time in their Speech(es).
      </p>
      
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="border-mun-purple/20">
              <TableHead className="text-mun-purple-light">Type</TableHead>
              <TableHead className="text-mun-purple-light">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {yieldsData.map((item, i) => (
              <TableRow key={i} className="border-mun-purple/10 hover:bg-mun-purple/5">
                <TableCell className="font-medium text-white">{item.type}</TableCell>
                <TableCell className="text-white/80">{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};

export default YieldsSection;
