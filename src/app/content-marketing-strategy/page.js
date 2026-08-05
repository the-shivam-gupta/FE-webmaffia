import ServiceDetailPage from "@/components/ServiceDetailPage";
import { pageConfig } from "./config";

const BREADCRUMBS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Content Marketing", path: "/content-marketing-strategy" },
];

export default function ContentMarketingPage() {
  return <ServiceDetailPage config={pageConfig} breadcrumbs={BREADCRUMBS} />;
}
