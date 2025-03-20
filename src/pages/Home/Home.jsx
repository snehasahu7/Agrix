import React from "react";
import Hero from "../../components/Hero.jsx"
import Philosophy from "../../components/Philosophy.jsx"
import Services from "../../components/Services.jsx"
import Impact from "../../components/Impact.jsx";
import AgriValueChain from "../../components/AgriValueChain.jsx";

const Home=()=>{
    return(
        <div>
            
            <Hero/>
            <Philosophy/>
            <Services/>
            <Impact/>
            <AgriValueChain/>
        
        </div>
    )
}

export default Home;


