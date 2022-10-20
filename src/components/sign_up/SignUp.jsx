import React, { useEffect, useState } from "react";
import "../../styles/sign_up.css";
import { useNavigate, useLocation } from "react-router-dom";
import SignUpWellcome from "../../assets/images/loginAnimationFile.gif";
import SignUpFromimg from "../../assets/images/loginLeafAnimi.gif";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../utils";
import { useSignUpMutation } from "../../redux/api/auth";

const SignUp = ({ isSigIn }) => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);
  const [signUp, { data, error, isSuccess, isLoading }] = useSignUpMutation();
  const handleSubmit = (values) => {
    console.log(values);
    signUp(values);
  };
  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);
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
              validationSchema={validationSchema}
              onSubmit={(values) => {
                // same shape as initial values
                handleSubmit(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  {isSignUp && (
                    <>
                      {isSigIn ? null : (
                        <>
                          <p style={{ margin: "8px " }}>Name:</p>
                          <Field
                            style={
                              errors.name &&
                              touched.name && { border: "1px solid #FED8B1" }
                            }
                            className="input"
                            name="name"
                          />
                          {errors.name ? (
                            <div style={{ marginLeft: "10px" }}>
                              {errors.name}
                            </div>
                          ) : null}
                        </>
                      )}
                    </>
                  )}
                  <p style={{ margin: "8px " }}>Email:</p>
                  <Field
                    style={errors.email && { border: "1px solid #FED8B1" }}
                    className="input"
                    name="email"
                    type="email"
                  />
                  {errors.email ? (
                    <div style={{ marginLeft: "10px" }}>{errors.email}</div>
                  ) : null}
                  <p style={{ margin: "8px " }}>Password:</p>
                  <Field
                    style={errors.password && { border: "1px solid #FED8B1" }}
                    className="input"
                    name="password"
                  />
                  {errors.password ? (
                    <div style={{ marginLeft: "10px" }}>{errors.password}</div>
                  ) : null}

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
                      onClick={() => setIsSignUp(false)}
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
      </div>
    </div>
  );
};

export default SignUp;
