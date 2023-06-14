"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CheckIcon from "../icons/CheckIcon";
import InfoIcon from "../icons/InfoIcon";
import SendIcon from "../icons/SendIcon";

function Contact() {
  const contactForm = useRef<HTMLFormElement>(null);
  const [formResponse, setFormResponse] = useState<null | "success" | "fail">(
    null
  );

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_znsmupm",
        "template_th38h2k",
        contactForm.current!,
        "Em3QBPXQMkjXxQuH8"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setFormResponse("success");
            contactForm.current?.reset();
          }
        },
        (error) => {
          setFormResponse("fail");
        }
      );
  };
  return (
    <section
      className="w-[87%] xs:w-[85%] sm:w-[82%] lg:w-[76%] xl:w-8/12 py-20 pb-12"
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
              className="font-semibold text-link decoration-dashed decoration-1 underline-offset-4 underline decoration-light/40"
            >
              ajoykumardas0808@gmail.com
            </a>{" "}
            regardless of the subject. I am also available on{" "}
            <a
              href="https://twitter.com/AjoykrDas_"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Twitter
            </a>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/ajoy-kumar-das/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              LinkedIn
            </a>
            .
          </div>
        </div>
        <div className="">
          <form
            action=""
            method="POST"
            name="contactForm"
            ref={contactForm}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
              className="w-full px-3 py-2 bg-light/20 box-border outline-none border-2 border-transparent focus:border-brand rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className="w-full px-3 py-2 bg-light/20 box-border outline-none border-2 border-transparent focus:border-brand rounded"
              required
            />
            <textarea
              name="message"
              id=""
              rows={3}
              placeholder="Message"
              className="w-full resize-y max-h-44 min-h-[4rem] px-3 py-2 bg-light/20 box-border outline-none border-2 border-transparent focus:border-brand rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="self-start px-8 py-2 flex items-center gap-2 group bg-dark hover:bg-dark/70 hover:text-brand rounded transition-colors duration-200 mt-1"
            >
              Send
              <div>
                <SendIcon iconClass="w-[18px] h-[18px] rotate-45 group-hover:stroke-brand group-hover:rotate-12 transition duration-200" />
              </div>
            </button>
          </form>
          <div className="mt-4 text-sm font-light">
            {formResponse && <SubmitResponse response={formResponse} />}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ResponseProps {
  response: string;
}

function SubmitResponse({ response }: ResponseProps) {
  if (response === "success") {
    return (
      <div className="flex items-center gap-2">
        <CheckIcon iconClass="w-5 h-5 stroke-brand" />
        <div>Message sent! I will get in touch asap.</div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-2">
        <InfoIcon iconClass="w-5 h-5 stroke-brand" />
        <div>Something went wrong :( Try again or email me directly. </div>
      </div>
    );
  }
}

export default Contact;
