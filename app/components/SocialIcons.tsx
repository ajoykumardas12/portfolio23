import CodeSandbox from "./icons/CodeSandbox";
import Codepen from "./icons/Codepen";
import GitHub from "./icons/GitHub";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";

function SocialIcons() {
  return (
    <ul className="flex gap-10">
      <li>
        <a href="">
          <LinkedIn iconClass="icon" />
        </a>
      </li>
      <li>
        <a href="">
          <GitHub iconClass="icon" />
        </a>
      </li>
      <li>
        <a href="">
          <Twitter iconClass="icon" />
        </a>
      </li>
      {/* <li>
        <a href="">
          <Codepen />
        </a>
      </li> */}
    </ul>
  );
}

export default SocialIcons;
