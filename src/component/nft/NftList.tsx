import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllNfts } from "../../services/contract.service";
import styles from "./nft.module.scss";
const NftList = () => {
  const [nfts, setNfts] = useState<any[]>([]);

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

  useEffect(() => {
    getNftData();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        {nftArray.map((item) => (
          <div className={styles.container}>
            <img src={item.image} alt="product image" />
            <div className={styles.desc}>
              <div className={styles.title}> {item.title}</div>
              <div className={styles.price}>{item.price}</div>
            </div>
            <div className={styles.details}>
              <button>Details</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NftList;
