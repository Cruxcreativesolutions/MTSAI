import { motion } from "framer-motion";
import Image from "next/image";

export const Card = ({ title, description, icon }) => {
  return (
    <motion.div
    className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-md w-full max-w-sm border border-gray-200"
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.3, duration: 0.6 }}
    >
      {/* Outer Semi-Circle */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-10 bg-white rounded-b-full flex items-center justify-center shadow-sm border border-gray-200 border-t-0">
          {/* Inner Circle */}
          <motion.div  
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-20 h-20 rounded-full flex items-center justify-center mb-10 px-3">
            <Image src={icon} alt="icon" width={62} height={62} />
          </motion.div>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-10 text-center">
        <motion.h3  
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-xl font-bold text-gray-800 mb-2">{title}</motion.h3>
        <motion.p  
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-gray-500 text-sm leading-relaxed">{description}</motion.p>
      </div>
    </motion.div>
  );
};
