import ServiceDetailPage from "@/components/ServiceDetailPage";
import { pageConfig } from "./config";

const BREADCRUMBS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "App Store Optimization", path: "/app-store-optimization" },
];

export default function AppStoreOptimizationPage() {
  return <ServiceDetailPage config={pageConfig} breadcrumbs={BREADCRUMBS} />;
}
