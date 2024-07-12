import { RiCss3Line, RiHtml5Line, RiJavaLine, RiJavascriptLine, RiReactjsLine } from "react-icons/ri"
import { animate, motion } from "framer-motion";
import { TbBrandCss3, TbBrandRedux } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";

const iconVariants = duration => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-4' id="technologySection">
        <h2
            // whileInView={{opacity:1, y:0}}
            // initial={{opacity:0, y:-100}}
            // transition={{duration:1.5}}
            className='my-20 text-center text-4xl'
        >
            Technologies
        </h2>
        <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            className='flex flex-wrap items-center justify-center gap-4'
        >
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'
            >
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                    <div className="text-center text-gray-700 text-lg mt-2">
                        React.js
                    </div>
            </motion.div>
            <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'
            >
                <RiHtml5Line className="text-7xl text-orange-600"/>
                <div className="text-center text-gray-700 text-lg mt-2">
                    HTML 5
                </div>
            </motion.div>
            <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'
            >
                <TbBrandCss3 className="text-7xl text-blue-600"/>
                <div className="text-center text-gray-700 text-lg mt-2">
                    CSS 3
                </div>
            </motion.div>
            <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'
            >
                <RiJavascriptLine className="text-7xl text-yellow-600"/>
                <div className="text-center text-gray-700 text-lg mt-2">
                    Javascript
                </div>
            </motion.div>
            <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'
            >
                <TbBrandRedux className="text-7xl text-purple-600"/>
                <div className="text-center text-gray-700 text-lg mt-2">
                    Redux
                </div>
            </motion.div>
            <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'
            >
                <FaJava className="text-7xl text-red-600"/>
                <div className="text-center text-gray-700 text-lg mt-2">
                    Java
                </div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies