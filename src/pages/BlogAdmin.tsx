import React, { useState } from "react";
import {
  Underline as UnderlineIcon,
  Trash2,
  Plus,
  PencilLine,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import ConfirmDeleteModal from "@/components/ui/delete-confirm-box";
import { Faqs } from "@shared/schema";
import { Accordion, AccordionItem } from "@radix-ui/react-accordion";
import { AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";
import { supabase } from "@/supabase/supabaseClient";



const BlogAdmin = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFaqModal, setShowFaqModal] = useState(false);
  const [blogUpdateModal, setBlogUpdateModal] = useState(false);
  const [faqUpdateModal, setFaqUpdateModal] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const [selectedFaqId, setSelectedFaqId] = useState<number | null>(null);
  const [faqId, setFaqId] = useState<string | null>(null);
  const [deleteType, setDeleteType] = useState<"faq" | "blog" | null>(null);
  const [faq, setFaq] = useState({ question: "", answer: "", blogId: "" })

  const mdParser = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })


  const [form, setForm] = useState({
    id: "",
    title: "",
    excerpt: "",
    content: "",
    category: "",
    slug: "",
    image: null as File | null,
    imageUrl: '',
    createdAt: ""
  });

  const [faqForm, setFaqForm] = useState({
    question: "",
    answer: "",
    blogId: "",
  });


  const isBlogValid =
    form.title.trim() &&
    form.excerpt.trim() &&
    form.content.trim() &&
    form.category.trim() &&
    form.slug.trim();


  //==================== Blogs ========================== 

  //Get all blog post
  const { data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data: res, error } = await supabase.functions.invoke("blogs", {
        method: "GET",
      });
      if (error) {
        throw new Error("Failed to fetch blog");
      }
      const data = await res;
      return data?.posts || []
    },
  });

  // Create Blog post
  const handleCreate = async () => {
    setErrors({});
    setIsSubmitting(true);

    const isValidSlug = (slug: string) => {
      const slugRegex = /^[a-z0-9-]+$/;
      return slugRegex.test(slug);
    };

    if (!form.title || !form.excerpt || !form.category || !form.content || !form.slug) {
      toast({
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    if (!isValidSlug(form.slug)) {
      toast({
        title: "Invalid Slug",
        description:
          "Slug can only contain lowercase letters, numbers, and hyphens.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }


    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("excerpt", form.excerpt);
      formData.append("category", form.category);
      formData.append("content", form.content);
      formData.append("slug", form.slug);
      formData.append("createdAt", form.createdAt);
      if (form.image) formData.append("image", form.image);

      const { data: res, error } = await supabase.functions.invoke("blogs", {
        body: formData,
      });
      const data = await res
      if (error) {
        if (data.errors) setErrors(data.errors);
        else toast({ title: "Error", description: data.error, variant: "destructive" });
        return;
      }
      toast({
        title: "Blog Created",
        description: "Your blog post was successfully created.",
      });

      setForm({
        id: "",
        title: "",
        excerpt: "",
        content: "",
        category: "",
        slug: "",
        image: null,
        createdAt: "",
        imageUrl: ''
      });

      setOpen(false);
      setErrors({});
      await queryClient.invalidateQueries({ queryKey: ["blogs"] });
    } catch (err) {
      console.error("Error creating blog:", err);
      toast({
        title: "Submission Error",
        description: ` ${err}`,
        variant: "destructive",

      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete blog post
  const handleBlogDelete = (id: number) => {
    setSelectedBlogId(id);
    setSelectedFaqId(null);
    setDeleteType("blog");
    setShowModal(true);
  };

  const handleEditClick = (post: any) => {
    setForm({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      slug: post.slug,
      image: null,
      imageUrl: post.imageUrl,
      createdAt: post.createdAt
    });


    setBlogUpdateModal(true);
  };

  const handleUpdatePost = async () => {
    try {
      const formData = new FormData();
      if (form.title) formData.append("title", form.title);
      if (form.excerpt) formData.append("excerpt", form.excerpt);
      if (form.content) formData.append("content", form.content);
      if (form.category) formData.append("category", form.category);
      if (form.createdAt) formData.append("createdAt", form.createdAt);
      if (form.slug) formData.append("slug", form.slug);
      if (form.image) {
        formData.append("image", form.image);
      } else if (form.imageUrl) {
        formData.append("imageUrl", form.imageUrl);
      }

      const { data: res, error } = await supabase.functions.invoke(`blogs?id=${form.id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res
      if (error) {
        throw new Error(data.message || "Failed to update blog post");
      }
      toast({
        title: "Updated",
        description: "Post updated successfully!",
      });
      queryClient.invalidateQueries({ queryKey: ["faqs"] });
      queryClient.invalidateQueries({ queryKey: ["allfaqs"] });
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      await refetch()
      setBlogUpdateModal(false)
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "Something went wrong",
        variant: "destructive",
      });
    }
  };


  //==================== FAQ ==========================

  //Get faq id wise
  const { data: faqs, isLoading, error: faqError, refetch } = useQuery({
    queryKey: ["faqs", form.id],
    queryFn: async () => {
      if (!form.id) return [];
      const { data: res, error } = await supabase.functions.invoke(`faqs?blogId=${form.id}`, {
        method: "GET",
      });
      if (error) throw new Error("Failed to fetch FAQs");
      const data = await res
      return data.data
    },
  });

  //Get all faq
  const { data: allfaqs } = useQuery<Faqs[]>({
    queryKey: ["allfaqs"],
    queryFn: async () => {
      const { data: res, error } = await supabase.functions.invoke("faqs", {
        method: "GET",
      });
      if (error) throw new Error("Failed to fetch FAQs");
      const data = await res
      return data.data
    }
  });

  const handleFaqChange = (e: any) => {
    setFaq({ ...faq, [e.target.name]: e.target.value });
  };

  const handleFaqSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data: response, error } = await supabase.functions.invoke("faqs", {
        body: faq,
      });

      const result = await response
      if (error) {
        console.error("Failed to submit FAQ:", result.message || result);
        toast({
          title: "Faq Created",
          description: "Failed to submit FAQ",
        });
        return;
      }

      toast({
        title: "Faq Created",
        description: "FAQ Created successfully!",
      });

      queryClient.invalidateQueries({ queryKey: ["faqs"] });
      await refetch();
      setFaq({ question: "", answer: "", blogId: "" });
      setShowFaqModal(false);
      queryClient.invalidateQueries({ queryKey: ["blogs"] });

    } catch (err) {
      console.error("Error creating blog:", err);
      toast({
        title: "Submission Error",
        description: "Something went wrong while creating the post.",
        variant: "destructive",
      });
    }
  };

  const handleFaqDelete = (id: number) => {
    setSelectedFaqId(id);
    setSelectedBlogId(null);
    setDeleteType("faq");
    setShowModal(true);
  };

  const handleFaqEditClick = (faq: any) => {
    setFaqForm({
      question: faq.question,
      answer: faq.answer,
      blogId: faq.blogId,
    });
    setFaqId(faq.id);
    setFaqUpdateModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFaqForm({ ...faqForm, [e.target.name]: e.target.value });
  };

  const handleFaqUpdate = async () => {
    if (!faqId) return;

    try {
      const { data: res, error } = await supabase.functions.invoke(`faqs?id=${faqId}`, {
        method: "PUT",
        body: { ...faqForm },
      });
      const data = await res

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          toast({
            title: "Faq update",
            description: "Failed to update FAQ",
          });
        }
      }
      toast({
        title: "Faq Updated",
        description: "FAQ Updated successfully!",
      });

      queryClient.invalidateQueries(
        {
          queryKey: ["faqs"]
        }
      );
      setFaqUpdateModal(false)
      setFaqId(null)
    } catch (err) {
      console.error("Error creating blog:", err);
      toast({
        title: "Submission Error",
        description: "Something went wrong while updating post.",
        variant: "destructive",
      });
    }
  };

  // DELETE faq and blog
  const handleDelete = async () => {

    let url = "";
    let id = null;

    if (deleteType === "faq") {
      id = selectedFaqId;
      url = `faqs/?id=${id}`;
    } else if (deleteType === "blog") {
      id = selectedBlogId;
      url = `blogs?id=${id}`;
    }

    if (!id) return;

    try {
      const { data: res, error } = await supabase.functions.invoke(url, {
        method: "DELETE",
      });
      const data = await res
      if (error) throw new Error(data.message || "Failed to delete");

      toast({ title: "Deleted", description: `${deleteType} deleted successfully` });

      queryClient.invalidateQueries({
        queryKey: [deleteType === "faq" ? "faqs" : "blogs"],
      });

      setShowModal(false);
      setSelectedFaqId(null);
      setSelectedBlogId(null);
      setDeleteType(null);
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive",
      });
    }
  };


  const handleEditorChange = ({ text }: any) => {
    const htmlContent = mdParser.render(text);
    setForm((prev) => ({
      ...prev,
      content: htmlContent,
    }));
  };


  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center px-4 py-2 bg-[#2597f4] text-white rounded "
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Blog Post
        </button>
      </div>

      {/* Display all Blogs  */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>All Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {blogs?.map((post: any) => (
                <div key={post.id} className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-end gap-2">
                    <div>
                      <Trash2 onClick={() => handleBlogDelete(post.id)} className="w-4 h-4 mr-2 text-red-500 cursor-pointer" />
                    </div>
                    <div>
                      <PencilLine onClick={() => handleEditClick(post)} className="w-4 h-4 mr-2 text-blue-500 cursor-pointer" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{post.title}</h3>
                    <p className="text-sm text-gray-600">{post.excerpt}</p>
                    <p className="text-sm text-gray-600">Slug : {post.slug}</p>
                    <p className="text-sm text-gray-600">Category : {post.category}</p>
                    {post.imageUrl && (
                      <a
                        href={`${post.imageUrl}`}
                        target="_blank"
                        className="text-sm text-blue-600 hover:underline block mt-1"
                      >
                        View Image
                      </a>
                    )}
                  </div>

                  <p className="text-xs text-gray-500">
                    Published: {new Date(post.createdAt).toLocaleString()}
                  </p>

                  <div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-lg p-3">All Faq's</h3>

                      <div className="space-y-4">
                        <Accordion type="single" collapsible className="space-y-4">
                          {
                            allfaqs
                              ?.filter((faq: any) => faq.blogId === post.id)
                              .map((faq: any, i: any) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border border-gray-200 rounded-lg px-6">
                                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                                    {faq.question}
                                  </AccordionTrigger>
                                  <AccordionContent className="text-gray-600 pb-4">
                                    {faq.answer}
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                        </Accordion>

                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {!blogs?.length && (
                <div className="text-center text-gray-500 py-8">
                  No blog posts available
                </div>
              )}
            </div>
            <ConfirmDeleteModal
              className="!bg-[#00000005]"
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              onConfirm={handleDelete}
            />
          </CardContent>
        </Card>
      </div>

      {/* Blog Model */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 !mt-0">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-5xl relative max-h-[790px] overflow-auto">
            <button onClick={() => {
              setOpen(false); setErrors({});
              setForm({
                id: "",
                title: "",
                excerpt: "",
                content: "",
                category: "",
                slug: "",
                image: null,
                imageUrl: '',
                createdAt: ""
              });
            }}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              &times;
            </button>

            <h3 className="text-lg font-semibold mb-4">Add Blog Post</h3>

            <div className="space-y-3">
              {["title", "excerpt", "category", "slug"].map((field) => (
                <div key={field}>
                  <input className="w-full border px-3 py-2 rounded" placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={(form as any)[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  />
                  {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                </div>
              ))}

              <div className="space-y-3">
                <input className="w-full border px-3 py-2 rounded" type="hidden" onChange={(e) => setForm({ ...form, createdAt: e.target.value })} />
                {errors.createdAt && <p className="text-red-500 text-sm">{errors.createdAt}</p>}
              </div>

              <div>
                <input className="w-full" type="file" onChange={(e) => setForm({ ...form, image: e.target.files?.[0] || null })} required />
                {errors.imageUrl && <p className="text-red-500 text-sm">{errors.imageUrl}</p>}
              </div>

              <div className="border rounded-md p-2 max-h-[300px] min-h-[200px] overflow-auto">
                <MdEditor
                  style={{ height: "300px" }}
                  renderHTML={(text) => mdParser.render(text)}
                  onChange={handleEditorChange}
                />
              </div>
              {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}

              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={handleCreate}
                  disabled={isSubmitting}
                  className={`lg:col-span-2 w-full px-4 py-2 text-white rounded bg-[#2597f4]`}>
                  {isSubmitting ? "Submitting..." : "Create Post"}
                </button>

                {/* Add FAQ Button */}
                <div className="relative group inline-block w-full lg:col-span-1">
                  <button
                    className={`w-full px-4 py-2 rounded ${form.id
                      ? "bg-[#2597f4] text-white cursor-pointer"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    disabled={!form.id}

                  >
                    Add FAQ's
                  </button>

                  {/* Tooltip only when button is disabled */}
                  {!form.id && (
                    <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-max rounded bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Create blog first to add FAQ's
                    </span>
                  )}
                </div>

              </div>
            </div>
          </div>
          <ConfirmDeleteModal
            className="!bg-[#00000005]"
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onConfirm={handleDelete}
          />
        </div>

      )}

      {/* FAQ Modal */}
      <div className="p-4">
        {showFaqModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-2xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Add FAQ</h2>
              <form onSubmit={handleFaqSubmit}>
                <div className="mb-4">
                  <label className="block mb-1 font-medium">Question</label>
                  <input
                    type="text"
                    name="question"
                    value={faq.question}
                    onChange={handleFaqChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Enter your question"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 font-medium">Answer</label>
                  <textarea
                    name="answer"
                    value={faq.answer}
                    onChange={handleFaqChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Enter your answer"
                    required
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowFaqModal(false)}
                    className="px-4 py-2 bg-gray-300 text-black rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#2597f4] text-white rounded"
                  >
                    Save FAQ
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Blog post update Model */}
      {blogUpdateModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 !mt-0">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-5xl relative max-h-[790px] overflow-auto">

            {/* Close Button */}
            <button
              onClick={() => {
                setBlogUpdateModal(false);
                setErrors({});
                setForm({
                  id: "",
                  title: "",
                  excerpt: "",
                  content: "",
                  category: "",
                  slug: "",
                  image: null,
                  imageUrl: "",
                  createdAt: "",
                });
              }}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              &times;
            </button>

            <h3 className="text-lg font-semibold mb-4">Update Blog Post</h3>

            <div className="space-y-3">
              {/* Text Inputs */}
              {["title", "excerpt", "slug"].map((field) => (
                <div key={field}>
                  <input
                    className="w-full border px-3 py-2 rounded"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    readOnly={field === "slug"}
                    value={(form as any)[field] || ""}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-sm">{errors[field]}</p>
                  )}
                </div>
              ))}

              <input
                className="w-full border px-3 py-2 rounded"
                type="text"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />


              {/* Published Date */}
              <div>
                <input
                  className="w-full border px-3 py-2 rounded"
                  type="hidden"
                  value={
                    form.createdAt
                      ? new Date(form.createdAt).toISOString().slice(0, 10)
                      : ""
                  }
                  onChange={(e) =>
                    setForm({ ...form, createdAt: e.target.value })
                  }
                />
                {errors.createdAt && (
                  <p className="text-red-500 text-sm">{errors.createdAt}</p>
                )}
              </div>

              {/* Image Upload */}
              <div>
                <input
                  className="w-full"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setForm({
                        ...form,
                        image: file,
                        imageUrl: "",
                      });
                    } else {
                      setForm({
                        ...form,
                        image: null,
                        imageUrl: form.imageUrl,
                      });
                    }
                  }}
                />

                <div className="mt-2">
                  {form.image ? (
                    <img
                      src={URL.createObjectURL(form.image)}
                      alt="Selected"
                      className="w-32 h-32 object-cover rounded"
                    />
                  ) : form.imageUrl ? (
                    <img
                      src={`${form.imageUrl}`}
                      alt="Existing"
                      className="w-32 h-32 object-cover rounded"
                    />
                  ) : null}
                </div>
                {/* {errors.imageUrl && (
                  <p className="text-red-500 text-sm">{errors.imageUrl}</p>
                )} */}
              </div>

              <MdEditor
                value={form.content || ""}
                style={{ height: "200px" }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={({ text }) => {
                  const htmlContent = mdParser.render(text);
                  setForm({
                    ...form,
                    content: htmlContent,
                  })
                }
                }
              />
              {errors.content && (
                <p className="text-red-500 text-sm">{errors.content}</p>
              )}

              {/* Existing FAQs */}
              {faqs?.length > 0 && (
                <div>
                  <h1 className="text-md font-semibold mb-2">** All Faq's **</h1>
                  {faqs.map((faq: any, i: number) => (
                    <div
                      className="border border-gray-200 rounded-lg p-4 mb-3"
                      key={i}
                    >
                      <div className="flex items-center justify-end gap-2">
                        <div>
                          <Trash2 onClick={() => { handleFaqDelete(faq.id); }} className="w-4 h-4 mr-2 text-red-500 cursor-pointer" />
                        </div>
                        <div>
                          <PencilLine onClick={() => { handleFaqEditClick(faq) }} className="w-4 h-4 mr-2 text-blue-500 cursor-pointer" />
                        </div>
                      </div>
                      <h1 className="font-bold">{faq.question}</h1>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={handleUpdatePost}
                  disabled={isSubmitting}
                  className="lg:col-span-2 w-full px-4 py-2 text-white rounded bg-[#2597f4]"
                >
                  {isSubmitting ? "Updating..." : "Update Post"}
                </button>

                <button
                  className={`lg:col-span-1 w-full px-4 py-2 text-white rounded ${isBlogValid
                    ? "bg-[#2597f4] cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  disabled={!isBlogValid}
                  onClick={() => {
                    setFaq({
                      question: "",
                      answer: "",
                      blogId: form.id,
                    });
                    setShowFaqModal(true);
                  }}
                >
                  Add Faq's
                </button>
              </div>
            </div>

            {/* Confirm Delete Modal */}
            <ConfirmDeleteModal
              className="!bg-[#00000005]"
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              onConfirm={handleDelete}
            />
          </div>
        </div>
      )}

      {/* Edit faq model */}
      <div className="p-4">
        {faqUpdateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-2xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Update FAQ</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="question"
                  value={faqForm.question}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Question"
                  required
                />
                {errors.question && (
                  <p className="text-red-500 text-sm">{errors.question}</p>
                )}

                <textarea
                  name="answer"
                  value={faqForm.answer}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Answer"
                />
                {errors.answer && (
                  <p className="text-red-500 text-sm">{errors.answer}</p>
                )}

                <button
                  onClick={handleFaqUpdate}
                  className="bg-[#2597f4] text-white px-4 py-2 rounded "
                >
                  Update FAQ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogAdmin;



