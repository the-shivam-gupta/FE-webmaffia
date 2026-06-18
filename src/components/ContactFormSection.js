"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ServiceSelect from "@/components/ServiceSelect";

export default function ContactFormSection({
  variant = "dark",
  showIllustration = false,
  idPrefix = "",
}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    mobile: "",
    service: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [serviceError, setServiceError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const fieldId = (name) => (idPrefix ? `${idPrefix}_${name}` : name);

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your name";
    }

    if (!formData.organization.trim()) {
      errors.organization = "Please enter your organization name";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.mobile.trim()) {
      errors.mobile = "Please enter your number";
    } else if (formData.mobile.length < 10) {
      errors.mobile = "Please enter a valid 10-digit number";
    }

    if (!formData.service.trim()) {
      errors.service = "Please select a service";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile" && !/^\d*$/.test(value)) return;

    setFieldErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });

    if (name === "service") {
      setServiceError(false);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setServiceError(Boolean(errors.service));
      return;
    }

    setFieldErrors({});
    setServiceError(false);
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        router.push("/thank-you");
        return;
      }
    } catch (err) {
      console.error("Form submission failed:", err);
    } finally {
      setSubmitting(false);
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
        {showIllustration ? (
          <Image
            src="/assets/images/hands.svg"
            alt=""
            width={871}
            height={767}
            className="footer_contact_illustration"
          />
        ) : null}
      </div>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <label htmlFor={fieldId("name")}>Your Name</label>
        <input
          type="text"
          name="name"
          id={fieldId("name")}
          className={`txtNumeric${fieldErrors.name ? " has-error" : ""}`}
          value={formData.name}
          onChange={handleChange}
          aria-invalid={Boolean(fieldErrors.name)}
        />
        {fieldErrors.name ? (
          <p className="form_field_error" role="alert">
            {fieldErrors.name}
          </p>
        ) : null}

        <label htmlFor={fieldId("organization")}>
          Your Organization&apos;s Name
        </label>
        <input
          type="text"
          name="organization"
          id={fieldId("organization")}
          className={`txtNumeric${fieldErrors.organization ? " has-error" : ""}`}
          value={formData.organization}
          onChange={handleChange}
          aria-invalid={Boolean(fieldErrors.organization)}
        />
        {fieldErrors.organization ? (
          <p className="form_field_error" role="alert">
            {fieldErrors.organization}
          </p>
        ) : null}

        <label htmlFor={fieldId("email")}>Your Email</label>
        <input
          type="email"
          name="email"
          id={fieldId("email")}
          className={fieldErrors.email ? "has-error" : ""}
          value={formData.email}
          onChange={handleChange}
          aria-invalid={Boolean(fieldErrors.email)}
        />
        {fieldErrors.email ? (
          <p className="form_field_error" role="alert">
            {fieldErrors.email}
          </p>
        ) : null}

        <label htmlFor={fieldId("mobile")}>Your Number</label>
        <input
          type="text"
          name="mobile"
          id={fieldId("mobile")}
          maxLength={10}
          inputMode="numeric"
          className={fieldErrors.mobile ? "has-error" : ""}
          value={formData.mobile}
          onChange={handleChange}
          aria-invalid={Boolean(fieldErrors.mobile)}
        />
        {fieldErrors.mobile ? (
          <p className="form_field_error" role="alert">
            {fieldErrors.mobile}
          </p>
        ) : null}

        <label htmlFor={fieldId("service")}>Services Interested In</label>
        <ServiceSelect
          id={fieldId("service")}
          value={formData.service}
          onChange={handleChange}
          hasError={serviceError}
        />
        {fieldErrors.service ? (
          <p className="form_field_error" role="alert">
            {fieldErrors.service}
          </p>
        ) : null}

        <button type="submit" className="cta_text" disabled={submitting}>
          <span>{submitting ? "Sending…" : "Submit"}</span>
        </button>
      </form>
    </div>
  );
}
