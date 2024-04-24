import React from 'react';
import './Portfolio.css';  // Make sure to import the styles

const Portfolio = () => {
  // Array of objects, each representing a project
  const projects = [
    {
      title: "Group-Project-API",
      description: "For our group project, we decided to make a dashboard for users to receive information from several different APIs in one location. Upon opening the page, users will be able to dynamically add cards to the page that display information such as weather data, news, sports scores, and fun facts. All updates made on the page will be saved to local storage for recall when reopening or refreshing the page.",
      imageUrl: "/Screenshot 2024-04-23 at 10.42.47 PM.png",
      repoUrl: "https://github.com/JoAplon/Group-Project-API"
    },
    {
      title: "Reel Radar Reviews",
      description: "Often in our boot-camp class we would chat, and discuss various movies. This gave us the idea for our project to make a database of reviews using everything we have learned. We wanted the ability to write a review on any movie, and have posters, and data implemented with each review. We set about to create this community project that can be used to share our thoughts and opinions on various movies we have seen.",
      imageUrl: "/Screenshot 2024-04-23 at 10.46.36 PM.png",
      repoUrl: "https://github.com/housejames/Movie-Review-Database-Project?tab=readme-ov-file"
    },
    {
        title: "Command-line-README-Generator-UCI",
        description: "This challenge assignment tasked me to create a command-line that generates a professional README. In doing this challenge I learned how to properly use Node and the uses it has in coding. Furhtermore, I was able to learn how it can easiy be integrated into what I have already learned.",
        repoUrl: "https://github.com/jasondang4/Command-line-README-Generator-UCI"
      },
      {
        title: "JS-Payroll-Employee-Tracker-UCI",
        description: "This challenge was to create a payroll tracker that allows teh user to interact with the application and input multiple people, along with their full names, salary, and even calculate the average salaray between the listed people.",
        repoUrl: "https://github.com/jasondang4/JS-Payroll-Employee-Tracker-UCI"
      },
      {
        title: "Web-API-Challenge-Personal-Blog-UCI",
        description: "In this challenge I was tasked with making a personal Blog website from scratch using only idex.html, styles.css, and script.js. Here you will be presented with a fully fucntioning website that allows you to create a blog with the content of username, title, and content. Furthermore there is a button that allows you to toggle between light and dark mode. Addtionally, all blogs that are created will be saved and then presented in a different page called 'Blog Posts' where you can view all previously created Blogs with the entered content. There is alos a 'back' button that will take you back to the main page to enter more blogs.",
        repoUrl: "https://github.com/jasondang4/Web-API-Challenge-Personal-Blog-UCI"
      },
      {
        title: "E-Commerce-Back-End-UCI",
        description: "I was tasked to create the back end of a E-commerce site.",
        repoUrl: "https://github.com/jasondang4/E-Commerce-Back-End-UCI"
      },
  ];

  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <div key={index} className="portfolio-item">
          <img src={project.imageUrl} alt={project.title} className="portfolio-img" />
          <div className="portfolio-description">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.repoUrl} className="portfolio-link" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
