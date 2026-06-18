import HomePage from "@/components/HomePage";
import { getTestimonials } from "@/lib/strapiPage";

export default async function Home() {
  const testimonials = await getTestimonials();

  return <HomePage testimonials={testimonials} />;
}
