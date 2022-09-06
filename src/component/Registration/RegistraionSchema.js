import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  name: yup.string().required("Please Enter Name *"),
  email: yup.string().required("Please Enter Email *"),
  password: yup
    .string()
    .matches(/^\S*$/, "Whitespace is not allowed")
    .min(8, "Min Password Length is 8")
    .required("Password field is required *"),
  confirmpassword: yup
    .string()
    .matches(/^\S*$/, "Whitespace is not allowed")
    .oneOf([yup.ref("password"), null], "Password don't match!")
    .required("Confirm password is required"),
});
