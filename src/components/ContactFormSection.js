"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactFormSection({
  variant = "dark",
  showIllustration = false,
  idPrefix = "",
}) {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    mobile: "",
    url: "",
  });

  const fieldId = (name) => (idPrefix ? `${idPrefix}_${name}` : name);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile" && !/^\d*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) window.location.href = "/thank-you";
    } catch (err) {
      console.error("Form submission failed:", err);
    }
  };

  const containerClass =
    variant === "light"
      ? "footer_container footer_container--light"
      : "footer_container";

  return (
    <div className={containerClass}>
      <div className="footer_title_wrap">
        <div className="footer_title">
          Drop <br />
          us a <br />
          message
        </div>
        {showIllustration && (
          <Image
            src="/assets/images/hands.svg"
            alt=""
            width={871}
            height={767}
            className="footer_contact_illustration"
          />
        )}
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor={fieldId("name")}>Your Name</label>
        <input
          type="text"
          name="name"
          id={fieldId("name")}
          className="txtNumeric"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor={fieldId("organization")}>
          Your Organization&apos;s Name
        </label>
        <input
          type="text"
          name="organization"
          id={fieldId("organization")}
          className="txtNumeric"
          value={formData.organization}
          onChange={handleChange}
          required
        />

        <label htmlFor={fieldId("email")}>Your Email</label>
        <input
          type="email"
          name="email"
          id={fieldId("email")}
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor={fieldId("mobile")}>Your Number</label>
        <input
          type="text"
          name="mobile"
          id={fieldId("mobile")}
          maxLength={10}
          inputMode="numeric"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <label htmlFor={fieldId("url")}>Website/Social Media Link</label>
        <input
          type="url"
          name="url"
          id={fieldId("url")}
          value={formData.url}
          onChange={handleChange}
          required
        />

        <button type="submit" className="cta_text">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
}
