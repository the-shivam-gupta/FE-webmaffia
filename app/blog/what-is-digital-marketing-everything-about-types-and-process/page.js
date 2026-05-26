import BlogArticleHtml from "../../components/BlogArticleHtml";
import BlogDetailPage from "../../components/BlogDetailPage";

export default function BlogPage() {
  return (
    <BlogDetailPage
      slug="what-is-digital-marketing-everything-about-types-and-process"
      title="What is Digital Marketing? Everything About Types and Process"
      date="6 Oct'25"
      readTime="7 min.Read"
      image="/assets/images/blogs/digital.png"
      imageAlt=""
    >
      <BlogArticleHtml slug="what-is-digital-marketing-everything-about-types-and-process" />
    </BlogDetailPage>
  );
}
