import CodeSandbox from "./icons/CodeSandbox";
import Codepen from "./icons/Codepen";
import GitHub from "./icons/GitHub";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";

function SocialIcons() {
  return (
    <ul className="flex gap-10">
      <li>
        <a
          href="https://www.linkedin.com/in/ajoy-kumar-das/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedIn iconClass="icon" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/ajoykumardas12"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub iconClass="icon" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/AjoykrDas_"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter iconClass="icon" />
        </a>
      </li>
      <li>
        <a
          href="https://codepen.io/Akdev12"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Codepen iconClass="icon" />
        </a>
      </li>
    </ul>
  );
}

export default SocialIcons;
