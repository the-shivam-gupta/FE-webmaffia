import Image from "next/image";
import { Fragment } from "react";

function renderMultilineText(text) {
  const lines = String(text ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length <= 1) {
    return text;
  }

  return lines.map((line, index) => (
    <Fragment key={index}>
      {index > 0 ? <br /> : null}
      {line}
    </Fragment>
  ));
}

export default function Banner({
  data,
  className = "hero_section flex",
  dataSection = "hero_section",
  children,
}) {
  const {
    imagePosition = "right",
    overlay = false,
    overlayColor = "",
    subheading,
    subtitle,
    title,
    description,
    descriptions,
    images,
    priority = false,
    unoptimized = false,
  } = data;

  const banner = images?.banner;
  const bannerMobile = images?.bannerMobile;
  const body = descriptions?.length
    ? descriptions
    : description
      ? [description]
      : [];

  const image = banner?.url ? (
    <div
      className={`banner_media${imagePosition === "background" ? " banner_media--background" : ""}`}
    >
      <picture
        className={imagePosition === "background" ? "detail_banner" : undefined}
      >
        {bannerMobile?.url ? (
          <source media="(max-width: 540px)" srcSet={bannerMobile.url} />
        ) : null}
        <Image
          src={banner.url}
          alt={banner.alt ?? ""}
          width={banner.width ?? 871}
          height={banner.height ?? 767}
          className="dark_img"
          priority={priority}
          unoptimized={unoptimized}
        />
      </picture>
      {overlay ? (
        <span
          className="banner_media__overlay"
          style={overlayColor ? { backgroundColor: overlayColor } : undefined}
          aria-hidden="true"
        />
      ) : null}
    </div>
  ) : null;

  const content = (
    <div>
      {subheading?.enabled ? (
        <div className="sub_title">{subheading.text}</div>
      ) : null}
      <h1>
        {title.line1}
        {title.line2 ? (
          <>
            <br />
            {title.line2}
          </>
        ) : null}
        {title.line3 ? (
          <>
            <br />
            {title.line3}
          </>
        ) : null}
      </h1>
      {subtitle?.enabled ? (
        <h4>{renderMultilineText(subtitle.text)}</h4>
      ) : null}
      {body.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
      {children}
    </div>
  );

  return (
    <section data-section={dataSection} className={className}>
      {imagePosition === "background" ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </section>
  );
}
