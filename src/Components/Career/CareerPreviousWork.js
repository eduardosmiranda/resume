import React from "react";
import CareerCard from "./CareerCard";

function CareerPreviousWork () {
    const [previousWork, setPreviousWork] = React.useState ([ 
        {
            id: 1,
            company: "Allied Motion",
            position: "Academic Internship",
            dates: "02/2021 - 09/2021",
            img: "https://www.medicaldesignandoutsourcing.com/wp-content/uploads/2021/05/Allied-Motion-Technologies-300x195.jpg",
            skills: ["Python", "Mechanical Waves", "Spectrogram", "Fourier", "Matplotlib", "Numpy", "Scipy", "Scikit-learn", "Signal Capture", "Signal Processing"]
        },
        {
            id: 2,
            company: "INESC TEC",
            position: "Academic Internship (Thesis)",
            dates: "02/2023 - 10/2023",
            img: "https://www.securitymagazine.pt/wp-content/uploads/2018/10/inesctec.png",
            skills: ["Python", "Deep Learning", "Machine Learning", "Convolutional Neural Networks", "Machine Learning", "Image processing", "Data processing" ]
        },
        {
            id: 3,
            company: "Adidas",
            position: "Part-Time",
            dates: "08/2022 - 08/2023",
            img: "https://logosmarcas.net/wp-content/uploads/2020/04/Adidas-Logo.png",
            skills: ["Team Work", "Personal Communication", "Sales Capability", "Time Management", "Resource Management", "Huddles"]
        },
        {
            id: 4,
            company: "El Corte Inglés",
            position: "Part-Time",
            dates: "11/2018 - 02/2020",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Logo_Corte_Ingl%C3%A9s.svg/220px-Logo_Corte_Ingl%C3%A9s.svg.png",
            skills: ["Team Work", "Personal Communication", "Sales Capability", "Time Management", "Resource Management"]
        }
    ]);

    return <div className="education">
        {previousWork.map((ed) => (
            <CareerCard
                key={ed.id}
                img = {ed.img}
                schoolName = {ed.company}
                courseName = {ed.position}
                dates = {ed.dates}
                skills = {ed.skills}
            />
        ))}
    </div>
}

export default CareerPreviousWork;