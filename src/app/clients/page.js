import Banner from "@/components/Banner";
import ClientsLogosGrid from "@/components/ClientsLogosGrid";
import { getClientBanner, getClients, getStrapiImageUrl } from "@/lib/strapiPage";

function buildClientsBannerData(rawBanner) {
  if (!rawBanner) return null;

  const heading = rawBanner.heading || "";
  const lastSpace = heading.lastIndexOf(" ");

  let images;
  if (rawBanner.desktopImage?.url) {
    images = {
      banner: {
        url: getStrapiImageUrl(rawBanner.desktopImage),
        alt: rawBanner.desktopImage.alternativeText || "",
        width: rawBanner.desktopImage.width || 788,
        height: rawBanner.desktopImage.height || 693,
      },
    };
    if (rawBanner.mobileImage?.url) {
      images.bannerMobile = {
        url: getStrapiImageUrl(rawBanner.mobileImage),
        alt: rawBanner.mobileImage.alternativeText || "",
      };
    }
  }

  return {
    imagePosition: rawBanner.imagePosition || "left",
    priority: true,
    subheading: rawBanner.tagLine
      ? { enabled: true, text: rawBanner.tagLine }
      : undefined,
    title: {
      line1: lastSpace > 0 ? heading.slice(0, lastSpace) : heading,
      ...(lastSpace > 0 ? { line2: heading.slice(lastSpace + 1) } : {}),
    },
    subtitle: rawBanner.subHeading
      ? { enabled: true, text: rawBanner.subHeading }
      : undefined,
    descriptions: rawBanner.description?.trim()
      ? [rawBanner.description.trim()]
      : undefined,
    ...(images ? { images } : {}),
  };
}

export default async function Clients() {
  const [clients, clientBannerData] = await Promise.all([
    getClients(),
    getClientBanner(),
  ]);

  const bannerData = clientBannerData?.banner
    ? buildClientsBannerData(clientBannerData.banner)
    : null;

  const clientLogos = (clients ?? [])
    .filter((client) => client.logo?.url)
    .map((client) => ({
      id: client.documentId,
      src: getStrapiImageUrl(client.logo),
      alt: client.name || "",
      width: client.logo?.width || 317,
      height: client.logo?.height || 122,
    }));

  return (
    <main className="wrapper clients_wrapper">
      <div className="ml-setter clients_page">
        {bannerData && (
          <Banner
            data={bannerData}
            dataSection="clients_hero"
            className="hero_section banner_para flex"
          />
        )}

        <ClientsLogosGrid logos={clientLogos} />
      </div>
    </main>
  );
}
