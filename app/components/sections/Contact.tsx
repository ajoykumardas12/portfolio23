function Contact() {
  return (
    <section
      className="w-[87%] xs:w-[85%] sm:w-[82%] lg:w-[76%] xl:w-8/12 py-20"
      id="contact"
    >
      <h2 className="section-heading mb-8">
        <span className="text-highlight">#</span> Contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="">
          <div className="font-light">
            I am currently looking for opportunities. Feel free to contact me
            through the form here or reach me by direct email on{" "}
            <a
              href="mailto:ajoykumardas0808@gmail.com"
              className="font-semibold text-link decoration-dashed decoration-1 underline-offset-[6px] underline decoration-light/40"
            >
              ajoykumardas0808@gmail.com
            </a>{" "}
            regardless of the subject. I am also available on{" "}
            <a
              href="https://twitter.com/AjoykrDas_"
              target="_blank"
              className="link"
            >
              Twitter
            </a>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/ajoy-kumar-das/"
              target="_blank"
              className="link"
            >
              LinkedIn
            </a>
            .
          </div>
        </div>
        <div className="">
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-3 py-2 bg-light/20 box-border outline-none border-2 border-transparent focus:border-brand rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 bg-light/20 box-border outline-none border-2 border-transparent focus:border-brand rounded"
            />
            <textarea
              name="message"
              id=""
              rows={3}
              placeholder="Message"
              className="w-full resize-y max-h-44 min-h-[4rem] px-3 py-2 bg-light/20 box-border outline-none border-2 border-transparent focus:border-brand rounded"
            ></textarea>
            <button
              type="submit"
              className="self-start px-8 py-2 bg-dark hover:bg-dark/70 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
