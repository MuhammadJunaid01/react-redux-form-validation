import * as Yup from "yup";
/* A validation schema for the form. */
export const validationSchema = Yup.object().shape({
  name: Yup.string().min(6, "Too Short!").required("Name is Required !"),
  email: Yup.string().email("Invalid email").required("Email is Required !"),
  password: Yup.string()
    .min(8, "minimus password is 8 character")
    .max(30, "max password is 30 character")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password is required !"),
});
