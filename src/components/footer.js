import React from "react";

const Footer = () => {
    return (
      <div className="footer py-5">
        <div className="container">
          <h3>Thank you for visiting!</h3>
          <p>If you have any questions or want connect, add me on LinkedIn.</p>

          <span><a href="https://www.linkedin.com/in/camisavines/">LinkedIn</a></span>
          <span style={{marginLeft: "20px"}}><a href="https://github.com/camisavines">Github</a></span>
          {/* <span style={{marginLeft: "20px"}}>Instagram</span> */}
        </div>
      </div>
    )
}

export default Footer;