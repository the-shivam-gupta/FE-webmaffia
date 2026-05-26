import BlogArticleHtml from "../../components/BlogArticleHtml";
import BlogDetailPage from "../../components/BlogDetailPage";

export default function BlogPage() {
  return (
    <BlogDetailPage
      slug="what-is-seo-boost-website-traffic-with-simple-steps"
      title="What is SEO? Boost Website Traffic with Simple Steps"
      date="6 Oct'25"
      readTime="5 min.Read"
      image="/assets/images/blogs/seo.png"
      imageAlt=""
    >
      <BlogArticleHtml slug="what-is-seo-boost-website-traffic-with-simple-steps" />
    </BlogDetailPage>
  );
}
