import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
const ScheduleNotes = () => {
  return <Card className="bg-black/40 backdrop-blur-md border-white/10">
      <CardHeader>
        <CardTitle className="text-white">Important Schedule Notes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold text-white">For Internal Delegates</h4>
            <ul className="space-y-2">
              {["Please arrive 15 minutes before each session starts", "Formal dress code is required for all sessions", "Bring your placard and conference materials to all sessions", "Lunch and refreshments will be provided"].map((note, index) => <motion.li key={index} initial={{
              opacity: 0,
              x: -10
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.2 + index * 0.1
            }} className="flex items-start gap-2 text-white/80">
                  <svg className="w-5 h-5 text-mun-purple-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{note}</span>
                </motion.li>)}
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-white">For External Delegates</h4>
            <ul className="space-y-2">
              {["Advisor lounge will be available throughout the conference", "Daily advisor meetings will provide updates on proceedings", "Please ensure all delegates are accounted for during breaks", "Contact the secretariat for any special arrangements"].map((note, index) => <motion.li key={index} initial={{
              opacity: 0,
              x: -10
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.2 + index * 0.1
            }} className="flex items-start gap-2 text-white/80">
                  <svg className="w-5 h-5 text-mun-purple-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{note}</span>
                </motion.li>)}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 mt-4 pt-6">
        <p className="text-white/60 text-sm">
          Schedule subject to minor changes. Updates will be announced during the conference.
        </p>
        <Button className="bg-mun-purple hover:bg-mun-purple-light text-white">
          Contact Secretariat
        </Button>
      </CardFooter>
    </Card>;
};
export default ScheduleNotes;