import React from "react";
import { motion } from 'framer-motion';
import { FaSeedling, FaCloudSun, FaBug, FaFlask, FaChartLine, FaWater } from 'react-icons/fa';
import agrixService from '../../assets/agrix-service.png';
import agrixOffering from '../../assets/agrix-offering.png';
import probsolAgri from '../../assets/probsol-agri.png';
import machineryRental from '../../assets/machinery-rental.jpg';
import agrixinputs from '../../assets/agrix-inputs.jpg';
import digitalFarm from '../../assets/digital-farm.jpg';
import marketLinkage from '../../assets/market-linkage.jpg';
import expertMentorship from '../../assets/expert-mentorship.jpg';
import './Servicess.css';

const Servicess = () => {
    const scenarios = [
        {
            title: "Poor Farm Mechanisation",
            description: "Limited access to modern farming equipment and machinery, leading to inefficient farming practices and increased labor costs.",
            icon: <FaSeedling className="scenario-icon" />
        },
        {
            title: "Unorganised Agri-inputs Supply Chain",
            description: "Inefficient distribution of seeds, fertilizers, and pesticides, causing delays and quality issues in farming operations.",
            icon: <FaCloudSun className="scenario-icon" />
        },
        {
            title: "Unreliable Off-take",
            description: "Unstable market prices and inconsistent buying patterns affecting farmers' income and market confidence.",
            icon: <FaChartLine className="scenario-icon" />
        },
        {
            title: "Lack of Insurance & Credits",
            description: "Limited access to agricultural insurance and credit facilities, making farmers vulnerable to crop failures and financial risks.",
            icon: <FaWater className="scenario-icon" />
        },
        {
            title: "Poor RoI (Return on Investment)",
            description: "Low return on investments due to high input costs, market volatility, and inefficient farming practices.",
            icon: <FaFlask className="scenario-icon" />
        },
        {
            title: "Technology & Tracking Gap",
            description: "Insufficient adoption of modern farming technologies and lack of proper tracking systems for crop management.",
            icon: <FaBug className="scenario-icon" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const solutionVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <motion.div 
            className="Servicess-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div 
                className="Servicess-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Comprehensive Agritech Solutions for Every Need
                </motion.h1>
                <motion.div 
                    className="header-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.div 
                        className="image-container"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <img src={agrixService} alt="Agrix Services" className="service-header-image" />
                    </motion.div>
                    <motion.div 
                        className="text-container"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="header-description">
                            <strong>Agrix</strong> engages directly with farmers in India, providing a 360-degree service from land 
                            preparation to market linkage. Our services encompass high-quality inputs, advanced machinery, and digital tools to optimize farm operations and data collection. By forming farming clusters, Agrix facilitates accessible and bankable farm mechanization, ensures the availability of premium agri-inputs, enables digital plot mapping, and streamlines efficient market linkage for small and marginal farmers at affordable prices.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="offering-image-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <img src={agrixOffering} alt="Agrix Offerings" className="offering-image" />
                </motion.div>
            </motion.div>

            <motion.div 
                className="Servicess-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ border: 'none' }}
            >
                <motion.h1 
                    className="farmers-heading"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    What Farmers Face Today?
                </motion.h1>
            </motion.div>

            <motion.div 
                className="scenarios-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
            >
                {scenarios.map((scenario, index) => (
                    <motion.div 
                        key={index}
                        className="scenario-card"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div 
                            className="scenario-content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 * index }}
                        >
                            {scenario.icon}
                            <h3>{scenario.title}</h3>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div 
                className="probsol-image-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
            >
                <img src={probsolAgri} alt="Problems and Solutions in Agriculture" className="probsol-image" />
            </motion.div>

            <motion.div 
                className="Servicess-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                style={{ border: 'none' }}
            >
                <motion.h1 
                    className="farmers-heading"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                >
                    Our Solutions
                </motion.h1>
                <motion.p 
                    className="solutions-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    We provide accessible and affordable solutions, from digital plot mapping to high-quality agri-inputs, ensuring sustainable growth.
                </motion.p>

                {[
                    {
                        image: machineryRental,
                        title: "Efficient Machinery Rental",
                        description: "With Agrix App tractors are managed efficiently throughout the year; Farmers can rent farm machinery as & when they require which aids them to cultivate the crops on time",
                        delay: 1.3
                    },
                    {
                        image: agrixinputs,
                        title: "Quality Agrix Inputs Supply",
                        description: "At Agrix we maintain quality alongwith low agri costs. It increases the chances for farmers to earn more profit on their production. Agri inputs can be booked on Agri App easily.",
                        delay: 1.4
                    },
                    {
                        image: digitalFarm,
                        title: "Digital Farm Management",
                        description: "Agrix is abreast with hyper local digital platform for farm machinery rental. With Agrix App we maximise data collections like price across regions, crop variety & health, farmers' finances & cultivation patterns.",
                        delay: 1.5
                    },
                    {
                        image: marketLinkage,
                        title: "Strong Market Linkage",
                        description: "We work in clusters which provide critical mass for reliable market linkages for the farmers & E2E traceability for prospective off-takers with access to real-time statistics at the farm gate level.",
                        delay: 1.6
                    },
                    {
                        image: expertMentorship,
                        title: "Expert Mentorship Support",
                        description: "At Agrix KisanHit Centres our passionate representatives work on the ground with the farmers to solve & guide them on day to day basis. With this support, farmers recognise & connect with Agrix better than our competitors.",
                        delay: 1.7
                    }
                ].map((solution, index) => (
                    <motion.div 
                        key={index}
                        className="solution-item"
                        variants={solutionVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: solution.delay }}
                    >
                        <motion.div 
                            className="solution-content"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: solution.delay + 0.1 }}
                        >
                            <motion.div 
                                className="solution-image"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: solution.delay + 0.2 }}
                            >
                                <img src={solution.image} alt={solution.title} className="machinery-image" />
                            </motion.div>
                            <motion.div 
                                className="solution-text"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: solution.delay + 0.3 }}
                            >
                                <h2 className="solution-title">{solution.title}</h2>
                                <p className="solution-description">{solution.description}</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Servicess;