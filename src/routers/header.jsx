import { Link } from "react-router-dom";

export let MyHeader = () => {
  return (
    <>
      <h1>Badri's Project</h1>
      <h2>Tasks</h2>

      <Link to="/">Home</Link>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
      <Link to="/page3">Page3</Link>
      <Link to="/page4">Page4</Link>
      <Link to="/notfound">Page5</Link>
    </>
  );
};
