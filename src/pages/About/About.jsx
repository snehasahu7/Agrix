import React from "react";
import { motion } from "framer-motion";
import intropic from "../../assets/Intropic.png"
import journeypic from "../../assets/journey.png"
import { BsRocket } from "react-icons/bs";
import { RiFocus2Line } from "react-icons/ri";
import './About.css'

const About = ()=>{
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 1.5,
                ease: "easeOut"
                
            }
        }
    };

    const imageVariants = {
        animate: {
            y: [-10, 10],
            transition: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        }
    };

    return(
        <>
        
         <div className="about">
            <motion.div 
                className="introtext"
                initial="hidden"
                whileInView={{opacity:1,y:0}}
                viewport={{ once: true }}
                variants={textVariants}
                
            >
                <p><span>Agrix</span> is pioneering a new era in agriculture—where technology meets tradition to unlock farming's true potential. By integrating precision-driven solutions with seamless mechanization, we empower farmers to cultivate smarter, yield higher, and thrive in a rapidly evolving agri-landscape. Our holistic approach transforms fragmented farmlands into efficient, high-output clusters, ensuring better profitability and long-term sustainability. With Agrix, farming isn't just a livelihood—it's a scalable, tech-powered success story.</p>
            </motion.div>
               
            <motion.img
                src={intropic}
                className="intropic"
                alt="Agrix"
                initial={{ y: -10 }}
                animate="animate"
                variants={imageVariants}
            />
        </div>
        <div className="visionbox">
            <div className="box">
                <div className="vl"></div>
               <motion.div 
               whileInView={{opacity:1, y:0}}
               initial={{y:100, opacity:0}}
               transition={{duratiion:1.5}}><BsRocket className="icon"/></motion.div>
               <p>To be the global leader in sustainable agriculture, setting new standards for environmental stewardship and agricultural innovation.</p>
            </div>
            <div className="box">
                <div className="vl"></div>
                <motion.div
                whileInView={{opacity:1, y:0}}
                initial={{y:100, opacity:0}}
                transition={{duratiion:1.5}}><RiFocus2Line className="icon"/></motion.div>
               <p>To revolutionize agriculture through sustainable practices and innovative technology, ensuring food security for future generations.</p>
            </div>

        </div>

        <motion.div 
                className="journey" 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}>
             <p className="header">Our History</p>
             <motion.p className="journeytxt"
             whileInView={{opacity:1, x:0}}
             initial={{x:-100, opacity:0}}
             transition={{duratiion:1}}>From revolutionizing farming to empowering thousands, our journey is built on innovation, resilience, and impact.</motion.p>
             <motion.div  whileInView={{opacity:1, x:0}}
                  initial={{x:100, opacity:0}}
                  transition={{duratiion:1.5}}><img src={journeypic} className="journey-img" />
                  </motion.div>
        </motion.div>

        <div className="founders">
            <p className="header">Our Founders</p>
        </div>
             
        <div className="investors">
             
            <p className="header">Our Investors</p>


        </div>
        </>

        
       
    )
}

export default About;