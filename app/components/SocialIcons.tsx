import externalLinks from "../data/constants/external-links";
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
          href={externalLinks.socials.LINKEDIN}
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedIn iconClass="icon" />
        </a>
      </li>
      <li>
        <a
          href={externalLinks.socials.GITHUB}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub iconClass="icon" />
        </a>
      </li>
      <li>
        <a
          href={externalLinks.socials.TWITTER}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter iconClass="icon" />
        </a>
      </li>
      <li>
        <a
          href={externalLinks.socials.CODEPEN}
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
