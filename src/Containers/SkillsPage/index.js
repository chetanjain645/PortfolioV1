import React from "react";
import Skills from "../../components/SkillsPage/index";

const SkillsContainer = () => {
    const data = {
        leftSkills: [
            {
                technology: "Python",
                level: 75
            },
            {
                technology: "C++",
                level: 70
            },
            {
                technology: "Scikit-Learn",
                level: 65
            },
            {
                technology: "Pandas",
                level: 78
            },
            {
                technology: "SQL",
                level: 70
            },
            {
                technology: "Git/Github",
                level: 65
            },
        ],
        rightSkills: [
            {
                technology: "Web Scraping",
                level: 70
            },
            {
                technology: "Flask",
                level: 65
            },
            {
                technology: "HTML/CSS",
                level: 70
            },
            {
                technology: "Visualisation",
                level: 72
            },
            {
                technology: "IBM Cloud",
                level: 80
            },
            {
                technology: "NLP",
                level: 65
            },
        ]
    }
    return (
        <Skills data={data} />
    )
}

export default SkillsContainer;
