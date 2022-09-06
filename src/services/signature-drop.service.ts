import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import config from "../utils/config";

const getContractInstance = () => {
  const sdk = new ThirdwebSDK(config.RPC_URL);
  const contract = sdk.getSignatureDrop(config.CONTRACT_ADDRESS);
  return contract;
};

export { getContractInstance };
