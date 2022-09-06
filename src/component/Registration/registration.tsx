import { useState } from "react";
import { useFormik } from "formik";
import Router from "next/router";
import { store } from "../../services/ipfs.service";
import styles from "./registraion.module.scss";
import { toast } from "react-toastify";

const RegistrationForm = () => {
  const [nftImage, setNftImage] = useState("");

  const handleGetImage = async (e: any) => {
    let name = e.target.files[0].name;
    let file = e.target.files[0];
    const response = await store(name, file);
    let url = `https://gateway.pinata.cloud/ipfs/${response.cid.toString()}`;
    console.log("url,,,,,", url);

    setNftImage(url);
    // console.log("response", response.cid.toString());
  };

  const SignUpFormik = useFormik({
    initialValues: {
      name: "",
      description: "",
      quantity: "",
      price: "",
    },
    // validationSchema: SignUpSchema,
    onSubmit: async (values, onSubmitProps) => {
      try {
        console.log(values, "Values____");
        const data = {
          name: values.name,
          description: values.description,
          quantity: Number(values.quantity),
          price: Number(values.price),
          image: nftImage,
        };
        const response = await store(values.name, data);

        console.log(response, "data-------------");
        return;

        toast.success("You Signed Up Successfuly");
        Router.push("/");
        onSubmitProps.resetForm();
      } catch (error) {
        // toast.error(error.response.data.message, { position: "top-center" });
      }
    },
  });

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.signup}>
            <div className={styles.left}>
              <div className={styles.heading}>Register Now !</div>
              <form
                className={styles.formsection}
                onSubmit={SignUpFormik.handleSubmit}
              >
                <div className={styles.inputdiv}>
                  <input
                    type="text"
                    placeholder="Name *"
                    {...SignUpFormik.getFieldProps("name")}
                  />
                </div>
                <div className={styles.inputdiv}>
                  <input
                    type="text"
                    placeholder="Description *"
                    {...SignUpFormik.getFieldProps("description")}
                  />
                </div>
                <div className={styles.inputdiv}>
                  <input
                    type="text"
                    placeholder="Quantity *"
                    {...SignUpFormik.getFieldProps("quantity")}
                  />
                </div>
                <div className={styles.inputdiv}>
                  <input
                    type="text"
                    placeholder="Price"
                    {...SignUpFormik.getFieldProps("price")}
                  />
                </div>
                <div className={styles.inputdiv}>
                  <input type="file" onChange={(e) => handleGetImage(e)} />
                </div>

                <div className={styles.signupbtn}>
                  <button type="submit" className={styles.button}>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
