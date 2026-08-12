import { notFound, permanentRedirect } from "next/navigation";
import {
  getAllServiceLocationPaths,
  getServiceLocationMatch,
} from "@/lib/serviceLocations";

/**
 * City-variant service pages (e.g. /digital-strategy-in-andheri) moved under
 * /services/ (e.g. /services/digital-strategy-in-andheri) to match the base
 * service pages living at /services/<slug>. This route is kept only as a
 * permanent redirect so old indexed/shared links keep working.
 */
export async function generateStaticParams() {
  const paths = await getAllServiceLocationPaths();
  return paths.map(({ serviceLocation }) => ({ serviceLocation }));
}

export default async function LegacyServiceLocationRedirect({ params }) {
  const { serviceLocation } = await params;
  const match = await getServiceLocationMatch(serviceLocation);

  if (!match) {
    notFound();
  }

  permanentRedirect(`/services/${serviceLocation}`);
}
