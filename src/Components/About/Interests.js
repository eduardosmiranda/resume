import React from "react";
import InterestsCard from "./InterestsCard";
import WebDevelopment from "../../filesAndStyles/files/WebDevelopment.jpg";
import Python from "../../filesAndStyles/files/Python.jpg";
import Physics from "../../filesAndStyles/files/Physics.jpg";
import Space from "../../filesAndStyles/files/Space.jpg";
import Gym from "../../filesAndStyles/files/Gym.jpg";
import Gaming from "../../filesAndStyles/files/Gaming.jpg"

function Interests() {
    const [interests, setInterests] = React.useState([
        {
            ImageSource: WebDevelopment,
            ImageAlt: "Software Development",
            mainText: "Software Development",
            subText: "ReactJS, NodeJS, HTML, CSS, PostgreSQL, REST APIs"
        },
        {
            ImageSource: Python,
            ImageAlt: "Python",
            mainText: "Python Development",
            subText: "NumPy, SciPy, MatPlotLib, scikit-learn, pandas"
        },
        {
            ImageSource: Physics,
            ImageAlt: "Physic",
            mainText: "Physics",
            subText: "Gravity, Semiconductors, Energy, Elements"
        },
        {
            ImageSource: Space,
            ImageAlt: "Space",
            mainText: "Space",
            subText: "Gravity, The Big Bang Theory, Albert Einstein, Stephen Hawking, Light Years"
        },
        {
            ImageSource: Gym,
            ImageAlt: "Gym",
            mainText: "Gym",
            subText: "Body exercise"
        },
        {
            ImageSource: Gaming,
            ImageAlt: "Gaming Setup",
            mainText: "Gaming",
            subText: "Valorant, CS, Fortnite"
        }
    ]);

    return (
        <section id="Interests">
            {interests.map((int) => (
                <InterestsCard
                    key={int.ImageAlt} 
                    ImageSource={int.ImageSource}
                    ImageAlt={int.ImageAlt}
                    mainText={int.mainText}
                    subText={int.subText}
                />
            ))}
        </section>
    );
}

export default Interests;
