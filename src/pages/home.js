import React from "react";
import camisa from "../photos/IMG_5279.jpg";
import { songs } from "../constant/songs";

const Home = () => {
  return (
    <div>
      {/* <h1>Welcome</h1> */}

      <div className="row" style={{ marginTop: "2rem" }}>
        <div className="col s12 m6 l4">
          <div className="card" style={{ borderRadius: "10px" }}>
            <div className="card-image">
              <img src={camisa} />
              {/* <span className="card-title">Camisa</span> */}
            </div>
            {/* <div className="card-content">
              <p>Hey what's up?! Welcome to my site!</p>
            </div> */}
          </div>
        </div>

        <div className="col s12 m6 l8">
          <div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              flexDirection: "column",
              minHeight: "45vh",
            }}
          >
            <h3>Welcome!</h3>
            <p>
              Hey, there! I'm Camisa. <br /> I'm a software developer who really
              loves music. <br /> Click the links on the left to explore and
              checkout my top 10 songs below.
            </p>

            <div>
              <p>Connect with me and let me know what you're listening to!</p>
              {/* <a className="waves-effect waves-light btn red"><i className="material-icons left">play_arrow</i>Play</a> */}
              <a className="waves-effect waves-light btn red" href="https://www.linkedin.com/in/camisavines/" target="_blank" rel="noreferer">
                <i className="material-icons left">add</i>Connect
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <table className="highlight">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
            </tr>
          </thead>

          <tbody>
            {songs.map((song, index) => (
              <tr>
                <td style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "1rem", color: "#a1a1a1"}}>{index + 1}</p>
                  <div
                    style={{
                      backgroundImage: `url(${song.art})`,
                      height: "4rem",
                      width: "4rem",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      marginRight: "1rem"
                    }}
                  />
                  {song.title}
                </td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Home };
