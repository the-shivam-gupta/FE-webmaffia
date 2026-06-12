import Image from "next/image";

export default function Banner({
  data,
  className = "hero_section flex",
  dataSection = "hero_section",
  children,
}) {
  const {
    imagePosition = "right",
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
      {subtitle?.enabled ? <h4>{subtitle.text}</h4> : null}
      {children}
      {body.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
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
