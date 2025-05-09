"use client";

import { motion } from 'framer-motion';
import Image from "next/image";

const Photo = () => {
  return (
    <div className='w-full h-rull relative'>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.4, ease: "easeIn" }
            }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" }
                }}
            >
                <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]" style={{position: 'relative'}}>
                    <Image
                        src="/assets/photo.png"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-contain"
                    />
                </div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Photo