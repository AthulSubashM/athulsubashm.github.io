import { forwardRef } from "react";
import { Link } from "react-router";

const Links = forwardRef((props, ref) => {
  return (
    <ul ref={ref}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      {/* <li> */}
      {/*   <Link to="/blogs">Blogs</Link> */}
      {/* </li> */}
      <li>
        <Link to="/connect">Connect with Me</Link>
      </li>
    </ul>
  );
});

export default Links;
