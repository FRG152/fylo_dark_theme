import * as Yup from "yup";
import { useRef } from "react";
import { useFormik } from "formik";
import { useInView } from "framer-motion";
import { scrollAnimation } from "../utils/animation";

const SignIn = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Lógica de envío del formulario
      console.log(values);
    },
  });
  return (
    <section ref={ref} className="container-form" id="SignIn">
      <form style={scrollAnimation(isInView)} onSubmit={formik.handleSubmit}>
        <h1 className="form-title">Get early access today</h1>
        <p className="form-text">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="form-box">
          <div className="input-box">
            <input
              type="text"
              placeholder="email@example.com"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.email && formik.touched.email ? "error" : ""
              }
            />
            {formik.errors.email && formik.touched.email && (
              <div className="error-message">{formik.errors.email}</div>
            )}
          </div>
          <button type="submit" className="">
            Get Started For Free
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
