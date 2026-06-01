"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const OPENINGS = [
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    description:
      "We are looking for an experienced UI/UX Designer to join our innovative team. You'll be responsible for conducting user research, creating wireframes and prototypes, and developing visually appealing designs that enhance user experience. Collaborating with product managers and developers, you will ensure seamless design implementation and refine your work based on feedback. The ideal candidate has proven experience, a strong portfolio, and proficiency in design tools like Sketch, Adobe XD, or Figma. We offer a competitive salary, benefits, and opportunities for professional growth.",
  },
  {
    id: "seo-specialist",
    title: "SEO Specialist",
    description:
      "We are looking for an experienced SEO Specialist to join our dynamic marketing team. As an SEO Specialist, you will be responsible for developing and implementing effective search engine optimization strategies to improve our website's organic search rankings. Your role will include keyword research, on-page and off-page optimization, technical SEO, and performance analysis. The ideal candidate has a proven track record in SEO, excellent analytical skills, and proficiency with SEO tools such as Google Analytics, SEMrush, and Ahrefs. We offer competitive compensation, comprehensive benefits, and opportunities for career growth.",
  },
  {
    id: "front-end-developer",
    title: "Front-End Developer",
    description:
      "We are looking for a qualified Front-end developer to join our IT team. You will be responsible for building the 'client-side' of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications, If you're interested in creating a user-friendly environment by writing code and moving forward in your career, then this job is for you. We expect you to be a tech-savvy professional, who is curious about new digital technologies and aspires to combine usability with visual design.",
  },
  {
    id: "back-end-developer",
    title: "Back-End Developer",
    description:
      "We are seeking a qualified Back-end Developer to join our IT team at [Your Company Name]. In this role, you will be responsible for building and maintaining the server-side logic, databases, and ensuring high performance and responsiveness of our applications. The ideal candidate has strong experience with server-side languages such as Python, Java, or Node.js, and is proficient in database management and API integration. Join us to work in a collaborative environment where your expertise will help shape the backbone of our digital solutions.",
  },
  {
    id: "ui-ux-intern",
    title: "UI/UX Intern",
    description:
      "We are looking for a a creative and motivated UI/UX Intern to join our design team. As a UI/UX Intern, you will assist in creating user-centric designs, conducting user research, and developing wireframes and prototypes. This is an excellent opportunity to gain hands-on experience and learn from experienced designers. The ideal candidate is currently pursuing a degree in design or a related field and has a basic understanding of design tools like Sketch, Figma, or Adobe XD. Join us to kickstart your career in UI/UX design!",
  },
];

function OpeningMeta() {
  return (
    <div>
      {/* <div>
        <Image
          src="/assets/images/icons/time.webp"
          alt=""
          width={36}
          height={38}
        />
        <div>Full Time</div>
      </div>
      <div>
        <Image
          src="/assets/images/icons/diamond.webp"
          alt=""
          width={36}
          height={38}
        />
        <div>6—24 months experience</div>
      </div> */}
    </div>
  );
}

export default function CareerAccordion() {
  const [activeId, setActiveId] = useState(null);
  const containerRefs = useRef({});

  const toggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="career_accordion">
      <h2 className="h2">Current openings</h2>
      <div>
        {OPENINGS.map((job) => {
          const isActive = activeId === job.id;
          return (
            <div
              key={job.id}
              className={`accordion${isActive ? " active" : ""}`}
              onClick={() => toggle(job.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(job.id);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="accord_title">
                {job.title}{" "}
                <span>
                  <Image
                    src="/assets/images/icons/down_arrow.webp"
                    alt=""
                    width={27}
                    height={14}
                  />
                </span>
              </div>
              <div
                className="accord_container"
                ref={(el) => {
                  containerRefs.current[job.id] = el;
                }}
                style={
                  isActive
                    ? {
                        height: containerRefs.current[job.id]?.scrollHeight
                          ? `${containerRefs.current[job.id].scrollHeight}px`
                          : "auto",
                        opacity: 1,
                      }
                    : { height: 0, opacity: 0 }
                }
              >
                <div className="accord_wrapper">
                  {/* <p>{job.description}</p> */}
                  <OpeningMeta />
                  {/* <a
                    href="#career-apply"
                    className="cta_text"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Apply <span>Now</span>
                  </a> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
