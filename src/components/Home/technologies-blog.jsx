import GitHubLogo from "../../assets/GitHub-Mark-120px-plus.png";
import HashNodeLogo from "../../assets/CDyAuTy75.png";

function TechnologiesBlog() {
  return (
    <div>
      <div className="container-2 black-bg">
        <div className="row">
          <div className="container-3">
            <h1 className="frontend">&lt;frontend&gt;</h1>
            <p className="text">
              A fontend developer who will work hard to achieve any UI design
              effectively and efficiently.
            </p>
            <h1 className="frontend">&lt;/frontend&gt;</h1>
          </div>
          <div className="divider"></div>
          <div className="container-3">
            <h1 className="backend">&lt;backend&gt;</h1>
            <p className="text">
              A backend developer who will get the logic for any challenge given
              to him with optimized code.
            </p>
            <h1 className="backend">&lt;/backend&gt;</h1>
          </div>
        </div>
      </div>
      <div className="technologies">
        <table className="tech-table">
          <tr>
            <td>C</td>
            <td>HTML</td>
            <td>Node.js</td>
          </tr>
          <tr>
            <td>C++</td>
            <td>CSS</td>
            <td>FastAPI</td>
          </tr>
          <tr>
            <td>Python</td>
            <td>JavaScript</td>
            <td>MySQL</td>
          </tr>
          <tr>
            <td>Java</td>
            <td>React</td>
            <td>PostgreSQL</td>
          </tr>
          <tr>
            <td>Dart</td>
            <td>Flutter</td>
            <td>Firebase</td>
          </tr>
        </table>
      </div>
      <div id="github" className="container-2 black-bg">
        <div className="container-3">
          <h1 className="heading-2">GitHub and Hashnode</h1>
          <div className="row">
            <a href="https://github.com/himansu9805">
              <img
                className="image-item github-image"
                src={GitHubLogo}
                alt="GitHub"
              />
            </a>
            <a href="https://hiiimanshhhu.hashnode.dev/">
              <img className="image-item" src={HashNodeLogo} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologiesBlog;
