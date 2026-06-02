import BlogArticleHtml from "@/components/BlogArticleHtml";
import BlogDetailPage from "@/components/BlogDetailPage";

export default function BlogPage() {
  return (
    <BlogDetailPage
      slug="artificial-intelligence-in-digital-marketing"
      title="How to Use Artificial Intelligence (AI) in Digital Marketing?"
      date="25 April'25"
      readTime="8 min.Read"
      image="/assets/images/blogs/detail/blog-img-5.webp"
      imageAlt="AI in digital marketing"
    >
      <BlogArticleHtml slug="artificial-intelligence-in-digital-marketing" />
    </BlogDetailPage>
  );
}
