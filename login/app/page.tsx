"use client";
import Image from "next/image"
import React, { useState } from "react";
import {
  Formik,
  FormikErrors
} from "formik";

interface FormValues {
  email: string;
  password: string;
}

export default function Home() {
  const [values, setValues] = useState<FormValues>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <main className="flex justify-between">
      <div className="rect">
        <Image className="logo" src="/exo.svg" alt="logo" height="22" width="64" />
        <div className="image-main">
          <h1>100% Uptime<span><Image src="/smiling-face-with-sunglasses.png" alt="emoji" width="35" height="35" /></span></h1>
          <p>Zero Infrastructure</p>
          <p>Management</p>
        </div>

        <div className="slider-icon">
          <Image src="/slide-icon.png" alt="rounded rectangle icon" width="20" height="6" />
          <Image className="circle" src="/Rectangle-2.png" alt="circle icon" width="6" height="6" />
          <Image className="circle" src="/Rectangle-2.png" alt="circle icon" width="6" height="6" />
        </div>

        <div className="bottom">
          <div className="left">
            <Image src="/Vector.svg" alt="" width="14" height="14" />
            <p>aesthisia.com</p>
          </div>
          <div className="social">
            <svg width="21" height="20" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.125 0H0.875C0.375 0 0 0.375 0 0.875V19.25C0 19.625 0.375 20 0.875 20H19.25C19.75 20 20.125 19.625 20.125 19.125V0.875C20 0.375 19.625 0 19.125 0ZM5.875 17H3V7.5H6V17H5.875ZM4.5 6.25C3.5 6.25 2.75 5.375 2.75 4.5C2.75 3.5 3.5 2.75 4.5 2.75C5.5 2.75 6.25 3.5 6.25 4.5C6.125 5.375 5.375 6.25 4.5 6.25ZM17 17H14V12.375C14 11.25 14 9.875 12.5 9.875C11 9.875 10.75 11.125 10.75 12.375V17.125H7.75V7.5H10.625V8.75C11 8 12 7.25 13.375 7.25C16.375 7.25 16.875 9.25 16.875 11.75V17H17Z"></path></svg>
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10.0022C20.0004 8.09104 19.4532 6.2198 18.4231 4.61003C17.393 3.00026 15.9232 1.71938 14.1877 0.919062C12.4522 0.118741 10.5237 -0.167503 8.63053 0.0942223C6.73739 0.355948 4.9589 1.15468 3.50564 2.39585C2.05237 3.63701 0.985206 5.26863 0.430495 7.0975C-0.124217 8.92636 -0.143239 10.8759 0.37568 12.7152C0.894599 14.5546 1.92973 16.2067 3.35849 17.476C4.78726 18.7453 6.54983 19.5786 8.4375 19.8772V12.8922H5.89875V10.0022H8.4375V7.79843C8.38284 7.28399 8.44199 6.76382 8.61078 6.2748C8.77957 5.78577 9.05386 5.33986 9.4142 4.96866C9.77455 4.59746 10.2121 4.31007 10.6959 4.12684C11.1797 3.94362 11.6979 3.86905 12.2137 3.90843C12.9638 3.91828 13.7121 3.98346 14.4525 4.10343V6.56718H13.1925C12.9779 6.53911 12.7597 6.55967 12.554 6.62733C12.3484 6.69498 12.1607 6.80801 12.0046 6.95804C11.8486 7.10807 11.7283 7.29127 11.6526 7.49408C11.577 7.69689 11.5479 7.91411 11.5675 8.12968V10.0047H14.3412L13.8975 12.8947H11.5625V19.8834C13.9153 19.5112 16.058 18.3114 17.6048 16.4999C19.1516 14.6884 20.001 12.3842 20 10.0022Z"></path></svg>
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.1814 6.06504C15.8442 6.06504 16.3814 5.52778 16.3814 4.86504C16.3814 4.2023 15.8442 3.66504 15.1814 3.66504C14.5187 3.66504 13.9814 4.2023 13.9814 4.86504C13.9814 5.52778 14.5187 6.06504 15.1814 6.06504Z"></path><path d="M10 15C7.2425 15 5 12.7575 5 10C5 7.2425 7.2425 5 10 5C12.7575 5 15 7.2425 15 10C15 12.7575 12.7575 15 10 15ZM10 7.5C8.62125 7.5 7.5 8.62125 7.5 10C7.5 11.3787 8.62125 12.5 10 12.5C11.3787 12.5 12.5 11.3787 12.5 10C12.5 8.62125 11.3787 7.5 10 7.5Z"></path><path d="M15 20H5C2.43 20 0 17.57 0 15V5C0 2.43 2.43 0 5 0H15C17.57 0 20 2.43 20 5V15C20 17.57 17.57 20 15 20ZM5 2.5C3.83125 2.5 2.5 3.83125 2.5 5V15C2.5 16.1912 3.80875 17.5 5 17.5H15C16.1688 17.5 17.5 16.1688 17.5 15V5C17.5 3.83125 16.1688 2.5 15 2.5H5Z"></path></svg>
          </div>
        </div>

      </div>

      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values: FormValues) => {
          const errors: FormikErrors<FormValues> = {};
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          if (!/^.{5,8}$/.test(values.password)) {
            errors.password = "Between 5-8 characters";
          }
          return errors;
        }}
        onSubmit={(values: FormValues, { setSubmitting }) => {
          setSubmitting(false)
        }}>

        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (

          <form onSubmit={handleSubmit}>
            <div className="heading">
              <Image src="/petals.svg" alt="logo" width="61" height="49" />
              <h1>Welcome <span>Back!</span></h1>
              <p>Glad to see you, Again!</p>
            </div>

            <div className="email">
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={values.email}
              onChange={handleChange} />
              
              <span className="error ml-1 text-xs text-red-500">{errors.email && touched.email && errors.email}</span>
            </div>

            <div className="password">
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={values.password}
                onChange={handleChange} />
                
                <span className="error ml-1 text-xs text-red-500">{errors.password && touched.password && errors.password}</span>

              <button>Forgot Password</button>
            </div>

            <input className="btn-log-in" type="submit" value="Log In" disabled={isSubmitting}/>

            <p className="sign-up">Don't have an account yet? <span>Sign Up</span></p>
          </form>
        )}
      </Formik>
    </main>
  )
}
