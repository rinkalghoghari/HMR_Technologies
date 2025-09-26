import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Please enter a valid email address").required("Email is required"),
  phone: yup.string().required("phone is required"),
  projectType: yup.string().required("Project type is required"),
  budget: yup.string().required("budget is required"),
  company:yup.string(),
  details:yup.string()
});