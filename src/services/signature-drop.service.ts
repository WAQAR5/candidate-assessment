import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";
import config from "../utils/config";
import { ToastContainer, toast } from "react-toastify";

const getContractInstance = () => {
  const windowClient: any = window.ethereum;

  if (!windowClient) {
    toast.error("Wallet not connected. Please connect wallet to continue.");
  }

  const provider = new ethers.providers.Web3Provider(windowClient);
  const signer = provider.getSigner();

  const sdk = new ThirdwebSDK(signer);
  const contract = sdk.getSignatureDrop(config.CONTRACT_ADDRESS);
  return contract;
};

const mintNftsUsingThirdWeb = async (
  metaData: [
    {
      name: string;
      description: string;
      image: string;
    }
  ]
) => {
  try {
    const contract = getContractInstance();
    const results = await contract.createBatch(metaData);

    return results;
  } catch (err) {
    toast.error("something went wrong. Please try again");
  }
};

export { getContractInstance, mintNftsUsingThirdWeb };
