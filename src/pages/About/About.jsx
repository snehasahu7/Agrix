import {React, useState} from "react";
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
import img3 from "../../assets/Shushanto mitraa.png"
import { FaLinkedin } from "react-icons/fa6";
import krishijagran from "../../assets/krishijagran.jpeg";
import krishijagranwebsite from "../../assets/krishijagranwebsite.jpeg";
import biharsummit from "../../assets/Bihar Summit.jpg";
import successstory from "../../assets/sucessstory.jpeg";
import startupaward from "../../assets/Startup Awad -1.jpeg";
import maple from "../../assets/maple.png";
import lead from "../../assets/lead.png"
import './About.css'


const About = ()=>{

  const journeyEarlyLifePoints = [
    "Nilay, raised in a Bihar village and from a family of educators, developed a deep connection with farming.",
    "After leaving for higher studies, he earned an MTech in Signal & Image Processing from NIT Rourkela, focusing on image-based plant phenomics.",
    "Worked as a senior research fellow and later pursued a Ph.D. at IIT Delhi.",
    "A visit back to his village revealed a decline in farming, inspiring him to explore tech-driven solutions.",
    "At IIT Delhi, he connected with Saurav and Vivek, sharing a mutual interest in addressing farming challenges."
  ];
  
  const journeyRest = [
    {
      year: "2018",
      
      desc: "Driven by the farming challenges observed in a Bihar village, an IIT Delhi student initiated the exploration of technology-driven solutions for farmers."
    },
    {
      year: "2019",
      
      desc: "With strong ties to rural communities, co-founders Saurav and Vivek started creating significant solutions. Together with farmers, a pilot farm was set up to evaluate these options."
    },
    {
      year: "2020",
      
      desc: "Agrix was officially registered. The first farming cluster was established in Nawada, Bihar, marking the beginning of scalable impact."
    },
    {
      year: "2021",
     
      desc: "Secured ₹2 Cr in funding to expand operational clusters. The company served over 1,000 farmers across multiple regions. Seed funding was raised to bolster supply chains and tech initiatives."
    },
    {
      year: "2022",
      
      desc: "Monthly revenue surpassed ₹7.5 Mn. Operations expanded to 13 clusters, impacting more than 4,000 farmers. The company received recognition from the Bihar Government for its innovative approach."
    },
    {
      year: "2023",
      
      desc: "Revenue exceeded ₹10 Mn per month. Agrix is now serving over 12,000+ farmers across 25 villages. The company is experiencing growing national demand, expanding its footprint beyond Bihar."
    }
  ];
  
  function JourneyTimeline() {
    const [showAll, setShowAll] = useState(false);
    // Each Early Life point is a separate card
    const earlyLifeCards = journeyEarlyLifePoints.map((point, idx) => ({
      year: idx === 0 ? "Early Life" : "",
      
      desc: point
    }));
    const allCards = [...earlyLifeCards, ...journeyRest];
    const visibleCards = showAll ? allCards : allCards.slice(0, 4);
  
    return (
      <section className="journey-zigzag-section">
        <h2 className="journey-title">Our Journey</h2>
        <div className="journey-zigzag-timeline">
          {visibleCards.map((item, idx) => (
            <div className={`zigzag-item ${idx % 2 === 0 ? 'top' : 'bottom'}`} key={idx}>
              <div className="zigzag-content timeline-fixed-size">
                
                {item.year && <div className="zigzag-year">{item.year}</div>}
                <div className="zigzag-desc">{item.desc}</div>
              </div>
              <div className="zigzag-dot"></div>
            </div>
          ))}
          <div className="zigzag-line"></div>
        </div>
        {!showAll && (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button className="read-more-btn" onClick={() => setShowAll(true)}>
              Read More
            </button>
          </div>
        )}
      </section>
    );
  }

  
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
            title2:'Phd, IIT Delhi',

        },
        {
            imgg: f2,
            name:"Dr. Sandeep Joshi",
            title:'D2D Comm. and Machine Learning',
            title2:'Phd, IIT Delhi',

        },
        {
            imgg: f3,
            name:"Saurav Singh",
            title:'Operational Supply Management',
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
          name:"Shushanto Mitra",
          title:"CEO at Lead Angels"
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

        {/*<div className="journey-section">
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
</div>*/}
 <JourneyTimeline />

        <div className="advisory-board">
            <motion.p className="header"
               initial="hidden"
               whileInView={{opacity:1,y:0}}
               viewport={{ once: true }}
               variants={textVariants}>Our Team</motion.p>
            <p className="header2">People That Make It All Happen</p>
            {/*<Slider {...settings}>
                 {team.map((member) => (
                <div  className="team-slide">
                    <img src={member.imgg} alt={member.name} className="team-img" />
                    <h3>{member.name}</h3>
                    <p className="team-text">{member.title}</p>
                    <p >{member.title2}</p>
          </div>
        ))}
      </Slider>*/}
             <div className="founderss">
             {team.map((board)=>{
              
                 return(
                    
                      <div className="founders-card">
                        <img src={board.imgg} className="profile-pic" />
                        <p className="name">{board.name}</p>
                        <div className="titlediv"><p className="title">{board.title}</p></div>
                        <p>{board.title2}</p>
                        {/*<div className="title2"><p className="title2">{team.title2}</p></div>
                        <a ><FaLinkedin className="linkedinicon"/></a>*/}
                     </div>
                  
                )
                
                 
             })}
              </div> 
            
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
        <motion.div 
        className="awards"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}>
            <p className="header">Awards and Recognitions</p>
            
           
            <div className="awards-gallery">
              <motion.div className="award-card" whileHover={{ scale: 1.05 }}>
                <img src={biharsummit} alt="Bihar Business Connect 2024" className="award-photo"/>
                <h3>Bihar Business Connect 2024</h3>
                <p>Recognized as a successful startup at the Bihar Business Connect 2024, Patna.</p>
              </motion.div>
              <motion.div className="award-card" whileHover={{ scale: 1.05 }}>
                <img src={startupaward} alt="Startup Award 2024" className="award-photo"/>
                <h3>Startup Award 2024</h3>
                <p>Honored for outstanding innovation and impact in agri-tech at the Startup Awards 2024.</p>
              </motion.div>
              <motion.div className="award-card" whileHover={{ scale: 1.05 }}>
                <img src={krishijagran} alt="Krishi Jagran Article" className="award-photo"/>
                <h3>Featured in Krishi Jagran</h3>
                <p>Our success story and impact featured in India's leading agri magazine.</p>
                
              </motion.div>
              <motion.div className="award-card" whileHover={{ scale: 1.05 }}>
                <img src={successstory} alt="Success Story" className="award-photo"/>
                <h3>Government Success Story</h3>
                <p>Recognized by government publications for empowering farmers with technology.</p>
              </motion.div>
              
            </div>

            
        </motion.div>

        <motion.div 
        className="investors2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}>
            <p className="header">Our Investors</p>
            <p className="hh2"> Proudly backed by leading investors who share our vision to revolutionize agri-tech.</p>
            <div className="investorcontainer">
              <div className="invcon">
                    <img className="invs" src={lead} alt="" />
              </div>
              
              <div className="invcon">
                <img className="invs" src={maple} alt="" />
              </div>
              
            </div>
        </motion.div>
         
        </>

        
       
    )
}

export default About;