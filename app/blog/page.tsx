import type { Metadata } from "next";
import {
  BlogHero,
  PostGrid,
  FeaturedPosts,
  CategoryFilter,
} from "../components";
export const metadata: Metadata = {
  title: "QA Testing Blog - ClanAP Technologies",
  description:
    "Insights, trends, and best practices in quality assurance and software testing from our team of QA experts.",
};

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <BlogHero />
      <FeaturedPosts posts={mockFeaturedPosts} />
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:w-11/12">
          <CategoryFilter categories={categories} />
          <PostGrid posts={mockPosts} />
        </div>
      </div>
    </main>
  );
}

// Mock data for the blog
const categories = [
  { id: "all", name: "All Posts" },
  { id: "automation", name: "Test Automation" },
  { id: "best-practices", name: "Best Practices" },
  { id: "devops", name: "DevOps & QA" },
  { id: "mobile-testing", name: "Mobile Testing" },
  { id: "security", name: "Security Testing" },
];

export const mockFeaturedPosts = [
  {
    id: "1",
    title: "The Future of QA: AI-Driven Testing in 2025",
    excerpt:
      "Discover how artificial intelligence is revolutionizing quality assurance and what it means for testing professionals.",
    coverImage: "/images/quality.webp",
    category: "automation",
    author: {
      name: "Manpreet Bains",
      avatar: "/images/team.jpg",
      role: "Co-founder & CEO",
    },
    date: "April 12, 2025",
    readTime: "8 min read",
    slug: "#",
  },
  {
    id: "2",
    title: "Implementing Shift-Left Testing: A Complete Guide",
    excerpt:
      "Learn how to integrate testing earlier in the development lifecycle for better quality and faster delivery.",
    coverImage: "/images/quality.webp",
    category: "best-practices",
    author: {
      name: "David Martinez",
      avatar: "/images/team.jpg",
      role: "Director of QA",
    },
    date: "April 5, 2025",
    readTime: "6 min read",
    slug: "#",
  },
  {
    id: "3",
    title: "Security Testing in the Age of Cloud-Native Applications",
    excerpt:
      "Explore the unique security challenges of cloud-native architectures and how to test them effectively.",
    coverImage: "/images/quality.webp",
    category: "security",
    author: {
      name: "Sarah Chen",
      avatar: "/images/team.jpg",
      role: "VP of Operations",
    },
    date: "March 28, 2025",
    readTime: "10 min read",
    slug: "#",
  },
];

export const mockPosts = [
  ...mockFeaturedPosts,
  {
    id: "4",
    title: "Mobile Testing Strategies for Cross-Platform Applications",
    excerpt:
      "Discover effective strategies for testing applications that need to work flawlessly across iOS and Android.",
    coverImage: "/images/quality.webp",
    category: "mobile-testing",
    author: {
      name: "Ese Eigbadon",
      avatar: "/images/team.jpg",
      role: "Co-founder & CTO",
    },
    date: "March 21, 2025",
    readTime: "7 min read",
    slug: "mobile-testing-cross-platform",
  },
  {
    id: "5",
    title: "Integrating QA into Your DevOps Pipeline",
    excerpt:
      "Learn how to seamlessly integrate quality assurance practices into your continuous integration and delivery workflows.",
    coverImage: "/images/quality.webp",
    category: "devops",
    author: {
      name: "David Martinez",
      avatar: "/images/team.jpg",
      role: "Director of QA",
    },
    date: "March 14, 2025",
    readTime: "9 min read",
    slug: "integrating-qa-devops",
  },
  {
    id: "6",
    title: "Test Automation ROI: Measuring the Real Value",
    excerpt:
      "How to calculate and demonstrate the return on investment for your test automation initiatives.",
    coverImage: "/images/quality.webp",
    category: "automation",
    author: {
      name: "Sarah Chen",
      avatar: "/images/team.jpg",
      role: "VP of Operations",
    },
    date: "March 7, 2025",
    readTime: "5 min read",
    slug: "test-automation-roi",
  },
  {
    id: "7",
    title: "Building a Comprehensive API Testing Strategy",
    excerpt:
      "A step-by-step approach to developing and implementing an effective API testing strategy for your organization.",
    coverImage: "/images/quality.webp",
    category: "best-practices",
    author: {
      name: "Manpreet Bains",
      avatar: "/images/team.jpg",
      role: "Co-founder & CEO",
    },
    date: "February 28, 2025",
    readTime: "8 min read",
    slug: "api-testing-strategy",
  },
  {
    id: "8",
    title: "The Role of QA in Agile Transformation",
    excerpt:
      "How quality assurance teams can support and accelerate an organization transition to agile methodologies.",
    coverImage: "/images/quality.webp",
    category: "best-practices",
    author: {
      name: "Ese Eigbadon",
      avatar: "/images/team.jpg",
      role: "Co-founder & CTO",
    },
    date: "February 21, 2025",
    readTime: "6 min read",
    slug: "qa-agile-transformation",
  },
  {
    id: "9",
    title: "Mobile Usability Testing: Best Practices",
    excerpt:
      "Essential techniques and approaches for effective usability testing of mobile applications.",
    coverImage: "/images/quality.webp",
    category: "mobile-testing",
    author: {
      name: "David Martinez",
      avatar: "/images/team.jpg",
      role: "Director of QA",
    },
    date: "February 14, 2025",
    readTime: "7 min read",
    slug: "mobile-usability-testing",
  },
];
