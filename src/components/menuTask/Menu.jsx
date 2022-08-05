export const Menu = () => {
  return (
    <>
      <h1>Drop Down Menu</h1>

      <ul className="mainMenu">
        <li className="menu">
          <a href="#">Home</a>
        </li>
        <li className="menu">
          <a href="#">About Me</a>
        </li>
        <li className="menu">
          <a href="#">Skills</a>
          <div className="dropMenu">
            <ul>
              <li>
                <a href="#">JavaScript</a>
              </li>
              <li>
                <a href="#">React</a>
              </li>
              <li>
                <a href="#">TDD</a>
              </li>
              <li>
                <a href="#">Pair programming</a>
              </li>
              <li>
                <a href="#">Git version control</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="menu">
          <a href="#">Training</a>
        </li>
        <li className="menu">
          <a href="#">Contact</a>
          <div className="dropMenu">
            <ul>
              <li>
                <a href="https://vickybrooke-portfolio.netlify.app/">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vicky-brooke/">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/vbrooke78">GitHub</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
};
