import React from "react";
import CareerCard from "./CareerCard";
import udemyImage from "../../filesAndStyles/files/certificado-udemy.jpg";

function CareerEducation () {
    const [education, setEducation] = React.useState([
    {
        id: 1,
        school: "ES José Régio",
        course: "Ciências e Tecnologias",
        dates: "09/2015 - 06/2018",
        img: "https://0774a870d3.cbaul-cdnwnd.com/8d579289ce2be190aa6d3b4e0373ccd2/200001225-53bef55b29/escjosereg_1.jpg"
    }, 

    {
        id: 2,
        school: "ISEP",
        course: "Engenharia Eletrotécnica e de Computadores",
        dates: "09/2018 - 10/2023",
        img: "https://eu.ipp.pt/isep/imagens/imgPortal/login1.jpg"
    }, 

    {
        id: 3,
        school: "Udemy (online)",
        course: "The Complete 2024 Web Development Bootcamp",
        dates: "11/2023 - 01/2024",
        img: udemyImage
    }]);


    return <div className="education">
        {education.map((ed) => (
            <CareerCard
                key={ed.id}
                img = {ed.img}
                schoolName = {ed.school}
                courseName = {ed.course}
                dates = {ed.dates}
            />
        ))}
    </div>

}

export default CareerEducation;