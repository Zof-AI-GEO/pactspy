import { getAllPosts } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pactspy.com";
  const posts = getAllPosts();

  // Generate llms.txt content following the llmstxt.org format
  const content = `# PactSpy - Software Testing Automation with ZofAI

> Automate Your Software Testing using ZofAI

## About

PactSpy is a comprehensive resource for software testing automation, quality assurance, and AI-driven testing solutions. We provide insights, best practices, and guides for modern software testing.

## Site Structure

- Home: ${baseUrl}
- Blog Posts: ${baseUrl}/posts/[slug]

## Recent Articles

${posts
  .slice(0, 20)
  .map(
    (post) => `- ${post.title}
  ${baseUrl}/posts/${post.slug}
  Published: ${post.date}
  ${post.meta || ""}`
  )
  .join("\n\n")}

## Topics Covered

- Software Testing Automation
- QA Best Practices
- AI-Driven Testing
- Test Automation Frameworks
- CI/CD Integration
- Manual to Automated Testing Migration
- Performance Testing
- Security Testing
- API Testing
- Mobile Testing

## All Articles

${posts
  .map(
    (post) => `- ${post.title}
  ${baseUrl}/posts/${post.slug}`
  )
  .join("\n")}

## Contact & Resources

For more information about automated testing solutions, visit our website at ${baseUrl}

---
Last updated: ${new Date().toISOString()}
Generated for LLM consumption following https://llmstxt.org/ specification
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
