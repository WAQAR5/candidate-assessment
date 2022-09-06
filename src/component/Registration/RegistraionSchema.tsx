import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  name: yup.string().required("Please enter name *"),
  description: yup.string().required("Please enter description *"),
  quantity: yup.string().required("Please enter quantity *"),
  price: yup.string().required("Please enter price *"),
});
