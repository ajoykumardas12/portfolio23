function Skills() {
  return (
    <div className="w-[87%] xs:w-[85%] sm:w-[78%] lg:w-[72%] xl:w-8/12 py-20 flex flex-col justify-center">
      <h2 className="section-heading mb-5">
        <span className="text-highlight">#</span> My Skills
      </h2>
      <p className="font-light mb-4">
        My interest in web development started with trying to edit default theme
        in blogger where I first experienced few bits of magic of CSS. Since
        then my skills have grown as I kept exploring.
      </p>
      <p className="text-lg">
        Here are a few technologies I enjoy working with:
      </p>
      <div className="grid">
        <div>
          <h3>Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Java</li>
          </ul>
        </div>
        <div>
          <h3>Technologies/Frameworks</h3>
          <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div>
          <h3>Tools</h3>
          <ul>
            <li>Git</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
