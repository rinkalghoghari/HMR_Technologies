import * as yup from "yup";

export const careerSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Please enter a valid email address").required("Email is required"),
  position: yup.string().required("Position is required"),
  coverLetter: yup.string(),
  resumeUrl: yup.string(),
  city: yup.string().required("City is required"),
  mobile: yup.string().required("Mobile No. is required"),
});

export type CareerFormValues = yup.InferType<typeof careerSchema>;
