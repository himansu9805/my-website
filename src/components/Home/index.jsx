import { useEffect } from "react";

import Welcome from "./welcome";
import "./main.css";
import About from "./about";
import TechnologiesBlog from "./technologies-blog";

function Home() {
  useEffect(() => {
    document.title = "Himansu | Home";
  });

  return (
    <div>
      <Welcome />
      <About />
      <TechnologiesBlog />
    </div>
  );
}

export default Home;
