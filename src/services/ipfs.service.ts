import { create } from "ipfs-core";

const store = async (name: string, content: any) => {
  console.log("name---- in store", name);
  console.log("content---- in store", content);

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
};

export { store };
