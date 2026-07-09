import Image from "next/image";

function renderMultilineText(text) {
  return String(text ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
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

  const isBackground = imagePosition === "background";
  const hasMobileBanner = Boolean(bannerMobile?.url);
  const useResponsiveBackgroundBanners = isBackground && hasMobileBanner;

  const image = banner?.url ? (
    <div
      className={`banner_media${isBackground ? " banner_media--background" : ""}`}
    >
      {useResponsiveBackgroundBanners ? (
        <>
          <picture className="detail_banner detail_banner--desktop" aria-hidden="true">
            <img
              src={banner.url}
              alt=""
              className="dark_img banner_bg_img"
              fetchPriority={priority ? "high" : undefined}
            />
          </picture>
          <picture className="detail_banner detail_banner--mobile">
            <img
              src={bannerMobile.url}
              alt={bannerMobile.alt ?? banner.alt ?? ""}
              className="dark_img banner_bg_img"
              fetchPriority={priority ? "high" : undefined}
            />
          </picture>
        </>
      ) : (
        <picture
          className={isBackground ? "detail_banner" : undefined}
        >
          {hasMobileBanner ? (
            <source media="(max-width: 540px)" srcSet={bannerMobile.url} />
          ) : null}
          {isBackground || hasMobileBanner ? (
            <img
              src={banner.url}
              alt={banner.alt ?? ""}
              className={`dark_img${isBackground ? " banner_bg_img" : ""}`}
              width={isBackground ? undefined : (banner.width ?? 871)}
              height={isBackground ? undefined : (banner.height ?? 767)}
              fetchPriority={priority ? "high" : undefined}
            />
          ) : (
            <Image
              src={banner.url}
              alt={banner.alt ?? ""}
              width={banner.width ?? 871}
              height={banner.height ?? 767}
              className="dark_img"
              priority={priority}
              unoptimized={unoptimized}
            />
          )}
        </picture>
      )}
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
    <div className="banner_content">
      {subheading?.enabled ? (
        <div className="sub_title">{subheading.text}</div>
      ) : null}
      <h1>
        <span className="banner_title_line">{title.line1}</span>
        {title.line2 ? (
          <span className="banner_title_line">{title.line2}</span>
        ) : null}
        {title.line3 ? (
          <span className="banner_title_line">{title.line3}</span>
        ) : null}
      </h1>
      {subtitle?.enabled ? (
        <h4 className="h4_text">{renderMultilineText(subtitle.text)}</h4>
      ) : null}
      {body.map((text, index) => (
        <p key={index}>{renderMultilineText(text)}</p>
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
