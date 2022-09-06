import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";
import config from "../utils/config";

const getContractInstance = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
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
    console.log("🚀 ~ file: signature-drop.service.ts ~ line 40 ~ err", err);
  }
};

export { getContractInstance, mintNftsUsingThirdWeb };
