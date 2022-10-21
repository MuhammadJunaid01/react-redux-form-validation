import React, { useEffect, useState } from "react";
import "../../styles/sign_up.css";
import { useNavigate, useLocation } from "react-router-dom";
import SignUpWellcome from "../../assets/images/loginAnimationFile.gif";
import SignUpFromimg from "../../assets/images/loginLeafAnimi.gif";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signUpvalidationSchema } from "../../utils";
import { useSignUpMutation } from "../../redux/api/auth";
import { Grid } from "@mui/material";
const SignUp = () => {
  const navigate = useNavigate();
  /* A hook that is used to make a mutation request. */
  const [signUp, { data, error, isSuccess, isLoading }] = useSignUpMutation();
  const [isSignUp, setIsSignUp] = useState(true);
  /* Checking if the data is available, if it is available, it will navigate to the home page. */
  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);
  /**
   * When the user clicks the submit button, the values from the form are passed to the signUp
   * function.
   */
  const handleSubmit = (values) => {
    console.log(values);
    signUp(values);
  };
  /* This is a simple error handling. If there is an error, it will return the error message. */
  if (error) {
    return <h1>Something was wrong! </h1>;
  }
  console.log("ENV", process.env.REACT_APP_API_KEY);
  return (
    <div className="sign_up_container">
      <div className="sign_up_content">
        <Grid container spacing={2}>
          <Grid xs={12} md={6} item>
            <div className="sign_up_well_come_logo">
              <img src={SignUpWellcome} alt="SignUpWellcomeBanner" />
            </div>
          </Grid>
          <Grid xs={12} md={4} item>
            <div className="sign_up_from">
              <div className="auth_logo">
                <img src={SignUpFromimg} alt="SignUpFromimg" />
              </div>
              <div className="llll">
                <h4 style={{ textAlign: "center", margin: "17px 0px" }}>
                  Sign Up
                </h4>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                  }}
                  validationSchema={signUpvalidationSchema}
                  onSubmit={(values) => {
                    // same shape as initial values
                    handleSubmit(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <p style={{ margin: "8px " }}>Name:</p>
                      <Field
                        style={
                          errors.name &&
                          touched.name && { border: "1px solid #FED8B1" }
                        }
                        className="input"
                        name="name"
                      />
                      <ErrorMessage
                        component="div"
                        name="name"
                        className="error"
                      />

                      <p style={{ margin: "8px " }}>Email:</p>
                      <Field
                        style={
                          errors.email &&
                          touched.email && { border: "1px solid #FED8B1" }
                        }
                        className="input"
                        name="email"
                        type="email"
                      />
                      <ErrorMessage
                        component="div"
                        name="email"
                        className="error"
                      />
                      <p style={{ margin: "8px " }}>Password:</p>
                      <Field
                        style={
                          errors.password &&
                          touched.password && { border: "1px solid #FED8B1" }
                        }
                        className="input"
                        name="password"
                      />
                      <ErrorMessage
                        component="div"
                        name="password"
                        className="error"
                      />

                      <button className="form_submit" type="submit">
                        Submit
                      </button>

                      <p
                        style={{
                          textAlign: "center",
                          textAlign: "center",
                          marginTop: "9px",
                        }}
                      >
                        Already have an account?
                        <span
                          onClick={() => navigate("/SignIn")}
                          style={{ color: "#1890ff", cursor: "pointer" }}
                        >
                          Sign in
                        </span>
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Grid>

          <Grid xs={12} md={2} item></Grid>
        </Grid>
      </div>
    </div>
  );
};
export default SignUp;
