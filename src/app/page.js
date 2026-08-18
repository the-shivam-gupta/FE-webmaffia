import HomePage from "@/components/HomePage";
import JsonLd from "@/components/JsonLd";
import { getTestimonials } from "@/lib/strapiPage";
import { ORGANIZATION_SCHEMA, LOCAL_BUSINESS_SCHEMA } from "@/lib/schema";

export default async function Home() {
  const testimonials = await getTestimonials();

  return (
    <>
      <JsonLd data={ORGANIZATION_SCHEMA} />
      <JsonLd data={LOCAL_BUSINESS_SCHEMA} />
      <HomePage testimonials={testimonials} />
    </>
  );
}
