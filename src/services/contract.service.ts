import Web3 from "web3";
import config from "../utils/config";

const getNewWeb3 = (isMainnnet = false) => {
  return new Web3(new Web3.providers.HttpProvider(config.RPC_URL));
};

const initalizeContract = async (abi: any[], address: string | any) => {
  let web3 = new Web3(new Web3.providers.HttpProvider(config.RPC_URL));
  let res = new web3.eth.Contract(abi, address);
  return res;
};

export { getNewWeb3, initalizeContract };
