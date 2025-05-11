import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import intropic from "../../assets/Intropic.png"
import journeypic from "../../assets/journey.png"
import { BsRocket } from "react-icons/bs";
import { RiFocus2Line } from "react-icons/ri";
import investor from '../../assets/investors.js';
import f1 from '../../assets/nilaypandey.png';
import f2 from '../../assets/sandeepjoshi.png';
import f3 from '../../assets/sauravsingh.png';
import f4 from '../../assets/vivekkumar.png';
import img1 from "../../assets/Pankajkarna.png"
import img2 from "../../assets/abhinavgrover.png"
import img3 from "../../assets/samarthagarwal.png"
import img4 from "../../assets/skgaitam.png"
import img5 from "../../assets/manishcpandey.png"
import { FaLinkedin } from "react-icons/fa6";
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

    const team = [
        {   
            imgg: f1,
            name:"Dr. Nilay Pandey",
            title:'Tech Development and Data Science',
            title2:'Phd, IIT Patna',

        },
        {
            imgg: f2,
            name:"Dr. Sandeep Joshi",
            title:'D2D Communication and Machine Learning',
            title2:'Phd, IIT Patna',

        },
        {
            imgg: f3,
            name:"Saurav Singh",
            title:'Operation and Supply Chain Management',
            title2:'B.Tech, CSE, WBUT',

        },
        {
            imgg: f4,
            name:"Vivek Kumar",
            title:'Rural Outreach and Agro-innovation',
            title2:'B.Tech, CSE, WBUT',

        }

    ]

    const advisoryboard=[
        {
            image:img1,
            name:"Pankaj Karna",
            title:"Managing Director at MAPLE Capital"
        },
        {
            image:img2,
            name:"Abhinav Grover",
            title:"Director at Maple Accelerator"
        },
        {
            image:img3,
            name:"Samarth Agarwal",
            title:"Co-founder & CEO, MaxWholesale"
        },
        {
            image:img4,
            name:"S.K Gautam",
            title:"Advisor for Agri Value Chain"
        },
        {
            image:img5,
            name:"Manish C. Pandey",
            title:"CEO at Agriculturist"
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500, 
        arrows: false,
      };

      const headerVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        }
      };

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
          }
        }
      };
    


    return(
        <>
            <motion.div
             className="about-txt"
             initial="hidden"
             animate="visible"
             variants={containerVariants}
            >
                <motion.p  variants={headerVariants}>Who are we?</motion.p>
            </motion.div>
        
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

        <div className="journey-section">
  <h2>Our Journey</h2>
  
  <div className="timeline">
    <div className="timeline-container">
      <motion.div 
        className="timeline-item"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="datee">Early life</div>
        <div className="content">
          <p>Nilay's story-Grew up in a small village in Bihar in a Teacher's family – spending most of his time roaming around the farms.</p>
        </div>
      </motion.div>

      <motion.div 
        className="timeline-item"
        initial={{ opacity: 0, x:50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="datee">2002</div>
        <div className="content">
          <p>Leaves his village as his parents move to a nearby town. Keeps visiting his village regularly on vacations.</p>
        </div>
      </motion.div>

      <motion.div 
        className="timeline-item"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="datee">2008-2012</div>
        <div className="content">
          <p>Leaves Bihar for higher studies.Graduates, joins Infosys for a brief time. Joins NIT Rourkela for an MTech in Signal & Image Processing. Works on image-based plant phenomics.</p>
        </div>
      </motion.div>

      <motion.div 
        className="timeline-item"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="datee">2014-2015</div>
        <div className="content">
          <p>Completes his MTech, starts working as a senior research fellow.Joins IIT Delhi to pursue his Ph.D</p>
        </div>
      </motion.div>

      <motion.div 
        className="timeline-item"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="datee">2016-2017</div>
        <div className="content">
          <p>Revisited his village after 8 years. He found his village deserted as farming lost its appeal. This inspired him to explore tech-driven solutions and idea to employ tech in farming.</p>
        </div>
      </motion.div>

      <motion.div 
        className="timeline-item"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="datee">2019</div>
        <div className="content">
          <p>Met Saurav and Vivek at IIT DElhi, bonding over shared farming challenges. Launched a 1-acre pilot project, facing delays in hiring a tractor and seed procurement.</p>
        </div>
      </motion.div>

      <motion.div 
        className="timeline-item"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="datee">2020</div>
        <div className="content">
          <p>Agrix is registered, with first operational cluster in Nawada, Bihar.</p>
        </div>
      </motion.div>
    </div>
  </div>
</div>

        <div className="founder">
            <motion.p className="header"
               initial="hidden"
               whileInView={{opacity:1,y:0}}
               viewport={{ once: true }}
               variants={textVariants}>Our Team</motion.p>
            <p className="header2">People That Make It All Happen</p>
            <Slider {...settings}>
                 {team.map((member) => (
                <div  className="team-slide">
                    <img src={member.imgg} alt={member.name} className="team-img" />
                    <h3>{member.name}</h3>
                    <p className="team-text">{member.title}</p>
                    <p >{member.title2}</p>
          </div>
        ))}
      </Slider>
            
        </div>

        <motion.div 
        className="advisory-board"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}>
            <p className="header">Advisory Board</p>
            <div className="founderss">
             {advisoryboard.map((board)=>{
              
                 return(
                    
                      <div className="founders-card">
                        <img src={board.image} className="profile-pic" />
                        <p className="name">{board.name}</p>
                        <div className="titlediv"><p className="title">{board.title}</p></div>
                        
                        {/*<div className="title2"><p className="title2">{team.title2}</p></div>
                        <a ><FaLinkedin className="linkedinicon"/></a>*/}
                     </div>
                  
                )
                
                 
             })}
              </div> 
        </motion.div>
             
        <motion.div 
        initial="hidden"
        whileInView={{opacity:1,y:0}}
        viewport={{ once: true }}
        variants={textVariants}
        className="investors">
             
            <p className="header">Business Partners</p>
            <motion.div
             whileInView={{opacity:1, y:0}}
             initial={{y:100, opacity:0}}
             transition={{duratiion:1.5, delay:0.5}}className="partners">
                 {investor.map((image)=>{
                    return(
                        <motion.img whileInView={{opacity:1, y:0}}
                        initial={{y:100, opacity:0}}
                        transition={{duratiion:1.5,staggerChildren:0.8}}  whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.3 }
                          }}className='invpic' src={image} />
                    ) 
                    
                 })}
            </motion.div>

        </motion.div>
        </>

        
       
    )
}

export default About;