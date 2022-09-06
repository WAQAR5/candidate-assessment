import { create } from "ipfs-core";
import { toast } from "react-toastify";

const store = async (name: string, content: any) => {
  try {
    let ipfs;
    if (!ipfs) {
      ipfs = await create({
        repo: String(Math.random() + Date.now()),
      });
    }

    const id = await ipfs.id();

    const fileToAdd = {
      path: `${name}`,
      content: content,
    };

    const file = await ipfs.add(fileToAdd);

    return file;
  } catch (err) {
    toast.error("something went wrong while uploading. Please try again!");
  }
};

export { store };
