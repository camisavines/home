import React from "react";

const About = () => {
  return (
    <>
      <div className="row" style={{ marginTop: "3rem" }}>
        <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src="https://images.theconversation.com/files/223729/original/file-20180619-126566-1jxjod2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
              />
              <span
                className="card-title activator grey-text text-darken-4"
                style={{ width: "100%" }}
              >
                Card Title<i className="material-icons right">more_vert</i>
              </span>
            </div>
            {/* <div className="card-content red">
            <p>
              <a href="#">This is a link</a>
            </p>
          </div> */}
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Card Title<i className="material-icons right">close</i>
              </span>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "3rem" }}>
        <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src="https://i.pinimg.com/originals/6d/c8/f1/6dc8f11334c7e1564bde781d84f9dfb7.gif"
              />
              <span
                className="card-title activator grey-text text-darken-4"
                style={{ width: "100%" }}
              >
                Uses<i className="material-icons right">more_vert</i>
              </span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Uses<i className="material-icons right">close</i>
              </span>

              <h5>Editor + Terminal</h5>
                <ul>
                    <li><b>Editor</b> - VSCode</li>
                    <li><b>Color Theme</b> - Dark+ (default dark)</li>
                    <li><b>Terminal</b> - MacOS (better options for backend dev)</li>
                </ul>

                <h5>Desktop Apps</h5>
                <ul>
                    <li><b>Slack</b> - for communication and I honestly prefer this over discord</li>
                    <li><b>Notion</b> - boards for everything</li>
                    <li><b>Zoom</b> - for Zoom University and online classes</li>
                    <li><b>WebEx</b> - for meetings with company crew</li>
                    <li><b>Hyper</b> - I dont have this yet, but I heard it was great for Mac terminals</li>
                </ul>
                
                <h5>Desk Setup</h5>
                <ul>
                    <li>MacBook Pro 16" 2021 16GB RAM 516GB Storage (Work Computer)</li>
                    <li>MacBook Air 13" 2018 16GB RAM 128GB Storage (Personal/School Computer)</li>
                    <li>Currently ISO a larger monitor and keyboard</li>
                    <li>Coffee nearby almost always (my favorite is a blueberry coffee with a french vanilla creamer)</li>
                    <li>A scented candle (most likely vanilla or lavender scented)</li>
                </ul>
                
                <h5>This Website</h5>
                <p>Built in ReactJS using Bootstrap for positioning. The fonts are Roboto Slab and Noto Sans.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { About };
