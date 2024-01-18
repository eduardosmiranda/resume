import React from "react";

function AcademicJourney () {
    return <section id="AcademicJourney">
        <p className ="textAboutMe textFirstP">
            Despite holding a Master's degree in Electronic Engineering, my passion for Web Development emerged in 2018 when I was deciding on a university degree. Faced with the choice between Computer Engineering and Electronic Engineering, I opted for the latter, lacking prior coding experience. Throughout my degree, I engaged in Electric Circuits, Microcontrollers, Microprocessors (including Arduino), Physics, Algebra, Calculus, and Automation. Although I appreciate all challenges, I found particular joy in projects involving software/code. Witnessing a project come to life from inception fueled my growing interest in coding. My journey began with Python, initially outside the curriculum, where I delved into online resources, replicated code from YouTube videos, and experimented with programming concepts.
        </p>
        <p className="textAboutMe textSecondP">
            My initial venture into software development involved using Python to apply and expand my acquired knowledge. The project's essence centered on identifying defects in 3-Phase Motors. The approach was innovative – post-assembly, the motor was subjected to a sound testing station equipped with two accelerometers (radial and axial). These sensors detected vibration acceleration. Establishing "normal" values involved studying extensive datasets. Subsequently, I crafted an algorithm utilizing Fourier Transforms, Spectrograms, and Power Density Spectrums to pinpoint two primary motor defects: Dust contamination and bearing defects. Key Python modules such as NumPy, Matplotlib, SciPy, scikit-learn, pandas, and OpenCV played integral roles in this project.
        </p>
        <p className="textAboutMe textThirdP">
            After that project, I developed some "small" ones like a electrocardiogram from scratch using a heart sensor, a microcontroller so I could fetch the signal from the sensor
            and a Python algorithm so I could implement some logic and process the data. To pass the data from the microcontroller to the computer, I used USART. Also, I developed a automated
            production line with an automaton! The goal for this production line was to fill cereal boxes that could have different sizes. On the side, I was starting to explore the world of Machine
            Learning via, again, some YouTube videos and threads that were built because of the ChatGPT hype.
        </p>
        <p className="textAboutMe textForthP">
            For my thesis, I delved into Deep Learning, choosing object detection as my focus despite no prior experience. The project aimed at understanding the train, validation, and test processes, exploring various approaches. The goal was to detect and locate industrial vehicles in images and videos. The journey began with challenges but evolved as I grasped concepts like dataset balancing, proper annotation, tensor understanding, and choosing Python libraries. I explored hyperparameters and the impact of learning rates on the final model. Ultimately, I earned a grade of 17 out of 20.
        </p>
        <p className="textAboutMe textFifthP">
            Throughout my journey, curiosity propelled me to unravel the intricacies of the internet.  I delved into HTTP{'(S)'} requests and discovered JavaScript as the primary language. Through YouTube tutorials, I honed my skills in JavaScript, particularly exploring ES6 features. Growing more intrigued, I invested in a Udemy course to master web development. I gained proficiency in NodeJS, ReactJS, PostgreSQL, HTML5, CSS3, Bootstrap, Tailwind, and REST APIs. Embracing Confucius's wisdom, <span className="ConfuciusQuote"> "Choose a job you love, and you will never have to work a day in your life" </span> resonates deeply with me. Despite the extensive time invested, my passion fuels continuous research and learning for self-improvement.
        </p>
    </section>
}

export default AcademicJourney;