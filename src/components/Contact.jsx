import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CONTACT, GIT_LINK, INSTA_LINK, LINKEDIN_LINK } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20" id="contactSection">
        <motion.h2
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:0.5}}
            className="my-10 text-center text-4xl"
        >
            Get in Touch
        </motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className="my-4"
            >
                {CONTACT.address}
            </motion.p>
            <motion.p 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className="my-4"
            >
                {CONTACT.phoneNo}
            </motion.p>
            <a onClick={(e) => {window.location.href ='mailto:gayathridevipappu@gmail.com';}} href="#" className="border-b">
                {CONTACT.email}
            </a>
            <div className='m-8 flex justify-center center gap-4 text-2xl'>
                <a href={GIT_LINK} target="_blank"><FaGithub/></a>
                <a href={LINKEDIN_LINK} target="_blank"><FaLinkedin/></a>
                <a href={INSTA_LINK} target="_blank"><FaInstagram/></a>
            </div>
        </div>
    </div>
  )
}

export default Contact