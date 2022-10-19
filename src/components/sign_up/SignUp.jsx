import React from "react";
import "../../styles/sign_up.css";
import SignUpWellcome from "../../assets/images/loginAnimationFile.gif";
import SignUpFromimg from "../../assets/images/loginLeafAnimi.gif";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.number()
    .integer()
    .positive()
    .required()
    .min(8, "Tooooooooooooo")
    .max(12, "LLLLLLLLLLLLLL"),
});
const SignUp = () => {
  return (
    <div className="sign_up_container">
      <div className="sign_up_content">
        <div className="sign_up_well_come_logo">
          <img src={SignUpWellcome} alt="SignUpWellcomeBanner" />
        </div>

        <div className="sign_up_from">
          <div className="auth_logo">
            <img src={SignUpFromimg} alt="SignUpFromimg" />
          </div>
          <div className="llll">
            <h4 style={{ textAlign: "center", margin: "17px 0px" }}>Sign Up</h4>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field
                    style={
                      errors.name && touched.name && { border: "1px solid red" }
                    }
                    className="input"
                    name="name"
                    placeholder="kmkm"
                  />
                  <ErrorMessage name="name" />
                  <Field className="input" name="email" type="email" />
                  <ErrorMessage name="email" />
                  <Field className="input" name="password" />
                  <ErrorMessage name="password" />

                  <button type="submit">Submit</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
