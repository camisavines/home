import fw from "../photos/projects/futurewonder.png";
import pythonProject from "../photos/projects/python_project.png";
import bdb from "../photos/projects/blackdatabase.png";
import hackathon from "../photos/projects/covidfacts.png";
import bfa from "../photos/projects/BFA.png";

const projects = [
  {
    title: "Black Female Auteurs",
    alt: "bfa",
    img: bfa,
    link: "https://camisavines.github.io/black-female-auteurs/",
    description: "One of my senior projects was in a class that studied Black female auteurs. For my final project, I wrote a blog and published a site containing independent research on the topic."
  },
  {
    title: "Black Database",
    alt: "blackdatabase",
    img: bdb,
    description:
      "I am currently working on a web application that displays a personally curated database containing accomplishments made by extraordinary, black individuals. The app will be able to filter and give more information about each category.",
  },
  {
    title: "Future Wonder Website",
    alt: "futurewonder",
    img: fw,
    link: "https://www.futurewonder.com/",
    description:
      "As a Future Wonder Intern, my first task was to redesign the company's website. This site introduced me to React.js and Tailwind CSS.",
  },
  {
    title: "Covid-19 Facts",
    alt: "hackathon-img",
    img: hackathon,
    link: "https://github.com/aoduru/IT-Girls",
    link2:
      "https://blackwingshacks2021.devpost.com/project-gallery?ref_content=winner_announcement_email&ref_feature=engagement&ref_medium=email&utm_campaign=winner_announcement_email&utm_medium=email&utm_source=winner_announcement_email?",
    link2Text: "See Hackathon Gallery",
    description: `As participants in the 2021 Black Wings Hacks + Rewriting the Code Hackathon, 
                     my team and I developed a site explaining our idea for an application to 1). 
                     combat fake news surrounding the virus and vaccine and 2). provide information on 
                     eligibility and availability near the user's location. This hackathon was an international c
                     ompetition with over 600 participants. My team and I placed 2nd.`,
  },
  {
    title: "Time Sheet Converter",
    alt: "time code",
    img: pythonProject,
    description:
      "Another project I worked on as a Future Wonder intern was creating a program that would convert the company's time sheets from a Clockify.me CSV into IIF Quickbooks format. To this day, this has been an essential tool used by the senior consultant and cuts down the time it takes to process monthly finance reports.",
  },
  {
    title: "Regrader",
    alt: "regrader",
    img: pythonProject,
    description:
      "This program is a script that I wrote as a TA for the introductory python course at IU. It generates a text file to alert each assigned TA of possible grading mistakes highlighted by the student.",
  },
];

export default projects;
