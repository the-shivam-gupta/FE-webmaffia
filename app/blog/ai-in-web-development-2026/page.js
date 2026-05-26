import BlogArticleHtml from "../../components/BlogArticleHtml";
import BlogDetailPage from "../../components/BlogDetailPage";

export default function BlogPage() {
  return (
    <BlogDetailPage
      slug="ai-in-web-development-2026"
      title="How AI Is Changing Web Development in 2026"
      date="15 May'26"
      readTime="12 min.Read"
      image="/assets/images/blogs/ai-in-web-development-2026.png"
      imageAlt="AI in web development 2026"
    >
      <BlogArticleHtml slug="ai-in-web-development-2026" />
    </BlogDetailPage>
  );
}
