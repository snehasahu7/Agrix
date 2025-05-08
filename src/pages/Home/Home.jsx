import React from "react";
import Hero from "../../components/Hero.jsx"
import Philosophy from "../../components/Philosophy.jsx"
import Services from "../../components/Services.jsx"
import Impact from "../../components/Impact.jsx";

import Presence from "../../components/Presence.jsx";


const Home=()=>{
    return(
        <div>
            
            <Hero/>
            <Philosophy/>
            <Services/>
            <Impact/>
            <Presence/>
        
        </div>
    )
}

export default Home;


