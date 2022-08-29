import React from 'react';
import Typewriter from "typewriter-effect"
const Text = () => {
    return (
        <div>
            <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString("What your random quote...")
                .pauseFor(200)
                .deleteAll()
                .typeString("Say about you")
                .start()

            }}
            />
        </div>
    );
};

export default Text;