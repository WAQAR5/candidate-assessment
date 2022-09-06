import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import { getAllNfts } from "../../services/contract.service";
import styles from "./nft.module.scss";

const NftList = () => {
  const [nfts, setNfts] = useState<any[]>([]);
  console.log("🚀 ~ file: NftList.tsx ~ line 10 ~ NftList ~ nfts", nfts);
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
