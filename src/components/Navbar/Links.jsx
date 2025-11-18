import { forwardRef } from "react";

const Links = forwardRef((props, ref) => {
  return (
    <ul ref={ref}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
      {/* <li> */}
      {/*   <a href="/blogs">Blogs</a> */}
      {/* </li> */}
      <li>
        <a href="/connect">Connect with Me</a>
      </li>
    </ul>
  );
});

export default Links;
