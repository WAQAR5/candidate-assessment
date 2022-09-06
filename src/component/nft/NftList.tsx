import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import { getAllNfts, getUserNfts } from "../../services/contract.service";
import styles from "./nft.module.scss";

interface INftList {
  type: "home" | "user";
}

const NftList = (props: INftList) => {
  const [nfts, setNfts] = useState<any[]>([]);

  const router = useRouter();
  const account: any = useAccount();

  const getNftData = async () => {
    try {
      let response: any;
      if (props.type == "home") {
        response = await getAllNfts();
      } else if (props.type == "user") {
        response = await getUserNfts(account.address);
      }

      setNfts(response);
    } catch (err) {
      toast.error("something went wrong while getting nfts. Please try again.");
    }
  };

  const handleDetail = () => {
    router.push("/details");
  };

  useEffect(() => {
    getNftData();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        {nfts.map((item) => (
          <div className={styles.container}>
            <img src={item.image} alt="product image" />
            <div className={styles.description}>
              <div className={styles.title}> {item.name}</div>
              <div className={styles.price}>{item.price} MATIC</div>
            </div>
            <div className={styles.descText}>{item.description}</div>
            <div className={styles.details}>
              {/* <Link></Link> */}
              <button onClick={handleDetail}>Details</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NftList;
