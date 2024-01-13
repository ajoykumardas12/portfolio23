import externalLinks from "@data/constants/external-links";

import Codepen from "@components/icons/Codepen";
import GitHub from "@components/icons/GitHub";
import LinkedIn from "@components/icons/LinkedIn";
import Twitter from "@components/icons/Twitter";

function SocialIcons() {
  return (
    <ul className="flex gap-10">
      <li>
        <a
          href={externalLinks.socials.LINKEDIN}
          rel="noopener noreferrer"
          target="_blank"
          title="LinkedIn"
          aria-label="Link to my LinkedIn"
        >
          <LinkedIn iconClass="icon" />
        </a>
      </li>
      <li>
        <a
          href={externalLinks.socials.GITHUB}
          rel="noopener noreferrer"
          target="_blank"
          title="GitHub"
          aria-label="Link to my GitHub"
        >
          <GitHub iconClass="icon" />
        </a>
      </li>
      <li>
        <a
          href={externalLinks.socials.TWITTER}
          rel="noopener noreferrer"
          target="_blank"
          title="Twitter"
          aria-label="Link to my Twitter"
        >
          <Twitter iconClass="icon" />
        </a>
      </li>
      <li>
        <a
          href={externalLinks.socials.CODEPEN}
          rel="noopener noreferrer"
          target="_blank"
          title="Codepen"
          aria-label="Link to my Codepen"
        >
          <Codepen iconClass="icon" />
        </a>
      </li>
    </ul>
  );
}

export default SocialIcons;
