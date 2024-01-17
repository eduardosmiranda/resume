import React from "react";
import SkillsCard from "./SkillsCard";
import HTML from "../../filesAndStyles/files/HTML.jpg";
import CSS from "../../filesAndStyles/files/CSS.jpg";
import Bootstrap from "../../filesAndStyles/files/Bootstrap.jpg";
import Tailwind from "../../filesAndStyles/files/Tailwind.jpg";
import JavaScript from "../../filesAndStyles/files/JavaScript.jpg";
import jQuery from "../../filesAndStyles/files/jQuery.jpg";
import ReactImage from "../../filesAndStyles/files/React.jpg";
import Node from "../../filesAndStyles/files/Node.jpg";
import Git from "../../filesAndStyles/files/Git.jpg";
import GitHub from "../../filesAndStyles/files/GitHub.jpg";
import PostgreSQL from "../../filesAndStyles/files/PostgreSQL.jpg";
import EJS from "../../filesAndStyles/files/EJS.jpg";
import Responsive from "../../filesAndStyles/files/Responsive.jpg";
import Python from "../../filesAndStyles/files/PythonLogo.jpg";


function Skills () {
    const [skills, setSkills] = React.useState([
        {
            skill: "HTML",
            ImageSource: HTML
        },
        {
            skill: "CSS",
            ImageSource: CSS
        },
        {
            skill: "Bootstrap",
            ImageSource: Bootstrap
        },
        {
            skill: "Tailwind",
            ImageSource: Tailwind
        },
        {
            skill: "JavaScript",
            ImageSource: JavaScript
        },
        {
            skill: "jQuery",
            ImageSource: jQuery
        },
        {
            skill: "Node",
            ImageSource: Node
        },
        {
            skill: "Git",
            ImageSource: Git
        },
        {
            skill: "GitHub",
            ImageSource: GitHub
        },
        {
            skill: "PostgreSQL",
            ImageSource: PostgreSQL
        },
        {
            skill: "EJS",
            ImageSource: EJS
        },
        {
            skill: "React",
            ImageSource: ReactImage
        },
        {
            skill: "Responsive Design",
            ImageSource: Responsive
        },
        {
            skill: "Python",
            ImageSource: Python
        }
    ]);

    return <section id="skills">
        {skills.map((int) => (
                <SkillsCard
                    key={int.skill} 
                    ImageSource={int.ImageSource}
                    skill={int.skill}
                />
            ))}
    </section>
}

export default Skills;