import "./main.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/himansu-8132841b7/"
          className="item"
        >
          <i
            style={{ color: "black", fontSize: "2em" }}
            className="fa-brands fa-linkedin"
          ></i>
        </a>
        <a href="https://www.twitter.com/hiiimanshhhu" className="item">
          <i
            style={{ color: "black", fontSize: "2em" }}
            className="fa-brands fa-twitter"
          ></i>
        </a>
        <a href="https://www.instagram.com/hiiimanshhhu" className="item">
          <i
            style={{ color: "black", fontSize: "2em" }}
            className="fa-brands fa-instagram"
          ></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCo-gLxGuXHaW1_cB7kTkKWA"
          className="item"
        >
          <i
            style={{ color: "black", "font-size": "2em" }}
            className="fa-brands fa-youtube"
          ></i>
        </a>
      </div>
      <h1 className="name">HIMANSU</h1>
      <h2 className="made-with-love">
        Made with <span style={{ color: "red" }}>❤</span> in India
      </h2>
      <h3 className="copyright">
        &#169; Copyright 2022.
        <br />
        All rights reserved.
      </h3>
    </div>
  );
}

export default Footer;
