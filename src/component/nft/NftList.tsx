import React from "react";
import styles from "./nft.module.scss";
const NftList = () => {
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
