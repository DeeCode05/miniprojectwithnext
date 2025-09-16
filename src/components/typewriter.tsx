"using client";

import { div } from "framer-motion/m";
import { Typewriter } from "react-simple-typewriter";

export default function typewriter(){
    return (
        <div>
            <h1>
                <Typewriter
                words={['Why Choose Us?']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1500}
                />
            </h1>
        </div>
    );
}