import * as Yup from "yup";

/* A validation schema for the signup form. */
export const signUpvalidationSchema = Yup.object().shape({
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
/* A validation schema for the sign in form. */
export const signInValidationSchema = Yup.object().shape({
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

export const displayUser = [
  {
    name: "jhon Doe",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    info: "A kiddo who uses Bootstrap and react in web development. Currently playing around with design via Figma",
    email: "jhon@gmail.com",
    profession: "Frontend Developer",
  },
  {
    name: "Eric",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    info: "A kiddo who uses Bootstrap and react in web development. Currently playing around with design via Figma",
    email: "eric@gmail.com",
    profession: "Frontend Developer",
  },
  {
    name: "Charles",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    info: "A kiddo who uses Bootstrap and react in web development. Currently playing around with design via Figma",
    email: "charles@gmail.com",
    profession: "Frontend Developer",
  },
  {
    name: "Beatriz",
    img: "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    info: "A kiddo who uses Bootstrap and react in web development. Currently playing around with design via Figma",
    email: "Beatriz@gmail.com",
    profession: "Frontend Developer",
  },
  {
    name: "Gabriel",
    img: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    info: "A kiddo who uses Bootstrap and react in web development. Currently playing around with design via Figma",
    email: "gabriel@gmail.com",
    profession: "Frontend Developer",
  },
];
