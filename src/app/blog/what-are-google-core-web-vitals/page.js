import BlogArticleHtml from "@/components/BlogArticleHtml";
import BlogDetailPage from "@/components/BlogDetailPage";

export default function BlogPage() {
  return (
    <BlogDetailPage
      slug="what-are-google-core-web-vitals"
      title="What Are Google Core Web Vitals and How to Improve Them?"
      date="10 May'25"
      readTime="10 min.Read"
      image="/assets/images/blogs/what-are-google-core-web-vitals.jpg"
      imageAlt=""
    >
      <BlogArticleHtml slug="what-are-google-core-web-vitals" />
    </BlogDetailPage>
  );
}
