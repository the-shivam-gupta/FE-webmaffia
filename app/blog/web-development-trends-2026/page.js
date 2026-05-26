import BlogArticleHtml from "../../components/BlogArticleHtml";
import BlogDetailPage from "../../components/BlogDetailPage";

export default function BlogPage() {
  return (
    <BlogDetailPage
      slug="web-development-trends-2026"
      title="Top Web Development Trends Businesses Should Watch in 2026"
      date="19 May'26"
      readTime="14 min.Read"
      image="/assets/images/blogs/web-development-trends-2026.png"
      imageAlt="Top web development trends 2026"
    >
      <BlogArticleHtml slug="web-development-trends-2026" />
    </BlogDetailPage>
  );
}
