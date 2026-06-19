import { BrowserProvider } from "ethers";

export async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask belum terinstall");
    return null;
  }

  const provider = new BrowserProvider(
    window.ethereum
  );

  const accounts =
    await provider.send(
      "eth_requestAccounts",
      []
    );

  return accounts[0];
}

declare global {
  interface Window {
    ethereum?: any;
  }
}