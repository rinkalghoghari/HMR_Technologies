import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Calendar, ArrowRight } from "lucide-react";

import type { BlogPost } from "@shared/schema";
import { usePageTitle } from "@/hooks/usePageTitle";
import { supabase } from "@/supabase/supabaseClient";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

// const staticPosts: BlogPost[] = [
//   {
//     id: 1,
//     title: "How AI Tools Are Revolutionizing Software Development",
//     excerpt:
//       "Explore how modern AI development tools like Cursor and Copilot are changing the way we build applications.",
//     content: "",
//     category: "AI Development",
//     imageUrl: "/images/Blog/Blog-1.jpeg",
//     publishedAt: new Date("2024-12-15"),
//     slug: "ai-tools-revolutionizing-development",
//     updatedAt: new Date("2024-12-15"),
//     isDeleted:false
//   },
//   {
//     id: 2,
//     title: "Building Scalable Applications with AI-Powered Development",
//     excerpt:
//       "Learn the best practices for creating maintainable and scalable applications using AI development workflows.",
//     content: "",
//     category: "Best Practices",
//     imageUrl: "/images/Blog/Blog-2.jpeg",
//     publishedAt: new Date("2024-12-10"),
//     slug: "building-scalable-applications-ai",
//     updatedAt: new Date("2024-12-10"),
//         isDeleted:false

//   },
//   {
//     id: 3,
//     title: "The Future of Web Development with AI Integration",
//     excerpt:
//       "Discover how AI is transforming web development and what it means for developers and businesses.",
//     content: "",
//     category: "Future Tech",
//     imageUrl: "/images/Blog/Blog-3.jpeg",
//     publishedAt: new Date("2024-12-05"),
//     slug: "future-web-development-ai",
//     updatedAt: new Date("2024-12-05"),
//         isDeleted:false

//   },
//   {
//     id: 4,
//     title: "Security Best Practices in AI-Powered Development",
//     excerpt:
//       "Important security practices and considerations when using AI tools in your development process.",
//     content: "",
//     category: "Security",
//     imageUrl: "/images/Blog/Blog-4.jpeg",
//     publishedAt: new Date("2024-11-20"),
//     slug: "security-ai-powered-development",
//     updatedAt: new Date("2024-11-20"),
//         isDeleted:false

//   },
//   {
//     id: 5,
//     title: "Maximizing Developer Productivity with Modern Tools",
//     excerpt:
//       "Essential techniques and tools that can significantly boost your development productivity and workflow efficiency.",
//     content: "",
//     category: "Productivity",
//     imageUrl: "/images/Blog/Blog-5.jpeg",
//     publishedAt: new Date("2024-11-15"),
//     slug: "maximizing-developer-productivity",
//     updatedAt: new Date("2024-11-15"),
//         isDeleted:false

//   },
//   {
//     id: 6,
//     title: "Enterprise Digital Transformation: A Complete Case Study",
//     excerpt:
//       "How we helped a Fortune 500 company modernize their legacy systems and achieve 40% improvement in operational efficiency.",
//     content: "",
//     category: "Case Study",
//     imageUrl: "/images/Blog/Blog-6.jpeg",
//     publishedAt: new Date("2024-11-10"),
//     slug: "enterprise-digital-transformation-case-study",
//     updatedAt: new Date("2024-11-10"),
//         isDeleted:false

//   },
//   {
//     id: 7,
//     title: "Advanced AI Integration Techniques for Modern Applications",
//     excerpt:
//       "Deep dive into implementing sophisticated AI features that enhance user experience and business value.",
//     content: "",
//     category: "AI Development",
//     imageUrl: "/images/Blog/Blog-7.jpeg",
//     publishedAt: new Date("2024-11-05"),
//     slug: "advanced-ai-integration-techniques",
//     updatedAt: new Date("2024-11-05"),
//         isDeleted:false

//   },
//   {
//     id: 8,
//     title: "Code Quality Standards: Best Practices for Development Teams",
//     excerpt:
//       "Comprehensive guide to maintaining high code quality standards and implementing effective review processes.",
//     content: "",
//     category: "Best Practices",
//     imageUrl: "/images/Blog/Blog-8.jpeg",
//     publishedAt: new Date("2024-10-30"),
//     slug: "code-quality-standards-best-practices",
//     updatedAt: new Date("2024-10-30"),
//         isDeleted:false

//   },
// ];

export default function Blog() {

   usePageTitle(
    "Blog - Expert Tips on Web, Mobile & IT Solutions",
    "Read HMR Technologies Blog for expert tips on web, mobile, and IT solutions. Stay informed, grow your knowledge, and improve your digital skills.",
  );

   const { data: blogs = [],isLoading:isBlogLoading } = useQuery<BlogPost[]>({
    queryKey: ["blogs"],
    queryFn: async () => {
  const { data:res, error } = await supabase.functions.invoke("blogs", {
    method: "GET",
  });
      if (error) {
        throw new Error("Failed to fetch blog");
      }
      const data = await res
      return data.posts || [];
    },
  });

  const [selectedCategory, setSelectedCategory] = useState("All Articles");

 
  // Get all unique categories plus "All Articles"
  const categories = [
    "All Articles",
    ...Array.from(new Set(blogs?.map((post) => post.category))),
  ];

  const now = new Date();
  const filteredPosts = (selectedCategory === "All Articles"
    ? blogs
    : blogs.filter((post) => post.category === selectedCategory)
  )


  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };


    if(isBlogLoading) {
      return (
        <div className="min-h-[92vh] grid place-items-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading blog post...</p>
          </div>
        </div>
      );
    }

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <PageHero
        title="Blog"
        subtitle="Insights & Expertise"
        description="Stay updated with the latest trends in AI development, technology insights, and expert guidance from our development team."
        variant="blog"
        rightContent="features"
      />

   {/* Categories Filter */}
      <section className="sm:py-8 py-4 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 transition-all ${selectedCategory === category
                    ? "bg-primary text-white"
                    : "hover:bg-primary/10 hover:text-primary"
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Results count */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              {selectedCategory === "All Articles"
                ? `Showing all ${filteredPosts.length} articles`
                : `Showing ${filteredPosts.length} articles in "${selectedCategory}"`}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="sm:mb-8 mb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Featured Article
              </h2>
            </div>

            <Link to={`/blog/${filteredPosts[0].slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={
                        `${filteredPosts[0].imageUrl}` || "/images/Blog/Blog-1.jpeg"
                      }
                      alt={filteredPosts[0].title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 sm:p-8 p-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="secondary">
                        {filteredPosts[0].category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(filteredPosts[0].createdAt)}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {filteredPosts[0].title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center text-primary hover:text-blue-700 font-medium">
                      Read Full Article <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

   

      {/* Blog Posts Grid */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={`${post.imageUrl}` || "/images/Blog/Blog-1.jpeg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="sm:p-6 p-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <span>•</span>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(post.createdAt)}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-primary hover:text-blue-700 font-medium">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 mb-6">
                No articles match the selected category. Try selecting a
                different category.
              </p>
              <Button
                variant="outline"
                onClick={() => setSelectedCategory("All Articles")}
              >
                Show All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Never Miss an Update
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for the latest AI development insights
            and tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
