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
    console.log(
      "🚀 ~ file: contract.service.ts ~ line 30 ~ mintNft ~ err",
      err
    );
  }
};

export { getNewWeb3, contractInstance, mintNft };
