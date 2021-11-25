import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { CircularProgress } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { showErrorToast, showSuccessToast } from "../../Utils/tools";
import { promotionsCollection } from "../../../firebase";

const Enroll = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email")
        .required("The email is reqiured"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      submitForm(values);
    },
  });

  const submitForm = async (values) => {
    try {
      const isOnTheList = await promotionsCollection
        .where("email", "==", values.email)
        .get();
      if (isOnTheList.docs.length >= 1) {
        showErrorToast("soory you are already on list");
        setLoading(false);
        return false;
      }
      await promotionsCollection.add({ email: values.email });
      formik.resetForm();
      setLoading(false);
      showSuccessToast("Congratulations!!!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fade>
      <div className="enroll_wrapper">
        <form onSubmit={formik.handleSubmit}>
          <div className="enroll_title">Enter Your Email</div>
          <div className="enroll_input">
            <input
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error_label">{formik.errors.email}</div>
            ) : null}
            {loading ? (
              <CircularProgress color="secondary" className="progress" />
            ) : (
              <button type="submit">Enroll</button>
            )}
            <div className="enroll_discl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </div>
          </div>
        </form>
      </div>
    </Fade>
  );
};

export default Enroll;
