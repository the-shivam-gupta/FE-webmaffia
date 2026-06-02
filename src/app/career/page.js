"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CareerAccordion from "@/components/CareerAccordion";

const ROLE_INTERESTS = [
  { id: "Web_design", value: "Web design", label: "Web design" },
  { id: "Web_development", value: "Web development", label: "Web development" },
  { id: "SEO_specialist", value: "SEO specialist", label: "SEO" },
  {
    id: "Social_media_manager",
    value: "Social media manager",
    label: "Social Media Management",
  },
  {
    id: "content_creation",
    value: "Content Creation",
    label: "Content Creation",
  },
  {
    id: "digital_marketing",
    value: "Digital Marketing Creatives",
    label: "Digital Marketing Creatives",
  },
  {
    id: "video_creation",
    value: "Video Creation",
    label: "Video Creation",
  },
];

const RESUME_ACCEPT =
  ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

export default function CareerPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [resume, setResume] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    interests: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile" && !/^\d*$/.test(value)) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleInterest = (value) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((v) => v !== value)
        : [...prev.interests, value],
    }));
  };

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];
    setResume(file || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!resume) {
      setError("Please upload your resume.");
      return;
    }

    setSubmitting(true);

    try {
      const body = new FormData();
      body.append("form_source", "career");
      body.append("name", form.name);
      body.append("email", form.email);
      body.append("mobile", form.mobile);
      form.interests.forEach((interest) => body.append("interests[]", interest));
      body.append("resume", resume);

      const res = await fetch("/api/career", {
        method: "POST",
        body,
      });

      if (!res.ok) throw new Error("Submission failed");
      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="wrapper">
      <div className="ml-setter career">
        <section data-section="hero_section" className="hero_section flex">
          <div>
            <div className="sub_title">CAREER</div>
            <h1>
              Be a part of <br />
              webmaffia <br />
            </h1>
            <p>
              Are you passionate about crafting exceptional <br />
              digital experiences? Join our team at Web Maffia <br />
              and embark on an exciting journey where creativity <br />
              meets innovation. We&apos;re seeking talented <br />
              Individuals who are eager to push the boundaries <br />
              of web design and development. Explore our <br />
              current openings below and take the first step <br />
              towards shaping the future of the web with us.
            </p>
          </div>
          <picture>
            <source
              media="(max-width: 540px)"
              srcSet="/assets/images/hero-mobile.webp"
            />
            <Image
              src="/assets/images/career-banner.svg"
              alt="join our team at webmaffia"
              width={871}
              height={767}
              className="dark_img"
            />
          </picture>
        </section>

        <section className="contact_us">
          <CareerAccordion />

          <div id="career-apply">
            <h2 className="h2">
              Let&apos;s work <br />
              together
            </h2>
            <form
              className="form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <label htmlFor="career_name">Your Name</label>
              <input
                type="text"
                name="name"
                id="career_name"
                className="txtNumeric"
                value={form.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="career_email">Your Email</label>
              <input
                type="email"
                name="email"
                id="career_email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="career_mobile">Your Number</label>
              <input
                type="text"
                name="mobile"
                id="career_mobile"
                maxLength={10}
                inputMode="numeric"
                pattern="[0-9]+"
                value={form.mobile}
                onChange={handleChange}
                required
              />

              <label htmlFor="career_interests">You are interested in</label>
              <div className="input_checkox">
                {ROLE_INTERESTS.map(({ id, value, label }) => (
                  <label key={id} htmlFor={id} className="checkmark">
                    <input
                      type="checkbox"
                      id={id}
                      checked={form.interests.includes(value)}
                      onChange={() => toggleInterest(value)}
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>

              <div className="resume_box">
                <label htmlFor="resume">Upload your Resume</label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  accept={RESUME_ACCEPT}
                  onChange={handleResumeChange}
                  required
                />
              </div>

              <input type="hidden" name="form_source" value="career" readOnly />

              {error && (
                <p role="alert" style={{ color: "#c72c2c", marginBottom: "2rem" }}>
                  {error}
                </p>
              )}

              <button type="submit" className="cta_text" disabled={submitting}>
                Apply <span>{submitting ? "…" : "Now"}</span>
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
