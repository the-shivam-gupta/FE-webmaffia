import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import {
  buildServiceLocationMetadata,
  formatCityDisplayName,
  getAllServiceLocationPaths,
  getServiceLocationMatch,
  withCityInHeading,
} from "@/lib/serviceLocations";

export async function generateStaticParams() {
  const paths = await getAllServiceLocationPaths();
  return paths.map(({ serviceLocation }) => ({ serviceLocation }));
}

export async function generateMetadata({ params }) {
  const { serviceLocation } = await params;
  const match = await getServiceLocationMatch(serviceLocation);

  if (!match) {
    return { title: "Service | Webmaffia" };
  }

  return buildServiceLocationMetadata(
    match.service,
    match.city,
    serviceLocation
  );
}

export default async function ServiceLocationPage({ params }) {
  const { serviceLocation } = await params;
  const match = await getServiceLocationMatch(serviceLocation);

  if (!match) {
    notFound();
  }

  const config = withCityInHeading(
    match.service.config,
    match.service.headingTitle,
    match.city.name
  );

  const cityLabel = formatCityDisplayName(match.city.name);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: match.service.headingTitle, path: `/${match.service.slug}` },
    {
      name: `${match.service.headingTitle} in ${cityLabel}`,
      path: `/${serviceLocation}`,
    },
  ];

  return <ServiceDetailPage config={config} breadcrumbs={breadcrumbs} />;
}
