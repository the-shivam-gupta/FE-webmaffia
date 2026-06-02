import BlogArticleHtml from "@/components/BlogArticleHtml";
import BlogDetailPage from "@/components/BlogDetailPage";

export default function GeoSeoAeoBlogPage() {
  return (
    <BlogDetailPage
      slug="geo-vs-seo-vs-aeo-what-brands-need-in-2026"
      title={
        <>
          GEO, SEO, AEO - <br />
          Your Business Needs <br />
          All Three
        </>
      }
      date="22 May'26"
      readTime="18 min.Read"
      image="/assets/images/blogs/geo-seo-aeo.png"
      imageAlt="GEO vs SEO vs AEO infographic"
    >
      <BlogArticleHtml slug="geo-vs-seo-vs-aeo-what-brands-need-in-2026" />
    </BlogDetailPage>
  );
}
