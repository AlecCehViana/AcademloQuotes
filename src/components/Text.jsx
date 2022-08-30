import React from 'react';
import Typewriter from "typewriter-effect"
const Text = () => {
    return (
        <div style={{color:'white'}}>
            <Typewriter
             options={{
                strings: ['what your random quote', 'says about you'],
                autoStart: true,
                loop: true,
              }}
            />
        </div>
    );
};

export default Text;