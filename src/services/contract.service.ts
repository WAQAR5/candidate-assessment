import { toast } from "react-toastify";
import Web3 from "web3";
import { erc721ABI } from "../data/erc721.abi";
import config from "../utils/config";

const getNewWeb3 = (isMainnnet = false) => {
  return new Web3(new Web3.providers.HttpProvider(config.RPC_URL));
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
    const response = await contract.methods.mintedTo(address, uri).send({
      from: address,
    });
    return response;
  } catch (err) {
    toast.error("something went wrong while minting. Please try again!");
  }
};

// const getTrxDetails(){
//   const web3=
// }

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
  let nfts = [];
  for (let i = 0; i < numUserNfts; i++) {
    let nft = await contract.methods.tokenByIndex(i).call();
    nfts.push(nft);
  }
  return nfts;
};

export { getNewWeb3, contractInstance, mintNft, getUserNfts, getAllNfts };
