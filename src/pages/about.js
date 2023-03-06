import React from "react";

import * as CAMISA from "../data/camisa";
import dogs from "../photos/fun/dogs.JPG";
// import "../css/about.css";

const About = () => {
  return (
    <>
      {/* <section className="container">
        <div className="row" style={{ width: "100%" }}>
          <div className="col s12 m7" style={{ paddingRight: "3rem" }}>
            <h1>About Me</h1>
            <div style={{ fontSize: "12pt" }}>
              <p>
                Hey, again! I'm Camisa Vines - a developer from the corn haven
                of Indiana, USA, currently based in Austin, Texas. I am a recent
                college gradute. I studied Computer Science with a minor is
                Business at Indiana University-Bloomington.
              </p>
              <p>
                Although very early in my career, I am a highly capable and
                innovative young professional with an exemplary academic report,
                and a passion for continuous learning and development. I am have
                the ability to work well both independently and part of a team
                with internship experience as a frontend developer and software
                engineer. I am proficienct in many programming languages,
                platforms and tools. Most recently, I've worked as a Frontend
                Development Intern at IBM.
              </p>
              <p>
                I love contributing and collaborating within the tech community,
                especially alongside other young people of color. For as long as
                I can remember, I’ve always loved traveling and learning about
                different cultures, countries, and places. Working people all
                over the world has instilled in me a burning desire to advocate
                and create spaces for those underserved and underrepresented in
                this industry. And I look forward to continuing this journey.
              </p>
              <p>
                When I'm not coding, you can find me streaming new movies and tv
                series, listening to music, traveling, cooking, or hanging with
                friends and family.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <div className="container">
        <h1 className="py-5">Uses</h1>
        <div className="w-75" style={{ fontSize: "12pt" }}>
          <h5>Editor + Terminal</h5>
          <ul>
            <li>
              <b>Editor</b> - VSCode
            </li>
            <li>
              <b>Color Theme</b> - Dark+ (default dark)
            </li>
            <li>
              <b>Terminal</b> - MacOS (better options for backend dev)
            </li>
          </ul>

          <h5>Desktop Apps</h5>
          <ul>
            <li>
              <b>Slack</b> - for communication and I honestly prefer this over
              discord
            </li>
            <li>
              <b>Notion</b> - boards for everything
            </li>
            <li>
              <b>Zoom</b> - for Zoom University and online classes
            </li>
            <li>
              <b>WebEx</b> - for meetings with company crew
            </li>
            <li>
              <b>Hyper</b> - I dont have this yet, but I heard it was great for
              Mac terminals
            </li>
          </ul>

          <h5>Desk Setup</h5>
          <ul>
            <li>MacBook Pro 16" 2021 16GB RAM 516GB Storage (Work Computer)</li>
            <li>
              MacBook Air 13" 2018 16GB RAM 128GB Storage (Personal/School
              Computer)
            </li>
            <li>Currently ISO a larger monitor and keyboard</li>
            <li>
              Coffee nearby almost always (my favorite is a blueberry coffee
              with a french vanilla creamer)
            </li>
            <li>A scented candle (most likely vanilla or lavender scented)</li>
          </ul>

          <h5>This Website</h5>
          <p>
            Built in ReactJS using Bootstrap for positioning. The fonts are
            Roboto Slab and Noto Sans.
          </p>
        </div>
      </div>

      <div className="container">
        <h1 className="py-5 mt-5">Interests</h1>
        <div className="w-75" style={{ fontSize: "12pt" }}>
          <ul>
            {CAMISA.INTERESTS.map((i) => (
              <li className="m-0 p-0">{i}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container">
        <h1 className="py-5 mt-5">Hobbies</h1>
        <div className="w-75" style={{ fontSize: "12pt" }}>
          <ul>
            {CAMISA.HOBBIES.map((i) => (
              <li className="m-0 p-0">{i}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container">
        <h1 className="py-5 mt-5">Top 5 Places on My Travel Bucket List</h1>
        <div className="w-75" style={{ fontSize: "12pt" }}>
          <ol>
            <li>São Paulo, Brazil</li>
            <li>Montego Bay, Jamaica</li>
            <li>London, England</li>
            <li>Los Angeles, California</li>
            <li>Tokyo, Japan</li>
          </ol>
        </div>
      </div>

      <div className="container">
        <h1 className="py-5 mt-5">My Doggies</h1>
        <div className="w-75" style={{ fontSize: "12pt" }}>
          <img src={dogs} width="100%" alt="thedogs" />

          <div className="py-4">
            <p>FAQ: "What kind of dog is that?"</p>
            <p>Answer: "American Rottweiler and Cane Corso"</p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: "10rem" }}>
        <h1 className="py-5 mt-5">Fun Fact</h1>
        <div className="w-75" style={{ fontSize: "12pt" }}>
          <p>
            My first name translates to 'shirt' in 4 languages-- spelled and
            pronounced exactly the same.
          </p>
        </div>
      </div>
    </>
  );
};

export { About };
