import React from "react";
import { useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Presence.css'

const Presence=()=>{
    
    const [count, setCount] = useState(0);
    const [cluster, setcluster] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCount((prevCount) => {
            if (prevCount < 13000) {
              return prevCount + 50;
            } else {
              clearInterval(interval);  
              return prevCount;
            }
          });
        }, 0);  

       
    
        return () => clearInterval(interval); 
       
      }, []);

      useEffect(()=>{
         const clusterint = setInterval(()=>{
            setcluster((prevCount) => {
                if (prevCount < 10) {
                  return prevCount + 1;
                } else {
                  clearInterval(clusterint);  
                  return prevCount;
                }
              });
        },100);

         return () => clearInterval(clusterint);
      },[]);

    return(
        <section className="impact-section">
        <h2>Our Presence</h2>
        <p>Making the change, One farm at a time.</p>
        <div className="impact-stats">
          <div className="stat-card">
          <h3>40%</h3>
          <p>Efficiency Gains</p>
          </div>
          <div className="stat-card">
          <h3>{count}+</h3>
          <p>Farmers Empowered</p>
          </div>
          <div className="stat-card">
            <h3>{cluster}+</h3>
            <p>Cluster Networks</p>
          </div>
        </div>
        <div className="cta">
            <p>To be a member of an innovative farming community</p>
            <Link to="/contact#dropamessage" className="btn">DROP US A LINE</Link>
        </div>
        
      </section>
    )
}

export default Presence;