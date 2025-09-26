import { pgTable, text, serial, integer, boolean, timestamp, varchar, jsonb, index, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribedAt: timestamp("subscribed_at").defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  isDeleted: boolean('is_deleted').default(false),

});

export const jobApplications = pgTable("job_applications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  city: text("city"),
  position: text("position").notNull(),
  coverLetter: text("cover_letter"),
  resumeUrl: text("resume_url"),
  appliedAt: timestamp("applied_at").defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  isDeleted: boolean('is_deleted').default(false),
});


export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: varchar("phone", { length: 20 }),
  company: text("company"),
  projectType: text("project_type"),
  budget: text("budget"),
  details: text("details"),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  isDeleted: boolean('is_deleted').default(false),

});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url"),
  slug: text("slug").notNull(),
  publishedAt: timestamp("published_at").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  isDeleted: boolean('is_deleted').default(false),
});

// CMS Users for admin access
export const cmsUsers = pgTable("cms_users", {
  id: serial("id").primaryKey(),
  username: text("username").unique().notNull(),
  email: text("email").unique().notNull(),
  passwordHash: text("password_hash").notNull(),
  role: text("role").notNull().default("editor"), // "admin", "editor"
  isActive: boolean("is_active").default(true).notNull(),
  lastLogin: timestamp("last_login"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

// CMS Sessions
export const cmsSessions = pgTable("cms_sessions", {
  id: text("id").primaryKey(),
  userId: integer("user_id").references(() => cmsUsers.id).notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const jobListings = pgTable("job_listings", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  department: text("department").notNull(),
  experienceMin: integer("experience_min").notNull(),
  experienceMax: integer("experience_max").notNull(),
  vacancies: integer("vacancies").notNull(),
  workType: text("work_type").notNull(),
  icon: text("icon"),
  orderBy: integer("order_by").default(0),
  description: text("description").notNull(),
  requirements: text("requirements").notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  postedAt: timestamp("posted_at").defaultNow().notNull(),
});

export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  blogSlug: text("blog_slug").notNull(), 
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isDeleted: boolean('is_deleted').default(false),
});


export const insertFaqSchema = createInsertSchema(faqs).pick({
  blogSlug:true,
  question: true,
  answer: true,
}).extend({
  blogSlug: z.string().min(1, "Blog slug is required"),
  question: z.string().min(1, "Question is required"),
  answer: z.string().min(1, "Answer is required"),
});



export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).pick({
  email: true,
});

export const insertJobApplicationSchema = createInsertSchema(jobApplications).pick({
  name: true,
  email: true,
  phone: true,
  city: true,
  position: true,
  coverLetter: true,
  resumeUrl: true,
}).extend({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone Number is required"),
  city: z.string().min(1, "City is required"),
  position: z.string().min(1, "Position is required"),
  resumeUrl: z.string().min(1, "Resume is required"),

});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  phone: true,
  company: true,
  projectType: true,
  budget: true,
  details: true,
}).extend({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone Number is required"),
  company: z.string(),
  projectType: z.string().min(1, "Category is required"),
  budget: z.string().min(1, "Budget is required"),
  details: z.string().min(1, "Details is required"),
});


export const contactSubmissionWithRecaptchaSchema = insertContactSubmissionSchema.extend({
  recaptchaToken: z.string().min(1, "reCAPTCHA verification required"),
});

export const insertJobApplicationWithRecaptchaSchema = insertJobApplicationSchema.extend({
  recaptchaToken: z.string().min(1, "reCAPTCHA verification required"),
});


export const insertBlogPostSchema = createInsertSchema(blogPosts).pick({
  title: true,
  excerpt: true,
  content: true,
  category: true,
  imageUrl: true,
  slug: true,
  publishedAt:true
}).extend({
  title: z.string().min(1, "Title is required"),
  excerpt: z.string().min(1,"Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  category: z.string().min(1,"Category is required"),
   imageUrl: z.string().min(1, "Image is required"),
  slug: z.string().min(1, "Slug is required"),
    publishedAt: z.preprocess((val) => new Date(val as string), z.date()),

})

export const insertCmsUserSchema = createInsertSchema(cmsUsers).pick({
  username: true,
  email: true,
  passwordHash: true,
  role: true,
  isActive: true
});

export const cmsLoginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(6, "New password must be at least 6 characters"),
  confirmPassword: z.string().min(1, "Please confirm your new password"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const insertJobListingSchema = createInsertSchema(jobListings).pick({
  title: true,
  department: true,
  experienceMin: true,
  experienceMax: true,
  vacancies: true,
  workType: true,
  icon: true,
  orderBy: true,
  description: true,
  requirements: true,
  isActive: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertNewsletterSubscription = z.infer<typeof insertNewsletterSubscriptionSchema>;
export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;

export type InsertJobApplication = z.infer<typeof insertJobApplicationSchema>;
export type JobApplication = typeof jobApplications.$inferSelect;

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

export type InsertFaq = z.infer<typeof insertFaqSchema>;
export type Faqs = typeof faqs.$inferSelect;

export type InsertJobListing = z.infer<typeof insertJobListingSchema>;
export type JobListing = typeof jobListings.$inferSelect;

export type InsertCmsUser = z.infer<typeof insertCmsUserSchema>;
export type CmsUser = typeof cmsUsers.$inferSelect;
export type CmsSession = typeof cmsSessions.$inferSelect;
export type CmsLogin = z.infer<typeof cmsLoginSchema>;

// CRM Tables
export const clients = pgTable("clients", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique(),
  company: varchar("company", { length: 255 }),
  phone: varchar("phone", { length: 50 }),
  address: text("address"),
  status: varchar("status", { length: 50 }).default("active"), // active, inactive, prospect
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  clientId: integer("client_id").references(() => clients.id),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  status: varchar("status", { length: 50 }).default("active"), // active, completed, on-hold, cancelled
  budget: decimal("budget", { precision: 10, scale: 2 }),
  startDate: timestamp("start_date"),
  endDate: timestamp("end_date"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }),
  company: varchar("company", { length: 255 }),
  phone: varchar("phone", { length: 50 }),
  source: varchar("source", { length: 100 }), // contactus, referral, website, etc.
  tags: text("tags").array().default([]),
  status: varchar("status", { length: 50 }).default("new"), // new, contacted, qualified, converted, lost
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const resumes = pgTable("resumes", {
  id: serial("id").primaryKey(),
  candidateName: varchar("candidate_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }),
  phone: varchar("phone", { length: 50 }),
  skills: text("skills").array().default([]),
  experience: text("experience"),
  education: text("education"),
  resumeUrl: text("resume_url"),
  tags: text("tags").array().default([]),
  status: varchar("status", { length: 50 }).default("new"), // new, reviewed, shortlisted, rejected
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const activityLogs = pgTable("activity_logs", {
  id: serial("id").primaryKey(),
  entityType: varchar("entity_type", { length: 50 }).notNull(), // client, project, lead, resume, job
  entityId: integer("entity_id").notNull(),
  action: varchar("action", { length: 100 }).notNull(), // created, updated, deleted, contacted, etc.
  description: text("description"),
  userId: integer("user_id"), // CMS user who performed the action
  createdAt: timestamp("created_at").defaultNow(),
  // updatedAt: timestamp("updated_at").defaultNow(),
});

export const notifications = pgTable("notifications", {
  id: serial("id").primaryKey(),
  type: varchar("type", { length: 50 }).notNull(), // reminder, invoice_due, follow_up, etc.
  title: varchar("title", { length: 255 }).notNull(),
  message: text("message"),
  entityType: varchar("entity_type", { length: 50 }), // client, project, lead
  entityId: integer("entity_id"),
  isRead: boolean("is_read").default(false),
  dueDate: timestamp("due_date"),
  createdAt: timestamp("created_at").defaultNow(),
});

// CRM Insert Schemas
export const insertClientSchema = createInsertSchema(clients).pick({
  name: true,
  email: true,
  company: true,
  phone: true,
  address: true,
  status: true,
});

export const insertProjectSchema = createInsertSchema(projects).pick({
  clientId: true,
  name: true,
  description: true,
  status: true,
  budget: true,
  startDate: true,
  endDate: true,
});

export const insertLeadSchema = createInsertSchema(leads).pick({
  name: true,
  email: true,
  company: true,
  phone: true,
  source: true,
  tags: true,
  status: true,
  notes: true,
});

export const insertResumeSchema = createInsertSchema(resumes).pick({
  candidateName: true,
  email: true,
  phone: true,
  skills: true,
  experience: true,
  education: true,
  resumeUrl: true,
  tags: true,
  status: true,
  notes: true,
});

export const insertActivityLogSchema = createInsertSchema(activityLogs).pick({
  entityType: true,
  entityId: true,
  action: true,
  description: true,
  userId: true,
});

export const insertNotificationSchema = createInsertSchema(notifications).pick({
  type: true,
  title: true,
  message: true,
  entityType: true,
  entityId: true,
  dueDate: true,
});

// CRM Types
export type InsertClient = z.infer<typeof insertClientSchema>;
export type Client = typeof clients.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;

export type InsertResume = z.infer<typeof insertResumeSchema>;
export type Resume = typeof resumes.$inferSelect;

export type InsertActivityLog = z.infer<typeof insertActivityLogSchema>;
export type ActivityLog = typeof activityLogs.$inferSelect;

export type InsertNotification = z.infer<typeof insertNotificationSchema>;
export type Notification = typeof notifications.$inferSelect;