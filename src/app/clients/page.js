import Banner from "@/components/Banner";
import ClientsLogosGrid from "@/components/ClientsLogosGrid";
import { getClients, getStrapiImageUrl } from "@/lib/strapiPage";

const bannerData = {
  imagePosition: "left",
  priority: true,
  subheading: {
    enabled: true,
    text: "OUR CLIENTS",
  },
  title: {
    line1: "TRUSTED",
    line2: "PARTNERSHIPS",
  },
  descriptions: [
    "We're proud to partner with forward-thinking companies across industries, from ambitious startups to established global brands. Built on trust, collaboration, and shared goals, these relationships are the foundation of everything we do. Join the growing list of businesses who count on us.",
  ],
  images: {
    banner: {
      url: "/assets/images/about_banner.svg",
      alt: "",
      width: 788,
      height: 693,
    },
  },
};

export default async function Clients() {
  const clients = (await getClients()) ?? [];

  const clientLogos = clients
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
        <Banner
          data={bannerData}
          dataSection="clients_hero"
          className="hero_section banner_para flex"
        />

        <ClientsLogosGrid logos={clientLogos} />
      </div>
    </main>
  );
}
