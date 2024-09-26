import "./index.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="/developer-bg.jpg" alt="Avatar" />;
}
function Intro() {
  return (
    <div>
      <h1>Sakila Sanharsha</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding, I like
        to play Computer games, to cook (and eat), or to just enjoy Playing
        Cricket.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <div className="skill" style={{ backgroundColor: "blueviolet" }}>
        HTML + CSS 💪
      </div>
      <div className="skill" style={{ backgroundColor: "green" }}>
        JavaScript 💪
      </div>
      <div className="skill" style={{ backgroundColor: "tomato" }}>
        NodeJs 😁
      </div>
      <div className="skill" style={{ backgroundColor: "lightskyblue" }}>
        React 💪
      </div>
      <div className="skill" style={{ backgroundColor: "grey" }}>
        FullStack 💪
      </div>
    </div>
  );
}
