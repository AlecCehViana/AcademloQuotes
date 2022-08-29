import React from "react"

import { Typewriter } from "typewriter-effect"


const Presentation = () => {
   

    
   


 return (
     <div  className="my-name">
         
        <div className="my-name-intro">
            <div className="title1">

                <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                        "I'm Alec",
                        "I'm a Software Developer",
                        "i'm a Designer",
                        "I'm content creator"
                    ]

                }}/>
            </div>

        </div>
   
       

        
      
     </div>
 )
}

export default Presentation
