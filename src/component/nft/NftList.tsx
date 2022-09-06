import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import { getAllNfts } from "../../services/contract.service";
import styles from "./nft.module.scss";

const NftList = () => {
  const [nfts, setNfts] = useState<any[]>([]);
  const router = useRouter();

  let nftArray = [
    {
      image: "https://news.artnet.com/app/news-upload/2022/01/TK-Bored-Ape.jpg",
      title: "Price",
      price: 1111,
    },
    {
      image: "https://news.artnet.com/app/news-upload/2022/01/TK-Bored-Ape.jpg",
      title: "Price",
      price: 1111,
    },
    {
      image: "https://news.artnet.com/app/news-upload/2022/01/TK-Bored-Ape.jpg",
      title: "Price",
      price: 1111,
    },
    {
      image: "https://news.artnet.com/app/news-upload/2022/01/TK-Bored-Ape.jpg",
      title: "Price",
      price: 1111,
    },
    {
      image: "https://news.artnet.com/app/news-upload/2022/01/TK-Bored-Ape.jpg",
      title: "Price",
      price: 1111,
    },
    {
      image: "https://news.artnet.com/app/news-upload/2022/01/TK-Bored-Ape.jpg",
      title: "Price",
      price: 1111,
    },
    {
      image: "https://news.artnet.com/app/news-upload/2022/01/TK-Bored-Ape.jpg",
      title: "Price",
      price: 1111,
    },
    {
      image: "https://news.artnet.com/app/news-upload/2022/01/TK-Bored-Ape.jpg",
      title: "Price",
      price: 1111,
    },
    {
      image: "https://news.artnet.com/app/news-upload/2022/01/TK-Bored-Ape.jpg",
      title: "Price",
      price: 1111,
    },
    {
      image: "https://news.artnet.com/app/news-upload/2022/01/TK-Bored-Ape.jpg",
      title: "Price",
      price: 1111,
    },
    {
      image: "https://news.artnet.com/app/news-upload/2022/01/TK-Bored-Ape.jpg",
      title: "Price",
      price: 1111,
    },
    {
      image: "https://news.artnet.com/app/news-upload/2022/01/TK-Bored-Ape.jpg",
      title: "Price",
      price: 1111,
    },
    {
      image: "https://news.artnet.com/app/news-upload/2022/01/TK-Bored-Ape.jpg",
      title: "Price",
      price: 1111,
    },
  ];

  const getNftData = async () => {
    console.log("safghsf");

    try {
      const response: any[] = await getAllNfts();
      console.log(
        "🚀 ~ file: NftList.tsx ~ line 79 ~ getNftData ~ response",
        response
      );

      setNfts(response);
    } catch (err) {
      toast.error("something went wrong while getting nfts. Please try again.");
    }
  };

  const account = useAccount();
  console.log(
    "🚀 ~ file: NftList.tsx ~ line 95 ~ NftList ~ account",
    account.address
  );

  const handleDetail = () => {
    router.push("/details");
  };

  useEffect(() => {
    getNftData();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        {nftArray.map((item) => (
          <div className={styles.container}>
            <img src={item.image} alt="product image" />
            <div className={styles.description}>
              <div className={styles.title}> {item.title}</div>
              <div className={styles.price}>{item.price}</div>
            </div>
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
