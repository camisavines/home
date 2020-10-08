import fw from "../photos/projects/fw-pro.png";
import jr from "../photos/projects/jr-pro.png";
import time from "../photos/projects/time-pro.png";
import bdb from "../photos/projects/bdb-pro.png";
import regrader from "../photos/projects/regrader-pro.png";

const projects = [
   {
       title: "Future Wonder Website",
       alt: "futurewonder",
       img: fw,
       link: "https://www.futurewonder.com/",
       description: "As a Future Wonder Intern, my first task was to redesign the company's website. This site introduced me to React.js and Tailwind CSS."
   },
   {
       title: "Time Sheet Converter",
       alt: "time code",
       img: time,
       description: "Another project I worked on as a Future Wonder intern was creating a program that would convert the company's time sheets from a Clockify.me CSV into IIF Quickbooks format."
   },
   {
       title: "Black Database",
       alt: "blackdatabase",
       img: bdb,
       description: "I am currently working on a web application that displays a personally curated database comtaining accomplishments made by extraordinary, black individuals. The app will be able to filter and give more information about each category.",
   },
   {
       title: "Regrader",
       alt: "regrader",
       img: regrader,
       description: "This program is a script I wrote as a TA for a intro python course at IU. It generates text to alert the assigned grader of possible mistakes submitted by the student."
   }
]


export default projects;