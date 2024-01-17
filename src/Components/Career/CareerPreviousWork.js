import React from "react";
import CareerCard from "./CareerCard";

function CareerPreviousWork () {
    const [previousWork, setPreviousWork] = React.useState ([ 
        {
            id: 1,
            company: "Allied Motion",
            position: "Academic Internship",
            dates: "02/2021 - 09/2021",
            img: "https://promoltd.co.il/wp-content/uploads/elementor/thumbs/SMALL-LOGO-1-qao8fz1lcwfooxinbdjkgbcsoym4yc3gnmn0dfkhhk.png",
            skills: ["Python", "Mechanical Waves", "Spectrogram", "Power Spectral Density", "Sensors", "Electric Circuits", "Automation", "Data acquisition", "Fourier", "Matplotlib", "Numpy", "Scipy", "Scikit-learn", "Signal Capture", "Signal Processing"]
        },
        {
            id: 2,
            company: "INESC TEC",
            position: "Academic Internship (Thesis)",
            dates: "02/2023 - 10/2023",
            img: "https://avatars.githubusercontent.com/u/10416172?s=280&v=4",
            skills: ["Python", "Pytorch", "YOLOv3", "YOLOv5", "Faster R-CNN", "Deep Learning", "Machine Learning", "Convolutional Neural Networks", "Image processing", "Data processing", "Data annotation" ]
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
            img: "https://marcaporhombro.com/wp-content/uploads/2012/02/corte.jpg",
            skills: ["Team Work", "Personal Communication", "Sales Capability", "Time Management", "Resource Management"]
        }
    ]);

    return <div className="previouswork">
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