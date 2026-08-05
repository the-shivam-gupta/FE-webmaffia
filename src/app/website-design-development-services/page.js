import ServiceDetailPage from "@/components/ServiceDetailPage";
import { pageConfig } from "./config";

const BREADCRUMBS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Design and development", path: "/website-design-development-services" },
];

export default function WebsiteDesignDevelopmentPage() {
  return <ServiceDetailPage config={pageConfig} breadcrumbs={BREADCRUMBS} />;
}
