import BlogArticleHtml from "@/components/BlogArticleHtml";
import BlogDetailPage from "@/components/BlogDetailPage";

export default function BlogPage() {
  return (
    <BlogDetailPage
      slug="what-is-content-marketing-why-it-matters-for-your-business"
      title="What is Content Marketing? A Beginner's Guide"
      date="28 Oct'25"
      readTime="7 min.Read"
      image="/assets/images/blogs/content-marketing.png"
      imageAlt=""
    >
      <BlogArticleHtml slug="what-is-content-marketing-why-it-matters-for-your-business" />
    </BlogDetailPage>
  );
}
