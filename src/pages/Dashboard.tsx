import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Trash2,
  ArrowLeft,
  Users,
  Briefcase,
  UserCheck,
  FileText,
  Mail,
  Plus,
  Activity,
  Bell,
  TrendingUp,
  DollarSign,
  Calendar,
  AlertCircle,
  LogOut,
  Settings,
  BarChart3,
  MessageSquare,
  BookOpen,
  Search,
  Eye,
  EyeOff,
  ScrollText,
} from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/supabase/supabaseClient";
import ConfirmDeleteModal from "../components/ui/delete-confirm-box"
import BlogAdmin from "./BlogAdmin";

// Career Management Component
function CareerManagement() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState<number | null>(null);

  const handleDeleteJobClick = (jobId: number) => {
    setJobToDelete(jobId);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (jobToDelete !== null) {
      deleteJobMutation.mutate(jobToDelete);
    }
  };

  const { data: jobsData } = useQuery({
    queryKey: ["job-listings"],
    queryFn: async () => {
      const { data: res, error } = await supabase.functions.invoke("job-listings", {
        method: "GET",
      });
      if (error) {
        throw new Error("Failed to fetch job listings");
      }
      const data = await res
      return data
    },
  });
  const jobListings = jobsData?.jobs ?? [];


  // Fetch job applications
  const { data: applications } = useQuery<JobApplication[]>({
    queryKey: ["applications"],
    queryFn: async () => {
      const { data: res, error } = await supabase.functions.invoke("careers", {
        method: "GET",
      });
      if (error) {
        throw new Error("Failed to fetch applications");
      }
      const data = await res
      return data?.applications || []
    },
  });

  const createJobMutation = useMutation({
    mutationFn: async (jobData: any) => {
      const { data: response, error } = await supabase.functions.invoke("job-listings", {
        body: jobData,
      });

      if (error) {
        throw new Error(`Failed to create job listing: ${error.message}`);
      }
      return await response
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Job listing created successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["job-listings"] });
      resetForm();
      setShowCreateForm(false);
    },
    onError: (error: any) => {
      console.error("Mutation error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to create job listing",
        variant: "destructive",
      });
    },
  });

  const updateJobMutation = useMutation({
    mutationFn: async ({ id, ...jobData }: any) => {

      const { data: response, error } = await supabase.functions.invoke(`job-listings?id=${id}`, {
        method: "PUT",
        body: { ...jobData },
      });

      if (error) {
        throw new Error(`Failed to update job listing: ${error.message}`);
      }
      return await response
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Job listing updated successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["job-listings"] });
      resetForm();
      setShowCreateForm(false);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update job listing",
        variant: "destructive",
      });
    },
  });

  const deleteJobMutation = useMutation({
    mutationFn: async (jobId: number) => {
      const { data: response, error } = await supabase.functions.invoke(`job-listings?id=${jobId}`, {
        method: "DELETE",
        body: { id: jobId },
      });
      if (error) {
        throw new Error("Failed to delete job");
      }
      return response
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Job listing deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["job-listings"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete job listing",
        variant: "destructive",
      });
    },
  });

  const [formData, setFormData] = useState({
    title: "",
    experienceMin: "",
    experienceMax: "",
    vacancies: "",
    workType: "Full Time",
    orderBy: "",
    isActive: true,
  });

  const [editingJob, setEditingJob] = useState<any>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditJob = (job: any) => {
    const formElement = document.getElementById("jobform");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }

    setEditingJob(job);
    setFormData({
      title: job.title,
      experienceMin: job.experienceMin.toString(),
      experienceMax: job.experienceMax.toString(),
      vacancies: job.vacancies.toString(),
      workType: job.workType,
      orderBy: job.orderBy?.toString() || "0",
      isActive: job.isActive,
    });
    setShowCreateForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      experienceMin: "",
      experienceMax: "",
      vacancies: "",
      workType: "Full Time",
      orderBy: "",
      isActive: true,
    });
    setEditingJob(null);
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.experienceMin || !formData.vacancies) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const jobData = {
      title: formData.title,
      department: "Engineering",
      experienceMin: parseInt(formData.experienceMin),
      experienceMax:
        parseInt(formData.experienceMax) || parseInt(formData.experienceMin),
      vacancies: parseInt(formData.vacancies),
      workType: formData.workType,
      icon: "💼",
      orderBy: parseInt(formData.orderBy) || 0,
      description: `Join our team as a ${formData.title}`,
      requirements: "Strong technical skills and passion for innovation",
      isActive: formData.isActive,
    };

    if (editingJob) {
      // Update existing job
      updateJobMutation.mutate({ id: editingJob.id, ...jobData });
    } else {
      // Create new job
      createJobMutation.mutate(jobData);
    }
  };

  const handleDelete = (id: number) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleDeleteJobApplications = async () => {
    if (!selectedId) return;

    try {
      const { data: response, error } = await supabase.functions.invoke(`careers?id=${selectedId}`, {
        method: "DELETE",
        body: JSON.stringify({ id: selectedId }),
      });
      const data = await response
      if (error) {
        throw new Error(data.message || "Failed to delete job applications");
      }
      toast({
        title: "Deleted",
        description: "job appliactions detail deleted successfully",
      });
      queryClient.invalidateQueries(
        {
          queryKey: ["applications"]
        }
      );
      setShowModal(false);
      setSelectedId(null);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Career Management</h3>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowPreview(true)}>
            <Search className="w-4 h-4 mr-2" />
            Preview Jobs
          </Button>
          <Button
            onClick={() => {
              resetForm();
              setShowCreateForm(true);
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Job
          </Button>
        </div>
      </div>

      {/* Create Job Form */}
      {showCreateForm && (
        <Card id="jobform">
          <CardHeader>
            <CardTitle>
              {editingJob ? "Edit Job Listing" : "Create New Job Listing"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Enter job *</Label>
              <Input
                id="title"
                placeholder="Enter job"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="experienceMin">
                  Enter experience (Min Years) *
                </Label>
                <Input
                  id="experienceMin"
                  type="number"
                  placeholder="Enter experience"
                  value={formData.experienceMin}
                  onChange={(e) =>
                    handleInputChange("experienceMin", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor="experienceMax">
                  Enter experience (Max Years)
                </Label>
                <Input
                  id="experienceMax"
                  type="number"
                  placeholder="Enter experience"
                  value={formData.experienceMax}
                  onChange={(e) =>
                    handleInputChange("experienceMax", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="vacancies">Enter vacancies *</Label>
                <Input
                  id="vacancies"
                  type="number"
                  placeholder="Enter vacancies"
                  value={formData.vacancies}
                  onChange={(e) =>
                    handleInputChange("vacancies", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor="workType">Work Type</Label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.workType}
                  onChange={(e) =>
                    handleInputChange("workType", e.target.value)
                  }
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="orderBy">Enter orderBy</Label>
              <Input
                id="orderBy"
                type="number"
                placeholder="Enter orderBy"
                value={formData.orderBy}
                onChange={(e) => handleInputChange("orderBy", e.target.value)}
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                onClick={handleSubmit}
                disabled={
                  createJobMutation.isPending || updateJobMutation.isPending
                }
                className="bg-blue-900 hover:bg-blue-800"
              >
                {createJobMutation.isPending || updateJobMutation.isPending
                  ? editingJob
                    ? "Updating..."
                    : "Creating..."
                  : editingJob
                    ? "Update"
                    : "Submit"}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  resetForm();
                  setShowCreateForm(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Job Applications */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Job Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {(applications || []).map((application: any) => (
              <div key={application.id} className="border rounded-lg p-4">

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{application.name}</h3>
                    <p className="text-sm text-gray-600">{application.email}</p>
                  </div>
                  <div className="mb-2 flex justify-end">
                    <Badge variant="outline" className="mr-4">{application.position}</Badge>
                    <Trash2 onClick={() => handleDelete(application.id)} className="w-4 h-4 mr-2 text-red-500 cursor-pointer" />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {application.coverLetter}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {application.city}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {application.mobile}
                </p>

                {application.resumeUrl && (
                  <a
                    target="_blank"
                    href={`${application.resumeUrl}`}
                    className="text-sm text-blue-600 hover:underline mt-1 block"
                  >
                    View Resume
                  </a>
                )}
                <p className="text-xs text-gray-500 mt-2">
                  Applied: {new Date(application.createdAt).toLocaleString()}
                </p>
              </div>
            ))}


            {!(applications || []).length && (
              <div className="text-center text-gray-500 py-8">
                No job applications yet
              </div>
            )}
          </div>
          <ConfirmDeleteModal
            className="!bg-[#00000005]"
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onConfirm={handleDeleteJobApplications}
          />
        </CardContent>
      </Card>

      {/* Job Listings Management */}
      <Card>
        <CardHeader>
          <CardTitle>Manage Job Listings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {jobListings?.map((job: any) => (
              <div
                key={job.id}
                className="flex justify-between items-center p-4 border rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{job.title}</h3>
                  <p className="text-sm text-gray-600">
                    {job.experienceMin}-{job.experienceMax} years •{" "}
                    {job.vacancies} positions • {job.workType}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={job.isActive ? "default" : "secondary"}>
                    {job.isActive ? "Active" : "Inactive"}
                  </Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditJob(job)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteJobClick(job.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    disabled={deleteJobMutation.isPending}
                  >
                    {deleteJobMutation.isPending ? "..." : "Delete"}
                  </Button>
                </div>
              </div>
            ))}
            {!jobListings?.length && (
              <div className="text-center text-gray-500 py-8">
                No job listings yet. Create your first job listing above.
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Job Listing"
        description="Are you sure you want to delete this job listing? This action cannot be undone."
      />

    </div>
  );
}

interface ActivityLogItem {
  id: number;
  entityType: string;
  action: string;
  description: string;
  createdAt: string;
}

interface NotificationItem {
  id: number;
  type: string;
  title: string;
  message: string;
  isRead: boolean;
  dueDate?: string;
  createdAt: string;
}


interface JobApplication {
  id: number;
  name: string;
  email: string;
  position: string;
  coverLetter: string;
  resumeUrl?: string;
  appliedAt: string;
}

export default function Dashboard() {
  usePageTitle(
    "Internal Dashboard",
    "Unified management system for HMR Technologies",
  );
  const [activeTab, setActiveTab] = useState("overview");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [expandedDetails, setExpandedDetails] = useState<{ [key: number]: boolean }>({});

  const toggleReadMore = (id: number) => {
    setExpandedDetails((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Check authentication on component mount
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
    };

    checkAuth();

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // Fetch dashboard statistics

  const { data: stats = [] } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const { data: res, error } = await supabase.functions.invoke("stats", {
        method: "GET",
      });
      if (error) {
        throw new Error("Failed to fetch stats");
      }
      const data = await res
      return data
    },
  });

  // Fetch recent activity logs
  const { data: activityLogs } = useQuery<ActivityLogItem[]>({
    queryKey: ["/api/crm/activity-logs"],
    enabled: isAuthenticated,
  });

  // Fetch notifications
  const { data: notifications } = useQuery<NotificationItem[]>({
    queryKey: ["/api/crm/notifications"],
    enabled: isAuthenticated,
  });

  // Fetch contact submissions
  const { data: contacts = [] } = useQuery({
    queryKey: ["contact"],
    queryFn: async () => {
      const { data: res, error } = await supabase.functions.invoke("leads", {
        method: "GET",
      });
      if (error) {
        throw new Error("Failed to fetch contact");
      }
      const data = await res;
      return data?.leads || []
    },
  });

  // Fetch newsletter subscriptions
  const { data: subscriptions = [] } = useQuery({
    queryKey: ["subscriptions"],
    queryFn: async () => {
      const { data: res, error } = await supabase.functions.invoke("newsletters", {
        method: "GET",
      });
      if (error) {
        throw new Error("Failed to fetch subscriptions");
      }
      const data = await res;
      return data?.subscriptions || []
    },
  });

  const unreadNotifications =
    notifications?.filter((n) => !n.isRead).length || 0;

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error('Logout error:', error);
        toast({
          title: "Logout Failed",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });

      navigate("/login");
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        title: "Logout Failed",
        description: "An unexpected error occurred during logout.",
        variant: "destructive",
      });
    }
  };

  const handleMainPage = () => {
    navigate("/");
  };

  // handle Delete action
  const handleDelete = (id: number) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleContactDetailDelete = async () => {
    if (!selectedId) return;

    try {
      const { data: response, error } = await supabase.functions.invoke(`leads?id=${selectedId}`,
        {
          method: "DELETE",
        }
      );
      const data = await response
      if (error) {
        throw new Error(data.message || "Failed to delete contact detail");
      }
      toast({
        title: "Deleted",
        description: "Contact detail deleted successfully",
      });

      queryClient.invalidateQueries(
        {
          queryKey: ["contact"]
        }
      );
      setShowModal(false);
      setSelectedId(null);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
    }
  };

  const handleDeleteNewsLetterSubscriptions = async () => {
    if (!selectedId) return;

    try {
      const { data: response, error } = await supabase.functions.invoke(`newsletters?id=${selectedId}`,
        {
          method: "DELETE",
        }
      );
      const data = await response
      if (error) {
        throw new Error(data.message || "Failed to delete newsletter subscription applications");
      }
      toast({
        title: "Deleted",
        description: "NewsLetter Subscriptions detail deleted successfully",
      });
      queryClient.invalidateQueries(
        {
          queryKey: ["subscriptions"]
        }
      );
      setShowModal(false);
      setSelectedId(null);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-white border-r border-gray-200 z-10">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">HMR Dashboard</h1>
          </div>

          <nav className="space-y-2">
            <Button
              variant={activeTab === "overview" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("overview")}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Overview
            </Button>

            <Button
              variant={activeTab === "crm" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("crm")}
            >
              <Users className="w-4 h-4 mr-2" />
              CRM Management
            </Button>

            <Button
              variant={activeTab === "content" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("content")}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Content Management
            </Button>

            <Button
              variant={activeTab === "leads" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("leads")}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Leads & Contact
            </Button>

            <Button
              variant={activeTab === "careers" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("careers")}
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Career Management
            </Button>

            <Button
              variant={activeTab === "marketing" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("marketing")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Marketing
            </Button>

            <Button
              variant={activeTab === "blog" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("blog")}
            >
              <ScrollText className="w-4 h-4 mr-2" />
              Blog
            </Button>

            <Button
              variant={activeTab === "settings" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("settings")}
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>

            <div className="pt-4 mt-4 border-t border-gray-200">
              <Button
                variant="ghost"
                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>

            <div className="pt-4 mt-4 border-t border-gray-200">
              <Button
                variant="ghost"
                className="w-full justify-start text-black-600 hover:text-black-700 hover:!bg-black-50"
                onClick={handleMainPage}
              >
                <ArrowLeft />
                Back
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {activeTab === "overview" && "Dashboard Overview"}
              {activeTab === "crm" && "CRM Management"}
              {activeTab === "content" && "Content Management"}
              {activeTab === "leads" && "Leads & Contact"}
              {activeTab === "careers" && "Career Management"}
              {activeTab === "marketing" && "Email Marketing"}
              {activeTab === "settings" && "Settings"}
              {activeTab === "blog" && "Blog"}

            </h2>
            <p className="text-gray-600 mt-1">
              {activeTab === "overview" &&
                "Monitor your business metrics and recent activity"}
              {activeTab === "crm" &&
                "Manage clients, projects, and business relationships"}
              {activeTab === "content" &&
                "Create and manage blog posts and website content"}
              {activeTab === "leads" &&
                "View and manage contact submissions and leads"}
              {activeTab === "blog" &&
                "View and manage blog"}
              {activeTab === "careers" &&
                "Manage job listings and track applications"}
              {activeTab === "marketing" &&
                "Monitor newsletter subscriptions and email campaigns"}
              {activeTab === "settings" && "Change Password"}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Notifications */}
            <Button variant="outline" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              {unreadNotifications > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs">
                  {unreadNotifications}
                </Badge>
              )}
            </Button>

            {/* Quick Add Buttons */}
            <div className="flex gap-2">
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Quick Add
              </Button>
            </div>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Active Clients
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      {stats?.activeClients || 0}
                    </div>
                    <Users className="w-5 h-5 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Active Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      {stats?.activeProjects || 0}
                    </div>
                    <Briefcase className="w-5 h-5 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    New Leads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      {stats?.leads || 0}
                    </div>
                    <TrendingUp className="w-5 h-5 text-orange-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Job Applications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      {stats?.jobApplications || 0}
                    </div>
                    <FileText className="w-5 h-5 text-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Contact Submissions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      {stats?.leads || 0}
                    </div>
                    <MessageSquare className="w-5 h-5 text-cyan-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Newsletter Subscribers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      {stats?.newsletters || 0}
                    </div>
                    <Mail className="w-5 h-5 text-pink-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Blog Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      {stats?.blogs || 0}
                    </div>
                    <BookOpen className="w-5 h-5 text-indigo-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Job Listings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      {stats?.jobListings || 0}
                    </div>
                    <Briefcase className="w-5 h-5 text-emerald-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Revenue vs Pending */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Revenue vs. Pending
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-600">Total Revenue</div>
                    <div className="text-2xl font-bold text-green-600">
                      $
                      {stats?.revenueVsPending?.revenue?.toLocaleString() ||
                        "0"}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Pending Revenue</div>
                    <div className="text-2xl font-bold text-orange-600">
                      $
                      {stats?.revenueVsPending?.pending?.toLocaleString() ||
                        "0"}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity and Notifications */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-64">
                    <div className="space-y-3">
                      {activityLogs?.map((log) => (
                        <div
                          key={log.id}
                          className="flex items-start gap-3 p-3 rounded-lg bg-gray-50"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-gray-900">
                              {log.description}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {new Date(log.createdAt).toLocaleString()}
                            </div>
                          </div>
                        </div>
                      ))}
                      {!activityLogs?.length && (
                        <div className="text-center text-gray-500 py-8">
                          No recent activity
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Smart Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Smart Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-64">
                    <div className="space-y-3">
                      {notifications?.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-3 rounded-lg border-l-4 ${notification.type === "reminder"
                            ? "border-l-blue-500 bg-blue-50"
                            : notification.type === "invoice_due"
                              ? "border-l-red-500 bg-red-50"
                              : "border-l-orange-500 bg-orange-50"
                            }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="font-medium text-sm text-gray-900">
                                {notification.title}
                              </div>
                              <div className="text-xs text-gray-600 mt-1">
                                {notification.message}
                              </div>
                              <div className="text-xs text-gray-500 mt-2">
                                {notification.dueDate && (
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    Due:{" "}
                                    {new Date(
                                      notification.dueDate,
                                    ).toLocaleDateString()}
                                  </span>
                                )}
                              </div>
                            </div>
                            {!notification.isRead && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                            )}
                          </div>
                        </div>
                      ))}
                      {!notifications?.length && (
                        <div className="text-center text-gray-500 py-8">
                          No notifications
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Leads & Contact Tab */}
        {activeTab === "leads" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  {(contacts || []).map((contact: any) => (
                    <div key={contact.id} className="border rounded-lg p-4 space-y-2 bg-white shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{contact.name}</h3>
                          <p className="text-sm text-gray-600">{contact.email}</p>
                          <p className="text-sm text-gray-600">+{contact.phone}</p>
                          <p className="text-sm text-gray-600">{contact.budget}</p>
                        </div>
                        <div className="flex justify-end">
                          <Badge variant="outline" className="mr-4">{contact.projectType}</Badge>
                          <Trash2
                            onClick={() => handleDelete(contact.id)}
                            className="w-4 h-4 mr-2 text-red-500 cursor-pointer"
                          />
                        </div>
                      </div>
                      {/* <p className="text-sm whitespace-pre-line">
  {expandedDetails[contact.id]
    ? contact.details
    : contact.details.slice(0, 200)}

  {contact.details.length > 200 && (
    <button
      onClick={() => toggleReadMore(contact.id)}
      className="ml-2 text-blue-600 underline text-xs"
    >
      {expandedDetails[contact.id] ? "Read less" : "Read more"}
    </button>
  )}
</p> */}
                      <p className="text-sm whitespace-pre-line">
                        {expandedDetails[contact.id]
                          ? contact.details
                          : contact.details.split("\n").slice(0, 5).join("\n")}

                        {contact.details.split("\n").length > 5 && (
                          <button
                            onClick={() => toggleReadMore(contact.id)}
                            className="ml-2 text-blue-600 underline text-xs"
                          >
                            {expandedDetails[contact.id] ? "View less" : "View more"}
                          </button>
                        )}
                      </p>



                      <p className="text-xs text-gray-500">
                        Submitted: {new Date(contact.createdAt).toLocaleString()}
                      </p>
                    </div>
                  ))}
                  {!contacts?.length && (
                    <div className="text-center text-gray-500 py-8">
                      No Contact yet
                    </div>
                  )}
                </div>

                <ConfirmDeleteModal
                  className="!bg-[#00000005]"
                  isOpen={showModal}
                  onClose={() => setShowModal(false)}
                  onConfirm={handleContactDetailDelete}
                />
              </CardContent>

            </Card>
          </div>
        )}

        {/* Career Management Tab */}
        {activeTab === "careers" && <CareerManagement />}

        {/* Career Management Tab */}
        {activeTab === "blog" && <BlogAdmin />}

        {/* Email Marketing Tab */}
        {activeTab === "marketing" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Newsletter Subscriptions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  {subscriptions?.map((subscription: any) => (
                    <div
                      key={subscription.id}
                      className="border rounded-lg p-4"
                    >

                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{subscription.email}</p>
                          <p className="text-xs text-gray-500">
                            Subscribed:{" "}
                            {new Date(
                              subscription.createdAt,
                            ).toLocaleString()}
                          </p>
                        </div>
                        <div className="flex justify-end">
                          <Badge variant="outline" className="mr-4">Active</Badge>
                          <Trash2 onClick={() => handleDelete(subscription.id)} className="w-4 h-4 mr-2 text-red-500 cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  ))}
                  {!subscriptions?.length && (
                    <div className="text-center text-gray-500 py-8">
                      No newsletter subscriptions yet
                    </div>
                  )}
                </div>
                <ConfirmDeleteModal
                  className="!bg-[#00000005]"
                  isOpen={showModal}
                  onClose={() => setShowModal(false)}
                  onConfirm={handleDeleteNewsLetterSubscriptions}
                />
              </CardContent>
            </Card>
          </div>
        )}

        {/*Settings Tab*/}
        {activeTab === "settings" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
              </CardHeader>
              <CardContent>
                <ChangePasswordForm />
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tab Content Placeholders for other tabs */}
        {(activeTab === "crm" || activeTab === "content") && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Feature Coming Soon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  This feature is currently under development.
                </div>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async () => {
    // Validation
    if (!currentPassword) {
      toast({
        title: "Error",
        description: "Current password is required",
        variant: "destructive",
      });
      return;
    }

    if (!newPassword) {
      toast({
        title: "Error",
        description: "New password is required",
        variant: "destructive",
      });
      return;
    }

    if (newPassword.length < 6) {
      toast({
        title: "Error",
        description: "New password must be at least 6 characters",
        variant: "destructive",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("cms_token");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch("/api/cms/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to change password");
      }

      toast({
        title: "Success",
        description: "Password changed successfully!",
      });

      // Clear form
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to change password",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="currentPassword">Current Password</Label>
        <div className="relative">
          <Input
            type={showCurrentPassword ? "text" : "password"}
            id="currentPassword"
            placeholder="Enter current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="pr-10"
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
          >
            {showCurrentPassword ? (
              <EyeOff className="h-4 w-4 text-gray-500" />
            ) : (
              <Eye className="h-4 w-4 text-gray-500" />
            )}
          </Button>
        </div>
      </div>
      <div>
        <Label htmlFor="newPassword">New Password</Label>
        <div className="relative">
          <Input
            type={showNewPassword ? "text" : "password"}
            id="newPassword"
            placeholder="Enter new password (min 6 characters)"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="pr-10"
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? (
              <EyeOff className="h-4 w-4 text-gray-500" />
            ) : (
              <Eye className="h-4 w-4 text-gray-500" />
            )}
          </Button>
        </div>
      </div>
      <div>
        <Label htmlFor="confirmPassword">Confirm New Password</Label>
        <div className="relative">
          <Input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="pr-10"
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-4 w-4 text-gray-500" />
            ) : (
              <Eye className="h-4 w-4 text-gray-500" />
            )}
          </Button>
        </div>
      </div>
      <Button
        onClick={handleChangePassword}
        disabled={loading || !currentPassword || !newPassword || !confirmPassword}
        className="bg-blue-900 hover:bg-blue-800"
      >
        {loading ? "Changing..." : "Change Password"}
      </Button>
    </div>
  );
}
