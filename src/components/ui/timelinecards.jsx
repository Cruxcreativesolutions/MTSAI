import Image from "next/image"

import { motion } from "framer-motion";

export const TimelineCard=({ title, image })=> {
  return (
    <div className="relative w-62 h-40 md:w-82 md:h-40 rounded-lg overflow-visible shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image section */}
      <motion.div  initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}  className="w-full h-full rounded-xl overflow-hidden">
        <Image src={image} alt="icon" className="w-80 h-full object-cover"  width={300} height={400}/>
      </motion.div>

      {/* Content overlay */}
      <div className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 px-2 z-10">
        <div className="bg-blue-600 bg-opacity-90 px-2 py-1.5 md:px-3 md:py-2 rounded-lg w-40 md:w-42">
          <motion.p  initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}  className="text-white text-xs leading-tight font-medium text-center">{title}</motion.p>
        </div>
      </div>
    </div>
  )
}
