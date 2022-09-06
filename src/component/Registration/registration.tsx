import { useEffect, useState } from "react";
// import Head from "next/head";
import { useFormik } from "formik";
import { mintNft } from "../../services/contract.service";
import { store } from "../../services/ipfs.service";
import styles from "./registration.module.scss";
import { useAccount } from "wagmi";
import { SignUpSchema } from "./RegistraionSchema";
const RegistrationForm = () => {
  const [nftImage, setNftImage] = useState("");
  const [nftMint, setNftMint] = useState("");

  const account = useAccount();
  const handleGetImage = async (e: any) => {
    let name = e.target.files[0].name;
    let file = e.target.files[0];
    const response = await store(name, file);
    let url = `https://gateway.pinata.cloud/ipfs/${response.cid.toString()}`;
    setNftImage(url);
  };
  const SignUpFormik = useFormik({
    initialValues: {
      name: "",
      description: "",
      quantity: "",
      price: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values, onSubmitProps) => {
      try {
        const data = {
          name: values.name,
          description: values.description,
          quantity: Number(values.quantity),
          price: Number(values.price),
          image: nftImage,
        };

        const response = await store(values.name, JSON.stringify(data));
        let url = `https://gateway.pinata.cloud/ipfs/${response.cid.toString()}`;
        const mint = await mintNft(account.address, url);

        return;
        // await Register(data);
        // toast.success("You Signed Up Successfuly");
        // Router.push("/");
        // onSubmitProps.resetForm();
      } catch (error) {
        // toast.error(error.response.data.message, { position: "top-center" });
      }
    },
  });

  return (
    <>
      {/* <Head>
        <title>NFT Registraion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.signup}>
            <div className={styles.left}>
              <div className={styles.heading}>Mint Now !</div>
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
                  {SignUpFormik.touched.name && SignUpFormik.errors.name ? (
                    <div className={styles.error}>
                      {SignUpFormik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className={styles.inputdiv}>
                  <input
                    type="text"
                    placeholder="Description *"
                    {...SignUpFormik.getFieldProps("description")}
                  />
                  {SignUpFormik.touched.description &&
                  SignUpFormik.errors.description ? (
                    <div className={styles.error}>
                      {SignUpFormik.errors.description}
                    </div>
                  ) : null}
                </div>
                <div className={styles.inputdiv}>
                  <input
                    type="text"
                    placeholder="Quantity *"
                    {...SignUpFormik.getFieldProps("quantity")}
                  />
                  {SignUpFormik.touched.quantity &&
                  SignUpFormik.errors.quantity ? (
                    <div className={styles.error}>
                      {SignUpFormik.errors.quantity}
                    </div>
                  ) : null}
                </div>
                <div className={styles.inputdiv}>
                  <input
                    type="text"
                    placeholder="Price"
                    {...SignUpFormik.getFieldProps("price")}
                  />
                  {SignUpFormik.touched.price && SignUpFormik.errors.price ? (
                    <div className={styles.error}>
                      {SignUpFormik.errors.price}
                    </div>
                  ) : null}
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

              {/* <div className={styles.login}>
                Already have an Account ? &nbsp;
                <Link href="/">Login</Link>
              </div> */}
              {/* <div className={styles.socialicon}>
                <div className={styles.google}>
                  <Image src="/google.svg" width={25} height={20} alt="" />
                  <span>Google Account</span>
                </div>
                <div className={styles.google}>
                  <Image src="/facebook.svg" width={25} height={20} alt="" />
                  <span>Facebook Account</span>
                </div>
              </div> */}
            </div>
            {/* <div className={styles.right}>
              <div className={styles.bgimage}>
                <Image
                  src="/Rectangle.svg"
                  width={330}
                  height={490}
                  alt="Pic"
                />
              </div>
              <div className={styles.profileman}>
                <Image
                  src="/profile-man.svg"
                  width={200}
                  height={200}
                  alt="Pic"
                />
              </div>
              <div className={styles.lampshade}>
                <Image src="/lampshade.svg" width={90} height={100} alt="Pic" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
