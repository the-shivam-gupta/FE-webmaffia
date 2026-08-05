import ServiceDetailPage from "@/components/ServiceDetailPage";
import { pageConfig } from "./config";

const BREADCRUMBS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Influencer Marketing", path: "/influencer-marketing" },
];

export default function InfluencerMarketingPage() {
  return <ServiceDetailPage config={pageConfig} breadcrumbs={BREADCRUMBS} />;
}
