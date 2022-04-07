import Me from "../../assets/me.jpg";

function About() {
  return (
    <div id="about">
      <div className="row">
        <div className="my-image-container">
          <img alt="Himansu" className="my-image" src={Me} />
        </div>
        <div className="paragraph-container">
          <p className="paragraph">
            Hey there! I am a student and currently pursuing my B.Tech in
            <strong> Bachelor's Degree in Computer Engineering </strong>
            from <i>Government Engineering College, Rajkot</i>. Currently
            engaged with full stack web development, mobile application
            development and machine learning. In my free time I create 3D
            animations. Valorant, anime and music are a part of my daily
            routine.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
