import { toast } from "react-toastify";
import Web3 from "web3";
import { erc721ABI } from "../data/erc721.abi";
import config from "../utils/config";
import axios from "axios";

const getNewWeb3 = (isMainnnet = false) => {
  return new Web3(window.ethereum);
};

const contractInstance = async () => {
  let web3 = getNewWeb3();
  let res = new web3.eth.Contract(
    JSON.parse(JSON.stringify(erc721ABI)),
    config.CONTRACT_ADDRESS
  );
  return res;
};

const mintNft = async (address: string, uri: string) => {
  try {
    const contract = await contractInstance();
    const response = await contract.methods.mintTo(address, uri).send({
      from: address,
    });
    return response;
  } catch (err) {
    console.log("err", err);

    toast.error("something went wrong while minting. Please try again!");
  }
};

const getUserNfts = async (address: string) => {
  const contract = await contractInstance();
  const numUserNfts = await contract.methods.balanceOf(address).call();
  let nfts = [];
  for (let i = 0; i < numUserNfts; i++) {
    let nft = await contract.methods.tokenOfOwnerByIndex(address, i).call();
    nfts.push(nft);
  }
  return nfts;
};

const getAllNfts = async () => {
  const contract = await contractInstance();
  const numUserNfts = await contract.methods.totalSupply().call();
  console.log(
    "🚀 ~ file: contract.service.ts ~ line 51 ~ getAllNfts ~ numUserNfts",
    numUserNfts
  );
  let nfts = [];
  for (let i = 0; i < numUserNfts; i++) {
    let nft = await contract.methods.tokenURI(i).call();
    const details = await axios.get(nft);
    nfts.push(details.data);
  }
  return nfts;
};

export { getNewWeb3, contractInstance, mintNft, getUserNfts, getAllNfts };
