"use client";

import printEsterEgg from "@/app/ester-egg/esterEgg";
import emailjs from "@emailjs/browser";

import { Space_Grotesk } from "next/font/google";
import { useEffect, useRef, useState } from "react";

import externalLinks from "@data/constants/external-links";

import CheckIcon from "@components/icons/CheckIcon";
import InfoIcon from "@components/icons/InfoIcon";
import SendIcon from "@components/icons/SendIcon";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function Contact() {
  useEffect(() => {
    printEsterEgg();
  });

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
        // error
        () => {
          setFormResponse("fail");
        }
      );
  };
  return (
    <section
      className="w-[87%] py-20 pb-12 xs:w-[85%] sm:w-[82%] lg:w-[76%] xl:w-8/12"
      id="contact"
    >
      <h2 className={`${spaceGrotesk.className} section-heading mb-8`}>
        <span className="text-highlight">#</span> Contact
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="">
          <div className="font-light">
            I am currently looking for opportunities. Feel free to contact me
            through the form here or reach me by direct email on{" "}
            <a
              href="mailto:ajoykumardas0808@gmail.com"
              className="font-semibold text-link underline decoration-light/40 decoration-dashed decoration-1 underline-offset-4"
            >
              ajoykumardas0808@gmail.com
            </a>{" "}
            regardless of the subject. I am also available on{" "}
            <a
              href={externalLinks.socials.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Twitter
            </a>{" "}
            or{" "}
            <a
              href={externalLinks.socials.LINKEDIN}
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
              className="box-border w-full rounded border-2 border-transparent bg-light/20 px-3 py-2 outline-none focus:border-brand"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className="box-border w-full rounded border-2 border-transparent bg-light/20 px-3 py-2 outline-none focus:border-brand"
              required
            />
            <textarea
              name="message"
              id=""
              rows={3}
              placeholder="Message"
              className="box-border max-h-44 min-h-[4rem] w-full resize-y rounded border-2 border-transparent bg-light/20 px-3 py-2 outline-none focus:border-brand"
              required
            ></textarea>
            <button
              type="submit"
              className="group mt-1 flex items-center gap-2 self-start rounded bg-dark px-8 py-2 transition-colors duration-200 hover:bg-dark/70 hover:text-brand"
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
