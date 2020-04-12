import React from "react";
import Projects from "../../components/Projects/index";

const ProjectsContainer = () => {
    const data = [
        {
          name: "My Portfolio",
          description: "This is my portfolio website. It is built with React. It's a Progressive Web App (PWA) and could be installed as native app and works offline as well.",
          link: "https://github.com/chetanjain645/PortfolioV1",
          date: "April 2020"
        },
        {
          name: "Statistics",
          description: "Statistics is a python library. It is use for finding and plotting some statiscal features of data.",
          link: "https://github.com/chetanjain645/Statistics",
          date: "April 2020"
        },
        {
          name: "Image Classifier",
          description: "A web image classifier use to predict the name of uploaded image on a portal.",
          link: "https://github.com/chetanjain645/Image-classifier",
          date: "Feb-March, 2020"
        },
        {
          name: "Data Analysis Chapter",
          description: "This is a general description of whole process on Data Analysis.",
          link: "https://github.com/chetanjain645/data-analysis-with-python",
          date: "Jan-Feb, 2020"
        },
        {
          name: "Task Manager",
          description: "A Web app which add your task to remind yourself that you have to do this work.",
          link: "https://github.com/chetanjain645/A-small-task-manager",
          date: "Jan, 2020"
        },
        {
          name: "IBM Cloud PhoneBot",
          description: "A PhoneBot for IBM Cloud use to tell the functionality of the portal. It is built with Twilio API and IBM Cloud.",
          link: "#",
          date: "Nov-Dec, 2019"
        },
        {
          name: "Database Management Console",
          description: "This is made with swing package in java use to get and set the information in the database.",
          link: "https://github.com/chetanjain645/swing-jdbc-application",
          date: "Nov, 2019"
        },
        {
          name: "Florence",
          description: "A Chatbot for flower store use to give the answers to the users of their general question.",
          link: "https://github.com/chetanjain645/Chatbot-via-IBM-watson",
          date: "Aug-Oct, 2019"
        },
        {
          name: "Web Scraper",
          description: "This Scraper helped me in collecting the data from the web.",
          link: "https://github.com/chetanjain645/website-scraping",
          date: "June, 2019"
        }
      ]

    return (
        <Projects data={data} />
    )
}

export default ProjectsContainer;
