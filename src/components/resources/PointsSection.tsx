import { motion } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
const pointsData = [{
  type: "Point of Order",
  description: "This point is used in committee once a delegate has found a mistake or factual inaccuracy in the rules of procedure, made by a delegate or an EB member."
}, {
  type: "Point of Information",
  description: "This point is used in committee once a delegate catches a factual inaccuracy, or wishes to question a delegate in one of their GSLs or SSL speeches."
}, {
  type: "Point of Parliamentary Inquiry",
  description: "This is used if you have a doubt or question on anything that's going on in the committee, specifically regarding parliamentary procedure. Note: A point of parliamentary inquiry must not be asked or said when questioning a delegate on one of their speeches."
}, {
  type: "Point of Personal Privilege",
  description: "This point is used if you have a personal inconvenience. Note: Use this point if you have an emergency or an important affair to commit to (utilising the washroom, decreasing or increasing the temperature of the Air conditioner)."
}];
const PointsSection = () => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: 0.3
  }} className="mt-12 p-6 bg-black/30 rounded-xl border border-mun-purple/20">
      <h3 className="text-white mb-4 text-center font-bold text-3xl">Points</h3>
      <p className="text-white/80 mb-6 text-center">
        A point refers to a specific type of procedural request or intervention that a delegate can make during a committee session. 
        Points in MUN are used to seek clarification, raise issues related to the rules of procedure, or make procedural motions.
      </p>
      
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="border-mun-purple/20">
              <TableHead className="text-mun-purple-light text-center">Type</TableHead>
              <TableHead className="text-mun-purple-light text-center">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pointsData.map((item, i) => <TableRow key={i} className="border-mun-purple/10 hover:bg-mun-purple/5">
                <TableCell className="font-medium text-white text-center">{item.type}</TableCell>
                <TableCell className="text-white/80 text-center">{item.description}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </div>
    </motion.div>;
};
export default PointsSection;