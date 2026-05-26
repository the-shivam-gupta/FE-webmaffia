import { readFileSync } from "fs";
import path from "path";
import { sanitizeBlogArticleHtml } from "@/lib/sanitize-blog-html";

export default function BlogArticleHtml({ slug }) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "assets",
    "blog-content",
    `${slug}.html`
  );
  const raw = readFileSync(filePath, "utf8");
  const html = sanitizeBlogArticleHtml(raw);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
