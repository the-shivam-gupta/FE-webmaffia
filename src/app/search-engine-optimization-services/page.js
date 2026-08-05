import ServiceDetailPage from "@/components/ServiceDetailPage";
import { pageConfig } from "./config";

const BREADCRUMBS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "SEO", path: "/search-engine-optimization-services" },
];

export default function SearchEngineOptimizationPage() {
  return <ServiceDetailPage config={pageConfig} breadcrumbs={BREADCRUMBS} />;
}
