import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SignUpWellcome from "../../assets/images/loginAnimationFile.gif";
import SignUpFromimg from "../../assets/images/loginLeafAnimi.gif";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signInValidationSchema } from "../../utils";
import { useSignInQuery } from "../../redux/api/auth";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignIn = () => {
  const { data, error } = useSignInQuery();

  console.log(data);
  const navigate = useNavigate();
  const handleSubmit = (value) => {
    // console.log("hello value", value);
    const matched = data?.find((user) => {
      return user.email == value.email && user.password == value.password;
    });
    console.log("matched", matched);
    if (matched) {
      navigate("/");
    } else {
      toast.error("email or password maybe invalid! Please try again.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div>
      <div className="sign_up_container">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

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
                    Sign In
                  </h4>
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                    }}
                    validationSchema={signInValidationSchema}
                    onSubmit={(values) => {
                      // same shape as initial values
                      handleSubmit(values);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
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
                          Don't have an account?
                          <span
                            onClick={() => navigate("/SignUp")}
                            style={{ color: "#1890ff", cursor: "pointer" }}
                          >
                            Sign Up
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
    </div>
  );
};

export default SignIn;
