import BlogArticleHtml from "../../components/BlogArticleHtml";
import BlogDetailPage from "../../components/BlogDetailPage";

export default function BlogPage() {
  return (
    <BlogDetailPage
      slug="what-is-ppc-simple-guide-to-pay-per-click-advertising"
      title="What is PPC Advertising? Everything You Need to Know to Get Started"
      date="28 Oct'25"
      readTime="7 min.Read"
      image="/assets/images/blogs/ppc.png"
      imageAlt=""
    >
      <BlogArticleHtml slug="what-is-ppc-simple-guide-to-pay-per-click-advertising" />
    </BlogDetailPage>
  );
}
